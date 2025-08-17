# Personal Portfolio Slider V2

## TL;DR
A keyboard-first, timeline-based portfolio experience that tells Michael's story through milestone slides with optional course "intermezzo" inserts. Visitors can navigate linearly or jump via a visible timeline, quickly access LinkedIn at all times, and download the resume on the final slide. Designed to lock in structure first, it prioritizes clarity, storytelling, and fast evaluation by recruiters and collaborators.

## Goals

### Business Goals
- **Achieve a 50%+ completion rate** of the story (from first slide to final slide) within 30 days of launch
- **Generate at least 20 qualified contacts** via email clicks within 60 days
- **Attain a 25% resume download rate** among visitors who reach the final slide
- **Reach a 40% LinkedIn click-through rate** among new visitors

### User Goals
- **Understand Michael's career trajectory** and impact quickly via a clear milestone timeline
- **Skim or deep-dive** by jumping to relevant moments (e.g., insurance app design, energy cooperative) without friction
- **Download a resume and view LinkedIn** with one click
- **Contact Michael easily** through a clear email CTA

## User Stories

### Personas
- **Recruiter**
- **Hiring Manager/Agency Lead**
- **Peer Collaborator**
- **Michael (Owner/Admin)**

### Recruiter
- **As a Recruiter**, I want to skim highlights and jump to relevant milestones, so that I can assess fit in under 3 minutes
- **As a Recruiter**, I want to download the resume at the end, so that I can share it internally
- **As a Recruiter**, I want to access LinkedIn anytime, so that I can verify experience quickly

### Hiring Manager / Agency Lead
- **As a Hiring Manager**, I want to see measurable outcomes (e.g., campaign results, user ratings), so that I can evaluate impact
- **As a Hiring Manager**, I want to see methods used (workshops, discovery, usability tests), so that I can gauge process maturity
- **As a Hiring Manager**, I want to contact Michael via email, so that I can start a conversation immediately

### Peer Collaborator
- **As a Peer**, I want to explore the story chronologically, so that I can understand Michael's growth and focus
- **As a Peer**, I want to jump between milestones and their related course intermezzos, so that I can assess depth of learning

### Michael (Owner/Admin)
- **As Michael**, I want to maintain the story content and timeline order, so that I can update milestones quickly
- **As Michael**, I want to add/edit course intermezzos, so that I can reflect new learnings over time

## Functional Requirements

### Navigation & Controls (Priority: P0)
- **Keyboard Navigation**: Left/Right arrows (and optional A/D), Space to advance, Home/End to jump to first/last slide
- **Photo on Intro**: Michael's photo appears on the first slide

### Courses Intermezzo (Priority: P0)
- **Intermezzo Slides**: Optional course summary slide appears after each milestone (toggleable per milestone)
- **Compact Format**: Course titles, provider, and brief takeaway (scannable)

### Resume & LinkedIn (Priority: P0)
- **Persistent LinkedIn Link**: Always visible in header/footer
- **Resume CTA**: Persistent button anchors user to the final slide where the actual download button lives (satisfies "visible always, download at end")
- **Resume Download**: Final slide includes a direct download link to a PDF

### Contact (Priority: P0)
- **Email CTA**: Persistent "Contact" link (mailto) visible at all times and reiterated on final slide

