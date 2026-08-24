(() => {
  const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  const setMenu = (open, restoreFocus = false) => {
    if (!(menuToggle instanceof HTMLButtonElement) || !(mobileNav instanceof HTMLElement)) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileNav.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) mobileNav.querySelector('a')?.focus();
    if (!open && restoreFocus) menuToggle.focus();
  };

  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });

  document.querySelectorAll('[data-cta]').forEach((link) => {
    link.addEventListener('click', () => window.handoffTrack?.('cta_click', { cta_placement: link.dataset.cta }));
  });

  const banner = document.querySelector('[data-consent-banner]');
  if (banner instanceof HTMLElement && !window.handoffConsent?.()) banner.hidden = false;
  document.querySelector('[data-consent-accept]')?.addEventListener('click', () => {
    window.handoffSetConsent?.('granted');
    if (banner instanceof HTMLElement) banner.hidden = true;
  });
  document.querySelector('[data-consent-reject]')?.addEventListener('click', () => {
    window.handoffSetConsent?.('denied');
    if (banner instanceof HTMLElement) banner.hidden = true;
  });

  const form = document.querySelector('[data-waitlist-form]');
  if (!(form instanceof HTMLFormElement)) return;
  let started = false;
  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('button[type="submit"]');
  const submitLabel = form.querySelector('[data-submit-label]');
  const spinner = form.querySelector('[data-submit-spinner]');
  const fields = [...form.querySelectorAll('input[required], select[required]')];

  const errorFor = (field) => field.type === 'checkbox'
    ? document.querySelector('#contact-consent-error')
    : document.querySelector(`#${field.id}-error`);

  const validate = (field) => {
    const error = errorFor(field);
    let message = '';
    if (field.validity.valueMissing) message = field.type === 'checkbox' ? 'Please confirm consent before joining.' : 'Please complete this field.';
    else if (field.validity.typeMismatch) message = 'Enter a valid work email address.';
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    return !message;
  };

  form.addEventListener('focusin', () => {
    if (started) return;
    started = true;
    window.handoffTrack?.('form_start', { form_name: 'waitlist_form' });
  }, { once: true });

  fields.forEach((field) => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const invalid = fields.filter((field) => !validate(field));
    if (invalid.length) {
      window.handoffTrack?.('form_error', { form_name: 'waitlist_form', error_type: 'validation', invalid_field_count: invalid.length });
      if (status) status.textContent = 'Please review the highlighted fields.';
      invalid[0].focus({ preventScroll: true });
      invalid[0].scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'center' });
      return;
    }

    if (submit instanceof HTMLButtonElement) submit.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Joining…';
    if (spinner instanceof HTMLElement) spinner.hidden = false;
    if (status) status.textContent = 'Submitting your request…';

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error(`Submission failed with status ${response.status}`);
      window.handoffTrack?.('generate_lead', { method: 'waitlist_form' });
      if (status) status.textContent = 'Success. Taking you to confirmation…';
      window.setTimeout(() => { window.location.href = '/thanks/'; }, 350);
    } catch (error) {
      window.handoffTrack?.('form_error', { form_name: 'waitlist_form', error_type: 'submission' });
      if (status) status.textContent = 'The form could not be sent. Please try again in a moment.';
      if (submit instanceof HTMLButtonElement) submit.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Join private beta';
      if (spinner instanceof HTMLElement) spinner.hidden = true;
    }
  });
})();
