# Claude Code Built My ENTIRE Marketing Team!

- **Creator:** Duncan Rogoff | Learn Claude Code
- **URL:** https://www.youtube.com/watch?v=ILmwmgMcCnc
- **Published:** 2026-03-30
- **Duration:** 12:08
- **Source:** Real captions downloaded via yt-dlp and deduplicated (transcript ~2,814 words). Nothing has been invented; every summary is grounded in the transcript text near the cited timestamps.

---

## TL;DR

- A single growth marketer (Austin Lough) reportedly ran the entire marketing team at Anthropic for 10 months without ever having written code, by building a Claude Code "skill" called `/RSA` (Responsive Search Ads) that ran paid search, paid social, email, and SEO from one place. The article cited claims creation time dropped from 30 minutes to 30 seconds.
- The video walks you through copying that pattern to build a personal-brand **content system**: a `/content` skill where one **orchestrator** reads your brand + voice context, spawns format-specialized **sub-agents** (LinkedIn, email subjects, video hooks), and assembles upload-ready copy from a single topic.
- The foundational work happens in **Claude Chat first**: you prompt Claude (or ChatGPT) to "clone yourself" into a data packet (name, business, audience, offer, content pillars) and to extract a **tone-of-voice guideline**, then download both as markdown into a working folder.
- A "skill" is explained for beginners as a more advanced system prompt: system prompt + knowledge base, but with the added ability to run code/scripts and take action. You invoke it by typing `/` plus the skill name.
- The system is built inside Claude Code (in the desktop app), using Sonnet 4.6 and plan mode, then tested live by feeding it an article and getting back five LinkedIn posts, email subject lines, and video hooks in the creator's own voice.

---

## Companion links & resources

- **Learn Claude Code community (Skool), $9:** https://www.skool.com/claudecodeclub/ (named in the description as "Learn Claude Code. Only $9.")
- The creator repeatedly says the files and prompts built in the video are "available for you at the link in the description" and points to his community **The Build Room** — but no separate download URL beyond the Skool link above appears in the description.

Beyond the single Skool URL, no other affiliate links, template URLs, or downloadable file links are present in the description.

---

## Sections

### 1. How to Build an AI Marketing Team (0:00-0:50)
- **Summary:** The video opens with the hook that Anthropic's entire marketing team was run by one single person for 10 months, and promises to use what he learned to build "your very own personal marketing team." The creator then jumps to a quick preview: he copies a link, hands it to Claude, and Claude produces a full LinkedIn post, email subject lines, and video hooks. He notes you can later expand the skill to write full email bodies and full 60-second short-form video scripts just by asking Claude.
- **Key concepts:** One-person marketing team; building a personal marketing team with Claude; expandable skills.
- **Step-by-step:** (1) Copy a link/source. (2) Give it to Claude. (3) Get back a LinkedIn post + email subject lines + video hooks. (4) Optionally tell Claude to expand the skill (email bodies, 60-second video scripts).
- **Apply to Joshua's products:** This is the demo promise, not yet a step. For **Simply Pray** (pre-launch), the equivalent "single source" you'd hand the system is your waitlist/landing page or the ACTS method explainer; the output would be a faith-sensitive LinkedIn post + email subject lines for a launch list you have not yet built. Keep the "expand later" mindset: start narrow (one format), grow once it works.
- **Tools/resources mentioned:** Claude / Claude Code (by implication).
- **Action checklist:**
  - [ ] Decide the ONE content format you most need first (likely email or LinkedIn for consulting).
  - [ ] Identify one "source" you'd hand to the system as a test (e.g., a Wisdom Walk article).

### 2. What You'll Build Today (0:50-1:00)
- **Summary:** The creator states the deliverable: by the end you'll have a working content system that knows your brand voice, tone, offer, and rules. It includes two agents (one to write hooks, one to write body copy), an orchestrator agent that routes everything where it needs to go, and a final live run with a single prompt to test end to end.
- **Key concepts:** Content system; brand voice / tone / offer / rules; two writing agents; orchestrator agent; single-prompt end-to-end test.
- **Step-by-step:** Understand the four pieces you're assembling — (1) brand/voice/offer/rules context, (2) a hooks agent, (3) a body-copy agent, (4) an orchestrator to route — plus a single-prompt test.
- **Apply to Joshua's products:** "Rules" matters most for the faith/ministry niche. Bake compliance and trust into the brand file from the start: e.g., Simply Pray must not over-promise spiritual outcomes; HopeStack copy must respect HIPAA-aligned, B2B-appropriate language and avoid clinical claims. The orchestrator is where you can enforce "never say X."
- **Tools/resources mentioned:** none (conceptual overview).
- **Action checklist:**
  - [ ] Write a one-paragraph "rules" list per product (claims to avoid, tone to keep).
  - [ ] Note which two writing tasks you'd want agents for (hooks vs. body copy).

