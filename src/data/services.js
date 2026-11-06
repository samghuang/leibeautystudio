/**
 * The service menu — the studio's price list.
 *
 * This is the only place prices live. The services page renders every
 * category in full; the home page renders a short teaser derived from
 * `homeFeatured` below. In the original single-file build these two lists were
 * written out separately and had already drifted apart, so a price change
 * meant remembering to edit two places.
 *
 * Text is written as `{ en, zh }` pairs (see src/i18n/index.js). Prices are
 * written once, in English, and formatted per language by `formatPrice()`.
 *
 * `icon` values must match a key in src/components/Icon.astro.
 */

const perTreatment = { en: 'Per treatment', zh: '每次' };

export const categories = [
  {
    id: 'hair-care',
    title: { en: 'Hair care', zh: '美发护理' },
    description: {
      en: 'Cuts, color, and restorative treatments tailored to your hair type and lifestyle.',
      zh: '根据您的发质和生活方式量身打造的剪发、染发与修护护理。',
    },
    items: [
      {
        id: 'hair-cut',
        icon: 'scissors',
        name: { en: 'Hair cut', zh: '剪发' },
        description: {
          en: 'Personalized cut and shaping consultation tailored to face shape, hair type, and lifestyle.',
          zh: '根据脸型、发质和生活方式，提供个性化的剪发与造型咨询。',
        },
        options: [
          { name: { en: 'Women', zh: '女士' }, price: 'From $45' },
          { name: { en: 'Men', zh: '男士' }, price: 'From $25' },
          { name: { en: 'Children', zh: '儿童' }, price: 'From $25' },
        ],
      },
      {
        id: 'hair-color',
        icon: 'bottle',
        name: { en: 'Hair color', zh: '染发' },
        description: {
          en: 'Custom color formulation including all-over, highlights, and gloss treatments.',
          zh: '定制调色，包括全头染、挑染和亮泽护理。',
        },
        options: [
          { name: { en: 'Single process', zh: '单色染发' }, price: 'From $120' },
          { name: { en: 'Highlights', zh: '挑染' }, price: 'From $120' },
          {
            name: { en: 'Color correction', zh: '颜色修正' },
            price: { en: 'Quoted at consult', zh: '咨询时报价' },
          },
        ],
      },
      {
        id: 'hair-treatments',
        icon: 'comb',
        name: { en: 'Hair treatments', zh: '头发护理' },
        description: {
          en: 'Strengthening, smoothing, and reparative therapies — perm, straightening, Olaplex, blow dry.',
          zh: '强韧、柔顺与修复护理——烫发、拉直、Olaplex、吹发造型。',
        },
        options: [
          { name: { en: 'Olaplex bond therapy', zh: 'Olaplex 结构修复护理' }, price: 'From $80' },
          { name: { en: 'Keratin smoothing', zh: '角蛋白柔顺' }, price: 'From $90' },
          { name: { en: 'Soft wave perm', zh: '柔波烫' }, price: 'From $150' },
          { name: { en: 'Blow dry & style', zh: '吹发造型' }, price: 'From $35' },
        ],
      },
    ],
  },
  {
    id: 'facials',
    title: { en: 'Facials', zh: '面部护理' },
    description: {
      en: 'Six-step studio protocols using medical-grade product lines.',
      zh: '采用医学级产品线的六步工作室护理流程。',
    },
    items: [
      {
        id: 'basic-facial',
        icon: 'drop',
        name: { en: 'Basic facial', zh: '基础面部护理' },
        description: {
          en: 'Cleanse, exfoliate, extract, mask, and finish — a great introduction or maintenance treatment.',
          zh: '清洁、去角质、清理粉刺、敷膜与收尾——非常适合初次体验或日常保养。',
        },
        options: [
          { name: perTreatment, price: 'From $110' },
          { name: { en: 'First visit, with consultation', zh: '首次到访（含咨询）' }, price: '$90' },
        ],
        note: {
          en: 'Packages available — the more sessions you book, the better the value.',
          zh: '提供多次疗程套餐，次数越多越优惠。',
        },
      },
      {
        id: 'brightening-facial',
        icon: 'sparkle',
        name: { en: 'Brightening facial', zh: '亮白面部护理' },
        description: {
          en: 'Vitamin C and niacinamide layered protocol for hyperpigmentation, tone, and visible glow.',
          zh: '维生素 C 与烟酰胺分层护理，改善色沉与肤色不均，焕发光泽。',
        },
        options: [{ name: perTreatment, price: 'From $135' }],
      },
      {
        id: 'collagen-facial',
        icon: 'leaf',
        name: { en: 'Collagen facial', zh: '胶原蛋白面部护理' },
        description: {
          en: 'Marine collagen mask and lifting massage to plump, hydrate, and smooth fine lines.',
          zh: '海洋胶原蛋白面膜搭配提拉按摩，丰盈补水，抚平细纹。',
        },
        options: [{ name: perTreatment, price: 'From $145' }],
      },
      {
        id: 'essential-oil-facial',
        icon: 'drop',
        name: { en: 'Essential oil facial', zh: '精油面部护理' },
        description: {
          en: 'Aromatic oil-based ritual focused on barrier repair, deep relaxation, and lymphatic drainage.',
          zh: '以芳香精油为主的护理，专注修护肌肤屏障、深度放松与淋巴引流。',
        },
        options: [{ name: perTreatment, price: 'From $155' }],
      },
    ],
  },
  {
    id: 'skin-body',
    title: { en: 'Skin & body treatments', zh: '皮肤与身体护理' },
    description: {
      en: 'Targeted therapies that complement our facial work.',
      zh: '与面部护理相辅相成的针对性疗程。',
    },
    items: [
      {
        id: 'acne-treatment',
        icon: 'face',
        name: { en: 'Acne treatment', zh: '祛痘护理' },
        description: {
          en: 'Deep clarifying treatment with extractions, blue-light therapy, and a calming finish mask.',
          zh: '深层净化护理，包括清理粉刺、蓝光治疗，最后敷上舒缓面膜。',
        },
        options: [{ name: perTreatment, price: 'From $120' }],
      },
      {
        id: 'eye-neck-treatment',
        icon: 'eye',
        name: { en: 'Anti-aging eye & neck treatment', zh: '抗衰老眼部与颈部护理' },
        description: {
          en: 'Focused massage and peptide masks for fine lines, puffiness, and crepey texture.',
          zh: '针对细纹、浮肿和松弛纹理的专项按摩与多肽面膜。',
        },
        options: [{ name: perTreatment, price: 'From $95' }],
      },
      {
        id: 'body-treatment',
        icon: 'body',
        name: { en: 'Cosmetic body treatment', zh: '美体护理' },
        description: {
          en: 'Body sculpting, exfoliation, and hydration ritual finishing with a warm cocoon wrap.',
          zh: '塑形、去角质与补水护理，最后以温热裹敷收尾。',
        },
        options: [{ name: perTreatment, price: 'From $185' }],
      },
    ],
  },
  {
    id: 'makeup-lashes',
    title: { en: 'Makeup & lashes', zh: '化妆与睫毛' },
    description: {
      en: 'Photo-ready looks and hand-applied extensions for everyday confidence and big moments.',
      zh: '上镜妆容与手工嫁接睫毛，为日常自信与重要时刻增色。',
    },
    items: [
      {
        id: 'makeup',
        icon: 'brush',
        name: { en: 'Makeup', zh: '化妆' },
        description: {
          en: 'Custom application using long-wear formulas, optional lashes, and complimentary touch-up kit.',
          zh: '使用持久配方定制上妆，可选加假睫毛，并赠送补妆套装。',
        },
        options: [
          { name: { en: 'Daytime / event', zh: '日常 / 活动' }, price: 'From $95' },
          { name: { en: 'Bridal', zh: '新娘' }, price: 'From $220' },
        ],
      },
      {
        id: 'lash-extensions',
        icon: 'lash',
        name: { en: 'Eyelash extensions', zh: '嫁接睫毛' },
        description: {
          en: 'Premium synthetic mink fibers, custom-mapped per eye shape. Aftercare kit included.',
          zh: '优质人造貂毛纤维，根据眼型定制设计。附赠护理套装。',
        },
        options: [
          { name: { en: 'Classic full set', zh: '经典全套' }, price: 'From $100' },
          { name: { en: 'Hybrid full set', zh: '混合全套' }, price: 'From $120' },
          { name: { en: 'Volume full set', zh: '浓密全套' }, price: 'From $140' },
          { name: { en: 'Refill (2–3 wks)', zh: '补睫（2–3 周）' }, price: 'From $80' },
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
  {
    id: 'hair-cut',
    label: { en: 'Hair cuts', zh: '剪发' },
    teaser: { en: 'Women · Men · Children', zh: '女士 · 男士 · 儿童' },
  },
  {
    id: 'hair-color',
    label: { en: 'Hair color', zh: '染发' },
    teaser: { en: 'Highlights · Special color', zh: '挑染 · 特殊染色' },
  },
  {
    id: 'hair-treatments',
    label: { en: 'Hair treatments', zh: '头发护理' },
    teaser: { en: 'Perm · Straightening · Olaplex · Blow Dry', zh: '烫发 · 拉直 · Olaplex · 吹发造型' },
  },
  {
    id: 'basic-facial',
    label: { en: 'Facial', zh: '面部护理' },
    teaser: { en: 'Basic · Brightening · Collagen · Essential Oil', zh: '基础 · 亮白 · 胶原蛋白 · 精油' },
  },
  {
    id: 'lash-extensions',
    label: { en: 'Eyelash extensions', zh: '嫁接睫毛' },
    teaser: { en: 'Classic · Hybrid · Volume', zh: '经典 · 混合 · 浓密' },
  },
  {
    id: 'makeup',
    label: { en: 'Makeup', zh: '化妆' },
    teaser: { en: 'Daytime · Bridal', zh: '日常 · 新娘' },
  },
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
