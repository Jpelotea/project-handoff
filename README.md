# Project Handoff

Project Handoff is a fictional B2B SaaS landing-page concept for small agencies and consultancies. It demonstrates an end-to-end, conversion-focused frontend workflow without invented customers, traction, testimonials, or performance claims.

> Turn recurring work into clear, accountable handoffs.

## Live experience

Deployment URL will be added after production Netlify verification.

## Evidence

- Astro static build with custom responsive CSS and vanilla JavaScript.
- Semantic content journey from problem framing to one primary conversion.
- Netlify Forms waitlist with a honeypot, client-side validation, inline accessible errors, loading/error/success states, and a dedicated thank-you route.
- Consent-aware GA4 integration: analytics is denied by default and form values are excluded from events.
- Canonical metadata, Open Graph asset, sitemap, robots, favicon, manifest, custom 404, and security headers.
- Reduced-motion support, keyboard-operable navigation and FAQ, visible focus, and no horizontal overflow across the target viewports.

## Design process

The inspectable design record lives in [`docs/design`](docs/design):

1. [Product brief](docs/design/01-brief.md)
2. [Content map](docs/design/02-content-map.md)
3. [Design system](docs/design/03-design-system.md)
4. [Decision log](docs/design/04-decision-log.md)
5. [QA checklist](docs/design/05-qa-checklist.md)

Desktop and mobile reference-frame exports will be committed after browser QA. A public Figma view link will be added only after the frames, tokens, components, responsive annotations, and interaction states are complete.

## Analytics contract

| Event | When | Parameters |
| --- | --- | --- |
| `cta_click` | A waitlist CTA is activated | `cta_placement` |
| `form_start` | First focus enters the form | `form_name` |
| `sign_up` | Netlify confirms a successful submission | `method: "waitlist_form"` |
| `form_error` | Validation or submission fails | Error category/count only |

No email address, team-size selection, workflow answer, or other form value is sent to GA4.

## Local development

```sh
npm install
npm run dev
```

Production verification:

```sh
npm run verify
```

Copy `.env.example` to `.env` only when validating a real GA4 property. Do not commit the environment file.
