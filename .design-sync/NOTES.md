# GonPreah design-sync notes

## Repo context

This is a from-scratch component library (`@gonpreah/brand`), built specifically
to seed the GonPreah brand into Claude Design. There was no pre-existing design
system - the repo was empty at session start. Source: the brand brief pasted
into this session (design brief markdown + brand-assets README + a brand-system
reference image), not an existing product's shipped code.

- Foundation tokens, campus accents, and type scale are copied verbatim from the
  brief. Component *behavior* (which props exist, the exact composition) was
  authored by Claude, not ported from an existing app - there is no other app
  to port from yet. Treat the component API as a reasonable v1, not gospel.
- All Khmer copy (CAMPUS_META khmer names, previews) is **placeholder pending
  native review** - per the brief, do not treat any Khmer line as final.
- Fonts (Anton, Koulen, Inter, Kantumruy Pro) were fetched fresh from
  fonts.googleapis.com/fonts.gstatic.com via `scripts/fetch-fonts.mjs`, latin +
  khmer subsets only (cyrillic/greek/vietnamese/latin-ext dropped to keep the
  bundle small). Re-run that script if a font needs a wider subset later.

## Re-sync risks

- `scripts/fetch-fonts.mjs` re-downloads from Google Fonts on demand - if the
  Anton/Koulen/Inter/Kantumruy Pro CSS2 API URLs rotate (Google does this
  periodically), the script's variable/weight parsing may need adjusting.
  `assets/fonts-src/google-fonts.css` is the last-fetched raw CSS for
  reference (gitignored - re-fetch if missing).
- The component library itself is young: composition choices (which props
  exist, default copy in `CAMPUS_META`) were made without an existing app to
  verify against. Expect the user to want API changes once they start
  building actual pages with these components in Claude Design.
- No Storybook, no docs/ tree - every `.prompt.md` is synthesized from JSDoc +
  authored previews. If real product docs appear later, set `cfg.docsDir`.

## Known render warns

- `[FONT_MISSING] "Arial Narrow"` - this is the CSS fallback in
  `--font-display-en: 'Anton', 'Arial Narrow', sans-serif` (tokens/index.css),
  not a brand font. Accepted substitute: it's a common system font used only
  if Anton fails to load; no woff2 needed. Recorded here per validate's
  FONT_MISSING guidance.
- `[GRID_OVERFLOW]` on `CampusCard` and `Wordmark` - fixed via
  `cfg.overrides.<Name>.cardMode: "column"` (both render wider than a grid
  cell: CampusCard's three-up selector, Wordmark's side-by-side campus
  variants). Column mode can't re-flag; no action needed on future syncs
  unless a new wide story is added to either.

## Design guidance learned while authoring previews

- `StickerBadge` copy should stay short (1-3 words). At 2-4deg rotation, a
  long string ("Opens January 2028") reads as a slanted banner rather than a
  compact tag - the rotation math amplifies with element width. Graded
  `good` as-is (matches the brief's literal spec), but prefer short labels
  in real usage.

## Upload status

**Blocked as of this run**: `DesignSync` tool returned an authorization error -
this session is headless/non-interactive and cannot run `/design-login`. No
`projectId` has been recorded. Once authorized (interactively, or via Claude
Design's "Send to Claude Code Web"), resume at base SKILL.md §1 (pick/create
the target project) using the already-built `./ds-bundle` - do not rebuild
from scratch, the converter output should still be valid unless the source
changed.
