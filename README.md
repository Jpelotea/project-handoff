# Project Handoff

Project Handoff is a fictional B2B SaaS landing-page concept for small agencies and consultancies. It demonstrates an end-to-end, conversion-focused frontend workflow without invented customers, traction, testimonials, or performance claims.

> Turn recurring work into clear, accountable handoffs.

## Live experience

- Production site: [project-handoff-jc.netlify.app](https://project-handoff-jc.netlify.app)
- Source: [github.com/Jpelotea/project-handoff](https://github.com/Jpelotea/project-handoff)

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

The repository includes browser-verified [desktop](docs/design/project-handoff-desktop-1440.png) and [mobile](docs/design/project-handoff-mobile-390.png) reference-frame exports. A Figma draft was started to reproduce the coded system as editable tokens and components, but the Starter-plan MCP call limit paused that work after the color and spacing variables. The Figma file is intentionally not presented as completed evidence; the code, exported frames, and written decision record remain the inspectable design source.

## Analytics contract

| Event | When | Parameters |
| --- | --- | --- |
| `cta_click` | A waitlist CTA is activated | `cta_placement` |
| `form_start` | First focus enters the form | `form_name` |
| `generate_lead` | Netlify confirms a successful submission | `method: "waitlist_form"` |
| `form_error` | Validation or submission fails | Error category/count only |

No email address, team-size selection, workflow answer, or other form value is sent to GA4.

For release verification, append `?ga_debug=1` before opting in. That marks the browser session for GA4 DebugView without placing the site in permanent debug mode.

## Local development

```sh
npm install
npm run dev
```

Production verification:

```sh
npm run verify
```

Copy `.env.example` to `.env` only when validating a real GA4 property. The production measurement ID is configured through Netlify's environment settings; do not commit a local `.env` file.
