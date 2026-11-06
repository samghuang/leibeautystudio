/**
 * The languages the site is published in, and the helpers every page uses to
 * pick its copy.
 *
 * English lives at the root (/services/) and Simplified Chinese under /zh/
 * (/zh/services/). Each page is one file under src/pages/[...lang]/ rendered
 * once per language, and the header toggle links every page to its
 * counterpart.
 *
 * Translatable copy is written as `{ en, zh }` pairs and read through `t()`,
 * so the two languages sit side by side and facts shared by both — prices,
 * phone number, address — are still written exactly once.
 */

export const defaultLang = 'en';

export const languages = {
  en: { htmlLang: 'en', ogLocale: 'en_US', prefix: '', toggleLabel: 'EN', switchLabel: 'Switch to English' },
  zh: { htmlLang: 'zh-Hans', ogLocale: 'zh_CN', prefix: '/zh', toggleLabel: '中文', switchLabel: '切换到中文' },
};

/** `getStaticPaths` result for a page published in every language. */
export function langPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}

/**
 * Picks the `lang` side of an `{ en, zh }` pair. Plain strings are shared by
 * every language and pass through. A pair missing the requested language
 * fails the build rather than silently showing English on a Chinese page.
 */
export function t(value, lang) {
  if (value == null || typeof value === 'string') return value;
  const text = value[lang];
  if (text == null) {
    throw new Error(`t(): no "${lang}" text for ${JSON.stringify(value)}`);
  }
  return text;
}

/** Translates every pair in a page's copy table at once. */
export function pick(table, lang) {
  return Object.fromEntries(Object.entries(table).map(([key, value]) => [key, t(value, lang)]));
}

/** Prefixes a root-relative path for `lang`: '/services/' → '/zh/services/'. */
export function localizePath(path, lang) {
  return `${languages[lang].prefix}${path}`;
}

/** The page's path with any language prefix removed: '/zh/about/' → '/about/'. */
export function basePath(pathname) {
  for (const { prefix } of Object.values(languages)) {
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      return pathname.slice(prefix.length) || '/';
    }
  }
  return pathname;
}

/**
 * Menu prices are written once, in English ('From $45', '$90'). Chinese
 * renders the same amount as '$45 起'. A price that is a sentence rather than
 * an amount is written as an `{ en, zh }` pair instead.
 */
export function formatPrice(price, lang) {
  if (typeof price !== 'string' || lang === 'en') return t(price, lang);
  const from = price.match(/^From (\$[\d,]+)$/);
  if (from) return `${from[1]} 起`;
  if (/^\$[\d,]+$/.test(price)) return price;
  throw new Error(`formatPrice(): no "${lang}" form for "${price}"`);
}

/** Copy shared by the header, footer and banners on every page. */
export const ui = {
  skipLink: { en: 'Skip to content', zh: '跳到正文' },
  book: { en: 'Book an appointment', zh: '预约' },
  openMenu: { en: 'Open menu', zh: '打开菜单' },
  closeMenu: { en: 'Close menu', zh: '关闭菜单' },
  primaryNav: { en: 'Primary', zh: '主导航' },
  address: { en: 'Address', zh: '地址' },
  contact: { en: 'Contact', zh: '联系方式' },
  menu: { en: 'Menu', zh: '菜单' },
  hours: { en: 'Hours', zh: '营业时间' },
  rights: { en: 'All rights reserved.', zh: '保留所有权利。' },
  madeIn: { en: 'Designed with care in the Bay.', zh: '用心设计于湾区。' },
};