### 3. The Austin Lough Story (1:00-1:43)
- **Summary:** The creator introduces Austin Lough (spelled "Lau" in the auto-transcript), a growth marketer at Anthropic. He references an article saying the team cut creation time from 30 minutes to 30 seconds with Claude Code. He emphasizes that Austin had never written a single line of code before joining, yet ran the marketing of a $380 billion company by himself, covering paid search, paid social, email, and SEO. The creator says he wants to take those strategies and apply them to a personal content system in Claude Code.
- **Key concepts:** Growth marketer; "30 minutes to 30 seconds" claim; non-coder using Claude Code; four channels (paid search, paid social, email, SEO).
- **Step-by-step:** No build steps here — this is the origin/justification for the approach.
- **Apply to Joshua's products:** The relevant lesson for a solo founder on 2-5 hrs/week is leverage: a non-coder built a repeatable system once, then ran it fast. For Joshua, the "build once" investment is the brand/voice/rules files per product; after that, drafting consulting outreach or Wisdom Walk posts becomes a single command he approves.
- **Tools/resources mentioned:** Claude Code; the referenced Anthropic/Austin Lough article (not linked in the description).
- **Action checklist:**
  - [ ] Treat the setup files as a one-time investment, not recurring work.
  - [ ] Pick the highest-leverage channel for Solomon Solutions first (likely email + SEO/content via The Wisdom Walk).

### 4. How the RSA Skill Architecture Works (1:43-2:18)
- **Summary:** The creator explains the problem that prompted Austin's solution: running the whole marketing team meant "a million tabs open" across "a million different applications." Austin's answer was the `/RSA` skill — RSA standing for Responsive Search Ads — so he could run paid search, paid social, email, and SEO all from a single place. The creator clarifies that "command" or "/command" just means typing `/` plus a skill name inside Claude.
- **Key concepts:** RSA = Responsive Search Ads; consolidating tools into one skill; the `/` slash-command pattern.
- **Step-by-step:** (1) Recognize the "too many tabs/apps" problem. (2) Consolidate the workflow into one skill. (3) Invoke it with `/<skill-name>`.
- **Apply to Joshua's products:** Joshua's "million tabs" risk is juggling five products' marketing solo. A single `/content` (or per-product) skill that already knows the right voice and rules collapses that overhead — especially useful given the 2-5 hrs/week budget.
- **Tools/resources mentioned:** Claude (slash commands).
- **Action checklist:**
  - [ ] List every app/tab you currently touch to publish one piece of content.
  - [ ] Note which of those a single Claude skill could replace.

### 5. How to Use Claude Code Skills (2:18-2:47)
- **Summary:** The creator describes where skills can run: inside Claude Code in the terminal "if you're a little bit more advanced," or inside the desktop app. He reassures beginners not to get overwhelmed by the concept of skills.
- **Key concepts:** Running skills in the terminal vs. the desktop app; beginner reassurance.
- **Step-by-step:** Choose your environment — terminal (advanced) or desktop app (beginner-friendly). The rest of the video uses the desktop app.
- **Apply to Joshua's products:** As a software engineer, Joshua can use the terminal comfortably; but for fast, low-friction marketing drafts the desktop app is fine and keeps the marketing workflow separate from dev work.
- **Tools/resources mentioned:** Claude Code (terminal and desktop app).
- **Action checklist:**
  - [ ] Decide: terminal or desktop app for marketing skills (desktop app is simplest).

