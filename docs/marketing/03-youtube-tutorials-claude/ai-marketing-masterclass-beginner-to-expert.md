# AI marketing Masterclass: From beginner to expert in 60 minutes

- **Creator:** Greg Isenberg
- **URL:** https://www.youtube.com/watch?v=fVUlrpaWNxg
- **Published:** 2026-02-09
- **Duration:** 58:41
- **Source:** Real captions downloaded via yt-dlp and deduplicated (~10,268 words). Quotes and steps below are grounded in that transcript.

---

## TL;DR (3-5 bullets)

- Greg Isenberg interviews James Dickerson ("The Boring Marketer") who builds a **complete marketing system live inside Claude Code** in roughly one sitting — research, positioning, copy, landing page, lead magnet, ad creative, SEO content, and a traffic plan.
- The core philosophy is **research first**: most people open an AI tool and start prompting immediately, which is "where the AI slop thing comes from." James spends up to an hour doing market research with the Perplexity MCP before generating any asset.
- **Skills** (instruction manuals you build for your AI agent) are the engine. James built 17 of them. The "last 10 to 20% expert perspective" you put into a skill is what separates great output from generic AI output.
- A small, simple MCP stack is enough: **Perplexity (research), Firecrawl (scraping), Playwright (browser automation/competitive screenshots)**, plus Anthropic's front-end design skill and Remotion for video ads.
- **Remotion** lets you generate programmatic video ads from the terminal at $0 cost in multiple formats (square, vertical, landscape). The whole live build runs on a single **$200/month Claude Code Max subscription**.

> Jargon note (for a marketing beginner): **MCP** = "Model Context Protocol," a standard way to plug external tools (web search, browsers, scrapers) into an AI agent so it can use them. **Skill** = a saved instruction file that teaches the agent how to do a specific task your way. **Lead magnet** = a free resource (PDF, tool, checklist) you give away to collect someone's email. **Funnel** = the path from a stranger seeing you to becoming a paying customer.

---

## Companion links & resources

Real URLs pulled from the video description:

