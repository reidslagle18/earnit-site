# EarnIt — Facebook & Instagram profile kit

Everything needed to make both profiles look established before ads run.
Files live in this folder.

## Files

| File | Where it goes | Size |
|---|---|---|
| `profile-1024.png` | Profile photo, both platforms | 1024×1024 |
| `cover-facebook-1640x924.png` | Facebook cover photo | 1640×924 |
| `post-1-tagline.png` | Post 1 (pin this one) | 1080×1080 |
| `post-2-stat.png` | Post 2 | 1080×1080 |
| `post-3-how-it-works.png` | Post 3 | 1080×1080 |
| `post-4-photo-proof.png` | Post 4 | 1080×1080 |
| `post-5-emergency-safe.png` | Post 5 | 1080×1080 |

The cover keeps all text in the center band, so Facebook's mobile crop
(which cuts the left and right edges) never clips the headline.

## Facebook Page fields

- **Name:** EarnIt
- **Username:** `@earnit.app` (or `@getearnit` — must match Instagram if possible)
- **Category:** App Page → fallback Software → fallback Product/Service
- **Bio (100 char limit):**
  `Phone access earned, not given. Kids unlock screen time with real chores. First week free.`
- **Website:** `https://earnit-site.vercel.app`
- **Action button:** "Learn more" or "Use app" → `https://earnit-site.vercel.app`

**Why the website field points at the marketing site, not the App Store:** the
marketing site carries your Meta pixel, so profile visitors become trackable and
retargetable, and the site's own buttons hand them to the App Store anyway.
Traffic sent straight to Apple is invisible to Meta.

## Instagram setup

1. Create the account, then Settings → Account type → switch to **Professional
   / Business** (required for ads and insights).
2. Handle: `@earnit.app` is the first choice; `@getearnit`, `@earnitapp`, or
   `@earnit.family` are backups. Keep it identical to the Facebook username.
3. **Name field:** `EarnIt — Chores & Screen Time` (this field is searchable, so
   the keywords matter more than the brand name alone).
4. **Bio (150 char limit):**
   ```
   Phone access earned, not given.
   Kids unlock screen time with real chores — verified with photo proof.
   First week free ↓
   ```
5. **Link:** `https://earnit-site.vercel.app`
6. Link it to the Facebook Page: Business Settings → Accounts → Instagram
   accounts → Add, then connect it to the EarnIt Page.

## Post captions

Post all five at once rather than spacing them out — a brand-new grid with one
post looks emptier than one with five, and ads start driving profile visits
immediately.

### Post 1 — `post-1-tagline.png` (pin this)

> EarnIt is live on the App Store.
>
> Screen time isn't taken away — it's earned. You assign the chores, homework, and reading that matter. Your kid proves each one with a photo or a timer. Apps unlock when the work is real.
>
> No timers to police. No messages read. No location tracking.
>
> First week free — link in bio.

### Post 2 — `post-2-stat.png`

> Kids ages 8 to 18 average five and a half hours of entertainment screen time a day. By high school it's eight and a half.
>
> You already knew the number was high. The part nobody mentions: arguing about it almost never changes it. Incentives do.
>
> EarnIt puts screen time behind real-world tasks, so the phone becomes something your kid earns instead of something you police.
>
> Source: Common Sense Media census of media use.

### Post 3 — `post-3-how-it-works.png`

> How it actually works — three steps, about five minutes to set up.
>
> One: you assign real tasks. Chores, homework, reading, practice.
> Two: your kid proves it's done with a photo or a timer, and AI checks the evidence in seconds.
> Three: you approve, and their apps unlock automatically.
>
> That's the whole system. No timer to babysit, no negotiating at 9pm.
>
> First week free — link in bio.

### Post 4 — `post-4-photo-proof.png`

> "I already cleaned my room."
>
> Every parent knows that sentence. EarnIt replaces it with a photo.
>
> Your kid snaps the finished chore or runs a focus timer. AI reviews it in seconds, you keep the final say with one tap, and the phone unlocks only when the work is actually done.
>
> Proof, not promises.

### Post 5 — `post-5-emergency-safe.png`

> The question we get most: what happens in an emergency?
>
> Phone calls, emergency services, and medical apps are never locked. Not while tasks are pending, not ever. Parents can also set an emergency unlock code that opens everything instantly.
>
> EarnIt locks games and social apps. That's the entire list.

## Before you run ads

- [ ] Profile photo + cover uploaded on Facebook
- [ ] Bio, website, and action button set
- [ ] Instagram created, switched to Professional, linked to the Page
- [ ] All 5 posts published on both
- [ ] Page assigned to you with **Full control** (Business Settings → Pages → EarnIt → Assign people)