### 6. Skills vs. Custom GPTs Explained (2:47-3:49)
- **Summary:** The creator gives the clearest beginner definition: think of a skill like a more advanced system prompt. In a custom GPT or Claude project you have a system prompt (tells the system what to do and how to behave) and a knowledge base (the context the system prompt pulls from). Skills in Claude Code work similarly but go one step further: they can also write code or scripts so they can build things, create websites, and take action on your behalf. He then describes how RSA works for Austin: it takes brand voice, existing copy, and keywords, feeds them into the orchestrator, which produces 15 headline options, 4 description options, and an upload-ready CSV for paid marketing — all from a single topic.
- **Key concepts:** Skill = advanced system prompt; system prompt + knowledge base; skills can run code/take action; orchestrator output (15 headlines, 4 descriptions, upload-ready CSV from one topic).
- **Step-by-step:** (1) System prompt defines behavior. (2) Knowledge base provides context. (3) Skill adds the ability to act/run code. (4) Orchestrator turns one topic into structured, ready-to-use outputs.
- **Apply to Joshua's products:** Map this directly. Knowledge base = Joshua's brand/voice/offer files per product. System prompt = the skill instructions ("write in this voice, follow these rules"). The "action" upgrade could later auto-format outputs (e.g., a CSV of email subject lines for The Wisdom Walk newsletter once a list exists). Don't enable real publishing actions for faith content until a human-approval step is locked in.
- **Tools/resources mentioned:** Custom GPTs, Claude projects, Claude Code skills.
- **Action checklist:**
  - [ ] Write your "system prompt" sentence: voice + rules for one product.
  - [ ] Decide what counts as your "knowledge base" files (brand, tone, offer).

### 7. How to Start in Claude Chat (3:49-4:23)
- **Summary:** The creator says he wants to build something like RSA but targeted at individual/personal-brand growth. He moves into Claude (Claude Chat) because he first needs to extract two things: tone-of-voice guidelines and information about you, your audience, and your offer. He notes everything can be done with just a couple of prompts.
- **Key concepts:** Start in Claude Chat; two extractions (tone of voice; you/audience/offer); few-prompt workflow.
- **Step-by-step:** (1) Open Claude Chat. (2) Plan to extract tone-of-voice guidelines. (3) Plan to extract audience/offer/personal info.
- **Apply to Joshua's products:** Run the chat-extraction once per distinct voice. Solomon Solutions (consulting) and The Wisdom Walk likely share Joshua's pastoral voice; Simply Pray and HopeStack may need their own product-level "offer" facts (pricing tiers, pre-launch status) layered on top.
- **Tools/resources mentioned:** Claude Chat.
- **Action checklist:**
  - [ ] Open Claude Chat and confirm it has memory of prior conversations with you.
  - [ ] List the products that share one voice vs. need separate offer facts.

### 8. How to Clone Yourself with AI (4:23-5:32)
- **Summary:** The creator's first instruction is to "clone yourself" — create a data packet of everything the system already knows about you: name, business, projects, goals, how you communicate, audience, offer, content pillars. He calls this the foundation and says it sets you up for everything you build in the future, not just today. He shares a "clone yourself" prompt, but says if you don't have it you can simply ask Claude to interview you ("ask me a bunch of questions about my audience, offer, and business... create a comprehensive data packet"). He pastes the prompt into Claude Chat; the system searches its memory to build the packet. He adds a reflection: with Claude Code you need to think through the process first, because most of the work is in the foundational setup, then the final product comes together quickly.
- **Key concepts:** "Clone yourself" data packet; foundation/context packet; the interview fallback prompt; front-loaded setup.
- **Step-by-step:** (1) Use the "clone yourself" prompt OR ask Claude to interview you. (2) Have it compile name, business, projects, goals, communication style, audience, offer, content pillars into one packet. (3) Let it search its memory to fill the packet.
- **Apply to Joshua's products:** This is the single highest-value step for Joshua. Build one master "founder data packet" (pastor + software engineer, solo founder, faith/ministry niche, organic-first, ~$1,000/mo budget) plus the five-product ecosystem facts. Because he's a marketing beginner, the interview fallback is ideal — let Claude ask the questions. Note prelaunch/waitlist status for Simply Pray and HopeStack explicitly so generated copy never implies they're live.
- **Tools/resources mentioned:** Claude Chat; the creator's "clone yourself" prompt (in his community).
- **Action checklist:**
  - [ ] Run the interview prompt and answer honestly about audience + offer.
  - [ ] Explicitly record each product's live/pre-launch status and pricing in the packet.
  - [ ] Add the faith-niche guardrails (trust-driven, compliance-sensitive) to the packet.

