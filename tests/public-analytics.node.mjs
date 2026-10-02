import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CONSENT_LIFETIME_MS, createPublicAnalytics, encodeConsent, publicPage, readConsent } from '../src/lib/public-analytics.ts';
import { publicAnalyticsConfig } from '../src/lib/public-analytics-config.ts';

const config = { ...publicAnalyticsConfig, enabled: true, measurementId: 'G-TEST123456' };
function fixture(location = {}) {
  const scripts = [];
  const cookies = [];
  const browser = {
    location: { protocol: 'https:', hostname: config.hosts[0], port: '', pathname: '/', search: '?email=private@example.invalid&utm_source=private', hash: '#private', ...location },
    navigator: {},
    document: {
      title: 'PRIVATE FORM CONTENT', referrer: 'https://private.example.invalid/case/secret?email=private',
      createElement: () => ({}),
      head: { appendChild: (script) => scripts.push(script) },
      set cookie(value) { cookies.push(value); },
    },
  };
  const runtime = createPublicAnalytics(config, browser);
  return { browser, scripts, cookies, runtime, commands: () => (browser.dataLayer ?? []).map((args) => [...args]) };
}

test('consent is versioned, expires in 180 days, and fails closed for malformed/future storage', () => {
  const now = Date.now();
  for (const choice of ['accepted', 'rejected']) {
    assert.equal(readConsent(encodeConsent(choice, now), now), choice);
    assert.equal(readConsent(encodeConsent(choice, now - CONSENT_LIFETIME_MS), now), null);
  }
  for (const raw of [null, '', '{', '{}', 'null', JSON.stringify({version:1,choice:'maybe',savedAt:now}), encodeConsent('accepted', now + 1)]) assert.equal(readConsent(raw, now), null);
});

test('only exact HTTPS public hosts and explicit routes are eligible', () => {
  for (const hostname of config.hosts) for (const path of Object.keys(config.pages)) {
    const page = publicPage(config, { protocol:'https:', hostname, port:'' }, path);
    assert.equal(page.page_location, config.canonicalOrigin + path);
    assert.equal(page.page_title, config.pages[path]);
    assert.equal(page.page_referrer, '');
  }
  for (const hostname of ['localhost', '127.0.0.1', 'staging.hopestack.tech', 'app.hopestack.tech', 'admin.hopestack.tech', 'preview.vercel.app', `${config.hosts[0]}.evil.invalid`]) {
    assert.equal(publicPage(config, { protocol:'https:',hostname,port:'' }, '/'), null);
  }
  for (const pathname of ['/admin', '/admin/tenants/person', '/app', '/login', '/apply', '/contact', '/case/person', '/api/launch-signups', '/unlisted', '/__proto__']) {
    assert.equal(publicPage(config, { protocol:'https:',hostname:config.hosts[0],port:'' }, pathname), null);
  }
  for (const override of [{enabled:false}, {measurementId:''}, {measurementId:'G-" onclick="evil'}]) assert.equal(publicPage({...config,...override}, {protocol:'https:',hostname:config.hosts[0],port:''}, '/'), null);
  assert.equal(publicPage(config, {protocol:'http:',hostname:config.hosts[0],port:''}, '/'), null);
  assert.equal(publicPage(config, {protocol:'https:',hostname:config.hosts[0],port:'3000'}, '/'), null);
});

test('no Google tag or consent pings without consent, on excluded routes, or with browser privacy signals', () => {
  for (const choice of [null, 'rejected']) {
    const f = fixture(); f.runtime.track('/', choice);
    assert.equal(f.scripts.length, 0); assert.deepEqual(f.commands(), []);
  }
  const blocked = fixture(); blocked.runtime.track('/admin', 'accepted'); assert.equal(blocked.scripts.length, 0);
  for (const signal of [{doNotTrack:'1'}, {globalPrivacyControl:true}]) {
    const f = fixture(); f.browser.navigator = signal; f.runtime.track('/', 'accepted');
    assert.equal(f.scripts.length, 0); assert.deepEqual(f.commands(), []);
  }
});

test('acceptance initializes once, disables advertising/auto page views, and sends static sanitized page metadata', () => {
  const f = fixture(); f.runtime.track('/', 'accepted'); f.runtime.track('/', 'accepted');
  assert.equal(f.scripts.length, 1);
  assert.equal(f.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-TEST123456');
  assert.equal(f.scripts[0].referrerPolicy, 'no-referrer');
  const commands = f.commands();
  const options = commands.find(([command]) => command === 'config')[2];
  assert.equal(options.send_page_view, false); assert.equal(options.cookie_domain, 'none');
  assert.equal(options.cookie_update, false); assert.equal(options.cookie_expires, 180 * 24 * 60 * 60);
  assert.equal(options.allow_google_signals, false); assert.equal(options.allow_ad_personalization_signals, false);
  assert.equal(options.page_location, config.canonicalOrigin + '/'); assert.equal(options.page_referrer, '');
  assert.equal(commands.filter(([command, name]) => command === 'event' && name === 'page_view').length, 1);
  assert.equal(JSON.stringify(commands).includes('private'), false);
  for (const [, , consent] of commands.filter(([command]) => command === 'consent')) {
    assert.equal(consent.ad_storage, 'denied'); assert.equal(consent.ad_user_data, 'denied'); assert.equal(consent.ad_personalization, 'denied');
  }
});

test('SPA navigation sends exactly one sanitized view per allowed path and suppresses admin/repeated effects', () => {
  const f = fixture(); f.runtime.track('/', 'accepted');
  f.runtime.stop(); f.runtime.track('/', 'accepted'); // React Strict Mode effect replay
  const secondPath = Object.keys(config.pages).find((path) => path !== '/');
  f.runtime.track(secondPath, 'accepted'); f.runtime.track(secondPath, 'accepted');
  assert.equal(f.commands().filter(([command]) => command === 'event').length, 2);
  f.runtime.track('/admin', 'accepted'); assert.equal(f.browser['ga-disable-G-TEST123456'], true);
  assert.equal(f.commands().filter(([command]) => command === 'event').length, 2);
  f.runtime.track('/', 'accepted'); assert.equal(f.browser['ga-disable-G-TEST123456'], false);
  assert.equal(f.scripts.length, 1);
});

test('withdrawal disables the destination immediately, expires only owned host cookies, and sends no denial ping', () => {
  const f = fixture(); f.runtime.track('/', 'accepted'); const before = f.commands().length;
  f.runtime.stop(true); f.runtime.track('/', 'rejected');
  assert.equal(f.browser['ga-disable-G-TEST123456'], true); assert.equal(f.commands().length, before);
  assert.ok(f.cookies.every((cookie) => cookie.includes('Max-Age=0') && !cookie.includes('Domain=')));
  assert.ok(f.cookies.every((cookie) => /^_ga(?:_TEST123456)?=/.test(cookie)));
});

test('excluded subdomains do not alter their analytics cookies', () => {
  const f = fixture({hostname:'app.hopestack.tech'});
  f.runtime.track('/', null); f.runtime.stop(true);
  assert.equal(f.cookies.length, 0); assert.equal(f.scripts.length, 0);
});