- **Vibe Marketing Playbook (the free lead magnet James built):** https://startup-ideas-pod.link/vibe_marketing_playbook
- **Vibe Marketing Skills:** https://startup-ideas-pod.link/Vibe_marketing_skills
- **Idea Browser (find startup ideas/trends):** https://www.ideabrowser.com/
- **Late Checkout Agency (Greg's agency):** https://latecheckout.agency/
- **The Vibe Marketer (AI marketing resources):** https://www.thevibemarketer.com/
- Greg on X/Twitter: https://twitter.com/gregisenberg | Instagram: https://instagram.com/gregisenberg/ | LinkedIn: https://www.linkedin.com/in/gisenberg/
- James on X/Twitter: https://x.com/boringmarketer | LinkedIn: https://www.linkedin.com/in/jadickerson/

Tools named in the conversation but without links in the description: **Remotion** (referenced via "search for Remotion on X" / a free GitHub gist), **Firecrawl** ("Firecrawl Agent"), **Playwright**, **Perplexity**, **Nano Banana Pro**, **Canva**, **Glyph** (MCP to access image/video models), **Whisper Flow / Narrate** (voice dictation), **Vercel** (deployment), Tally and Typeform (mentioned as the costly alternative to a vibe-built audit).

---

## Sections

### 1. Intro and Camera Setup Chat (0:00-2:57)
- **Summary:** Greg sets up the episode as a "vibe marketing masterclass" by James Dickerson, aka The Boring Marketer. He frames the problem: lots of people are vibe coding and shipping products, but then they need customers, so this episode shows how to use AI agents to do marketing work. James promises to show how to use Claude Code to create a complete marketing system in one sitting, with free gifts at the end.
- **Key concepts:** Vibe marketing (using AI agents to do marketing work); the gap between building a product and getting customers; skills + MCPs + Claude Code as the toolset.
- **Step-by-step:** No concrete steps yet — this is framing. The stated goal: by the end, build a complete marketing system and give away free resources.
- **Apply to Joshua's products:** This is exactly Joshua's situation — Simply Pray is pre-launch with no audience/list. The whole video answers "I built it, now how do people come?" Treat it as a playbook for Simply Pray's waitlist push and Solomon Solutions lead generation.
- **Tools/resources mentioned:** Claude Code, MCPs, skills (named generally).
- **Action checklist:**
  - [ ] Decide which single product to run this whole workflow on first (recommended: Simply Pray, the priority).
  - [ ] Block one focused session this week to try the research-first approach end to end.

### 2. Episode Preview: Building a Vibe Marketing System (2:57-6:33)
- **Summary:** James explains his prep: he sat down for ~2 hours, recorded himself working in Claude Code, narrated with Whisper Flow, and had Claude Code build a full session transcript of a complete marketing system. He turned that recording into a **playbook lead magnet**. He explains the lead-magnet logic (collect an email, nurture the relationship before asking for a sale) and previews the playbook's contents: foundation/mindset, core frameworks, how to use and stack skills, use cases across four niches (SaaS, e-com, consulting/agencies, info-education/creators), and how to drive traffic.
- **Key concepts:** Lead magnet; stacking skills; turning a recorded work session into a transcribed, AI-compiled guide so it "doesn't sound like AI"; the four niches the playbook covers.
- **Step-by-step (the lead-magnet creation method James describes):**
  1. Record a long working session (he did 2 hours) of yourself actually doing the work.
  2. Narrate what you're doing out loud (Whisper Flow).
  3. Take the transcript and the logs.
  4. Have Claude Code extract the frameworks, how you prompt, how you stack skills.
  5. Compile that into the lead magnet / guide.
- **Apply to Joshua's products:** Joshua is a pastor + engineer — he has genuine expertise. He can record himself doing something real (e.g., setting up the ACTS prayer method for a small group, or a church consulting walkthrough) and have Claude Code turn the transcript into a lead magnet. For The Wisdom Walk, this is a low-effort way to produce a flagship guide that captures emails ethically (no list yet, so this seeds it).
- **Tools/resources mentioned:** Claude Code, Whisper Flow.
- **Action checklist:**
  - [ ] Record one 30-60 min walkthrough of a process Joshua already knows cold (ACTS prayer method, or a free 30-min strategy-call framework).
  - [ ] Have Claude Code turn the transcript into a first-draft lead magnet PDF.
  - [ ] Pick the niche framing (for Joshua: church/ministry, not SaaS/e-com).

### 3. Perplexity MCP for Market Research (6:33-8:13)
- **Summary:** James lays out his three-layer workflow: (1) research with MCPs (Perplexity for deep market/competitor/angle research, Playwright to open and crawl websites for inspiration), then (2) kick in the skills (actual marketing frameworks like direct response copywriting, ad ideas, long-form content), then (3) build and put it together. He says he built **17 skills** he uses every day, and defines a skill as "an instruction manual for your agent."
- **Key concepts:** Three layers = research → skills → build; skills as instruction manuals trained deeply on one task; the simple tool stack (IDE/Cursor/VS Code/Claude Code, Whisper Flow/Narrate, research MCPs, skills).
- **Step-by-step:**
  1. Start with research via MCPs (Perplexity).
  2. Crawl websites with Playwright for inspiration.
  3. Invoke skills (marketing frameworks) to create assets.
- **Apply to Joshua's products:** Before writing any Simply Pray or HopeStack copy, run Perplexity research on the prayer-app / counseling-CRM landscape: who exists, what they say, what angles are missing. Note: Joshua's niche is trust- and compliance-sensitive, so the research should also surface what competitors claim about privacy/HIPAA (HopeStack) and tone (faith trust for Simply Pray).
- **Tools/resources mentioned:** Perplexity MCP, Playwright, Cursor, VS Code, Claude Code, Whisper Flow, Narrate.
- **Action checklist:**
  - [ ] Set up (or confirm) a research MCP for market research (Perplexity, or a comparable web-search MCP already available).
  - [ ] Run a "who are the main players / what are the gaps" research pass for the prayer-app space.

### 4. Live Demo: Researching an AI Marketing Agency Niche (8:13-9:48)
- **Summary:** James runs the live use case: "I'm starting an AI marketing agency and I want you to use the Perplexity MCP to research who the main players are and give me an idea of what the gaps are in the market." He narrates the prompt with Whisper Flow (Greg jokes about not typing "like a simpleton"). The research takes time, so James notes he'll often spend an hour gathering as much market data as possible. He calls out that **most people skip the boring research step** and that's the source of AI slop.
- **Key concepts:** Voice-prompting the agent; spending real time on research; "the boring research step" is what people skip.
- **Step-by-step:**
  1. Write/narrate a prompt naming the MCP and the research goal (players + gaps).
  2. Let it run; expect it to take a while.
  3. Save the resulting research as context for later steps.
- **Apply to Joshua's products:** For Simply Pray, the equivalent prompt: "Research the main prayer / devotional apps, how they position, their pricing, and what gaps exist for a structured (ACTS method) experience." Keep the output as a context file Claude reuses across copy, landing page, and waitlist messaging.
- **Tools/resources mentioned:** Perplexity MCP, Whisper Flow.
- **Action checklist:**
  - [ ] Draft the exact research prompt for Joshua's priority product.
  - [ ] Save the research output to a named markdown file for reuse.

### 5. Positioning Angles Skill (9:48-11:34)
- **Summary:** James assumes the research is done and, in a second Claude Code instance, prompts: "I'm starting an AI marketing agency targeting boring local businesses that do $2-10 million a year in revenue... use the positioning angles skill to find out how we can optimally position our company." He explains you can create your own skills, that he builds his with deep research (Perplexity, Firecrawl), includes "world-class references," and reviews them by hand so his "taste" is built in. He always invokes the skill by name inside the prompt (though Claude Code can pick it up automatically).
- **Key concepts:** Positioning angles skill; building skills with deep research + hand-reviewed references + your taste; explicitly invoking a skill in the prompt; targeting an overlooked / "boring" niche.
- **Step-by-step (how James builds a skill):**
  1. Do deep research with Perplexity and Firecrawl across many data sources.
  2. Include world-class references in the skill.
  3. Review by hand so your taste is captured.
  4. Invoke the skill by name within your prompt.
- **Apply to Joshua's products:** Joshua's "boring/overlooked" niche is small and mid-size churches and ministries that big SaaS ignores. A positioning-angles pass for Simply Pray could surface angles like "structured prayer for people who don't know how to pray," and for HopeStack "HIPAA-aligned CRM built for counseling centers, not generic CRMs." Build a positioning skill seeded with faith-sector references so output stays on-tone.
- **Tools/resources mentioned:** Perplexity, Firecrawl, the positioning angles skill.
- **Action checklist:**
  - [ ] Create a positioning-angles skill (or adapt the free Vibe Marketing Skills) tuned to faith/ministry references.
  - [ ] Run it for Simply Pray and HopeStack separately and save the angles.

### 6. Direct Response Copywriting Skill (11:34-15:43)
- **Summary:** The positioning skill returns concrete angles: the transformation ("from chasing work to selecting work," "from hoping the phone rings to controlling when it rings"), competitive landscape, unique mechanism, plus named angles (the anti-agency, the speed weapon, the boring business specialist, the unsexy gold mine, the revenue ceiling breaker). James then spins up a **task-based agent prompted to "be Greg Isenberg"** to pick the best angle, explaining he likes a fresh context window with a specialized role to review research. The winning angle: **"Boring Money."** He then invokes the **direct response copy skill** (trained on Eugene Schwartz, Claude Hopkins and classic copywriters, then updated for today) to draft landing-page copy concepts.
- **Key concepts:** Transformation framing; named positioning angles; task-based sub-agent with a role to make a checkpoint decision; direct response copywriting trained on the "greats"; choosing the winning angle ("Boring Money").
- **Step-by-step:**
  1. Generate multiple positioning angles, save to an MD file.
  2. Spin up a fresh task-based agent with a specific role/persona to evaluate and pick the strongest angle.
  3. Feed the chosen angle into the direct response copy skill to produce landing-page copy.
- **Apply to Joshua's products:** Build (or reuse) a direct-response copy skill, but tune the references to ethical, trust-driven faith messaging rather than aggressive hype (his niche is compliance-sensitive). For Simply Pray, the "transformation" framing fits naturally: from "I don't know how to pray" to "a daily, structured prayer rhythm." Use a sub-agent review step to pick the most resonant, least salesy angle.
- **Tools/resources mentioned:** Positioning angles skill, task-based agents, direct response copy skill (referencing Eugene Schwartz, Claude Hopkins).
- **Action checklist:**
  - [ ] Build a direct-response copy skill seeded with copy references but constrained to a humble, pastoral tone.
  - [ ] Use a sub-agent "checkpoint" to choose the winning angle before writing copy.

### 7. Playwright MCP for Competitive Intelligence (15:43-17:37)
- **Summary:** James prompts the agent to use the **Playwright MCP** to find a competing agency and capture screenshots of its website. He explains Playwright is browser automation: in an MCP it lets Claude Code open a browser window, click through, take screenshots, and pull information for design inspiration or branding. Before Playwright his desktop was "littered with screenshots" he'd drag in manually; now it's smooth and voice-driven. He confirms Playwright is open source and free.
- **Key concepts:** Playwright = browser automation MCP; automated screenshots and site analysis; free/open source; voice-commanding browser actions.
- **Step-by-step:**
  1. Prompt the agent to use Playwright to open a competitor's site.
  2. Have it capture screenshots and gather copy/design info.
  3. Use that as input for the next design step.
- **Apply to Joshua's products:** Use Playwright to capture how existing prayer apps and counseling-center sites present themselves, so Joshua can deliberately differentiate Simply Pray and HopeStack instead of accidentally copying the category's clichés. Costs nothing — fits the $1,000/mo budget.
- **Tools/resources mentioned:** Playwright MCP (free, open source).
- **Action checklist:**
  - [ ] Install/confirm the Playwright MCP.
  - [ ] Capture 3-5 competitor screenshots for the priority product to inform design direction.

### 8. Keeping Your MCP Stack Simple (Perplexity, Firecrawl, Playwright) (17:37-20:59)
- **Summary:** James says he used to have "tons" of MCPs and realized "simple's often better." His main three: **Perplexity** (research), **Firecrawl** (scraping; he highlights a new "Firecrawl Agent" that can do research tasks like "find all the Facebook pages for boring local businesses and put it into a document"), and **Playwright** (browser automation). He says he has no affiliation with Firecrawl and uses it almost daily. He previews using the captured screenshots plus Anthropic's front-end design skill next.
- **Key concepts:** Minimal MCP stack (3 core); Firecrawl Agent for accurate research/scraping tasks; "no affiliation"; Perplexity for research, Firecrawl for scraping, Playwright for browser actions.
- **Step-by-step:**
  1. Keep your MCP stack small — research, scraping, browser automation.
  2. Use Firecrawl Agent for structured scraping/research tasks (e.g., compile a list into a document).
- **Apply to Joshua's products:** Joshua, a marketing beginner, benefits from this restraint — don't over-tool. Three free/cheap MCPs cover research, scraping, and browsing. Firecrawl Agent could, for example, compile a list of churches or counseling centers in a region for HopeStack outreach (within compliance and anti-spam norms).
- **Tools/resources mentioned:** Perplexity, Firecrawl (Firecrawl Agent), Playwright.
- **Action checklist:**
  - [ ] Limit the MCP stack to research + scrape + browse; remove anything unused.
  - [ ] Test one Firecrawl Agent "compile into a document" research task.

### 9. Anthropic's Front End Design Skill (20:59-25:51)
- **Summary:** With competitive intel, positioning, and copy loaded as context, James prompts the agent to create a **conversion-optimized landing page using the front-end design skill** (from Anthropic). He praises it for preventing the tell-tale AI design patterns — "purple gradients, rounded corners, emojis" — and notes it works for websites, landing pages, and applications. He asks it for an "anti-corporate aesthetic that stands apart from competitors." While it builds, he shows the live landing pages he's already shipping for The Vibe Marketer, including a separate landing page per positioning angle (agency owners/consultants; money-savers; do-it-yourself founders). He stresses you can now make 100 landing pages instead of a couple.
- **Key concepts:** Front-end design skill (Anthropic) to avoid AI-looking design; context loading (research + positioning + copy) before design; one landing page per audience angle; "100 landing pages" volume mindset; science over art.
- **Step-by-step:**
  1. Load context: competitive intel + positioning angle + copy.
  2. Prompt for a conversion-optimized landing page using the front-end design skill.
  3. Optionally generate a distinct landing page per positioning angle to lift conversion for each targeted audience.
- **Apply to Joshua's products:** The front-end design skill directly fixes Joshua's risk of shipping generic "AI-looking" pages for Simply Pray's waitlist or Solomon Solutions. Make a dedicated landing page per audience: one for individuals (Simply Pray free/paid), one for churches (Simply Pray Church $49/mo), one for counseling centers (HopeStack). Each tuned to that audience converts better.
- **Tools/resources mentioned:** Front-end design skill (Anthropic), Playwright (referenced for self-review of the page).
- **Action checklist:**
  - [ ] Add Anthropic's front-end design skill to the workflow.
  - [ ] Generate a Simply Pray waitlist landing page using loaded context (research + positioning + copy).
  - [ ] Generate a separate church-focused variant.

### 10. Remotion: Creating Video Ads from the Terminal (25:51-28:47)
- **Summary:** Greg asks whether the ads are "AI slop" or actually good. James shows **Remotion**, which "creates videos and edits videos in Claude code." He saw a viral tweet, grabbed Remotion's free GitHub file of prompts, and made his own version. The demo video (a product/book animation) impresses Greg — "obviously it needs music... but from a visual standpoint, it looks great." James says it supports custom fonts, brand colors, copy, and can output many sizes (landscape, story, square) programmatically — "100 videos with one prompt." He made the book image in **Nano Banana Pro**, removed the background in **Canva**, and dropped it into the terminal. Cost: **$0** (he hadn't even subscribed).
- **Key concepts:** Remotion = programmatic video ads from the terminal; custom fonts/brand colors/copy; multiple formats (landscape, story, square) for Meta campaigns; image pipeline (Nano Banana Pro → Canva background removal → terminal); zero cost.
- **Step-by-step:**
  1. Find Remotion's free GitHub file of prompts (via their X post).
  2. Use it to install and generate your own video.
  3. Supply brand assets (image from Nano Banana Pro, background removed in Canva).
  4. Generate multiple format variations programmatically.