### 9. How to Extract Tone of Voice (5:32-6:09)
- **Summary:** While the data packet "cooks," the creator moves to tone of voice: how you write, how you speak, words you use, things you avoid, how you address your audience. He shares "a really long prompt to get your tone of voice guidelines." As an alternative, he says you can gather transcripts of anything you've written — LinkedIn posts, YouTube videos, TikToks, emails, blogs — and feed them to Claude with the instruction: "extract tone of voice guidelines for me based on how I like to communicate."
- **Key concepts:** Tone-of-voice guidelines; words you use vs. avoid; using your existing content as training material.
- **Step-by-step:** (1) Use the tone-of-voice prompt, OR (2) gather your existing writing (posts, transcripts, emails, blogs). (3) Ask Claude to extract tone-of-voice guidelines from it.
- **Apply to Joshua's products:** Joshua has a real corpus advantage — sermons and Wisdom Walk articles are ideal source material for an authentic pastoral tone-of-voice file. Feed those in rather than relying only on chat memory. Capture "words to avoid" carefully for the ministry context (e.g., avoid hype/sales clichés that erode trust).
- **Tools/resources mentioned:** Claude; the creator's tone-of-voice prompt.
- **Action checklist:**
  - [ ] Collect 5-10 of your best sermons/articles/emails as voice samples.
  - [ ] Run the tone-of-voice extraction and review the "avoid" list for faith-fit.

