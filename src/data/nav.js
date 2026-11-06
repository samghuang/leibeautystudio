/**
 * Primary navigation. Real URLs, not client-side route keys — each entry is a
 * page that exists on disk under src/pages and is served as its own HTML
 * document. Hrefs are in the default language; `localizePath()` adds the
 * language prefix.
 */
export const navLinks = [
  { label: { en: 'Home', zh: '首页' }, href: '/' },
  { label: { en: 'Services', zh: '服务' }, href: '/services/' },
  { label: { en: 'About', zh: '关于我们' }, href: '/about/' },
];

/**
 * True when `href` is the page currently being rendered. Trailing slashes are
 * normalized so '/services' and '/services/' both match.
 */
export function isCurrent(href, pathname) {
  const normalize = (value) => (value.length > 1 ? value.replace(/\/$/, '') : value);
  return normalize(href) === normalize(pathname);
}