- **Apply to Joshua's products:** Remotion gives Joshua zero-cost video ads/promos for Simply Pray — short animated clips explaining the ACTS method, in vertical (Reels/Stories) and square formats — without hiring a designer. Keep visuals calm and reverent given the faith audience. Useful even pre-launch for a waitlist teaser.
- **Tools/resources mentioned:** Remotion (free GitHub file), Nano Banana Pro, Canva.
- **Action checklist:**
  - [ ] Find and save the Remotion GitHub gist/prompts.
  - [ ] Generate one teaser video for Simply Pray in vertical + square formats.

### 11. Landing Page Review: "Boring Money" Agency (28:47-30:43)
- **Summary:** James opens the generated "Boring Money" landing page. Headline: "You fired enough marketing agencies. Try the one that delivers in days, not months. AI-powered marketing for plumbers, HVAC, roofers, and electricians doing $2 to $10 million." It includes differentiators (lead response system, complete landing page, review generation, follow-up automations), a comparison (traditional agency 6-8 weeks, $15-25k vs. Boring Money 5 days at a fraction of the cost), and a founder-story section from the direct response copy skill. Greg says it "doesn't look vibe coded at all" — no purple glow — and feels "confident." James notes they're doing one-shots to demo, but you could iterate endlessly.
- **Key concepts:** Confident, non-AI-looking page; clear differentiators; head-to-head comparison vs. the status quo; founder-story section; one-shot demo vs. iterative refinement.
- **Step-by-step:** (Reviewing output) — confirm the page has a strong headline, differentiators, a comparison against the alternative, and a founder/story section; iterate as needed.
- **Apply to Joshua's products:** Mirror this structure for Simply Pray and HopeStack: a clear headline, an honest comparison (e.g., "generic prayer apps vs. a structured ACTS rhythm"), and a founder/mission section — which is a real strength for Joshua as a pastor (authentic story builds the trust his niche requires). Avoid overstated claims given compliance sensitivity.
- **Tools/resources mentioned:** Front-end design skill, direct response copy skill (both referenced as the sources of the page/sections).
- **Action checklist:**
  - [ ] Draft a headline + comparison + founder-story section for Simply Pray.
  - [ ] Review the page for any tone that feels too "salesy" for a ministry audience.