### 10. How to Save Your Brand Files (6:09-7:46)
- **Summary:** The creator shows the data packet Claude produced — his professional background, business ecosystem, and how he runs his AI agency — and says he'll save it into a folder the system can access. He downloads it in markdown format and saves it into the "demo folder" he's working in. He repeats the process for tone of voice, generating a full "tone of voice kit" (core voice principles, how he likes to speak) and saving it to the same folder. He then mentions one more piece: inside his community he has a file of a thousand viral hooks ("a giant text file of literally a thousand proven hooks"). He says you can find hooks anywhere and don't need his, but he adds his hooks file to the folder so the system can "remix these for us."
- **Key concepts:** Saving brand files as markdown; a shared working folder the system can read; tone-of-voice kit; a viral-hooks reference file.
- **Step-by-step:** (1) Download the data packet as markdown. (2) Save it into your working folder. (3) Download the tone-of-voice kit as markdown into the same folder. (4) Add a hooks reference file to the same folder.
- **Apply to Joshua's products:** Create one folder (e.g., a Solomon Solutions marketing folder) holding: founder data packet, pastoral tone-of-voice kit, per-product offer notes, and a hooks file. For the faith niche, curate hooks carefully — generic viral hooks can read as manipulative; favor curiosity/serving-framed hooks that fit a trust-driven audience. NOTE: per Joshua's memory, this repo lives under iCloud Documents where " 2" duplicate files can cause issues; keep the marketing folder tidy and avoid duplicate copies.
- **Tools/resources mentioned:** Markdown download from Claude; the creator's "thousand viral hooks" text file (in his community).
- **Action checklist:**
  - [ ] Create one working folder for marketing brand files.
  - [ ] Save the data packet + tone-of-voice kit as markdown there.
  - [ ] Build a small, faith-appropriate hooks file (don't blindly use generic viral hooks).

### 11. How to Build the Orchestrator Agent (7:46-9:22)
- **Summary:** The creator says he now has everything to build the orchestrator agent and the skill file callable with a single `/` command. He opens Claude Code inside the desktop app, creates a new session, and selects the working folder at the bottom so it can access the saved files. He chooses Sonnet 4.6 and starts in plan mode to see how Claude thinks before building. He copies the paragraph about the RSA skill from the article ("pull from what already exists"), pastes it into Claude Code, and types his request: build a `/content` skill in the demo folder based on the RSA skill, noting the folder already has brand guidelines, tone-of-voice guidelines, and viral hooks; the goal is to write content (email, LinkedIn, video scripts) from a single command. Claude Code returns a plan: a `/content` command modeled on RSA — the orchestrator reads brand and voice context, spawns format-specialized sub-agents, and assembles an upload-ready output; input is a topic, output is a full copy bank (LinkedIn post, email subjects, video hooks) in his voice, plus an example output format. He approves with "I approve this plan. Get to work."
- **Key concepts:** Selecting the working folder so the model has file access; Sonnet 4.6; plan mode; building from an existing example; orchestrator + format-specialized sub-agents; topic-in / copy-bank-out.
- **Step-by-step:** (1) Open Claude Code in the desktop app, new session. (2) Select your working folder at the bottom. (3) Choose Sonnet 4.6. (4) Turn on plan mode. (5) Paste the RSA reference paragraph for context. (6) Prompt: build a `/content` skill based on RSA using the brand, tone, and hooks files in the folder. (7) Review the plan. (8) Approve: "I approve this plan. Get to work."
- **Apply to Joshua's products:** This is the build step. Joshua should describe the orchestrator's routing rules with his guardrails embedded ("read brand + tone files; never imply Simply Pray/HopeStack are live; keep a human-approval step"). Plan mode is valuable here precisely because he's a beginner-marketer but an experienced engineer — he can vet the plan before any files are written.
- **Tools/resources mentioned:** Claude Code (desktop app); Sonnet 4.6; plan mode; the RSA article paragraph.
- **Action checklist:**
  - [ ] Open Claude Code, new session, and select your marketing folder.
  - [ ] Use plan mode and read the proposed `/content` plan before approving.
  - [ ] Add your compliance/approval rules to the build prompt.

### 12. How to Run the Content Skill (9:22-10:33)
- **Summary:** The creator reports Claude Code built the system architecture in a couple of minutes. The instructions say: type `/content` anywhere; it reads your context packet and tone file, spawns all three agents in parallel (LinkedIn post, email subjects, video hooks), and assembles the copy. He stresses this is just the beginning — if you create for other platforms, you can build separate sub-agents now that you understand how it works (his example: "I'm also creating content for YouTube... create a sub-agent for YouTube to help me write YouTube intros").
- **Key concepts:** `/content` invocation; reads context + tone files; three parallel sub-agents; extensible sub-agents per platform.
- **Step-by-step:** (1) Type `/content` anywhere. (2) It reads your context packet + tone file. (3) It spawns the three agents in parallel. (4) It assembles the copy. (5) Optionally ask Claude to add new sub-agents for other platforms.
- **Apply to Joshua's products:** Start with the three default formats, then add a sub-agent for the format that matters most to a specific product — e.g., a "sermon-to-Wisdom-Walk-article" sub-agent, or a "Simply Pray waitlist email" sub-agent. Extensibility keeps weekly effort low: build a new sub-agent once, reuse it forever.
- **Tools/resources mentioned:** Claude Code skill (`/content`); sub-agents.
- **Action checklist:**
  - [ ] Run `/content` once on a safe test topic.
  - [ ] Decide the first extra sub-agent to add (e.g., Wisdom Walk article or waitlist email).

### 13. How to Test Your System Live (10:33-11:49)
- **Summary:** To run the new skill in the desktop app, the creator must restart (quit and relaunch) Claude. After restarting, typing `/` brings up the commands and he searches for and selects "content." He grabs an Anthropic article ("what 81,000 people want from AI") by copying its link and hands it to Claude, asking it to write LinkedIn, email, and hooks tailored to his audience and tone. Claude searches the web, then spawns the LinkedIn, email-subject, and video-hook sub-agents in parallel. The output: a full LinkedIn post ("I closed a $15,000 a month client using only organic LinkedIn content..."; "Anthropic just surveyed 80,508 people. The number one thing they want from AI, automate routine tasks."), five posts total, email subject lines, and video hooks (e.g., "I built a six-figure AI automation agency using the exact thing 80,000 people just told Anthropic they want most"). He reiterates you can expand the skill to write full email bodies and full 60-second short-form video scripts by simply asking Claude.
- **Key concepts:** Restart required to load a new skill; selecting the skill via `/`; feeding a source link; web search + parallel sub-agents; five posts + subjects + hooks output; expanding the skill on request.
- **Step-by-step:** (1) Quit and relaunch the Claude desktop app. (2) Type `/` and select "content." (3) Provide a source (e.g., an article link). (4) Ask for LinkedIn, email, and hooks in your audience/tone. (5) Let it search the web and spawn sub-agents in parallel. (6) Review the copy bank. (7) Ask Claude to expand (email bodies, 60-second scripts) if needed.
- **Apply to Joshua's products:** For the live test, hand it a Wisdom Walk article or a Simply Pray explainer rather than a hype/income-claim source — the demo's "$15,000/month client" style hooks are exactly the kind of claim Joshua's trust-driven audience would reject. Always keep a human-approval pass before anything publishes, and verify generated stats against the actual source (the transcript itself shows a number stated two ways: "81,000" vs "80,508" vs "80,000").
- **Tools/resources mentioned:** Claude desktop app; the `/content` skill; the referenced Anthropic article.
- **Action checklist:**
  - [ ] Restart the desktop app after building, then select `/content`.
  - [ ] Run a live test with a faith-appropriate source.
  - [ ] Fact-check every number/claim in the output before approving.

### 14. Join The Build Room (11:49-12:08)
- **Summary:** The closing call to action. The creator says that if you made it this far, you understand AI tools like Claude Code matter for growing your personal brand, audience, and business. He invites viewers to his community, The Build Room, where he goes deep on this strategic thinking and tools, and points to the link in the description.
- **Key concepts:** Community CTA (The Build Room).
- **Step-by-step:** No build steps — promotional close.
- **Apply to Joshua's products:** Optional. The $9 Skool community could be a low-cost way for a marketing beginner to learn the patterns, but it's not required to implement what the video already teaches. It fits within the ~$1,000/mo budget if Joshua finds it useful.
- **Tools/resources mentioned:** The Build Room community (Skool link in description).
- **Action checklist:**
  - [ ] Decide whether the $9 community is worth it after building the system yourself.

---

## How to apply this whole video to Solomon Solutions

1. **Build the "founder data packet" once — it's the foundation for all five products.** This is the single highest-leverage move (sections 8-10). Capture Joshua's identity (pastor + software engineer, solo founder), the faith/ministry niche guardrails (trust-driven, compliance-sensitive), the ~$1,000/mo organic-first constraint, and per-product offer facts. Critically, record live vs. pre-launch status: Simply Pray and HopeStack are NOT live (waitlist/beta), so generated copy must never imply otherwise.

2. **Extract a real pastoral tone of voice from existing work, not just chat memory.** Joshua's sermons and The Wisdom Walk articles are excellent source material (section 9). Curate the "words to avoid" list to strip sales-hype clichés that would erode trust in a ministry audience — the demo's "$15,000/month client" hook style is the opposite of what his niche wants.

3. **Build one `/content` orchestrator with compliance and human-approval baked in.** Mirror Austin's RSA pattern (sections 11-12): orchestrator reads brand + tone files, spawns format sub-agents, assembles a copy bank. Add explicit rules in the build prompt (no false "live" claims, HIPAA-aligned language for HopeStack, no over-promised spiritual outcomes for Simply Pray, always require Joshua's approval). This respects his 2-5 hrs/week model: AI drafts, he approves.

