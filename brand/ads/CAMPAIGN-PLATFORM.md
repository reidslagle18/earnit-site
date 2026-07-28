# EarnIt — Creative Platform

## The strategic problem

Every competitor in this category sells **fear**. Bark: predators, cyberbullying,
self-harm alerts. Gabb: "protect their childhood," "digital dangers." Aura: RDJ
warning you about threats. They compete on how frightened a parent should be,
and they all look the same doing it: dark palettes, warning icons, a child's
face lit by a screen.

That is a crowded, expensive, emotionally exhausting place to buy attention.

EarnIt is not a fear product. It is an **economy**. The parent stops being a cop
and becomes the central bank: effort goes in, access comes out, and the rate is
published. That is a genuinely different category posture, and nobody is
occupying it.

## The platform

> ### Screen time has a price.

Every execution is a **transaction artifact** — a receipt, a price tag, a
ledger line, a stamp. The ad doesn't describe the product; it *is* an artifact
the product would produce. The mechanic and the message are the same object.

Why this wins, specifically:

- **It explains itself in under a second.** A receipt reading `BED MADE ....... 20 MIN` needs no headline, no explanation, and no prior knowledge of the brand. That is the entire job of a feed static.
- **It's the highest-performing format, not a stylistic whim.** Motion's 2026 benchmark across $1.29B of Meta spend puts **text-only statics at an 11.6% hit rate — the highest of any format**, above product shots, lifestyle and UGC. A receipt is a text-only static with a reason to exist.
- **It's ownable.** No parental-control brand is running transactional imagery. We'd be first, and the device is distinctive enough to become shorthand.
- **It's an infinite variant engine.** Every chore-and-minutes pair is a new ad, and the research shows the winning production method across the industry is holding one creative constant and permuting a single variable. One receipt template gives us fifty ads for the cost of retyping a line.
- **It reframes the purchase.** In a world where everything has a price, $9.99 for domestic peace is a bargain — and the last line of a receipt is the natural place to say so.
- **It sidesteps every AI failure mode.** No faces, no hands, no realism to fall short of, no uncanny valley.

## Wording

**Platform line:** `Screen time has a price.`
**Endorsement line (keep, it's strong):** `Phone access earned, not given.`

**Headline system** — always a transaction, never a claim:

| Use | Line |
|---|---|
| Lead | `Today's exchange rate.` |
| Lead | `Nothing on this phone is free.` |
| Rate card | `The dishwasher pays 30 minutes.` |
| Rate card | `1 clean room = 1 hour.` |
| Paid state | `Paid in full.` |
| Unpaid state | `Insufficient funds.` |
| Value close | `Cheaper than the argument.` |
| Offer | `First week on the house.` |

Rules: no questions, no second person about their child, no fear, no exclamation
marks. The voice is a bank statement, not a parent magazine. Dry is funny here —
dry is the whole joke.

## Colour

| Role | Value | Use |
|---|---|---|
| Thermal paper | `#F7F5F0` | The artifact itself |
| Receipt ink | `#1A1A1A` | Monospace body, slightly imperfect |
| Emerald | `#0A5240` | The credited amount, the ground |
| Ochre stamp | `#B8892A` | `PAID` stamp, tear-line accents |
| Clay | `#B84C44` | `DECLINED` / locked states only |

The move that makes it feel designed rather than skeuomorphic: put a **crisp
off-white artifact on a saturated emerald field**, with one soft shadow. High
contrast, one accent, nothing else. Never a drop-shadowed receipt on white.

## Iconography

Monoline, 1.5pt, no fills, receipt-native only: **barcode, dotted tear line,
circular stamp, checkmark, padlock, minus sign**. The **barcode is the ownable
mark** — a barcode whose bars are chore-length is a logo waiting to happen.

Banned: warning triangles, shields, eyes, magnifying glasses, location pins,
speech bubbles, anything a surveillance brand would use. Those cues put us back
in the fear category.

## The three executions

**1. THE RECEIPT** (lead) — a till receipt on emerald. Chores itemised, minutes
credited, `PAID` stamped in ochre. Bottom line reads `EarnIt $9.99/mo —
cheaper than the argument.`

**2. THE PRICE TAG** — a cardboard swing tag on a phone, hand-punched, string
tied. The tag reads `1 CLEAN ROOM`. That's the entire ad.

**3. DECLINED** — the same receipt, clay `DECLINED` stamp, line items unticked,
balance `0 MIN`. The one ad that shows the enforcement without threatening
anyone.

---

# The prompts

**The honest bit first.** Typography is not a generation problem. Every model
garbles lettering, so we generate the **artifact and its material** and set the
type properly afterwards. Ask Midjourney for an unprinted receipt, a blank tag,
clean paper texture — then the words go on in production, legible and on-brand.
That is also how a real agency does it; nobody art-directs a headline through a
diffusion model.

Tail for every prompt:
```
--ar 4:5 --style raw --no text, letters, numbers, writing, watermark, logo, people, hands, faces, clutter
```

### 1. The receipt artifact — the money shot
```
a long narrow blank thermal till receipt with softly curled ends and a torn perforated top edge, unprinted cream paper, resting on a deep emerald green surface, single soft overhead studio light, long soft shadow to the right, shot from directly above, generous empty green space above the receipt, editorial product photography, matte, minimal, high contrast
```

### 2. The receipt, standing and lit
```
a blank unprinted cream till receipt standing upright and gently curling in mid air against a flat deep emerald green background, floating, soft directional studio light from the upper left, crisp long shadow, very minimal, editorial still life, empty space in the upper third
```

### 3. The price tag on a phone
```
a small blank cream cardboard swing tag with a punched hole and coarse natural twine, tied around a plain dark smartphone, tag hanging free and slightly turned, deep emerald green background, soft studio light, shallow depth of field on the twine, product still life, minimal, empty space above
```

### 4. The paper texture plate (for compositing)
```
flat lay of blank unprinted cream thermal receipt paper filling the frame, subtle fibre texture and faint horizontal roller marks, very slight crease down the centre, even diffuse light, no shadows, macro material study, neutral
```

### 5. The stamp plate (for compositing)
```
a blank circular rubber stamp impression in ochre ink on cream paper, irregular ink coverage, slightly off-centre, worn edges, macro, even light, no lettering inside the circle, isolated
```

### 6. The barcode brand mark (for compositing)
```
a clean minimal barcode of varying bar widths in solid black on cream paper, wide margins, no numerals beneath, sharp edges, flat scan, isolated, graphic design asset
```

**How to judge these.** Keep the ones where the paper looks like paper, the
shadow has one direction, and there's real empty green to put type into. Reject
anything with lettering, extra objects, two light sources, or a busy background.
Four variations each, send me two per prompt.

---

## The recommendation I'd actually make

The receipt is a **typographic** artifact. The reason it works is that the words
are legible and rhythmically set — chore, dot leader, minutes. That is a
typesetting job, and it is faster, cheaper and exactly repeatable to build it in
code than to fight a model for it. I can produce the full set at exact spec,
with real type, and a fresh variant for every chore in about a minute each.

Use the prompts above for the **material and the light** — the paper, the stamp,
the texture, the tag. Then the artifact gets set properly on top. That division
is how the good agencies use these tools: generation for surface, craft for
message.