### 12. Orchestrator Skill: Deciding What to Do Next (30:43-34:10)
- **Summary:** James addresses the "I have a landing page, now what?" paralysis. He invokes an **orchestrator skill**: "I don't know what to do next. I know I want to convert visitors... maybe a lead magnet." He explains you can build a skill that prioritizes and asks clarifying questions to orchestrate across your other skills. To build one: open Claude Code, point it at your existing skills, and say "analyze all the files and create a master orchestration skill to help me decide what I should do and which ones to use." The orchestrator maps where you are (you have positioning, brand voice, landing page) vs. what's missing (email sequences, traffic strategy) and warns "without a lead magnet, you lose them forever," then recommends running the lead magnet skill next.
- **Key concepts:** Orchestrator/orchestration skill; removing decision paralysis; "what you have vs. what you're missing" mapping; building an orchestrator by pointing Claude Code at your skill files.
- **Step-by-step (build an orchestrator skill):**
  1. In Claude Code, point it at your folder of skills.
  2. Prompt: "Analyze all the files and create a master orchestration skill to help me decide what to do and which skills to use."
  3. Invoke the orchestrator when you're unsure of the next step.
- **Apply to Joshua's products:** This is ideal for a solo founder with limited hours (2-5/week). An orchestrator skill can tell Joshua the highest-leverage next marketing step for Simply Pray each week, so he spends his scarce time well and "AI drafts, he approves."
- **Tools/resources mentioned:** Orchestrator skill; mentions free skills, skill directories, and searching online for skills.
- **Action checklist:**
  - [ ] Build (or adapt) an orchestrator skill across Joshua's marketing skills.
  - [ ] Run it weekly to choose the single next marketing action.

