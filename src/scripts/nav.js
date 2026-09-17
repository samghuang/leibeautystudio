/**
 * Header behaviour: the scrolled state and the mobile menu sheet.
 *
 * Everything here is progressive enhancement. Without JavaScript the header
 * still renders and every nav link still works — the `<noscript>` block in
 * Header.astro swaps the burger for the plain link row, so the mobile sheet
 * is never the only way to reach a page.
 */
export function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('[data-nav-toggle]');
  const sheet = document.querySelector('[data-nav-sheet]');
  if (!nav || !toggle || !sheet) return;

  // ── Scrolled state ──────────────────────────────────────────
  const syncStuck = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
  syncStuck();
  window.addEventListener('scroll', syncStuck, { passive: true });

  // ── Mobile sheet ────────────────────────────────────────────
  let open = false;

  const setOpen = (next) => {
    open = next;
    nav.classList.toggle('is-open', open);
    sheet.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    // `inert` keeps the off-screen sheet out of the tab order and away from
    // screen readers; the CSS transition alone would not.
    sheet.toggleAttribute('inert', !open);
    // Stop the page behind the sheet from scrolling while it is open.
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(!open));

  // Tapping the scrim closes; taps inside the panel do not bubble to it.
  sheet.addEventListener('click', (event) => {
    if (event.target === sheet) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      toggle.focus();
    }
  });
}
