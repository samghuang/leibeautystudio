/**
 * Business facts — the single source of truth for name, address, phone and
 * hours (the "NAP" data that local search ranks on).
 *
 * Everything that renders these values reads from here: the footer, the
 * contact CTAs, the page metadata and the LocalBusiness structured data. When
 * the studio moves or changes its hours, this file is the only edit.
 */

export const site = {
  name: 'Lei Beauty Studio',
  shortName: 'Lei Beauty',
  initials: 'LBS',
  legalName: 'Lei Beauty Studio',
  founded: '2005',

  // Update to the real domain before launch — this value seeds every canonical
  // URL, the sitemap and the Open Graph tags.
  url: 'https://leibeautystudio.com',

  tagline: 'Quality treatment that enhances your natural beauty.',
  description: {
    en: 'Lei Beauty Studio is a family-run hair, facial and lash studio in Fremont, CA. Twenty years of patient, personalized treatment from founder Esther Huang.',
    zh: 'Lei Beauty Studio 是位于加州弗里蒙特的家庭经营美发、面部护理与美睫工作室。创始人 Esther Huang 二十年来始终用心为每位客人提供细致、个性化的护理。',
  },

  phone: '(510) 688 6648',
  // E.164 form, used for tel: links and structured data.
  phoneHref: '+15106886648',
  email: 'hello@leibeautystudio.com',

  address: {
    street: '46805 Warm Springs Blvd',
    locality: 'Fremont',
    region: 'CA',
    postalCode: '94539',
    country: 'US',
  },

  /**
   * `opens`/`closes` are 24h times for structured data; `label` is what a
   * human reads in the footer, in each language. Keeping both together stops
   * the two from drifting apart.
   */
  hours: [
    {
      days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      label: { en: 'Tue – Fri', zh: '周二至周五' },
      hours: { en: '10 – 7', zh: '10:00 – 19:00' },
      opens: '10:00',
      closes: '19:00',
    },
    {
      days: ['Saturday'],
      label: { en: 'Saturday', zh: '周六' },
      hours: { en: '9 – 6', zh: '9:00 – 18:00' },
      opens: '09:00',
      closes: '18:00',
    },
    {
      days: ['Sunday', 'Monday'],
      label: { en: 'Sun, Mon', zh: '周日、周一' },
      hours: { en: 'Closed', zh: '休息' },
      opens: null,
      closes: null,
    },
  ],

  /**
   * Where every "Book" button points. Swap this for a real scheduler
   * (Square, Vagaro, Fresha…) and every CTA on the site follows.
   */
  bookingUrl: null,

  stats: [
    { value: '20', suffix: '+', label: { en: 'Years of experience', zh: '年从业经验' } },
    { value: '1,000', suffix: '+', label: { en: 'Satisfied clients', zh: '位满意客人' } },
    { value: '10', suffix: '+', label: { en: 'Years as a beauty educator', zh: '年美容教学经验' } },
  ],
};

/** Formatted one-line address, e.g. for structured data and map links. */
export const formattedAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

/** Falls back to a phone call until a real booking system is wired up. */
export const bookingHref = site.bookingUrl ?? `tel:${site.phoneHref}`;
