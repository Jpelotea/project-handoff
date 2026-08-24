# QA checklist

## Build and content

- [x] Astro check completes without errors or warnings.
- [x] Production build completes.
- [x] Internal-link checker passes all generated HTML.
- [x] No fake logos, testimonials, user counts, or performance claims.
- [x] Fictional-concept label appears in the page, privacy notice, and README.

## Responsive layout

- [x] No horizontal overflow at 360, 390, 768, 1024, and 1440 px.
- [x] Hero, workflow, use cases, form, FAQ, and footer remain readable at each viewport.
- [x] Tap targets remain usable and content is not obscured by the consent banner.

## Accessibility

- [x] Skip link reaches the main content.
- [x] Heading hierarchy is logical.
- [x] Mobile navigation exposes state, supports Escape, and restores focus.
- [x] All interactive controls work with keyboard only and show visible focus.
- [x] Form fields have explicit labels, inline errors, `aria-invalid`, and first-invalid-field focus.
- [x] Status changes use polite live regions.
- [x] Reduced-motion preference removes nonessential motion.
- [ ] Automated accessibility audit reports no serious or critical issues.

## Form

- [x] Netlify detects `project-handoff-waitlist`.
- [x] Honeypot field is present and non-interactive for normal users.
- [x] Required, email-format, and consent validation work.
- [x] Loading, failure, and successful-submission states work.
- [x] Successful production submission reaches `/thanks/`.
- [x] Test records contain no sensitive or real client information.

## Analytics and privacy

- [x] Analytics consent is denied by default.
- [x] Rejecting consent does not load the GA4 script.
- [x] Accepting consent enables measurement.
- [x] `cta_click` includes CTA placement only.
- [x] `form_start` fires once per page session.
- [x] `form_error` contains error type/count, never field values.
- [x] `sign_up` uses `method: "waitlist_form"` only after a successful response.
- [x] GA4 DebugView receives events with no form contents or email addresses.

## SEO and production

- [x] Canonical URL, title, description, Open Graph image, favicon, manifest, sitemap, and robots are present.
- [x] Security headers are active in production.
- [x] No broken internal or external links.
- [ ] Mobile Lighthouse scores are at least 90 in Performance, Accessibility, Best Practices, and SEO.

## Recorded tooling limitation

The automated accessibility audit and Lighthouse score run remain unchecked because the required Chrome DevTools MCP was not available in the current Codex environment. Manual production QA covered responsive overflow, keyboard and focus behavior, reduced motion, form states, consent behavior, route status, link integrity, metadata, and security headers; no score or automated-audit result is claimed.
