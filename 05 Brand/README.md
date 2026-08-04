# IIH UK Brand Assets

Logo files for IIH UK — registered charity England & Wales **1143522**, Scotland **SC043294**.

Published 20260804 · v1.0 · `IIHADMIN003`–`IIHADMIN005`

---

## What's here

| DocID | Asset | What it is | Use it for |
|---|---|---|---|
| IIHADMIN003 | **Horizontal lockup** | Brandmark + IIHUK logotype side by side, with the descriptor underneath | Page headers, letterheads, email footers, banners |
| IIHADMIN004 | **Emblem** | The circular badge — type enclosed by the ring | Social profile pictures, stamps, anywhere circular |
| IIHADMIN005 | **Brandmark** | The X/butterfly symbol on its own | Favicons, app icons, avatars, small spaces |

**Terminology**, so we all mean the same thing: the *brandmark* is the symbol, the *logotype* is
the "IIHUK" lettering, the *descriptor* is "Idiopathic Intracranial Hypertension", a *lockup* is
the symbol and lettering arranged together, and an *emblem* encloses the type inside a shape.

## Which file do I use?

**Start with the SVG.** It is sharp at every size and is usually the smallest file.
Use a PNG only where SVG is not accepted — some print workflows, older Office templates,
and most social media upload forms.

The PNG size in the filename is its width in pixels. Pick the one nearest the size you need,
rounding *up*. All PNGs have a transparent background.

| Need | File |
|---|---|
| Website header | Lockup SVG |
| Favicon | Brandmark 32 or 64 |
| Social profile picture | Emblem 512 |
| Word or PowerPoint | Lockup 1024 |
| Print / large format | Lockup 2048, or the SVG |

## Animated versions

`Dynamic/` holds animated versions as **web pages (.html)**. Each settles into place once, then
breathes gently, and stops completely for anyone who has reduced motion switched on.

Open one in a browser to see it, or drop it into a page with an `iframe` — they are pre-sized,
so use the width and height in the filename:

```html
<iframe src="20260804 IIHADMIN003 IIH UK Horizontal Lockup Animated 512 v1.0.html"
        width="512" height="133" style="border:0" title="IIH UK logo"></iframe>
```

**There is deliberately no animated .svg file.** We tested it and removed it. An animated SVG
placed in an ordinary image slot gets captured mid-animation, so the logo appears half-drawn —
faded arc text, missing ribbon. That is what Windows Explorer thumbnails, Word, PowerPoint and
PDF export all do with it. A broken-looking logo is worse than a still one, so motion ships only
in the format where it reliably works.

**For anything that is not a live web page — documents, slides, print, email, social media —
use a PNG or the static SVG.** A logo that does not move is never wrong.

## Colours

| | Hex |
|---|---|
| Logo teal (brandmark, "UK") | `#65C6B3` |
| Logo blue ("II", "H") | `#628CC5` |
| Emblem ring | `#1A2B4A` |
| Web and email text | `#D4730A` |

These are the logo's own colours, sampled from the artwork. They are **not** identical to the
wider IIH UK digital palette used in the HTML resources — don't swap one for the other.

## Please don't

- Stretch, squash, rotate or recolour any of these files
- Rebuild the lockup by placing the brandmark and logotype yourself — use the supplied lockup
- Put the logo on a busy photograph, or on a colour close to the teal
- Use the logo to imply IIH UK endorses something it has not

## Known limitations in v1.0

- Only the **brandmark** is true vector. The logotype and descriptor are still images, so the
  lockup and emblem soften if enlarged a long way past 2048 px.
- The descriptor is a very light blue on white — legible at size, hard work when small.
  Avoid using the lockup below about 256 px wide; use the brandmark instead.

## Licence

CC BY-NC 4.0 — Creative Commons Attribution, Non-Commercial.

The IIH UK name and logo are the charity's identity. This licence covers reuse of the files;
it does not grant permission to represent yourself as, or on behalf of, IIH UK.
Questions: **info@iih.org.uk**
