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
  description:
    'Lei Beauty Studio is a family-run hair, facial and lash studio in Fremont, CA. Twenty years of patient, personalized treatment from founder Esther Huang.',

  phone: '(510) 688 6648',
  // E.164 form, used for tel: links and structured data.
  phoneHref: '+15106886648',
  email: 'hello@leibeautystudio.com',

  address: {
    street: '1402 N Palm Springs Blvd',
    locality: 'Fremont',
    region: 'CA',
    postalCode: '94539',
    country: 'US',
    note: 'Located inside Atelier on N Beauty',
  },

  geo: {
    latitude: 37.5485,
    longitude: -121.9886,
  },

  /**
   * `opens`/`closes` are 24h times for structured data; `label` is what a
   * human reads in the footer. Keeping both together stops the two from
   * drifting apart.
   */
  hours: [
    { days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], label: 'Tue – Fri', hours: '10 – 7', opens: '10:00', closes: '19:00' },
    { days: ['Saturday'], label: 'Saturday', hours: '9 – 6', opens: '09:00', closes: '18:00' },
    { days: ['Sunday', 'Monday'], label: 'Sun, Mon', hours: 'Closed', opens: null, closes: null },
  ],

  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/' },
    { name: 'Yelp', url: 'https://www.yelp.com/' },
  ],

  /**
   * Where every "Book" button points. Swap this for a real scheduler
   * (Square, Vagaro, Fresha…) and every CTA on the site follows.
   */
  bookingUrl: null,

  stats: [
    { value: '20', suffix: '+', label: 'Years of experience' },
    { value: '1,000', suffix: '+', label: 'Satisfied clients' },
    { value: '10', suffix: '+', label: 'Years as a beauty educator' },
  ],
};

/** Formatted one-line address, e.g. for structured data and map links. */
export const formattedAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

/** Falls back to a phone call until a real booking system is wired up. */
export const bookingHref = site.bookingUrl ?? `tel:${site.phoneHref}`;
