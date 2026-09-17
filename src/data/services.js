/**
 * The service menu — the studio's price list.
 *
 * This is the only place prices live. The services page renders every
 * category in full; the home page renders a short teaser derived from
 * `homeFeatured` below. In the original single-file build these two lists were
 * written out separately and had already drifted apart, so a price change
 * meant remembering to edit two places.
 *
 * `icon` values must match a key in src/components/Icon.astro.
 */

export const categories = [
  {
    id: 'hair-care',
    title: 'Hair care',
    description:
      'Cuts, color, and restorative treatments tailored to your hair type and lifestyle.',
    items: [
      {
        id: 'hair-cut',
        icon: 'scissors',
        name: 'Hair cut',
        description:
          'Personalized cut and shaping consultation tailored to face shape, hair type, and lifestyle.',
        options: [
          { name: 'Women', price: 'From $65' },
          { name: 'Men', price: 'From $45' },
          { name: 'Children', price: 'From $35' },
        ],
      },
      {
        id: 'hair-color',
        icon: 'bottle',
        name: 'Hair color',
        description:
          'Custom color formulation including all-over, balayage, highlights, and gloss treatments.',
        options: [
          { name: 'Single process', price: 'From $120' },
          { name: 'Highlights', price: 'From $180' },
          { name: 'Balayage', price: 'From $240' },
          { name: 'Color correction', price: 'Quoted at consult' },
        ],
      },
      {
        id: 'hair-treatments',
        icon: 'comb',
        name: 'Hair treatments',
        description:
          'Strengthening, smoothing, and reparative therapies — perm, straightening, Olaplex, blow dry.',
        options: [
          { name: 'Olaplex bond therapy', price: 'From $80' },
          { name: 'Keratin smoothing', price: 'From $280' },
          { name: 'Soft wave perm', price: 'From $180' },
          { name: 'Blow dry & style', price: 'From $55' },
        ],
      },
    ],
  },
  {
    id: 'facials',
    title: 'Facials',
    description: 'Six-step studio protocols using medical-grade product lines.',
    items: [
      {
        id: 'basic-facial',
        icon: 'drop',
        name: 'Basic facial',
        description:
          'Cleanse, exfoliate, extract, mask, and finish — a great introduction or maintenance treatment.',
        options: [{ name: 'Per treatment', price: 'From $95' }],
      },
      {
        id: 'brightening-facial',
        icon: 'sparkle',
        name: 'Brightening facial',
        description:
          'Vitamin C and niacinamide layered protocol for hyperpigmentation, tone, and visible glow.',
        options: [{ name: 'Per treatment', price: 'From $135' }],
      },
      {
        id: 'collagen-facial',
        icon: 'leaf',
        name: 'Collagen facial',
        description:
          'Marine collagen mask and lifting massage to plump, hydrate, and smooth fine lines.',
        options: [{ name: 'Per treatment', price: 'From $145' }],
      },
      {
        id: 'essential-oil-facial',
        icon: 'drop',
        name: 'Essential oil facial',
        description:
          'Aromatic oil-based ritual focused on barrier repair, deep relaxation, and lymphatic drainage.',
        options: [{ name: 'Per treatment', price: 'From $155' }],
      },
    ],
  },
  {
    id: 'skin-body',
    title: 'Skin & body treatments',
    description: 'Targeted therapies that complement our facial work.',
    items: [
      {
        id: 'acne-treatment',
        icon: 'face',
        name: 'Acne treatment',
        description:
          'Deep clarifying treatment with extractions, blue-light therapy, and a calming finish mask.',
        options: [{ name: 'Per treatment', price: 'From $120' }],
      },
      {
        id: 'eye-neck-treatment',
        icon: 'eye',
        name: 'Anti-aging eye & neck treatment',
        description:
          'Focused massage and peptide masks for fine lines, puffiness, and crepey texture.',
        options: [{ name: 'Per treatment', price: 'From $95' }],
      },
      {
        id: 'body-treatment',
        icon: 'body',
        name: 'Cosmetic body treatment',
        description:
          'Body sculpting, exfoliation, and hydration ritual finishing with a warm cocoon wrap.',
        options: [{ name: 'Per treatment', price: 'From $185' }],
      },
    ],
  },
  {
    id: 'makeup-lashes',
    title: 'Makeup & lashes',
    description:
      'Photo-ready looks and hand-applied extensions for everyday confidence and big moments.',
    items: [
      {
        id: 'makeup',
        icon: 'brush',
        name: 'Makeup',
        description:
          'Custom application using long-wear formulas, optional lashes, and complimentary touch-up kit.',
        options: [
          { name: 'Daytime / event', price: 'From $95' },
          { name: 'Bridal', price: 'From $220' },
        ],
      },
      {
        id: 'lash-extensions',
        icon: 'lash',
        name: 'Eyelash extensions',
        description:
          'Premium synthetic mink fibers, custom-mapped per eye shape. Aftercare kit included.',
        options: [
          { name: 'Classic full set', price: 'From $160' },
          { name: 'Hybrid full set', price: 'From $200' },
          { name: 'Volume full set', price: 'From $240' },
          { name: 'Refill (2–3 wks)', price: 'From $80' },
        ],
      },
    ],
  },
];

/**
 * The six cards on the home page.
 *
 * Each entry points at a real menu item by id, so a service that is renamed or
 * removed here fails the build rather than silently leaving a dead card. Only
 * the short teaser line is editorial — the name and the link target are read
 * back off the menu item itself.
 */
const homeFeatured = [
  { id: 'hair-cut', label: 'Hair cuts', teaser: 'Women · Men · Children' },
  { id: 'hair-color', label: 'Hair color', teaser: 'Highlights · Special color' },
  { id: 'hair-treatments', label: 'Hair treatments', teaser: 'Perm · Straightening · Olaplex · Blow Dry' },
  { id: 'basic-facial', label: 'Facial', teaser: 'Basic · Brightening · Collagen · Essential Oil' },
  { id: 'lash-extensions', label: 'Eyelash extensions', teaser: 'Classic · Hybrid · Volume' },
  { id: 'makeup', label: 'Makeup', teaser: 'Daytime · Bridal' },
];

/** Flat lookup of every menu item, keyed by id, with its parent category. */
export const itemsById = new Map(
  categories.flatMap((category) =>
    category.items.map((item) => [item.id, { ...item, category }]),
  ),
);

/**
 * Resolves `homeFeatured` against the real menu. Throws at build time if an id
 * no longer exists, which is what turns a stale teaser into a caught error.
 */
export const featuredServices = homeFeatured.map(({ id, label, teaser }) => {
  const item = itemsById.get(id);
  if (!item) {
    throw new Error(
      `featuredServices: no service with id "${id}". Update homeFeatured in src/data/services.js.`,
    );
  }
  return {
    name: label,
    teaser,
    icon: item.icon,
    href: `/services/#${item.category.id}`,
  };
});