4. **Start with the channels that fit organic-first, no-audience-yet reality.** He has no list/social yet, so prioritize SEO/content via **The Wisdom Walk** (article sub-agent) and consulting outreach for **Solomon Solutions** (the free 30-min strategy call is the natural offer/CTA). Build waitlist-email sub-agents for Simply Pray and HopeStack so content is ready the moment those lists exist.

5. **Extend with one sub-agent at a time, and always fact-check.** Add a "sermon-to-article" or "waitlist email" sub-agent only after the core works (section 12). Verify every statistic and claim against the source before publishing — the transcript itself shows the same survey number stated three different ways, a reminder that AI-generated copy needs human verification, especially in a compliance-sensitive niche.

---

## Honesty notes

- **Name spelling:** The auto-generated transcript renders the marketer as "Austin Lau." The video description's summary names him "Austin Lough." I used "Lough" as the likely correct spelling and flagged the transcript variant.
- **Inconsistent survey number:** The transcript states the Anthropic survey figure three ways — "81,000 people," "80,508 people," and "80,000 people." I reproduced what was said without resolving which is correct; treat the exact figure as unverified.
- **External claims not independently verified:** The "ran Anthropic's marketing for 10 months solo," "$380 billion company," and "30 minutes to 30 seconds" figures are repeated as stated in the video/description. They originate from a referenced article that is described but not linked in the description, so they are not independently confirmed here.
- **Links:** The only real URL in the description is the Skool community link (https://www.skool.com/claudecodeclub/). The creator repeatedly says files/prompts are "at the link in the description," but no separate file-download URL is present. The specific prompts ("clone yourself," tone-of-voice) and the "thousand viral hooks" file are gated behind his community, not provided in the video.
- **Chapter alignment:** Chapter timestamps are taken verbatim from the metadata; the final chapter end (12:08) uses the video duration. Section summaries are grounded in the nearest transcript text, which generally tracks the chapters but occasionally overlaps boundaries (e.g., the data-packet result is shown at the start of the "Save Your Brand Files" chapter).
- **Software details:** The model named is "Sonnet 4.6" and the build is done inside the Claude desktop app with a restart required to load the new skill — both stated explicitly in the transcript and reported as-is.