### 13. Lead Magnet Skill / Are Skills Underrated (34:10-39:08)
- **Summary:** James runs the **lead magnet skill**, which proposes concepts: a **response-time revenue calculator** (interactive), a "what your agency won't tell you" exposé PDF, a **five-minute marketing audit** (self-assessment checklist), and a boring-business marketing playbook. Greg and James both prefer the audit because "the perceived value goes way up" when a lead magnet feels like a *tool*. James says this same skill is how he found his own playbook idea. On the "are skills underrated?" question, James argues skills are **underrated**: not all are equal, and if you're an expert you can "download your brain" into a skill — that "last 10 to 20% expert perspective" is what no generic AI can replicate. He directs the agent to build the audit as a modal in the bottom-right that opens in a new window.
- **Key concepts:** Lead magnet skill; lead magnets as tools (higher perceived value); the "last 10-20% expert perspective"; interactive audit/calculator; modal placement.
- **Step-by-step:**
  1. Run the lead magnet skill to generate 3-5 concepts.
  2. Have it score the concepts and recommend the best.
  3. Pick a "tool" format (audit/calculator) for higher perceived value.
  4. Tell the agent where to place it (e.g., a bottom-right modal that opens in a new window).
- **Apply to Joshua's products:** Joshua's expert "last 10-20%" is real pastoral and theological knowledge — exactly the moat James describes. For Simply Pray, a "tool" lead magnet could be a short prayer-life self-assessment ("How consistent is your prayer rhythm?") that ends with a Simply Pray waitlist sign-up. For HopeStack, a "counseling-center intake readiness" checklist. Heartward could offer a theological Q&A sampler.
- **Tools/resources mentioned:** Lead magnet skill, Playwright (suggested for researching where competitors place lead-magnet boxes).
- **Action checklist:**
  - [ ] Run a lead magnet skill for Simply Pray and pick a tool-style concept.
  - [ ] Bake Joshua's genuine expertise (the "last 10-20%") into the skill before generating.
  - [ ] Add the lead magnet as a modal/section that captures emails (this seeds his first list).

