# EarnIt image prompts

## The one that matters — the phone plate

This is the prompt that upgrades the text-thread ads. Midjourney makes a
photograph of a real phone with a **blank screen**; the thread gets composited
onto the screen afterwards with correct perspective and a faint screen glow. The
result looks photographed, and every word stays legible because the words are
set, not generated.

**Top-down on a counter** (the main one):
```
a modern smartphone lying flat on a warm oak kitchen counter, screen switched on but completely blank pale grey, photographed from directly overhead, soft diffused morning light from a window on the left, faint fingerprints and dust visible on the glass, car keys and a coffee cup blurred at the edge of frame, muted warm palette, generous empty counter space above the phone, editorial product photography, fine grain --ar 4:5 --style raw --no text, letters, numbers, icons, app icons, watermark, logo, people, hands, faces, clutter
```

**Angled on linen** (softer, more premium):
```
a smartphone resting at a slight angle on rumpled oatmeal linen, screen switched on but completely blank pale grey, shot from just above at a three-quarter angle, warm low afternoon light raking across the fabric, soft shadow under the phone, shallow depth of field, muted neutral palette, empty space in the upper third, editorial still life --ar 4:5 --style raw --no text, letters, numbers, icons, watermark, logo, people, hands, faces
```

**On a nightstand at night** (for the evening/bedtime ads):
```
a smartphone propped against a small lamp base on a wooden nightstand, screen switched on but completely blank pale grey, dim warm lamplight, dark quiet bedroom behind softly out of focus, shot from just above eye level, moody and calm, muted palette, empty space above --ar 4:5 --style raw --no text, letters, numbers, icons, watermark, logo, people, hands, faces
```

Keep the plate whose screen is the **flattest and least reflective** — a screen
with a big specular highlight across it can't hold a legible thread. Four
variations, send me the two cleanest.

---

## Start here — the designed look

Not photographs. A designed campaign image can't fall into uncanny valley,
because it isn't claiming to be real. Pick **one** of the two directions below
and use it for the whole set, or it won't read as a campaign.

Both keep empty space at the top for the headline, and neither asks the model
to render text.

### Direction A — soft 3D objects on a brand colour field

The current default for app advertising: matte, tactile objects floating on one
flat colour with a soft shadow. Clean, premium, unmistakably designed.

Tail for all of these:
```
--ar 4:5 --style raw --no text, watermark, logo, people, photo, realistic, busy, cluttered
```

```
a single smartphone standing upright on a deep emerald green background, plain pale screen, soft 3D matte clay render, gentle studio light, long soft shadow, generous empty space above, minimal
```
```
a soft 3D matte clay render of a small neatly made bed floating on a warm off-white background, pale green blanket, gentle studio light, soft shadow, empty space above, minimal
```
```
a soft 3D matte clay render of a small stack of folded clothes on a deep emerald background, muted pastel garments, gentle studio light, soft shadow, generous empty space above, minimal
```

### Direction B — minimal flat illustration

Quieter and more editorial. Closer to your existing brand: warm off-white,
one green, thin lines, no cartoon energy.

Tail for all of these:
```
--ar 4:5 --style raw --no text, watermark, logo, faces, photo, 3d, realistic, cartoon, childish
```

```
minimal flat vector illustration of a tidy child's bedroom, thin clean lines, limited palette of warm off-white and one deep emerald green, large areas of flat colour, generous empty space at the top, calm and editorial
```
```
minimal flat vector illustration of a phone lying face down beside a small checklist with three ticks, thin clean lines, warm off-white and deep emerald palette, flat shapes, lots of negative space, calm and editorial
```

**Which to choose.** Direction A photographs better in a feed — the shadow and
depth stop a scroll harder. Direction B sits closer to your existing brand and
ages better. A is the safer bet for cold traffic.

Send me two or three from whichever you pick and I'll set the headline into the
empty space. If you'd rather skip generating altogether, this look is also
something I can build directly in code to exact spec — say the word.

---

## The photographic set (only if you want realism)

Short prompts that produce something already close to a finished social ad. The
trick is asking for **empty space in the top third**, so a headline has
somewhere to sit. Still don't ask for text; the model will garble it.

Paste this tail on the end of every one:

```
--ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration
```

