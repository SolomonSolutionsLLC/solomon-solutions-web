# Claude Code built me a $273/Day online directory
- **Creator:** Greg Isenberg
- **URL:** https://www.youtube.com/watch?v=I_wbc5ND79o
- **Published:** 2026-02-16
- **Duration:** 55:41
- **Source:** Real captions downloaded via yt-dlp and deduplicated (transcript word count: 9,025 words). Nothing below has been invented; every claim is grounded in the transcript or the video description.

## TL;DR (3-5 bullets)
- Greg Isenberg interviews Frey Chu ("Mr. Directory") on how to use Claude Code to build "AI-coded" online directories, with the focus on the hardest part: getting and cleaning valuable data. (A "directory" here just means a website that is a big organized list of businesses/links plus data about them.)
- They open with a guessing game on three real directories — Parting.com (funeral homes, 61K monthly organic visits, ~$1M+/yr, mostly from a SaaS called Parting Pro), A Place for Mom (senior living, 824K monthly visits, pure lead generation), and GasBuddy (1.1M monthly visits, ads + a $10/mo MasterCard debit card).
- Frey's thesis: data is the moat, and price transparency in boring niches is a massive underserved opportunity. Every successful directory helps people save time, save money, or make money.
- He live-walks a 7-step process he used to build a luxury restroom (porta-potty) trailer directory in 4 days for under $250, using Outscraper to scrape, Claude Code as the "brain," and an open-source crawler called Crawl4AI as the "engine" to verify and enrich 71,000 raw rows down to 725 real listings.
- On the future: directories survive the AI-search era because directory users are in the *decision-making* phase (especially high-stakes niches: health, legal, finance, senior living), and super-niche directories may actually benefit because AI answers cite a few specific sources.

