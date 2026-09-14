## Using the GonPreah brand system

GonPreah is a Cambodian ministry of YWAM. Every page is bilingual by
default (English + Khmer, both visible - never a language toggle), and
every page's ground is pure black. Three campuses (Poipet, Siem Reap,
Phnom Penh) share this foundation but each has its own **tempo** - not
just a different accent color.

### Wrapping and setup

- **The page ground is always black** (`--ink`, `#000000`) - components
  never paint it themselves, so wrap every screen's outermost container in
  `background: var(--ink)`. A component placed directly on a white or
  default background will look broken: its text is `var(--paper)` (white)
  and reads only against the black ground.
- **Campus tempo cascades from `data-campus`.** Most components accept a
  `campus?: "poipet" | "siemreap" | "phnompenh"` prop that sets
  `data-campus` on their own root. Because the campus tokens are CSS custom
  properties, they also inherit down the DOM: wrapping an entire section in
  `<div data-campus="poipet">` sets the accent, radii, and tempo for every
  GonPreah component inside it, even ones with no `campus` prop of their
  own (`Panel`, `Divider`'s `tone="accent"`). Prefer setting `data-campus`
  once per section over passing `campus` to every child.
- **Never mix two campus contexts in the same section** - the brief caps
  accent color at 10% of any screen and forbids two accents on one page
  (the only exception is gonpreah.org's own three-campus selector, where
  each `CampusCard` carries its own accent independently).
- Fonts and tokens both load from the bound `styles.css` - nothing else to
  import or configure.

### The styling idiom

Style with GonPreah's CSS custom properties, never hardcoded hex/px values,
when building layout glue around these components:

| Token | Use |
|---|---|
| `--ink` / `--paper` | page ground / primary text (only two colors used at full opacity almost everywhere) |
| `--raise` / `--hair` | panel background / dividers & borders |
| `--mute` | captions, metadata, inactive state |
| `--accent` / `--accent-ink` | the current campus's color / the correct text color on top of it (black for lime & yellow, white for persimmon - already handled, never hardcode) |
| `--radius-panel` / `--radius-button` / `--radius-image` | campus tempo: 0 (Poipet), 20px/pill (Siem Reap), 4px (Phnom Penh) |
| `--section-pad` | campus-appropriate section spacing (Siem Reap is roomiest) |
| `--tilt` | Phnom Penh's -7deg skew; 0deg elsewhere |
| `--rule-height` | the section-title device thickness (4px Poipet, 1px Siem Reap hairline, 3px Phnom Penh) |
| `--font-display-en` / `--font-display-km` | Anton / Koulen - headlines only, uppercase, never body copy |
| `--font-body-en` / `--font-body-km` | Inter / Kantumruy Pro - all body copy |
| `--text-hero` / `--text-section` / `--text-subhead` / `--text-body` / `--text-label` | the five-step type scale - don't invent a sixth size |
| `--tracking-label` | letter-spacing for small tracked uppercase labels |

Component internals use a `gp-*` class prefix (`gp-button`, `gp-panel`,
`gp-campus-card`, ...) - treat those as private implementation, never
target or extend them directly; compose with props and wrap with plain
divs styled from the tokens above instead.

### Where the truth lives

Read the bound `styles.css` (and its `_ds_bundle.css` import) for the full
token set and font declarations, and each component's own `.d.ts` for its
exact prop API before composing with it. `CAMPUS_META` (exported from the
bundle) has the reference English/Khmer names, focus copy, and stage label
for all three campuses - reuse it rather than retyping campus copy, but
treat every Khmer string in it (and everywhere else in this system) as
**placeholder pending native review**.

### A build snippet

The three-campus selector, GonPreah's signature composition - each card
carries its own accent, so no ancestor `data-campus` is needed here:

```tsx
import { Wordmark, SectionHeading, CampusCard } from '@gonpreah/brand';

function CampusesSection() {
  return (
    <div style={{ background: 'var(--ink)', padding: '4rem 2rem' }}>
      <Wordmark size="hero" />
      <SectionHeading
        eyebrow="Three campuses, three tempos"
        title="Where we serve"
        km="ជំរើសសាខា"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(240px, 1fr))',
          gap: '16px',
          marginTop: '2rem',
        }}
      >
        <CampusCard campus="poipet" href="/poipet" />
        <CampusCard campus="siemreap" href="/siem-reap" />
        <CampusCard campus="phnompenh" href="/phnom-penh" />
      </div>
    </div>
  );
}
```