### Deep Linking & State (Priority: P1)
- **Slide Deep Links**: Each slide has a shareable URL hash (e.g., /#slide-7)
- **Progress Memory**: Optional local storage to remember last viewed slide

### Accessibility & Internationalization (Priority: P1)
- **Full Keyboard Support**: Focus states, ARIA roles for slider, timeline, and controls
- **Reduced Motion**: Respect user prefers-reduced-motion
- **High Contrast**: Meet WCAG AA color contrast
- **Copy Structure**: Ready for future translation (single locale at launch)

### Performance & Analytics (Priority: P1)
- **Lightweight Assets**: Lazy-load images; prefetch next slide
- **Analytics Events**: Track slide views, jumps, resume and LinkedIn clicks, email clicks

### Enhancements (Priority: P2)
- **Subtle Transitions**: Simple fade/slide between milestones
- **Theming**: Light/dark mode toggle

## Story Content Inventory

*Note: Do not change copy, use it as is*

### Slide 1
- **Headline**: Get ahead. Get Michael
- **Subheadline**: PRODUCT & DISCOVERY PERSON
- **Description**: Product enthusiast eager to learn and create impactful digital products. I am looking for a new challenge and a new opportunity to grow.
- **Question**: What have I achieved so far?
- **CTA**: 'Explore my journey'

---

### Slide 2 – The beginning of my journey
- **Quote**: "2018. I'm standing on the streets of Prague, talking to strangers and fundraising for Doctors without borders. Why? Because I want to work on things that truly impact society."
- **Skills**: Empathy, Active listening, Interviewing
- **Outcomes**: Hundreds of leads, tens of regular donors

### Slide 3 – First big success (2018)
- **Quote**: "I organize a campaign that exceeds its target by nearly 60%. First thought: wow, online fundraising can really move things forward."
- **Skills**: Campaign optimization, copywriting, targeting audiences, stakeholder management
- **Outcomes**: Achieved 160% of fundraising goal, Built trust with stakeholders, Validated digital as a strong channel

### Slide 4 – Building my first websites (2019)
- **Quote**: "I join Hnutí DUHA – Friends of the Earth. Energy campaigns, my first websites, and the initiative Venkov v balíku – accomplished to gain support from 5 000 people and 100 regular donors."
- **Skills**: Website design (Figma, Drupal), Content management, Emailing, Copywriting
- **Outcomes**: 100 regular donors in 2 years, 5 000 signatures

### Slide 5 – Helping mayors to develop renewables (2021)
- **Quote**: "Hundreds of mayors want to develop renewable energy, but the barriers are high. Together with the team, we create a simple website with a member section and open-access materials. 700 mayors got involved and downloaded more than 2 000 documents."
- **Skills**: Product discovery, Stakeholder management, Workshops participation, Product documentation
- **Outcomes**: Platform supporting 700+ municipalities, Scaled access to knowledge, Demonstrated demand for renewables

### Slide 6 – Creating first energy cooperative (2022)
- **Quote**: "We start building the first energy cooperative in the Czech Republic. The result? Over 200 investors, 1.5 million CZK raised. To this day, this movement is what I'm most proud of."
- **Skills**: Product discovery, interviewing users, proposition testing, product documentation
- **Outcomes**: Launched first Czech community energy cooperative, raised CZK 1.5M from 200+ investors, set precedent for further projects

### Slide 7 – Web applications in insurance industry (2023)
- **Quote**: "I move into the world of web applications. I'm one of the lead designers of a new life insurance app. User rating: 4.7 out of 5. Life insurance sales are growing."
- **Skills**: Product discovery, usability testing, product strategy, cross-team collaboration, product documentation with IT and business analysts
- **Outcomes**: Designed onboarding app rated 4.7/5 by users, improved sales conversion

### Slide 8
- **Question**: Which experience have I gained during this time?
- **Experience List**:
  - Participated in around 20 design workshops and 2 design sprints
  - Fully prepared 4 workshops, including scoping and half-day facilitation
  - Managed expectations with dozens of stakeholders and gained buy-in
  - Conducted about 20 discovery interviews and roughly 14 usability tests
  - Co-created product requirements with business and IT analysts
  - Iterated on my designs countless times
  - And much more, if you would like to deep dive in some of my case study, get in touch!

### Slide 9
- **Question**: What mistakes have I made and how I learned from them?
- **Lessons Learned**:
  - I didn't always validate whether key stakeholders were ready for new approaches → trust was gained more slowly
  - I spoke too much during discovery interviews → sometimes finishing respondents' thoughts or cutting them off too soon to move to the next question
  - I was too repetitive in ideation workshop formats → leading to a drop in attention towards the end of sessions
  - and definitely a few more

### Slide 10
- **Big headline**: Would you like me to ask anything about my previous work? Hit me up!

## User Experience

### Entry Point & First-Time User Experience
- **Discovery**: Users arrive via direct link from CV, LinkedIn, email signature, or search
- **Load**: Landing shows Slide 1 with Michael's photo, a clear "Use ← → or swipe" hint, and a visible timeline of milestones
- **Orientation Prompt (mobile)**: If in portrait, an overlay prompts "For the best experience, rotate your phone to landscape." Dismissible with option to continue in portrait (degraded)
- **Persistent Header/Footer**: Always-visible LinkedIn link, Resume CTA (anchors to final slide), and Contact (mailto). Minimal visual chrome to keep focus on content, all font will be aligned on the left

### Core Experience

#### Step 1: User reads Slide 1 (The Beginning, 2018)
- Clear typographic hierarchy; short paragraphs; no clutter
- Keyboard, click, or swipe advances; show progress indicator on timeline
- **Success**: Next slide loads instantly; timeline advances

#### Step 2: User navigates via keyboard arrows or clicks a timeline milestone to jump
- Timeline items are focusable; Enter/Space triggers jump
- On jump, announce (ARIA-live) "Jumped to Slide X"
- **Success**: Snap to selected slide; maintain progress state

#### Step 3: Intermezzo after each milestone (optional)
- Brief course card(s): Title, provider, 1-line takeaway
- "Skip" is the default action; presence is lightweight and scannable

#### Step 4: User inspects measurable outcomes
- Key metrics are bolded within slides (e.g., "+60% vs. target", "700 mayors, 2,000+ downloads", "4.7/5 rating")

#### Step 5: Access LinkedIn anytime
- Header/footer link opens in new tab with rel attributes for security

#### Step 6: Reach Final Slide (Road Ahead + Actions)
- Prominent Resume Download button (PDF)
- Contact email CTA and LinkedIn reiterated
- Optional Achievements and Lessons Learned slides appear here or as adjacent appendix slides with simple navigation

#### Step 7: Share/Return
- Copy link to current slide (via hash in URL)
- Close/reopen browser and resume last slide if progress memory is enabled

### Advanced Features & Edge Cases
- **No Keyboard Available**: Provide on-screen arrows; swipe on touch devices
- **Portrait Mobile Only**: Content remains functional with stacked layout; timeline collapses into a horizontal scroll or dropdown
- **Broken Resume Link**: Show inline error with retry and a fallback message
- **LinkedIn Blocked/Offline**: Graceful message; encourage email contact
- **Deep Link Invalid**: Redirect to Slide 1 with a dismissible notice
- **Reduced Motion**: Disable slide animations and transitions
- **Screen Readers**: Proper roles (region, list, button), labeled controls, and visible focus states

### UI/UX Highlights
- **Structure-first**: Big typography, black, white and accent colour with gradient, high-contrast typography, clear spacing
- **Accessibility**: WCAG AA contrast, keyboard operability, ARIA semantics
- **Timeline**: Fixed position, horizontally scrollable on small screens, numbered with years
- **Content Density**: One main idea per slide; bold key metrics; keep on-screen reading under ~120 words
- **Performance**: Preload next/previous slide text; lazy-load images; compress photo
- **Layout**: Based on the wireframes in folder

## Narrative
A recruiter lands on Michael's portfolio between meetings, expecting another static resume page. Instead, a clean opening slide with Michael's photo invites them to use the arrow keys. A horizontal timeline shows the journey at a glance. Curious, they jump straight to the insurance app milestone. In a few seconds, they see the role, outcome, and a 4.7/5 user rating. It's clear, measurable, and concise.

They hop back to the energy cooperative slide and learn how Michael helped raise CZK 1.5 million from 200+ investors. The intermezzo that follows lists targeted courses tied to the milestone, signaling deliberate growth rather than random learning. Each step blends story and evidence, offering both context and credibility.

With two minutes left, they skim the final slide: the road ahead. The resume download is right there; LinkedIn has been accessible the whole time. They click to download and copy the link to share with a colleague, confident they can return to the specific slides that matter. For Michael, this structure-first slider does exactly what it should: it makes impact fast, keeps distractions out, and gives busy people the tools to act—download, connect, and reach out.

## Success Metrics

### User-Centric Metrics
- **Story Completion Rate**: % of sessions that reach the final slide (target: ≥50%)
- **Time-to-Value**: Median time to first jump or second milestone (target: ≤30 seconds)
- **Resume Download Rate**: % of users who download after reaching final slide (target: ≥25%)
- **LinkedIn CTR**: % of sessions with at least one LinkedIn click (target: ≥40%)
- **Contact Clicks**: Number of email CTA clicks per 100 sessions (target: ≥10)

### Business Metrics
- **Qualified Leads**: Email conversations initiated (target: 20 in 60 days)
- **Referral Sharing**: % of sessions using deep links (target: ≥15%)
- **Interview Conversion**: % of recruiter contacts leading to interviews (set baseline, improve month-over-month)

## Technical Considerations

### Integration Points
- **LinkedIn Profile URL**: www.linkedin.com/in/kleinertmich
- **Resume PDF hosting**: folder Resume
- **Email CTA**: via mailto: link (mich.kleinert@gmail.com)

### Scalability & Performance
- **Expected Load**: Low to moderate (personal portfolio); design for fast first paint
- **Performance Budget**: Minimal JS/CSS, lazy-load images, prefetch adjacent slide content
- **CDN**: recommended for static assets

### Potential Challenges
- **Cross-device input handling** (keyboard, swipe, click) and consistent focus management
- **Mobile orientation handling** and timeline usability on small screens
- **Ensuring accessibility** without heavy UI frameworks
- **Keeping structure-first** while allowing later theming