## Companion links & resources
Real URLs pulled from the video description:
- Outscraper (data scraping tool): https://startup-ideas-pod.link/outscraper
- Crawl4AI (open-source web crawler/scraper): https://startup-ideas-pod.link/crawl4AI
- IdeaBrowser (find startup ideas/trends): https://www.ideabrowser.com/
- LCA / Late Checkout agency: https://latecheckout.agency/
- The Vibe Marketer (AI marketing resources): https://www.thevibemarketer.com/
- Frey Chu on X/Twitter: https://x.com/freychu
- Frey Chu on YouTube: https://www.youtube.com/@FreyChu/featured
- ShipYourDirectory (Frey's site): https://www.shipyourdirectory.com/
- Greg Isenberg: X https://twitter.com/gregisenberg · Instagram https://instagram.com/gregisenberg/ · LinkedIn https://www.linkedin.com/in/gisenberg/

Note: Frey mentions a "free directory community" with over 3,200 people, but the direct join link is not given in the description (it points to his channel/socials above).

## Sections

### 1. Intro (0:00-2:15)
- **Summary:** Greg pitches the directory as a low-cost, low-time business — he frames it as something that could earn "anywhere between $2,000 and $10,000 a month passive revenue" needing only "10, 15, 20 minutes a week," startable with $200-$1,000. He admits it sounds boring versus building an app or SaaS, but argues a directory gets you "thousands of visitors on autopilot," after which you can build a SaaS or app on top of that traffic. He introduces guest Frey as "Mr. Directory."
- **Key concepts:** Online directory = a website of organized links + data; traffic-on-autopilot via SEO; "boring but high-leverage"; build distribution first, monetize later.
- **Step-by-step:** No concrete steps yet — this is the framing. The implied sequence: build a directory to get traffic, then layer a SaaS/app on top.
- **Apply to Joshua's products:** The Wisdom Walk is already your "content hub" — the directory model is the same engine in a different shape. Consider a faith-niche directory (e.g., a directory of churches/ministries by tradition, or Christian counselors) as an organic-first traffic asset that feeds Simply Pray and HopeStack. It fits the budget ($200-$1,000 to start, well inside ~$1,000/mo) and the time box (a few hours/week with AI drafting).
- **Tools/resources mentioned:** Claude Code (named as the build tool).
- **Action checklist:**
  - [ ] Write one sentence: "A directory that helps [faith audience] save time / find trusted [X]."
  - [ ] Decide which product the traffic should feed (likely Simply Pray pre-launch waitlist or HopeStack lead capture).
  - [ ] Note the budget/time fit: this is the rare model that respects $1,000/mo and 2-5 hrs/wk.

### 2. What you'll learn (2:15-3:00)
- **Summary:** Frey states the goal: by the end, viewers should understand how to use Claude Code to build AI-coded directories, "with an emphasis on what I think is the hardest part, which is getting the valuable data." He proposes replaying a game from his last appearance — he shows directories and Greg guesses their traffic and monetization.
- **Key concepts:** "The hardest part is getting valuable data"; the rest of the episode goes deep (not wide) on data.
- **Step-by-step:** None — agenda-setting only.
- **Apply to Joshua's products:** Set the same expectation for yourself: the build is easy with Claude Code; the differentiator is sourcing and cleaning trustworthy data. In a compliance-sensitive faith/ministry niche, "trustworthy data" (accurate church info, verified counselor credentials) is also your trust moat.
- **Tools/resources mentioned:** Claude Code.
- **Action checklist:**
  - [ ] Pick the single "valuable data" field your niche lacks (e.g., verified denomination, pricing, credentials).
  - [ ] Budget your effort 80% on data, 20% on the website look.

### 3. Directory Game: Parting (Funeral Home Directory) (3:00-5:42)
- **Summary:** Frey shows parting.com, billed as the "#1 funeral home comparison website for price and quality." Greg guesses 100K+ monthly visits; the real number is 61,000 organic monthly visitors. On money: Greg guesses lead gen; Frey says it's reported to do over $1M/yr (some quotes up to $5M), raised $1.5M in 2021, but the bulk of revenue is actually a vertical SaaS called Parting Pro — cremation arrangement software for funeral homes — plus an agency back end (build the website + run online marketing/lead gen). Frey calls the "directory + micro-SaaS / agency combo" a potent, common pattern.
- **Key concepts:** Lead generation; vertical SaaS / micro-SaaS; "directory + agency combo"; price-and-quality comparison as the hook.
- **Step-by-step:** No build steps. The business pattern shown: (1) directory attracts traffic, (2) sell vertical SaaS to the listed businesses, (3) add an agency service for sites/marketing.
- **Apply to Joshua's products:** This is the clearest template for HopeStack. A directory of counseling centers (organic traffic) could feed HopeStack's CRM as the "vertical SaaS" sold to those same centers — exactly Parting's directory-to-SaaS motion. Respect HIPAA/compliance: the directory itself holds only public business info, while HopeStack handles protected data behind auth.
- **Tools/resources mentioned:** None (only the example sites Parting / Parting Pro).
- **Action checklist:**
  - [ ] Sketch the "directory feeds HopeStack" funnel on one page.
  - [ ] List what public data a counseling-center directory would show (no PHI).
  - [ ] Note the 3 revenue layers seen here: leads, SaaS, agency.

### 4. Directory Game: A Place for Mom (Senior Living Directory) (5:42-8:00)
- **Summary:** Frey shows aplaceformom.com (senior living). Greg guesses 50K+ visits and lead gen; the real number is 824,000 organic monthly visitors. Estimates of revenue are "wild" ($100M-$500M/yr claimed); Frey's gut says ~$50M/yr. It monetizes "purely from lead generation" — over 18,000 senior living homes listed, with "sneaky" ways to collect a visitor's info and pass it to homes, collecting a portion of the first month's rent or a fixed referral fee. Frey notes it's built on WordPress.
- **Key concepts:** Pure lead-gen model; referral/first-month-rent cut; classic "what people picture when they hear directory"; high-stakes/high-value niche.
- **Step-by-step:** Model shown: list many providers → capture visitor intent → sell/route the lead to providers for a cut.
- **Apply to Joshua's products:** Senior living and care are adjacent to faith communities (many seniors search through their church). A "Christian senior living / care" niche directory could be a credible Wisdom Walk extension. Important constraint: Frey's "sneaky info collection" is the opposite of your trust-driven brand — be transparent and consent-first about how any lead form data is used.
- **Tools/resources mentioned:** WordPress (named as the platform A Place for Mom uses); care.com (referenced as the famous comparable).
- **Action checklist:**
  - [ ] If pursuing lead gen, draft a plain-language, consent-first lead form (fits compliance-sensitive niche).
  - [ ] Decide referral economics only after you have traffic — don't over-engineer monetization early.

### 5. Directory Game: GasBuddy (Crowdsourced Gas Price Directory) (8:00-12:32)
- **Summary:** Frey shows gasbuddy.com (crowdsourced gas prices). Greg guesses ~2M visits; reality is 1.1 million organic monthly visitors. Monetization is two-fold: heavy ads (Frey estimates "on the lower end $30,000 a month just in ads" given tier-one US/Canada traffic) and a bigger play — a GasBuddy Plus/Premium debit card (partnered with MasterCard) at $10/mo or $99/yr that saves money on gas. Frey loves it because the monetization is aligned with why users come (saving on gas). He digs into how they bootstrapped the crowdsourced data: a public leaderboard (since 2004) plus giveaways — e.g., report a gas price = 150 points, 1,000 points = one giveaway entry (e-bikes back then, now $100 prepaid gas debit cards). He marvels at "Prince33" active for over 5,800 straight days.
- **Key concepts:** Crowdsourced data; data moat ("if you're number one, you have the data moat"); incentive design / gamification; public leaderboard psychology; monetization aligned with user intent; ads as a baseline + a premium subscription.
- **Step-by-step:** How GasBuddy seeded crowdsourced data: (1) public leaderboard, (2) points for reporting prices, (3) points convert to giveaway entries, (4) ongoing giveaways/prizes to sustain contributions.
- **Apply to Joshua's products:** Crowdsourcing + leaderboards map onto Simply Pray's community potential — e.g., a prayer-streak or contribution leaderboard could drive engagement (you already have the ACTS method and tiered pricing). Be careful: in a prayer app, gamification must stay reverent, not gimmicky. The "monetization aligned with user intent" lesson is strong for Simply Pray's freemium tiers (Free / $2.99 / $6.99 / Church $49/mo) — make the paid tier deliver more of *why people pray*, not unrelated perks.
- **Tools/resources mentioned:** Wayback Machine (used to show GasBuddy's old leaderboard); Stretch AI and Waze (named as data-play comparisons via Greg's agency LCA).
- **Action checklist:**
  - [ ] Brainstorm one reverent engagement loop for Simply Pray (streaks, gentle community milestones).
  - [ ] Make sure each paid tier deepens the core prayer experience, not bolt-on perks.

### 6. The Data Moat Thesis (12:32-14:02)
- **Summary:** Frey ties the three examples together with his framework: all successful directories help people save time, save money, or make money. He highlights that each does "a really good job with bringing price transparency as a form of data enrichment in areas where it's just really hard to get pricing information." He calls price transparency "a massive opportunity" — "incredibly unscalable and manual," but valuable precisely because it's hard. His thesis for the year: "data can be a moat, it can be a differentiator, and price transparency is a big one because it's so hard to get." Greg agrees the data is the moat.
- **Key concepts:** The save time / save money / make money test; data enrichment; price transparency as a moat; "hard = defensible."
- **Step-by-step:** Implicit test for a directory idea: does it help users save time, save money, or make money? If not, reconsider.
- **Apply to Joshua's products:** Apply the three-part test to every product. Simply Pray = saves time/structure in prayer (the ACTS method is the "enrichment"). HopeStack = saves counseling centers time/money. A directory should add data others don't have — for a Christian counselor directory that could be verified theological alignment, sliding-scale/pricing transparency, or insurance accepted.
- **Tools/resources mentioned:** None.
- **Action checklist:**
  - [ ] Run each owned product through "save time / save money / make money."
  - [ ] Identify the one hard-to-get data field that would make a faith directory uniquely useful.

### 7. Luxury Restroom Trailers: The Niche Directory Demo (14:02-15:52)
- **Summary:** Frey reveals what he built: a luxury restroom trailer directory, started from a raw, unorganized CSV of over 70,000 rows scraped nationwide for porta-potty suppliers. He frames the demo as showing a high-quality-data listing. He notes the niche is "boring but awesome" — people spend "$1,000, $2,000 a day" renting trailers for weddings, corporate events, film sets. The listing shows amenities/features, images, stall types, a lead form, and service areas. He restates that for directories the moat is data + SEO (strong backlinks), and that the #1 question from his last episode was how to monetize — his honest answer: "it depends on the niche," and it doesn't have to be ads or lead gen.
- **Key concepts:** Niche selection; high-ticket niche; data + SEO + backlinks as the moat; "monetization depends on the niche."
- **Step-by-step:** Frey's stated overall build order (introduced here, detailed later): find the idea → collect the data → build the website → SEO optimization → monetization.
- **Apply to Joshua's products:** "Boring but high-ticket" is the lesson — for you the equivalent is "boring but trust-critical" (counseling, senior care, ministry services). Pick a niche specific enough to rank (see Section 16) but valuable enough that a single lead matters (HopeStack B2B deals, consulting strategy calls).
- **Tools/resources mentioned:** None new (CSV / scraping referenced; tools detailed later).
- **Action checklist:**
  - [ ] Choose one niche specific enough to plausibly rank in under a year.
  - [ ] Confirm the niche has high enough value-per-lead to justify the effort.

### 8. Before & After: WordPress Directory vs. Claude Code Directory (15:52-19:04)
- **Summary:** Frey contrasts the new Claude Code directory with portapottymatch.com, which he built in WordPress a year and a half ago — it "still has lorem ipsum on the front page," sparse listings, all AI-generated copy with identical sentence structure, and the same images on every listing. He says he assumed no one would trust it, yet he left it up and still got real inbound leads: a film-shoot multi-stall request (Eric), another film-shoot request, "Martha" wanting a reasonably priced porta-potty with a hand-wash station, and the big one — the New Mexico State Fair requesting "$20,000 plus" of trailers. The takeaway: even a crappy directory proved real demand, so a well-built one (now that he knows Claude Code) should capture far more.
- **Key concepts:** Demand validation via a rough MVP; "leads inbounded despite poor data"; lorem ipsum / duplicated content as a quality failure; trust vs. real-world conversion.
- **Step-by-step:** Validation move: ship a rough version, leave it up, see if leads come in before investing in polish.
- **Apply to Joshua's products:** For Simply Pray's pre-launch, a lightweight waitlist/landing page can validate demand before the App Store launch — you don't need the polished app to learn if people want it. For a future faith directory, a rough first version can prove inbound interest. But note: in a *trust-driven* niche, a lorem-ipsum site risks brand damage in a way porta-potties don't — validate quietly, then make the public version credible before promoting it.
- **Tools/resources mentioned:** WordPress; ChatGPT (Frey mentions generating his old site's mascot/logo with ChatGPT later, in Section 13).
- **Action checklist:**
  - [ ] Stand up a minimal Simply Pray waitlist page to measure pre-launch demand.
  - [ ] Define your "credible enough to publish" bar (no lorem ipsum, no duplicate copy) given the trust niche.

### 9. Cost Breakdown: Built in 4 Days for Under $250 (19:04-21:23)
- **Summary:** Frey says he "vibe coded" a how-it-works directory describing his 7-step process, using Claude Code plus the open-source GitHub repo Crawl4AI for data curation. He estimates he saved over 2,000 hours of manual data cleaning/enrichment (he describes literally sitting "in this chair for 6 hours" manually verifying trailers — "it was hell"). Total cost under $250: $100 Claude Code Max subscription, $100 for the data, and $50 for Claude API credits for "deep cleaning." He says to get started you only need: your directory niche (his = luxury restroom trailers), Claude Code, and an understanding of what drives the buyer's decision — which you learn by reading Reddit forums, TikTok, Facebook groups, Instagram, wherever the niche is discussed.
- **Key concepts:** "Vibe coding"; Claude Code Max subscription (~$100); data cost (~$100); Claude API credits for deep cleaning (~$50); 2,000 hours saved; decision-driver research via social listening.
- **Step-by-step:** Prerequisites Frey lists: (1) pick your niche, (2) get Claude Code, (3) research decision-drivers on Reddit/TikTok/Facebook/Instagram.
- **Apply to Joshua's products:** The cost structure fits your ~$1,000/mo budget with room to spare (~$250 one-time-ish for a directory build). For decision-driver research in faith niches, listen where your audience already is — relevant subreddits, Christian Facebook groups, ministry forums — to learn what makes someone choose a counselor, church, or prayer app. This research also sharpens Simply Pray and HopeStack messaging, not just a directory.
- **Tools/resources mentioned:** Claude Code (Max subscription), Crawl4AI, Claude API.
- **Action checklist:**
  - [ ] Confirm you have/plan a Claude Code subscription and small API budget (well under $1,000/mo).
  - [ ] Spend one session reading 3-5 communities to list your niche's "deal-breaker" decision factors.

### 10. Step 1: Scraping Raw Data with Outscraper (21:23-22:25)
- **Summary:** Step 1 is scraping the raw data. Frey goes straight to Outscraper, which he calls "still the cheapest option" (he's also used Apify and others). He recommends keeping it simple and notes there are "tons of videos online" on scraping Google Maps data with Outscraper. He pulled 71,000 rows of potential listings covering the country, building nationwide directories with a plan to sell leads in a high-ticket niche. The problem: 71,000 rows is massive and needs heavy cleaning.
- **Key concepts:** Scraping; Outscraper vs. Apify; Google Maps as the data source; nationwide coverage; raw rows need cleaning.
- **Step-by-step:** (1) Go to Outscraper, (2) scrape your niche from Google Maps, (3) export the rows (he got 71K), (4) accept that cleaning is the next big job.
- **Apply to Joshua's products:** For a Christian counselor or church directory you could scrape public Google Maps listings (counseling centers, churches) the same way. Caution: respect each source's terms and the trust/compliance nature of your niche — public business listing data only, and verify before publishing (see Steps 2-3).
- **Tools/resources mentioned:** Outscraper (https://startup-ideas-pod.link/outscraper), Apify (named as an alternative), Google Maps (data source).
- **Action checklist:**
  - [ ] Try Outscraper on a small sample for your chosen niche.
  - [ ] Confirm the data source's terms allow your intended use.

### 11. Step 2: Cleaning Data with Claude Code (22:25-23:27)
- **Summary:** Step 2 introduces Claude Code to remove "obvious junk data." Frey used to clean manually; now he prompts Claude Code to remove listings with no business name/address/city/state, permanently closed ones, and obviously off-niche entries (e.g., big-box retailers). He shows the prompt: give Claude Code "here are my five CSVs," tell it to look at every one and apply the cleaning criteria. This simple prompt took him from 71K down to 20,000 listings. He says anyone can benefit from this junk-removal step, but 20K is still a massive dataset.
- **Key concepts:** First-pass cleaning; obvious junk removal (missing fields, permanently closed, off-niche); prompting Claude Code over multiple CSVs; "retrofit the prompt to your niche."
- **Step-by-step:** (1) Hand Claude Code your CSV(s), (2) prompt it to remove rows with no name/address/city/state, permanently-closed listings, and off-niche entries, (3) review the reduced file (he got 71K → 20K).
- **Apply to Joshua's products:** This is directly reusable — point Claude Code at a scraped CSV of churches/counselors and strip incomplete, closed, or off-niche rows. For your niche, add criteria like "remove non-Christian or clearly secular entries" or "flag rows missing a verifiable website." AI drafts, you approve — exactly your 2-5 hrs/wk workflow.
- **Tools/resources mentioned:** Claude Code.
- **Action checklist:**
  - [ ] Adapt Frey's junk-removal prompt to your niche's criteria.
  - [ ] Run it on your sample and eyeball the before/after row counts.

### 12. Step 3: Using Crawl4AI for Automated Website Verification (23:27-28:01)
- **Summary:** Step 3 is the part Frey calls historically his biggest problem: automatically visiting every remaining website to verify it actually matches the niche. He installed Crawl4AI — an open-source, LLM-friendly web crawler/scraper, "totally free," installed locally. Being only ~6 months into AI coding, he installed it by giving Claude Code the link and asking it to help (took ~15 minutes). The mental model: Crawl4AI is "the engine" that visits sites at scale; Claude Code is "the brain" that decides which are luxury restroom trailers. He demos on 10 sample companies, runs his prompt, and (using cached results) gets back 3 luxury candidates and 7 standard porta-potties, each with a "verification confidence." A pro tip: Crawl4AI's AsyncWebCrawler module crawls multiple sites concurrently to save time. He wrote the prompt by talking to ChatGPT, ran it in the background for 3 hours, and went from 20,000 sites down to 725 luxury restroom trailers — work that "would have taken me like 1,000 hours just a couple years back." Greg notes Frey isn't technical, which Frey says should encourage non-technical viewers.
- **Key concepts:** Automated website verification; Crawl4AI (free, open-source, local, LLM-friendly); "engine vs. brain" (Crawl4AI crawls, Claude Code judges); keyword/synonym matching; AsyncWebCrawler for concurrency; verification confidence scores; non-technical-friendly.
- **Step-by-step:** (1) Give Claude Code the Crawl4AI link and ask it to install it (~15 min), (2) write a prompt (Frey drafted his via ChatGPT) telling it to visit each site and identify niche-related keywords/synonyms, (3) test on a small sample first, (4) optionally add the AsyncWebCrawler module for concurrent crawling, (5) run on the full set in the background, (6) keep the verification-confidence output (he went 20K → 725).
- **Apply to Joshua's products:** This is the highest-value reusable workflow for a faith directory. Use Crawl4AI + Claude Code to verify that scraped sites really are Christian counseling centers / churches of a given tradition by checking for niche keywords and synonyms (statement of faith, denomination, counseling modality). The verification-confidence score gives you an auditable trust signal — valuable in a compliance-sensitive niche. Test on 10 rows before burning a full run.
- **Tools/resources mentioned:** Crawl4AI (https://startup-ideas-pod.link/crawl4AI), Claude Code, ChatGPT (used to draft the prompt), AsyncWebCrawler module.
- **Action checklist:**
  - [ ] Have Claude Code install Crawl4AI for you (give it the link).
  - [ ] Draft a verification prompt with your niche's keywords + synonyms.
  - [ ] Run it on a 10-row sample and check the confidence scores before scaling.

### 13. Step 4: Enriching Trailer Inventory Data (28:01-31:33)
- **Summary:** Step 4 is the first round of data enrichment — for Frey, figuring out what products each of the 725 businesses offers (e.g., two-stall vs. three-stall trailers, since those fit ~50-100-person weddings). He uses Crawl4AI again, but this pass looks for the full fleet of products instead of niche keywords. Crucial lesson: his early mistake was giving one giant prompt asking for everything at once (inventory + images + amenities + pricing) — "it just didn't work... super low quality." So he goes slowly, one field at a time, examining results after each pass to catch edge cases, then tells Claude Code when "it done messed up" so it can fix and rerun (he reran 2-3 times). He also adds a smart habit: ask Claude Code for its game plan and what it's missing "before we burn tokens." Demo result on three candidates: "A1 Containers" with a two-stall and a four-stall trailer.
- **Key concepts:** Data enrichment; one-field-at-a-time (not one giant prompt); edge-case review after each pass; iterative reruns (2-3x); "give me your game plan before we burn tokens"; token cost awareness.
- **Step-by-step:** (1) Reuse Crawl4AI but prompt for the product fleet, (2) ask Claude Code to share its game plan / flag gaps before running (to save tokens), (3) run on a small set, (4) review for edge cases, (5) tell Claude Code about mistakes and rerun until clean (2-3 passes), (6) move to the next field only after this one is solid.
- **Apply to Joshua's products:** The one-field-at-a-time discipline applies to any enrichment you do — for a counselor directory, enrich one attribute per pass (specialties, then insurance accepted, then sliding scale, then theological tradition). The "ask for the game plan before burning tokens" tip directly protects your budget. This iterative, review-after-each-pass habit is also how you should run any HopeStack/Simply Pray data work with Claude Code.
- **Tools/resources mentioned:** Crawl4AI, Claude Code, ChatGPT (prompt-drafting).
- **Action checklist:**
  - [ ] Enrich exactly one data field per Claude Code run.
  - [ ] Always ask for the game plan + gaps before running, to save tokens/budget.
  - [ ] Review each pass for edge cases and rerun until clean.

### 14. Step 5: Scraping & Verifying Images with Claude Vision (31:33-36:33)
- **Summary:** Step 5 is images. Frey uses Crawl4AI to scrape images from business sites — he openly flags this as "a gray area," planning to ask businesses for permission and have them claim their listing for the green light. He tells Claude Code to look at alt text, file names, and the page, and scrape the highest-quality images, then take the top 3 candidates per listing and send them to Claude Vision to pick the best ones (the first attempt returned logos, favicons, and junk). This cost about $30 (connect a Claude API key), ran overnight (~1 hour for 700 listings), and produced solid image columns (highlighted green in his sheet). A long legal caveat follows: Greg and Frey both clarify they're not lawyers; you're supposed to have rights to images you post; small local businesses may not even have a terms of service; there's real risk scraping images without rights. Frey stresses you don't even need images for a directory to rank and get traffic — he showed his crappy image-light directory still got leads — and suggests stock images or clearly public images as safer routes. Aside: Greg compliments the mascot/logo on Frey's old WordPress site (Frey generated it with ChatGPT and may bring it to the new site for "human touch").
- **Key concepts:** Image scraping (alt text/file names/page context); Claude Vision to rank/verify images; ~$30 API cost; "claim your listing" as a permission/rights path; legal risk of scraping images without rights; images optional for ranking; stock/public images as safer alternatives; mascot/brand character via ChatGPT.
- **Step-by-step:** (1) Crawl4AI scrapes candidate images using alt text, file names, page context, (2) take top 3 image candidates per listing, (3) send to Claude Vision (connect Claude API key, ~$30) to pick the best, (4) let it run overnight, (5) review the resulting image columns.
- **Apply to Joshua's products:** Strong caution flag for you — given a trust-driven, compliance-sensitive faith niche, do NOT scrape images without rights. Use stock imagery, ministry-provided assets, or a "claim your listing" flow where churches/counselors upload their own. Claude Vision is still useful elsewhere: verifying or auto-tagging legitimately owned images for The Wisdom Walk or Simply Pray screenshots. The mascot/character lesson is real — Greg noted the human-touched logo built more warmth than the polished "Apple-style" site; consider a warm, human brand character for Simply Pray rather than a sterile design.
- **Tools/resources mentioned:** Crawl4AI, Claude Vision (via Claude API key), ChatGPT (mascot/logo), Nano Banana (Frey mentions you could use it for image generation).
- **Action checklist:**
  - [ ] Do not scrape third-party images for any faith directory — use stock, owned, or claim-your-listing uploads.
  - [ ] Remember images aren't required to rank; prioritize accurate data over visuals.
  - [ ] Consider a warm human brand character for Simply Pray over a sterile look.

### 15. Step 6: Amenities, Features & Filter Data (36:33-38:31)
- **Summary:** Step 6 enriches amenities and features, which become the directory's filters. Again the first run was rough (it pulled junk "words like 'it' and 'and' and 'the'" as features). The fix was telling Claude Code to identify the best pages — go to the homepage, find any restroom-trailer page, and "go deep." That pass produced clean amenities that became filters: users can filter by stall count, or click an amenity like "running water" to see only trailers with it, select multiple, and sort. He notes this step didn't take much time but saved a lot versus doing it manually.
- **Key concepts:** Amenities/features as filter data; junk-word edge cases; "find the best pages, go deep" prompting; multi-select filtering and sorting; faceted navigation.
- **Step-by-step:** (1) Prompt Claude Code/Crawl4AI to extract amenities/features, (2) when it returns junk, instruct it to find the homepage and relevant deep pages and go deeper, (3) turn the cleaned amenities into selectable, multi-select filters with sorting.
- **Apply to Joshua's products:** Filters are where trust-niche directories shine. For a counselor directory: filter by specialty, insurance, sliding scale, telehealth, denomination/theological alignment. For a church directory: tradition, service times, accessibility, kids/youth programs. Clean, accurate filters reduce visitor decision time (the "save time" leg of the moat) and build trust.
- **Tools/resources mentioned:** Claude Code (Crawl4AI implied as the engine).
- **Action checklist:**
  - [ ] List the 5-8 filters that matter most to your niche's decision.
  - [ ] When extraction returns junk, prompt "find the best pages and go deep."
  - [ ] Build multi-select filtering + sorting into the directory.

### 16. Step 7: Service Areas (38:31-39:15)
- **Summary:** Step 7 is service areas — many buyers want to know if a provider will drive ~100 miles to a remote location (e.g., an outdoor wedding). Frey prompts Crawl4AI to find service areas. The challenge: some runs over-reported (a Florida business showing Florida, Texas, Arizona), so he made adjustments. The result was new columns broken down by city, region, and radius.
- **Key concepts:** Service-area / geographic enrichment; over-reporting as an edge case; structuring location data by city/region/radius.
- **Step-by-step:** (1) Prompt the crawler to find each business's service areas, (2) check for over-reported/incorrect geographies, (3) structure the output into city, region, and radius columns.
- **Apply to Joshua's products:** Geography matters for local faith services — a counselor directory should capture service area / telehealth coverage; a church directory needs accurate location. The "verify, don't trust the first run" lesson applies strongly in a compliance niche where wrong location data erodes trust.
- **Tools/resources mentioned:** Crawl4AI (implied), Claude Code.
- **Action checklist:**
  - [ ] Add a service-area / coverage field (city, region, radius, or telehealth).
  - [ ] Spot-check geographic data for over-reporting before publishing.

### 17. Niche Directory Ideas: Dementia Care, ADA Bathrooms, Tap Water Quality (39:15-43:38)
- **Summary:** Frey wraps the build (he notes it's "seven steps... might be eight or four depending on the niche") and then explains how this opened his mind to niche directories. You won't outrank A Place for Mom for "senior living," but you might rank for "senior living homes for people with dementia" (he says Ahrefs shows 1,000+ monthly searches) — the niche-pocket strategy keyed on deal-breaker features. Same logic: not "bathroom contractor" (Angie's List, HomeGuide dominate) but "ADA accessible bathroom contractor." He loves public databases (data.gov has tons of hard-to-use public data) and cites a community member, Andy, who built a tap-water-quality directory with no backlinks starting ~November and now gets 40,000+ monthly visitors, got accepted into Mediavine, and sells water filters via Amazon affiliate. He also riffs on air-quality directories and event directories ("they still suck") — you can scrape multiple sources and curate a better version. Finally, the build's closing move: strip the data down to clean columns, give it to Claude Code, and say "use this to create the Supabase database, use the exact columns," then "go buck wild" designing the site.
- **Key concepts:** Niche-pocket SEO strategy; deal-breaker features as the niche wedge; long-tail keywords (Ahrefs); public data (data.gov); Mediavine (ad network); Amazon affiliate; multi-source curation; Supabase database from cleaned columns.
- **Step-by-step:** (1) Pick a deal-breaker sub-niche you can actually rank for, (2) validate search volume (Ahrefs), (3) source data (including public databases), (4) clean to final columns, (5) tell Claude Code to build the Supabase DB using the exact columns, (6) design the front end.
- **Apply to Joshua's products:** This niche-pocket strategy is gold for your trust-driven niche. Examples: not "Christian counselors" (broad) but "Christian counselors for grief/anxiety in [region]" or "trauma-informed Christian counseling"; not "churches" but "churches with dementia-friendly services." Public databases could feed faith-adjacent directories. Monetization paths Frey shows (Mediavine ads, Amazon affiliate) are organic-first and low-effort — but vet affiliate/ad fit against your ministry brand. Note: Frey building on Supabase aligns with a modern stack you can manage with Claude Code.
- **Tools/resources mentioned:** Ahrefs (keyword volume), data.gov (public data), Mediavine (ad network), Amazon affiliate, Supabase (database), Claude Code, ChatGPT.
- **Action checklist:**
  - [ ] Brainstorm 5 deal-breaker sub-niches in faith/care and check their search volume.
  - [ ] Identify any public dataset that could enrich a faith directory.
  - [ ] If building, have Claude Code generate a Supabase DB from your cleaned columns.

### 18. For Naysayers: Is Building a Directory Worth It in 2026? (43:38-47:51)
- **Summary:** Greg asks Frey to address skeptics. Frey's honest caveat: "if your timeline is to make money in less than 6 months, I would not build a directory" — SEO takes time. But he argues there's no better "playground" to learn Claude Code, SEO, selling, and lead generation; his first Claude Code directory was just a learning vehicle. He frames directories as a "distribution-first model" with an SEO advantage via topical relevance — 1,000 pages all about luxury restroom trailers makes it "really easy to start ranking for luxury restroom trailer Bakersfield, California" and work up to bigger cities. He lists the top three distribution channels today: ads, organic social, and SEO — and says directories are high-margin, location-independent, and buildable for under a few hundred bucks ("small bets" that can become big businesses). If you urgently need cash, he says flip garage-sale items instead (what he did when broke). Greg agrees no startup is overnight.
- **Key concepts:** Realistic timeline (SEO is slow, 6+ months); directory as a learning playground; distribution-first; topical relevance / topical authority; the big-three channels (ads, organic social, SEO); small bets; high margin / location-independent.
- **Step-by-step:** Decision rule: if you need money in <6 months, don't build a directory; if you want to learn AI coding + SEO + lead gen and build a durable asset, do.
- **Apply to Joshua's products:** This validates your organic-first, no-audience-yet posture — a directory builds topical authority and SEO over months, exactly the patient, low-cost play that fits ~$1,000/mo and 2-5 hrs/wk. But set expectations: treat any faith directory as a 6-12 month distribution asset feeding Simply Pray/HopeStack, not a quick revenue source. The "directory as learning playground" is also the lowest-risk way for you to deepen Claude Code skills you'll reuse across all products.
- **Tools/resources mentioned:** None specific (channels: ads, organic social, SEO).
- **Action checklist:**
  - [ ] Commit to a 6-12 month horizon before expecting directory revenue.
  - [ ] Use a first directory explicitly as a Claude Code + SEO learning project.
  - [ ] Map which product the directory's organic traffic will feed.

### 19. LLMs, AI Search & the Future of Directories (47:51-55:41)
- **Summary:** Greg asks whether LLMs (ChatGPT, Perplexity, Gemini) make directories obsolete. Frey's two points: (1) Directory users are past discovery and in the decision-making phase — LLMs help you discover, but for high-consequence decisions (senior living for a parent, lawyers, anything in health/finance/legal) people do due diligence and compare all options, which pushes them to Google and directories; price comparison also drives directory use. (2) Local SEO "hasn't really changed that much" — a query like "haircut Los Angeles" still shows a local pack + organic listings, whereas product queries ("hair gel") have been transformed, which is why Frey avoids product-based niches. Greg adds a sharp thesis: in an AI-search world, niche directories may win while horizontal directories get hurt, because AI answers cite a few specific sources and must link back to your data — instead of a thousand blue links, you get one to three. Frey agrees and says "if I'm building a directory this year, I'm trying to build it super niche." He cites Mark's "Lose Trust"/MRR as a directory turned marketplace leveraging personal brand. Closing: Frey makes a video weekly on his channel and runs a free directory community of 3,200+ people; Greg thanks him and floats making it a yearly tradition.
- **Key concepts:** Decision phase vs. discovery phase; high-consequence niches (health/finance/legal/senior living); due-diligence behavior; local SEO durability; product vs. local queries; niche directories winning in AI search; citation-based AI answers (1-3 sources, must link to your data); personal-brand-led directory-to-marketplace; lead generation "never going away."
- **Step-by-step:** Strategic rule: build super-niche, local- or decision-stage-focused directories (avoid product niches) to stay durable in AI search.
- **Apply to Joshua's products:** This is the most strategically important section for you. Faith/ministry decisions (choosing a counselor, a church, senior care) are exactly the high-consequence, decision-phase, trust-driven scenarios Frey says directories own — your niche is naturally AI-search-resilient. Build super-niche and local (e.g., "trauma-informed Christian counseling in [city]"). The citation point matters: well-structured, accurate faith data is more likely to be cited and linked by AI answers, sending you qualified traffic. Lead gen "never going away" supports HopeStack's B2B model and your consulting strategy-call funnel. Frey's weekly-video + free-community model is also a template for building your own audience over time (organic-first).
- **Tools/resources mentioned:** ChatGPT, Perplexity, Gemini (AI search engines named); "Lose Trust"/MRR by Mark (directory-turned-marketplace example); Frey's YouTube channel and free directory community (3,200+ members).
- **Action checklist:**
  - [ ] Frame any faith directory around high-consequence, decision-phase queries.
  - [ ] Structure data cleanly so AI answers can cite and link to it.
  - [ ] Study Frey's weekly-video + free-community model as your own audience-building blueprint.

## How to apply this whole video to Solomon Solutions
1. **The directory-to-SaaS motion is the template for HopeStack.** Parting.com proves the pattern: a directory generates organic traffic, then you sell vertical SaaS (and agency services) to the very businesses listed. Build a niche directory of Christian counseling centers (public data only, no PHI), and use it as a top-of-funnel for HopeStack's CRM and for Solomon Solutions consulting. This respects HIPAA by keeping protected data behind HopeStack's auth, not in the public directory.

2. **Your niche is naturally AI-search-resilient — lean into it.** Frey and Greg argue directories survive (and niche ones may thrive) because users in high-consequence niches — health, finance, legal, senior living — are in the decision-making phase and do due diligence. Faith/ministry decisions are exactly this. Build super-niche, local, decision-stage directories (e.g., "trauma-informed Christian counseling in [city]") rather than broad ones, and structure data cleanly so AI answers cite and link back to you.

3. **Data + trust is your moat; the build is the easy part.** The whole episode insists "data is the moat" and the hard/valuable work is sourcing, verifying, and enriching it. In a trust-driven, compliance-sensitive niche, accuracy and verification (e.g., Crawl4AI verification-confidence scores, verified credentials, transparent pricing) double as trust signals. Spend 80% of effort on data quality, 20% on the site.

4. **The reusable Claude Code workflow fits your budget and time.** Outscraper (scrape) → Claude Code (clean junk) → Crawl4AI (verify + enrich, one field at a time) → Supabase (database) → design. Under $250, 4 days, AI drafts/you approve — squarely inside ~$1,000/mo and 2-5 hrs/wk. The discipline of "one field per run" and "ask for the game plan before burning tokens" protects your budget across all products, not just a directory.

5. **Treat the first directory as a learning playground that feeds your priorities.** Frey calls a directory the best playground to learn Claude Code, SEO, and lead generation, with a 6-12 month payoff horizon. Use it to build SEO/topical authority and a real audience (you have none yet) that funnels to PRIORITY Simply Pray (pre-launch waitlist) and HopeStack — and to sharpen skills you'll reuse everywhere. Heed the explicit caution: do NOT scrape third-party images in your niche; use stock, owned, or claim-your-listing uploads.

## Honesty notes
- **Title vs. content:** The video title says "$273/Day," but the transcript never states a $273/day figure for the restroom-trailer directory. The transcript's concrete numbers are: built in 4 days for under $250; the *example* directories' revenues (Parting >$1M/yr, A Place for Mom ~$50M/yr per Frey's gut, GasBuddy ~$30K/mo in ads on the low end). The "$273/Day" appears to be a packaging/title figure not substantiated in the spoken content I have; I did not invent any supporting number for it.
- **Chapter timing:** The final chapter "LLMs, AI Search & the Future of Directories" has no following chapter, so I used the video's end time (55:41) as its end bound.
- **Community link:** Frey references a free directory community of 3,200+ members, but no direct join URL is in the description; the closest links are his YouTube channel and ShipYourDirectory.
- **Numbers are as spoken:** Traffic, revenue, and cost figures are Frey's stated/estimated numbers (some explicitly "my gut tells me" or "I wouldn't be surprised"), not independently verified. The Andy tap-water directory stats (40,000+ visitors, Mediavine, since ~November) are also as Frey recounted them.
- **Legal caveat preserved:** Both speakers explicitly disclaim being lawyers and flag image scraping as a gray area with real risk. I carried that caveat forward and did not soften it.
- **No fabrication:** All tools (Outscraper, Crawl4AI, Claude Code, Claude Vision, Supabase, Ahrefs, data.gov, Mediavine, ChatGPT, Nano Banana, WordPress, Apify, Wayback Machine) and all URLs are taken directly from the transcript or the description. The "Apply to Joshua's products" and synthesis sections are my interpretation/recommendations, clearly distinct from the source teaching.
