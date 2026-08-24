# QA checklist

## Build and content

- [ ] Astro check completes without errors or warnings.
- [ ] Production build completes.
- [ ] Internal-link checker passes all generated HTML.
- [ ] No fake logos, testimonials, user counts, or performance claims.
- [ ] Fictional-concept label appears in the page, privacy notice, and README.

## Responsive layout

- [ ] No horizontal overflow at 360, 390, 768, 1024, and 1440 px.
- [ ] Hero, workflow, use cases, form, FAQ, and footer remain readable at each viewport.
- [ ] Tap targets remain usable and content is not obscured by the consent banner.

## Accessibility

- [ ] Skip link reaches the main content.
- [ ] Heading hierarchy is logical.
- [ ] Mobile navigation exposes state, supports Escape, and restores focus.
- [ ] All interactive controls work with keyboard only and show visible focus.
- [ ] Form fields have explicit labels, inline errors, `aria-invalid`, and first-invalid-field focus.
- [ ] Status changes use polite live regions.
- [ ] Reduced-motion preference removes nonessential motion.
- [ ] Automated accessibility audit reports no serious or critical issues.

## Form

- [ ] Netlify detects `project-handoff-waitlist`.
- [ ] Honeypot field is present and non-interactive for normal users.
- [ ] Required, email-format, and consent validation work.
- [ ] Loading, failure, and successful-submission states work.
- [ ] Successful production submission reaches `/thanks/`.
- [ ] Test records contain no sensitive or real client information.

## Analytics and privacy

- [ ] Analytics consent is denied by default.
- [ ] Rejecting consent does not load the GA4 script.
- [ ] Accepting consent enables measurement.
- [ ] `cta_click` includes CTA placement only.
- [ ] `form_start` fires once per page session.
- [ ] `form_error` contains error type/count, never field values.
- [ ] `sign_up` uses `method: "waitlist_form"` only after a successful response.
- [ ] GA4 DebugView receives events with no form contents or email addresses.

## SEO and production

- [ ] Canonical URL, title, description, Open Graph image, favicon, manifest, sitemap, and robots are present.
- [ ] Security headers are active in production.
- [ ] No broken internal or external links.
- [ ] Mobile Lighthouse scores are at least 90 in Performance, Accessibility, Best Practices, and SEO.
