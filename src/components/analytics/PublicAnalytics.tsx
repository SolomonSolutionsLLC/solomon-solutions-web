"use client";

import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_LIFETIME_MS, createPublicAnalytics, encodeConsent, hasPrivacySignal, publicPage, readConsent, type AnalyticsChoice, type PublicAnalyticsConfig } from "@/lib/public-analytics";
import styles from "./PublicAnalytics.module.css";

const CHANGE_EVENT = "public-analytics-consent-change";
const subscribe = (notify: () => void) => {
  window.addEventListener("storage", notify);
  window.addEventListener(CHANGE_EVENT, notify);
  window.addEventListener("focus", notify);
  window.addEventListener("pageshow", notify);
  document.addEventListener("visibilitychange", notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(CHANGE_EVENT, notify);
    window.removeEventListener("focus", notify);
    window.removeEventListener("pageshow", notify);
    document.removeEventListener("visibilitychange", notify);
  };
};
const serverSnapshot = () => null;
const subscribeMounted = () => () => {};

export function PublicAnalytics({ config }: { config: PublicAnalyticsConfig }) {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(subscribeMounted, () => true, () => false);
  const raw = useSyncExternalStore(subscribe, () => {
    try {
      const saved = window.localStorage.getItem(config.storageKey);
      return readConsent(saved) === null ? null : saved;
    } catch { return null; }
  }, serverSnapshot);
  const [sessionRecord, setSessionRecord] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const settings = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const record = sessionRecord ?? raw;
  const choice = readConsent(record);
  const serializedConfig = JSON.stringify(config);
  const controller = useMemo(() => mounted ? createPublicAnalytics(JSON.parse(serializedConfig) as PublicAnalyticsConfig, window) : null, [serializedConfig, mounted]);
  const eligible = mounted && (publicPage(config, window.location, pathname) !== null ||
    (config.settingsPaths?.includes(pathname) && publicPage(config, window.location, "/") !== null));
  const privacySignal = useSyncExternalStore(subscribe, () => hasPrivacySignal(window), () => false);
  const open = eligible && settingsOpen;

  useEffect(() => {
    controller?.track(pathname, choice);
    return () => controller?.stop();
  }, [controller, pathname, choice]);

  useEffect(() => {
    if (!controller) return;
    let timer: number | undefined;
    function revalidate(event?: Event) {
      const storageEvent = event?.type === "storage" ? event as StorageEvent : null;
      if (storageEvent && storageEvent.key !== null && storageEvent.key !== config.storageKey) return;
      window.clearTimeout(timer);
      // A newer cross-tab choice overrides a fallback choice held only in this tab.
      if (storageEvent && sessionRecord) setSessionRecord(null);
      let current = storageEvent ? null : sessionRecord;
      if (!current) {
        try { current = window.localStorage.getItem(config.storageKey); } catch { current = null; }
      }
      const currentChoice = readConsent(current);
      // Synchronous guard on resume/storage change: never rely only on a delayed timer.
      controller!.track(pathname, currentChoice);
      if (currentChoice === null) {
        if (sessionRecord) setSessionRecord(null);
        window.dispatchEvent(new Event(CHANGE_EVENT));
        return;
      }
      const remaining = JSON.parse(current!).savedAt + CONSENT_LIFETIME_MS - Date.now();
      timer = window.setTimeout(revalidate, Math.min(Math.max(remaining, 1), 2_147_483_647));
    }
    // Track effect handles this render; schedule its exact expiration without a 60s grace period.
    if (record) {
      const remaining = JSON.parse(record).savedAt + CONSENT_LIFETIME_MS - Date.now();
      if (remaining > 0) timer = window.setTimeout(revalidate, Math.min(remaining, 2_147_483_647));
    }
    window.addEventListener("storage", revalidate);
    window.addEventListener("focus", revalidate);
    window.addEventListener("pageshow", revalidate);
    document.addEventListener("visibilitychange", revalidate);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("storage", revalidate);
      window.removeEventListener("focus", revalidate);
      window.removeEventListener("pageshow", revalidate);
      document.removeEventListener("visibilitychange", revalidate);
    };
  }, [record, sessionRecord, config.storageKey, controller, pathname]);

  useEffect(() => { if (settingsOpen) panel.current?.focus(); }, [settingsOpen]);

  function choose(next: AnalyticsChoice) {
    if (next === "rejected") controller?.stop(true);
    let persisted = false;
    const nextRecord = encodeConsent(next);
    try {
      window.localStorage.setItem(config.storageKey, nextRecord);
      persisted = true;
    } catch { /* The choice still works for this page when storage is unavailable. */ }
    setSessionRecord(persisted ? null : nextRecord);
    window.dispatchEvent(new Event(CHANGE_EVENT));
    setSettingsOpen(false);
    settings.current?.focus();
  }

  if (!eligible) return null;
  return (
    <div className={styles.root}>
      {open && (
        <section id={panelId} ref={panel} tabIndex={-1} className={styles.panel} aria-label="Cookie preferences"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSettingsOpen(false);
              settings.current?.focus();
            }
          }}>
          {privacySignal && <p className={styles.signal}>Your browser’s privacy preference is keeping optional cookies off.</p>}
          <div className={styles.actions}>
            <button type="button" onClick={() => choose("rejected")}>Reject cookies</button>
            {!privacySignal && <button type="button" onClick={() => choose("accepted")}>Accept cookies</button>}
          </div>
        </section>
      )}
      <button ref={settings} type="button" className={styles.settings} aria-controls={open ? panelId : undefined}
        aria-expanded={open} onClick={() => setSettingsOpen(!settingsOpen)}>Cookies</button>
    </div>
  );
}
