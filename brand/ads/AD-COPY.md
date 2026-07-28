# EarnIt ad copy â€” what goes in the image vs. what goes in Meta

The mistake in v1 and v2: explanatory paragraphs were baked into the image.
In a Meta feed the image is seen about an inch tall for under two seconds, and
every word of explanation already has a home in the **primary text** field
above it. So the image carries a headline and the product; Meta's text fields
carry the argument.

Paste the fields below into Ads Manager exactly as written.

Field limits worth respecting: primary text truncates around 125 characters on
mobile, headline around 40, description around 30.

---

## Ad A â€” Product hero

**In image:** `Screen time they earn.` (4 words) + the app on a phone

**Primary text:**
> Tired of the nightly screen-time fight? EarnIt keeps your kid's apps locked until their chores are actually done, proved with a photo or a timer. You approve with one tap.

**Headline:** `Chores first. Apps after.`
**Description:** `First week free`
**CTA button:** `Download`

---

## Ad B â€” The objection

**In image:** `"I already cleaned my room."` + `Prove it.` (7 words) + approval card

**Primary text:**
> Every parent has heard it. EarnIt asks for a photo instead of taking their word for it, checks the evidence in seconds, and leaves the final call to you.

**Headline:** `Proof, not promises`
**Description:** `First week free`
**CTA button:** `Download`

---

## Ad C â€” The category

**In image:** `Not a timer. Not a tracker.` (6 words) + the app

**Primary text:**
> Timers make you the enforcer. Tracking apps make you the spy. EarnIt makes screen time something your kid earns, without reading a single message or tracking location.

**Headline:** `Responsibility, not surveillance`
**Description:** `First week free`
**CTA button:** `Download`

---

## Ad D â€” The number

**In image:** `2,000 hours of screens this year.` (6 words)

**Primary text:**
> That's the average for kids between 8 and 18. EarnIt decides what has to happen first: chores, homework, reading. Each one proved before the apps open.

**Headline:** `Make those hours earned`
**Description:** `First week free`
**CTA button:** `Download`

Source for the figure: Common Sense Media census of media use, ages 8 to 18
(about 5.5 hours a day). Keep "about" in any public claim.

---

## The current set â€” problem first: the phone is why nothing gets done

The insight: kids don't put things off because they're lazy. They put things off
because the phone is winning, every time, all evening. Parents already know
this, so the ad's job is to show them their own house and then name the
mechanism that changes it. The enemy is always the phone â€” never the kid, never
the parent. That's what lets these agitate hard without shaming anyone.

Files are `p1`â€“`p3` in this folder.

### p1 â€” You're not competing with laziness. You're competing with a phone.
*Four texts about the trash, escalating timestamps, no replies, "Delivered Â· not read."*

**Primary text:** Four texts about the trash. No replies. It isn't laziness â€” the phone wins every time it's a fair fight. EarnIt makes it not a fair fight: games stay locked until the job is actually done.
**Headline:** `Ask once, not four times` Â· **CTA:** Download

### p2 â€” It's been "five more minutes" for two hours.
*The same message four times, 6:10 to 8:14.*

**Primary text:** "Five more minutes" has lasted two hours. Homework still open, room still a mess. EarnIt ends the negotiation â€” the apps don't open until the work is done and proved with a photo.
**Headline:** `The negotiation ends here` Â· **CTA:** Download

### p3 â€” The phone is why nothing gets done. Make it the reason it does.
*Emerald ground, lock icon turning into a check. The reframe ad.*

**Primary text:** Your kid won't put the phone down, so nothing else gets done. EarnIt flips it: chores, homework and reading come first, proved with a photo, and the apps open themselves the moment they're finished.
**Headline:** `Make the phone earn its keep` Â· **CTA:** Download

**Voice rules learned the hard way:** use contractions, name the specific chore
(trash, dishes, homework â€” never "tasks"), keep the parent's dignity intact, and
never say anything a brand deck would say. "Then it only takes asking once"
converts; "EarnIt holds the rule so you never have to enforce it" does not.

## Retired â€” "the argument that doesn't happen"

Four executions, one template. Each carries one real thing the subscription
does. Files are `t1`â€“`t4` in this folder.

### t1 â€” You didn't say a word
*Sells: automatic enforcement. The parent is removed from the conflict.*

**Primary text:** The 9pm negotiation is over. EarnIt keeps your kid's apps locked until their tasks are actually done, so the rule stops being something you have to defend.
**Headline:** `Chores first. Apps after.` Â· **CTA:** Download

### t2 â€” "Yes" now comes with a photo
*Sells: photo and timer proof, AI verification, parent override.*

