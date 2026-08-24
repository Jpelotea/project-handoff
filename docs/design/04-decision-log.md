# Decision log

| Decision | Reason | Trade-off |
| --- | --- | --- |
| Astro static output | Keeps deployment simple, HTML inspectable, and JavaScript limited to interactions. | No application backend; the concept relies on Netlify Forms. |
| One primary conversion | Keeps every section aligned to the private-beta waitlist. | Avoids secondary demo or pricing journeys. |
| Product illustration built in HTML/CSS | Demonstrates frontend craft and avoids fabricated screenshots. | It represents a concept, not a functioning app. |
| Native `details` for FAQ | Provides keyboard support and resilient disclosure behavior without a library. | Animation is intentionally limited. |
| Consent denied by default | Analytics does not load until explicit opt-in. | Some visits and conversions will not be measured. |
| `sign_up` after successful Netlify response | Measures a completed conversion instead of an intent click. | Requires production-form verification. |
| No PII in analytics | Protects submitted information and keeps events purpose-limited. | Audience segmentation stays inside form handling, not GA4. |
| System fonts | Removes font downloads and improves first-render predictability. | Brand expression relies more heavily on layout, color, and type scale. |
| Honest concept disclosure | Avoids manufacturing commercial credibility. | The sample is evaluated on execution evidence rather than traction. |
