# Slop audit — EarnIt creative

Audited against the Impeccable tell catalog (impeccable.style/slop, 94 entries).
Each row is a tell we were actually guilty of, the fix their catalog prescribes,
and what we changed. Kept here so future creative doesn't reintroduce them.

## Fixed in the ad set (`brand/ads/`)

| Tell | Where it was | Prescribed fix | What we did |
|---|---|---|---|
| Dark mode with glowing accents | 3 of 4 ads: near-black grounds with a mint accent | "Use purposeful lighting, or skip the dark theme entirely" | Dropped dark. Deep emerald `#0a5240` is now the colour field; no glow shadows anywhere |
| Radial-gradient background halo | Every dark ground had a radial glow | "Use a deliberate surface instead" | Flat, solid colour fields only |
| Hero eyebrow / pill chip | All 4 (`EARNIT / SCREEN TIME…`) | "Drop the eyebrow, fold the kicker into the headline" | Replaced with a real wordmark set in Fraunces |
| Repeated section kicker labels | The same tracked label on every ad | "Replace with stronger structure or a deliberate brand system" | One wordmark, consistent position, no per-ad kickers |
| Cream / beige palette | Parchment `#f4f1eb` as default ground | "Not the safe warm off-white" | Paper cooled to `#f4f3ef`; emerald now carries the compositions |
| AI color palette | Lone acid accent on dark | "Choose a distinctive, intentional palette" | Emerald field + paper + ochre `#b8892a` as a warm counterpoint |
| Aphoristic-cadence copy | 4 manufactured-contrast lines | "Once is fine; the repeated pattern is the tell" | Kept one ("Timers police. Trackers spy. EarnIt motivates." — it is the actual positioning), rewrote the rest as plain sentences |
| Em-dash overuse | Throughout headlines and body | "Use commas, colons, periods" | Em dashes removed from all ad copy |
| Side-tab accent border | Ad 4's 3px green left border | "Remove it entirely" | Removed; replaced with an ochre rule as a deliberate divider |
| Hero metric layout | Ad 4: 300px number, label, 3 stats | "Used everywhere, trusted nowhere" | Reframed as an editorial sentence ("about 2,000 hours this year") with a 2-item product panel |
| Crushed letter spacing | −0.035 to −0.05em on display type | "Tighten optically, not destructively" | Eased to −0.016 to −0.022em |
| Oversized hero headline | Ad 1: long sentence at 84px | "Set long headlines smaller, or tighten the copy" | Reduced to 68px, copy tightened |
| Gray text on colored background | rgba whites on dark | "Use near-white for contrast" | `--on-em` near-white and `--on-em-2` at 82%, no grays on colour |
| Low contrast text | Fine print at 42% opacity | Raise contrast | Fine print moved to `--muted` |
| Content overflowing its container | Ad 3's CTA clipped below 1350px | Fit the frame | Row rhythm and copy trimmed; fits with margin |
| Italic serif display headline | Earlier social posts ("*not given.*") | "Set it roman, or use a non-serif display" | Ads use roman Fraunces only |
| Tiny numbered section labels | Earlier "Step One / Two / Three" post | "Let hierarchy sequence the page" | Not used in the ad set |

## Palette (the deliberate one)

Defined in `brand/ads/tokens.css`:

| Token | Value | Role |
|---|---|---|
| `--em-deep` | `#0a5240` | Primary colour field |
| `--em-mid` | `#0d7a5c` | CTA, checks, emphasis |
| `--em-ink` | `#063428` | Display type on paper |
| `--em-wash` | `#e8efe9` | Tinted surface, highlighted table column |
| `--paper` | `#f4f3ef` | Ground (cooler than parchment) |
| `--paper-2` | `#fbfaf8` | Raised card |
| `--ink` | `#16201c` | Body type (near-black, green-biased) |
| `--ochre` | `#b8892a` | Warm counterpoint, used sparingly |

Rule of thumb: emerald or paper carries the composition, ochre appears once,
nothing glows.

## Still outstanding

**The marketing site (`earnit-site`) has the same tells the ads had:** an italic
serif hero (`not given.` in italic), parchment ground, a tracked uppercase
eyebrow above every section, "Step one / two / three" numbered labels, em dashes
throughout, and three aphoristic lines. Same remediation applies.

**The five organic profile posts (`brand/post-*.png`)** were drawn before this
system existed. They still use italic serif, beige, and numbered step labels.

**No photography.** Nothing in this pipeline can produce a photograph. Real
iPhone screenshots of the shipped app, or real photos of a kid mid-chore, would
lift all of these further; the layouts have room reserved for them.
