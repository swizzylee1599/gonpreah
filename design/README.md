# GP DTS flyers

Two A4 recruitment flyers for the GonPreah Discipleship Training School at
YWAM Poipet, plus a type-only alternate front, built as Claude Design
artboards on the `@gonpreah/brand` Poipet tempo (black ground, lime accent,
zero radius, Anton/Koulen + Inter/Kantumruy Pro).

| File | Artboard |
|---|---|
| `Main.src.html` | Front |
| `Back.src.html` | Back |
| `FrontAlt.src.html` | Front, option B (type only) |
| `canvas.json` | Canvas layout and notes |

## Build

`_base.css` holds the shared token/component styles; `fonts.css.txt` holds the
brand faces as `@font-face` data URIs, subset from `src/fonts/` (embedded so
PNG/PDF export keeps the real faces instead of falling back).

```
node build.mjs      # *.src.html + _base.css + fonts -> *.dc.html
node preview.mjs    # render each artboard to .preview/*.png
node fit.mjs        # report content height against the 1123px A4 page
```

`*.dc.html` are generated - edit the `.src.html` sources, rebuild, then re-seed
and republish the canvas.

## Before printing

- Both QR slots are marked placeholders. The QR on the original flyer was
  ~80px and too soft to reuse; drop in the real registration QR (front) and
  the GP DTS Facebook QR (back).
- `speaker.jpg`, `dorm.jpg` and `classroom.jpg` are re-cropped from the two
  supplied flyer JPEGs and are low-resolution. Swap in the originals.
- All Khmer copy is verbatim from the original flyers. Per the brand notes,
  it still wants a native read before print.