### 14. Claude Code Costs: $200/Month Max Subscription (39:08-42:03)
- **Summary:** Watching the "compacting conversation" and token counter, James reassures that token spikes used to be scary but Anthropic has improved it. On cost, he says people always ask how much he spends, and the answer is a **Claude Code Max subscription at $200/month** — and he's "never run out of tokens" despite constant use. A lighter aside follows about working from home, talking to Claude all day via Whisper Flow, and whether he uses Claude Code on his phone (he doesn't, though Boris, the maker of Claude Code, told Greg you should).
- **Key concepts:** Claude Code Max = $200/month flat; never running out of tokens at heavy use; "tokens not dollars" framing; mobile Claude Code as an option.
- **Step-by-step:** (Cost guidance) — a single $200/month Max plan covered the entire live build of a complete marketing system.
- **Apply to Joshua's products:** This fits Joshua's ~$1,000/month budget comfortably — one $200/month Claude Code plan can power all marketing work across Simply Pray, HopeStack, Heartward, consulting, and The Wisdom Walk, leaving ~$800 for other tools. It's the single highest-leverage line item to justify.
- **Tools/resources mentioned:** Claude Code Max subscription ($200/mo), Whisper Flow, Claude mobile app.
- **Action checklist:**
  - [ ] Confirm a Claude Code Max ($200/mo) plan is in budget and active.
  - [ ] Treat it as the core marketing-production tool across all products.

### 15. Live Lead Magnet Review (42:03-43:28)
- **Summary:** The audit modal is live: an "audit button" in the bottom-right opens an assessment — "Find the leaks costing you jobs. Answer 15 questions, get your score instantly." Sample questions: respond to new leads within 10 minutes? automated after-hours response? can a customer book a consultation from your site? do you follow up three times automatically? Greg notes the alternative would be setting up a Tally or Typeform and paying ~$1,000/year, whereas this is "done, optimized, the copy is dialed." On completion it offers: "want us to fix these gaps... book a call" plus a downloadable full report — which builds the email list.
- **Key concepts:** Interactive scored audit as lead magnet; instant score; clear CTA (book a call) + downloadable report → email capture; cost savings vs. Tally/Typeform.
- **Step-by-step:**
  1. Build the audit with a fixed question set and instant scoring.
  2. End with a CTA (book a call) and a gated report download to capture the email.
- **Apply to Joshua's products:** A scored "prayer-life check" or "ministry tech-readiness check" can capture Simply Pray / HopeStack waitlist emails ethically — value first, email second. Because Joshua has no list yet, this self-contained, no-extra-cost capture mechanism is a clean way to start one.
- **Tools/resources mentioned:** The built audit; Tally and Typeform named as the paid alternative.
- **Action checklist:**
  - [ ] Define the question set for Joshua's audit (faith/ministry framing).
  - [ ] Wire the completion CTA to a waitlist sign-up + report download.

### 16. Keyword Research and Traffic Strategy Skills (43:28-45:23)
- **Summary:** James turns to traffic: "use the keyword research skill to identify a programmatic SEO opportunity targeting local markets, and... come up with an ad strategy using the DTC ad skill." He explains keyword research = the terms people search on Google, which you target with high-quality content. He admits that for his own boring local business he didn't obsess over exact search volume or bid prices (you can get lost in that data); the skill helps him go "from zero to one." Because the project already has a brand voice, unique angle, ICP, target market, and website, a content skill can generate content and push it onto the site to start ranking.
- **Key concepts:** Keyword research skill; programmatic SEO targeting local markets; DTC ad skill; "zero to one" over analysis paralysis; reusing existing context (brand voice, angle, ICP) for content.
- **Step-by-step:**
  1. Run a keyword research skill to find a programmatic SEO opportunity (e.g., local markets).
  2. Run a DTC ad skill to produce an ad strategy.
  3. Use a content skill to generate pages and publish them to the site.
- **Apply to Joshua's products:** **The Wisdom Walk is explicitly Joshua's SEO/content hub** — this section maps onto it directly. Run keyword research for faith/ministry search terms (e.g., "how to pray using ACTS," "prayer journal app," "counseling center software") and generate articles that funnel readers to Simply Pray / HopeStack / Heartward. This is the organic-first, low-cost strategy his constraints call for.
- **Tools/resources mentioned:** Keyword research skill, DTC ad skill, content skill (referenced).
- **Action checklist:**
  - [ ] Run a keyword research skill scoped to faith/ministry + each product.
  - [ ] Have a content skill draft 3-5 Wisdom Walk articles targeting those terms (Joshua approves before publishing).

### 17. The Evolution of Vibe Marketing (45:23-47:11)
- **Summary:** James reflects that one terminal can now do what wasn't possible when he and Greg first discussed vibe marketing. He traces the evolution: around February 2025 they built in n8n-style workflows and agents with a lot of friction and hard-to-scale activities; then chat/skills/MCPs (more deterministic); then vibe coding picked up; then "the Claude code renaissance." He argues Claude Code is what makes vibe marketing "100% a real thing" — you can deploy complete marketing systems and campaigns from the terminal just like vibe coding a product. There's a little startup friction (the terminal looks scary) but it behaves like any other LLM you can ask for help.
- **Key concepts:** Evolution from workflow tools → skills/MCPs → vibe coding → Claude Code; deploying full marketing systems from the terminal; low barrier once you start.
- **Step-by-step:** No new steps — narrative/context.
- **Apply to Joshua's products:** Reassurance for a marketing beginner: the terminal is approachable, and one environment (Claude Code) covers research, copy, design, and deployment. Joshua can run all five products' marketing from one place rather than stitching together many SaaS tools (saves budget and time).
- **Tools/resources mentioned:** Claude Code; n8n-style workflow tools (referenced historically); skills and MCPs.
- **Action checklist:**
  - [ ] Get comfortable in the terminal with one small, end-to-end task before scaling up.