**Primary text:** "I already did it" stops being a debate. Your kid submits a photo or runs a timer, AI checks the evidence in seconds, and you approve with one tap.
**Headline:** `Proof, not promises` Â· **CTA:** Download

### t3 â€” Locked apps. Never locked calls.
*Sells: emergency-safe design. Handles the first objection every parent has.*

**Primary text:** The question every parent asks first: what happens in an emergency? Calls, texts to you and emergency services are never locked. EarnIt only locks games and social apps.
**Headline:** `Emergency-safe by design` Â· **CTA:** Download

### t4 â€” Since EarnIt.
*Sells: the actual outcome â€” a kid who does the work unprompted.*

**Primary text:** The goal was never a locked phone. It was a kid who gets it done without being asked. EarnIt makes screen time something they unlock themselves.
**Headline:** `Screen time they earn` Â· **CTA:** Download

Where the set goes next, same template: the parent-to-parent thread ("we don't
do the 9pm fight anymore"), the sibling thread on a Premium family plan, and the
one where the kid asks for ten more minutes and the answer is "ask the
dishwasher."

## Send the ads to the site, not the App Store

I originally pointed every CTA at the App Store listing. The category leaders
do the opposite, and it is the single biggest structural difference between
their setup and ours:

| Brand | Destination | Share of ads |
|---|---|---|
| Calm | `quiz.calm.com` via **Learn more** | 247 of 250; only **3** use app-install |
| Noom | quiz landing page via **Learn more** | 204 of 210 |
| Headspace | web signup via **Sign up** | 95% |
| Whoop / Oura | own site via **Shop now** | 93â€“97% |

Why it matters for us: an App Store click is invisible to Meta, so the pixel
never sees it, the visitor can't be retargeted, and the only optimizable event
is the outbound click. Sending traffic to earnit-site instead means Meta can
optimize on real signals we already fire, and the site hands people to the App
Store anyway.

Recommended: **Learn more â†’ earnit-site.vercel.app**, optimize to Lead first,
then StartTrial once volume allows.

## Operating numbers worth knowing

From Motion's 2026 benchmark ($1.29B Meta spend, 578,750 creatives):

- **Roughly 1 new creative per $3,000 of monthly spend.** At $25/day that is
  about 1â€“2 new ads a month, not a constant firehose.
- **Only 5â€“8% of creatives become winners**, and about half never get
  meaningful spend. Expect most of these to do nothing; that is normal.
- Accounts under $10K/month see a **3.8% hit rate**, so plan on testing
  several concepts before one works.
- **Kill rule:** pause anything under **0.8% CTR after 1,000 impressions.**
- **Fatigue:** at frequency 4, CTR falls ~23% and CPC rises ~68%. Refresh when
  frequency passes 2.5â€“3.0, typically every 7â€“14 days.

## Nobody makes new art for every ad

Firsthand review of ~90 live statics from monday.com, Grammarly, ClickUp,
Notion, Asana, Squarespace, Slack, Miro and Airtable found the same production
trick everywhere: **hold one creative body constant and permute a single
variable.** monday.com does it six ways â€” swap the background color with the
layout pixel-identical, swap light for dark, port to another aspect ratio, swap
the headline on a frozen body, swap the competitor's logo, mirror left to
right. ClickUp runs identical copy over near-identical desk photos with only
the ambient lighting color changed. Notion serves one byte-identical image
across six ad IDs.

For us that means one photo setup with three different handwritten Post-its is
not a shortcut, it is the professional method.

**Free competitive intel:** an ad still running after 90+ days is almost
certainly profitable. Open the Meta Ad Library, scope it to a competitor's
advertiser page, and sort by how long each ad has been live â€” the old ones are
their proven winners. Two filter traps: use `media_type=image_and_meme` (plain
`image` silently returns nothing) and scope by `view_all_page_id`, because
keyword search matches other advertisers' body copy.

**One more argument against AI imagery:** measured 2026 data shows AI-generated
creative gets +12% CTR and âˆ’15% CPC, but **âˆ’18% conversion on lead gen and âˆ’17%
premium perception once viewers notice it is AI.** It buys clicks and loses
customers.

Format hit rates from the same dataset, highest first: text-only **11.6%**,
product image plus text **8.75%**, lifestyle product **7.59%**, UGC **7.56%**,
high production **6.87%**. Motion's own summary: the best-performing formats
were the easiest ones to make. Polish is not the variable; the idea is.

## Rules for future creative

- One idea per ad. If the image needs a second sentence to make sense, the idea is too big.
- The image gets a headline, not an argument. Explanation goes in primary text.
- No comparison tables, no body paragraphs, no two CTAs inside the image.
- Type large enough to read at thumbnail scale; if it disappears when the image is 1 inch tall, it does not belong.
