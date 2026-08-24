# Design system

## Direction

A restrained B2B interface that feels calm, credible, and intentionally operational. The visual metaphor is a structured handoff board—clear boundaries, visible ownership, and measured use of color.

## Tokens

### Color

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#F7F4ED` | Warm off-white page background |
| Surface | `#FFFDF8` | Cards and form surfaces |
| Ink | `#102A2D` | Primary text and dark sections |
| Ink soft | `#4C5D5D` | Supporting text |
| Teal | `#176F68` | Primary accent and actions |
| Teal bright | `#78D7C6` | Dark-surface accents |
| Teal pale | `#D9EEE8` | Section and status background |
| Border | `#D6D5CC` | Dividers and controls |
| Error | `#A73535` | Validation feedback |

### Typography

System stack: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

- Display: fluid `clamp()` sizes, weight 720, tight line height and tracking.
- Body: 16 px base, 1.6 line height.
- Labels: compact, high-weight, uppercase for scannable hierarchy.

### Spacing

Eight-pixel base scale: 8, 16, 24, 32, 40, 48, 64, 80, and 96 px.

### Layout

- Maximum content width: 1120 px.
- Desktop reference frame: 1440 px.
- Mobile reference frame: 390 px.
- Primary breakpoint behavior at 920 and 680 px.
- Borders and shadows are subtle; motion is limited to interaction feedback.

### Radius and shadow

- Small radius: 10 px.
- Medium radius: 18 px.
- Large radius: 28 px.
- Shadows use low-opacity ink to preserve the paper-like background.

## Components and states

- **Button:** default, hover, focus-visible, disabled/loading.
- **Input/select:** default, hover, focus-visible, invalid, error message.
- **Feature card:** bordered canvas surface with optional accent edge.
- **FAQ:** native `details`/`summary`, open and closed states.
- **Navigation:** desktop links, mobile toggle, open panel, Escape-close with focus restoration.
- **Consent banner:** undecided, accept, reject; hidden after a stored choice.

## Responsive annotations

- Hero changes from a two-column composition to stacked copy and product illustration below 920 px.
- Three-card layouts become one column below 920 px.
- CTA groups become full-width stacked controls below 680 px.
- Product-preview details reduce in density on mobile but retain the ownership and handoff narrative.
- Content containers always retain at least 12 px horizontal clearance at 320–390 px widths.