### 18. Remotion Setup and Ad Creation Demo (47:11-54:47)
- **Summary:** James kicks off making assets: "use the SEO content skill to develop a page... based on your top quick-win opportunity, and use Remotion to create a video ad using our brand style." He explains installing Remotion (grab their free GitHub repo from their X video; paste the link and it installs the packages). He shares his ad philosophy: study the **DTC e-com market** because they run the most ads/testing and are best at hooks, angles, and formats — then repurpose those for whatever you're selling. Greg notes James has spent **$100M+ on ads**. James discusses statics via the **Facebook ad library** + **Nano Banana Pro**, and using **Glyph (via MCP)** to access Nano Banana Pro and even video models, with skills that programmatically generate optimized image prompts and variations. He tempers expectations: Remotion needs back-and-forth (his good one took ~30 minutes), but you can become "a testing machine in a sitting" — even if you have/hire an agency, do this first to understand it yourself.
- **Key concepts:** SEO content skill + Remotion in one prompt; install Remotion via their free GitHub repo; learn from DTC ad creative; Facebook ad library for frameworks; Nano Banana Pro for statics; Glyph MCP to reach image/video models; iteration ("ping-pong") expected; testing-machine mindset.
- **Step-by-step:**
  1. Get Remotion's free GitHub repo link (from their X post) and paste it into Claude Code to install packages.
  2. Prompt for a video ad in your brand style; expect to iterate.
  3. For statics, study Facebook ad library frameworks, then generate variations with Nano Banana Pro (via Glyph MCP) using a prompt-generation skill.
  4. Generate many landing-page and ad variations to test.
- **Apply to Joshua's products:** Joshua can generate test ad variations for Simply Pray at near-zero cost. Borrow *structure/hooks* from high-performing ads but keep content reverent and honest (compliance/trust niche). Note: paid ads may be premature pre-launch — the higher-value move for Joshua now is organic (SEO content + a few statics for the waitlist), not large paid spend.
- **Tools/resources mentioned:** SEO content skill, Remotion (free GitHub repo), Facebook ad library, Nano Banana Pro, Glyph (MCP), DTC ad skill.
- **Action checklist:**
  - [ ] Install Remotion from its GitHub repo.
  - [ ] Generate one Simply Pray static + one short video, keeping the tone pastoral.
  - [ ] Hold off on meaningful paid spend until launch/waitlist traction justifies it.

### 19. Final Ad and SEO Page Review (54:47-57:25)
- **Summary:** They open the generated assets: a basic animated ad plus a **square variation and a vertical video** (landscape also available), and an **SEO-optimized page** on the website built from Claude Code's keyword research. James likes that the SEO page integrated the lead magnet — so a search like "HVAC in Phoenix / HVAC marketing for Phoenix" could surface it. He's careful to set expectations: there's still real work to get pages indexed, make them genuinely good, and build links — "I don't want to make it sound like all you have to do is create this stuff and start showing up in Google." But producing high-quality, search-targeted content is a step you should definitely do. He shows the polished "Boring Money" video again (made by going back and forth ~30 min with the Remotion GitHub file) as proof iteration pays off.
- **Key concepts:** Multiple ad formats (square/vertical/landscape); SEO page with embedded lead magnet; local-search targeting; honest caveat — indexing, quality, and links still take work; iteration produces ad-campaign-ready creative.
- **Step-by-step:**
  1. Generate the SEO page from keyword research and embed the lead magnet.
  2. Generate ad format variations (square, vertical, landscape).
  3. Do the real SEO follow-through: get indexed, improve quality, build links.
- **Apply to Joshua's products:** For The Wisdom Walk, generate SEO pages with an embedded Simply Pray waitlist lead magnet, targeting faith search terms. Heed James's honesty: ranking takes ongoing work (indexing, quality, links) — set realistic expectations given Joshua's 2-5 hrs/week. Local angle could apply to HopeStack (counseling centers by region).
- **Tools/resources mentioned:** Remotion, SEO content/keyword research skills.
- **Action checklist:**
  - [ ] Publish one Wisdom Walk SEO page with an embedded waitlist lead magnet.
  - [ ] Plan the follow-through (submit for indexing, improve, earn a few links) — not just publish-and-forget.

### 20. Final Thoughts (57:25-58:41)
- **Summary:** James lists the next steps he'd take: create an email sequence and deploy everything onto **Vercel** (or similar). He reiterates he recorded himself doing this for two hours and compiled the thought processes, frameworks, prompts, and how to create useful skills into the free playbook for listeners, hoping it helps them action this in their own companies. Greg thanks him, says he'll put the link in the show notes/description, and closes the episode.
- **Key concepts:** Next steps = email sequence + deployment (Vercel); the free playbook as the takeaway; encouragement to get hands dirty.
- **Step-by-step:**
  1. Build the email nurture sequence.
  2. Deploy the funnel (e.g., Vercel).
  3. Grab the free playbook and replicate the process.
