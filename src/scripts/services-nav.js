/**
 * Mobile-only category navigation for the long services menu.
 * It appears after the hero while moving down, then gets out of the way after
 * a deliberate upward scroll so the site header remains the primary control.
 */
export function initServiceQuickNav() {
  const quickNav = document.querySelector('[data-service-quick-nav]');
  const hero = document.querySelector('.svc-hero');
  const categories = [...document.querySelectorAll('.svc-cat')];
  const links = [...document.querySelectorAll('[data-service-quick-link]')];
  if (!quickNav || !hero || !categories.length || !links.length) return;

  let previousY = window.scrollY;
  let upwardDistance = 0;
  let ticking = false;

  const setActive = () => {
    const marker = 150;
    let active = categories[0];
    categories.forEach((category) => {
      if (category.getBoundingClientRect().top <= marker) active = category;
    });

    links.forEach((link) => {
      link.toggleAttribute('aria-current', link.dataset.serviceQuickLink === active.id);
    });
  };

  const sync = () => {
    const currentY = window.scrollY;
    const delta = currentY - previousY;
    const pastHero = currentY > hero.offsetTop + hero.offsetHeight - 72;

    if (!pastHero) {
      quickNav.classList.remove('is-visible');
      upwardDistance = 0;
    } else if (delta > 1) {
      upwardDistance = 0;
      quickNav.classList.add('is-visible');
    } else if (delta < -1) {
      upwardDistance += Math.abs(delta);
      if (upwardDistance >= 72) quickNav.classList.remove('is-visible');
    }

    setActive();
    previousY = currentY;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(sync);
    },
    { passive: true },
  );

  window.addEventListener('resize', sync);
  sync();
}
