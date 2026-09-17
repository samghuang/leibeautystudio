/**
 * Arrow controls for the testimonials carousel.
 *
 * The carousel itself is CSS scroll-snap — it already scrolls, swipes and
 * responds to arrow keys with no script. This module only adds the two arrow
 * buttons, keeps them disabled at each end, and is why those buttons start
 * hidden in the markup: a control that cannot work should not be shown.
 */
export function initCarousel() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const viewport = carousel.querySelector('[data-carousel-viewport]');
    const buttons = carousel.querySelectorAll('[data-carousel-step]');
    if (!viewport || !buttons.length) return;

    /** Gap, and the padding the cards are inset by, in pixels. */
    const metrics = () => {
      const style = getComputedStyle(viewport);
      const gap = parseFloat(style.columnGap) || 0;
      const padStart = parseFloat(style.paddingInlineStart) || 0;
      const padEnd = parseFloat(style.paddingInlineEnd) || 0;
      return { gap, padStart, inner: viewport.clientWidth - padStart - padEnd };
    };

    /**
     * Advance by as many whole cards as are actually on screen.
     *
     * N cards span `N * card + (N - 1) * gap`, so the gap has to be added back
     * before dividing — without it a three-up row measures as 2.97 and pages
     * by two, leaving a card skipped past on every click.
     */
    const stepDistance = () => {
      const card = viewport.firstElementChild;
      const { gap, inner } = metrics();
      if (!card) return inner;
      const step = card.getBoundingClientRect().width + gap;
      const perView = Math.max(1, Math.floor((inner + gap) / step));
      return step * perView;
    };

    const syncButtons = () => {
      const { padStart } = metrics();
      // Mandatory snap rests the first card against the container's padding,
      // so the scrolled-to-start position is `padStart`, not zero.
      const atStart = viewport.scrollLeft <= padStart + 1;
      // A pixel of slack absorbs sub-pixel rounding at the end of the track.
      const atEnd =
        viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 1;

      buttons.forEach((button) => {
        const back = Number(button.dataset.carouselStep) < 0;
        button.disabled = back ? atStart : atEnd;
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const direction = Number(button.dataset.carouselStep);
        viewport.scrollBy({ left: direction * stepDistance(), behavior: 'smooth' });
      });
    });

    viewport.addEventListener('scroll', syncButtons, { passive: true });
    window.addEventListener('resize', syncButtons);

    // Reveal the controls now that they are wired up.
    carousel.removeAttribute('data-carousel-idle');
    syncButtons();
  });
}