**Flat lay — the most social-native option**
```
flat lay on a pale oak table, phone face down, small notepad and pencil, one green plant leaf, lots of empty space at the top, soft daylight, minimal, muted warm palette
```

**Made bed**
```
sunlit made bed in a child's room, white duvet, plain wall with empty space above, soft morning light, minimal and calm, muted palette
```

**Kitchen counter**
```
phone face down on a clean pale kitchen counter, generous empty space around it, soft morning light, minimal, muted warm tones
```

**Tidy room**
```
tidy child's bedroom in soft morning light, bed made, plain walls, uncluttered, empty space across the upper half, muted natural palette
```

**Folded laundry**
```
neat stack of folded children's clothes on a plain white bed, soft daylight, minimal composition, lots of empty space, muted palette
```

Run each a few times, keep whichever has the calmest light and the most usable
empty area, and send me two or three. I put the line of type and the offer into
that space and it's a finished ad.

---

> **Using Midjourney?** Skip to [Midjourney versions](#midjourney-versions-paste-these-as-is)
> at the bottom. The prose prompts in the middle of this file are tuned for
> ChatGPT, Gemini and Firefly, which read full sentences well. Midjourney
> weights the front of a prompt and drops trailing detail, so it wants tight
> comma-separated phrases instead.

Copy-paste prompts for Midjourney, ChatGPT/DALL·E, Gemini, Firefly, Freepik or
Ideogram. Generate the scenes, send me the files, and I'll composite the
headlines, handwriting and product UI on top.

---

## Two rules that decide whether this works

**1. Do not generate children's faces.** AI kids look subtly wrong, and for a
product about protecting kids that reads as untrustworthy the instant a parent
notices. Measured data: AI-detected creative gets more clicks but **−17%
premium perception and −18% lead-gen conversion.** Every prompt below is either
an empty room, an object, or a person shot from behind / hands only. That is
also where these models are strongest.

**2. Never ask the model to render your words.** Generators produce garbled
lettering. Ask for a **blank** Post-it, a **blank** phone screen, an empty
notepad — I'll add real handwriting and real app UI afterwards. Prompts below
say "blank" deliberately; leave it in.

---

## Style suffix — append to every prompt

**Midjourney v7**
```
--ar 4:5 --style raw --v 7 --no text, watermark, logo, people's faces, cartoon, illustration, 3d render, cgi
```

**ChatGPT / DALL·E / Gemini / Firefly** — paste at the end:
```
Photographic, shot on a 35mm lens at f/2.0, natural window light, slight film grain, documentary style, imperfect and lived-in. Muted warm palette: off-white, warm grey, soft green, natural wood. Not a stock photo, no one smiling at the camera, no text or logos anywhere, no illustration or 3D rendering. Vertical 4:5 crop.
```

Ask for **4 variations of each**, then send me the two best per scene.

---

## Scene 1 — The made bed (the hero shot)

```
A neatly made bed in a real child's bedroom, photographed from the foot of the bed and slightly above. White cotton duvet pulled straight but not hotel-perfect, one pillow very slightly dented. Soft morning sunlight coming through a window to the left, casting a long warm rectangle across the bedding. A small wooden nightstand holds a lamp and a closed book. Muted, calm, slightly desaturated. No people, no text.
```

## Scene 2 — Phone face-down on the nightstand

```
Close-up of a smartphone lying face-down on a wooden nightstand beside a small lamp, in a quiet bedroom at dusk. Warm lamplight, shallow depth of field so the background bed is softly out of focus. The phone is plain and dark, screen not visible. Calm, resolved, end-of-day mood. No people, no text, no visible brand marks.
```

## Scene 3 — The blank Post-it on a phone (highest-performing format)

```
A smartphone propped upright on a kitchen counter, screen facing the camera and glowing softly but showing a plain blank light-grey screen with no content. A blank neon-green sticky note is stuck onto the screen, slightly crooked, curling a little at one corner. Morning light from a window, a coffee mug and car keys slightly out of focus beside it. Shot handheld from a natural standing height, very slightly tilted. Real, candid, unstyled. No text anywhere.
```

*Leave that screen and that note blank — I letter the handwriting and drop in
the real app UI so it's legible and true to the product.*

## Scene 4 — Cleared kitchen counter

```
A kitchen counter that has just been wiped clean, photographed at a low angle along its length. A folded dish towel, an empty fruit bowl, a few water droplets catching the light. Bright late-morning daylight from a window on the right. Warm wood and pale stone. Ordinary family kitchen, not a showroom. No people, no text.
```

## Scene 5 — Dishwasher loaded neatly

```
An open dishwasher in a family kitchen, loaded neatly with everyday plates and glasses, photographed from standing height looking down. Daylight from a nearby window. Slightly worn cabinets, a real kitchen rather than a display model. Quiet sense of a task just finished. No people, no text.
```

## Scene 6 — Folded laundry

```
A small stack of freshly folded children's clothes resting on the corner of a made bed, photographed close and slightly from above with a shallow depth of field. Soft neutral colours, one folded t-shirt slightly askew. Warm afternoon light. Domestic, tender, unglamorous. No people, no text.
```

## Scene 7 — Homework finished

```
A child's desk after homework is finished: a closed notebook squared up with a pencil resting on top, a small lamp switched on, a chair pushed in. Evening light, warm and low. Tidy but genuinely used — a few pencil marks on the desk surface. No people, no text, no visible screens.
```

## Scene 8 — Hands only, pulling a duvet straight

```
Close-up of a child's hands smoothing and pulling a white duvet straight across a bed. Only the hands and forearms are visible, no face, no body. Bright morning window light, soft shadows, visible fabric texture. Candid, mid-motion, slightly imperfect framing as if photographed quickly. No text.
```

## Scene 9 — A parent approving, hands only

```
Close-up of an adult's hands holding a smartphone at a kitchen table, seen over the shoulder from behind so no face is visible. The phone screen is blank light grey with no content. Warm morning kitchen light, a coffee cup blurred in the foreground. Relaxed, unhurried. No text on the screen or anywhere in the image.
```

## Scene 10 — Before and after, as a pair

Generate these two with the **same room, same angle, same light** so they can sit
side by side:

```
A. A child's bedroom in the morning, messy but ordinary: duvet thrown back and twisted, two shirts on the floor, a backpack tipped over near the door. Flat natural window light, photographed from the doorway at standing height. Realistic, not staged chaos. No people, no text.

B. The exact same bedroom from the exact same doorway angle and the same window light, now tidy: duvet pulled straight, clothes put away, backpack upright by the door. Same lens, same framing, same time of day. No people, no text.
```

---

## Which tool for what

| Tool | Best for here |
|---|---|
| **Midjourney v7** (`--style raw`) | Scenes 1, 2, 4, 6, 7 — the best light and material realism |
| **ChatGPT / DALL·E** | Scenes 3, 9 — follows fussy instructions like "blank screen" most reliably |
| **Gemini / Imagen** | Scene 10 — best at holding a room consistent across two images |
| **Adobe Firefly** | Any of them if you want the cleanest commercial-licensing story |
| **Ideogram / Freepik** | Skip. Their strength is rendering text, which we specifically don't want |

## How to judge the output

Reject an image if: anyone's face is visible, the light looks like it comes from
nowhere, the room is too perfect to be a real house, colours are oversaturated,
or there's garbled text anywhere. Keep the ones that look like a photo somebody
actually took in a real home on a real morning.

Send me the keepers however is easiest — drop them in a folder and tell me
where, or attach them in chat.

## What I build from them

- **Scene 3** becomes the lead paid static: real handwriting on the note, real
  EarnIt UI on the screen, no logo, deliberately un-designed. This is the
  Rocket Money pattern, the highest-converting format for a product people
  have to be convinced actually works.
- **Scenes 1, 2, 4, 6, 7** become the informative set: photograph plus one
  short informative line plus the offer, which is the "offer-first banner"
  format that captures 29% of Meta static spend.
- **Scene 10** becomes the before/after pair.
- **Scenes 8, 9** become the human-presence versions without the AI-face risk.

---

# Midjourney versions — paste these as is

In Discord type `/imagine prompt:` then paste. On the web, paste into the
imagine bar. Everything after `--` is a parameter and must stay at the end.

Two notes. I've left `--v` off deliberately so it uses whatever version your
account defaults to; add `--v 7` only if you want to pin it. And `--no people`
is more reliable than trying to exclude faces — better to leave humans out of
the description entirely than to ask for them and then negate them.

**1. Made bed**
```
neatly made bed in a child's bedroom, white cotton duvet pulled straight, one slightly dented pillow, small wooden nightstand with a lamp and a closed book, long rectangle of warm morning sunlight falling across the bedding, shot from the foot of the bed slightly above, 35mm f/2, natural window light, fine film grain, muted desaturated warm palette, documentary interior photograph --ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration, 3d render
```

**2. Phone face-down on a nightstand**
```
smartphone lying face-down on a wooden nightstand beside a small lit lamp, quiet bedroom at dusk, bed softly out of focus behind, warm lamplight, shallow depth of field, 50mm f/1.8, calm end-of-day mood, fine film grain --ar 4:5 --style raw --no text, watermark, logo, people, screen glow, cartoon, illustration, 3d render
```

**3. Blank Post-it on a phone (the lead ad)**
```
smartphone propped upright on a kitchen counter, plain blank light grey screen, blank neon green sticky note stuck slightly crooked on the screen, one corner curling, coffee mug and car keys blurred beside it, morning window light, handheld slightly tilted angle at standing height, 35mm f/2, candid unstyled snapshot, fine film grain --ar 4:5 --style raw --no text, handwriting, letters, watermark, logo, people, cartoon, illustration, 3d render
```

**4. Cleared kitchen counter**
```
freshly wiped clean kitchen counter photographed at a low angle along its length, folded dish towel, empty fruit bowl, a few water droplets catching the light, bright late morning daylight from a window on the right, warm wood and pale stone, ordinary family kitchen, 35mm f/2.8, fine film grain --ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration, 3d render
```

**5. Dishwasher loaded neatly**
```
open dishwasher in a family kitchen neatly loaded with everyday plates and glasses, viewed from standing height looking down, daylight from a nearby window, slightly worn cabinets, real lived-in kitchen, 35mm f/2.8, fine film grain, quiet sense of a finished task --ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration, 3d render
```

**6. Folded laundry**
```
small stack of freshly folded children's clothes on the corner of a made bed, one folded t-shirt slightly askew, close and slightly from above, shallow depth of field, warm afternoon light, soft neutral colours, 50mm f/1.8, fine film grain, tender and unglamorous --ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration, 3d render
```

**7. Homework finished**
```
child's desk after homework, closed notebook squared up with a pencil resting on top, small lamp switched on, chair pushed in, low warm evening light, a few pencil marks on the desk surface, 35mm f/2, fine film grain, tidy but genuinely used --ar 4:5 --style raw --no text, watermark, logo, people, screens, cartoon, illustration, 3d render
```

**8. Hands pulling a duvet straight**
```
close up of a child's hands smoothing a white duvet straight across a bed, only hands and forearms visible, bright morning window light, soft shadows, visible cotton texture, mid-motion, 50mm f/2, slightly imperfect quick framing, fine film grain --ar 4:5 --style raw --no face, head, body, text, watermark, logo, cartoon, illustration, 3d render
```

**9. Parent's hands holding a phone**
```
over-the-shoulder view of an adult's hands holding a smartphone at a kitchen table, no face visible, plain blank light grey phone screen, coffee cup blurred in the foreground, warm morning kitchen light, 50mm f/1.8, relaxed unhurried mood, fine film grain --ar 4:5 --style raw --no face, head, text, watermark, logo, cartoon, illustration, 3d render
```

**10. Before and after** — run A, then use its image URL as a reference at the
front of B so the room matches:
```
A: child's bedroom in the morning, messy but ordinary, duvet thrown back and twisted, two shirts on the floor, backpack tipped over near the door, flat natural window light, photographed from the doorway at standing height, 35mm f/2.8, fine film grain, realistic not staged --ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration, 3d render

B: the same child's bedroom from the same doorway angle and same window light, now tidy, duvet pulled straight, clothes put away, backpack upright by the door, 35mm f/2.8, fine film grain --ar 4:5 --style raw --no text, watermark, logo, people, cartoon, illustration, 3d render
```

**Getting consistency across the set:** once you have one image whose light and
palette you like, copy its URL and paste it at the very start of the next
prompt, before the words. Midjourney will carry the look across. That is the
cheapest way to make ten separate generations feel like one photoshoot.
