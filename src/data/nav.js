/**
 * Primary navigation. Real URLs, not client-side route keys — each entry is a
 * page that exists on disk under src/pages and is served as its own HTML
 * document.
 */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
];

/**
 * True when `href` is the page currently being rendered. Trailing slashes are
 * normalized so '/services' and '/services/' both match.
 */
export function isCurrent(href, pathname) {
  const normalize = (value) => (value.length > 1 ? value.replace(/\/$/, '') : value);
  return normalize(href) === normalize(pathname);
}