- **Apply to Joshua's products:** Joshua's immediate "next steps" mirror James's: build a short, gentle email welcome sequence for the Simply Pray waitlist and deploy the landing page (Vercel fits his stack/budget). Download the free Vibe Marketing Playbook and Skills as starting templates, then re-tone for ministry.
- **Tools/resources mentioned:** Vercel; the free Vibe Marketing Playbook and Vibe Marketing Skills (links in Companion section).
- **Action checklist:**
  - [ ] Draft a 3-5 email welcome sequence for the Simply Pray waitlist (AI drafts, Joshua approves).
  - [ ] Deploy the landing page (Vercel).
  - [ ] Download the free playbook and skills and adapt them to the faith niche.

---

## How to apply this whole video to Solomon Solutions

1. **Research-first, every time (kills the "AI slop" problem).** Before writing a single line of Simply Pray or HopeStack copy, do a real research pass with a research MCP (Perplexity or equivalent) on competitors, positioning gaps, and audience language. Save it as a reusable context file. This is the highest-leverage habit in the whole video and it's free.

2. **Run the full funnel inside one Claude Code Max plan ($200/mo).** One subscription covers research → positioning → copy → landing page → lead magnet → SEO content → ad creative across all five products, well within the ~$1,000/month budget and the 2-5 hrs/week (AI drafts, Joshua approves). Map it to: **Simply Pray** (priority — waitlist landing page + a "prayer-life check" tool lead magnet + welcome emails), **The Wisdom Walk** (SEO content hub feeding all products), **HopeStack** (B2B landing page + readiness-checklist lead magnet, compliance-careful), **Heartward** (Q&A sampler lead magnet), **Solomon Solutions consulting** (landing page driving the free 30-min strategy call).

3. **Build skills that encode Joshua's real expertise — that's the moat.** James's key claim: the "last 10-20% expert perspective" is what generic AI can't copy. Joshua's pastoral + engineering knowledge is genuinely rare. Build positioning, copy, and lead-magnet skills seeded with faith-sector references and a humble, trustworthy tone (not hype) so output respects his compliance- and trust-sensitive niche.

4. **Lead magnets as interactive tools, gated to seed the first email list.** Joshua has no list yet. A scored self-assessment (prayer-life check for Simply Pray; intake/tech-readiness check for HopeStack) delivers value first, captures the email second, and starts the list ethically — replacing a paid Tally/Typeform setup.

5. **Use a free, simple stack and stay organic-first.** Perplexity + Firecrawl + Playwright (free/cheap), Anthropic's front-end design skill (no AI-looking pages), Remotion ($0 video ads), Nano Banana Pro/Canva for statics, Vercel to deploy. Given pre-launch status and budget, lean on organic SEO (The Wisdom Walk) and a waitlist now; defer meaningful paid spend until there's launch traction.

---

## Honesty notes

- **Transcript is complete and used throughout.** ~10,268 words of real, deduplicated captions; every section summary is grounded in the transcript text near its timestamp. Nothing in the summaries/steps was invented.
- **No setup tutorials are in the video.** James explicitly says he "won't talk about how to set up" the Perplexity MCP, and gives no step-by-step install for Firecrawl, Playwright, skills, or Glyph. The "step-by-step" entries reflect only what he actually narrated, not full installation guides. Treat them as workflow outlines, not configuration manuals.
- **The Remotion GitHub link is not a literal URL in the description.** James repeatedly points to "search Remotion on X" / "their free GitHub repo/gist," but no direct Remotion URL appears in the description or transcript, so none is listed as a hard link.
- **Some product/tool names are spelled as heard.** "Nano Banana Pro," "Glyph," "Whisper Flow," "Narrate," "Firecrawl Agent," and the "ACP"/"how you think with ACP" aside (~15:01) are transcribed from speech; the ACP reference is unclear in context and was not over-interpreted.
- **The description's timestamp list has a duplicate** (34:10 appears twice: "Lead Magnet Skill" and "Are Skills Underrated"). The official chapters array lists only "Lead Magnet Skill" at 34:10, so section 13 covers both, with the "are skills underrated" discussion folded in where it actually occurs in the transcript.
- **Pre-launch caution for Joshua is editorial, not from the video.** The video's example is an agency selling to local trade businesses. The mappings to Simply Pray/HopeStack/Heartward/The Wisdom Walk and the "defer paid ads until launch" guidance are applied by me to respect Joshua's stated constraints (pre-launch, no list, organic-first, compliance-sensitive); they are not claims made by James or Greg.
- **Pricing/figures cited are from the video as spoken:** Claude Code Max $200/month; traditional agency comparison ($15-25k / 6-8 weeks vs. "Boring Money" 5 days); James "$100M+ on ads"; "17 skills"; "$2-10M revenue" target businesses. These are the creators' statements, not independently verified.
