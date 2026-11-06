/**
 * Editorial copy for the about page, and the studio-story paragraphs the home
 * page previews. Text is written as `{ en, zh }` pairs (see src/i18n/index.js).
 */

/** The short version, previewed on the home page. */
export const storyPreview = [
  {
    en: "LEI Beauty Studio, originally named Esther's Beauty & Care, was founded in 2005 by Esther Huang. She entered the beauty industry in 2003 and, thanks to the trust and support of her loyal clients, has been a pioneering professional for the past twenty years.",
    zh: "LEI Beauty Studio 前身为 Esther's Beauty & Care，由 Esther Huang 于 2005 年创立。她自 2003 年进入美容行业，凭借忠实客人的信任与支持，二十年来一直是业内的先行者。",
  },
  {
    en: 'We treat every client with high-quality products and proven technique, and we never cut corners. Esther builds a personalized, comprehensive treatment plan for each individual client.',
    zh: '我们为每位客人选用优质产品与成熟技术，从不偷工减料。Esther 会为每一位客人量身制定个性化的全面护理方案。',
  },
];

/** The full version, on the about page. */
export const story = {
  pullQuote: {
    en: '“I started this studio because I wanted my clients to feel like a person again — not a slot on a schedule. Twenty years later, that hasn’t changed.”',
    zh: '“我创办这间工作室，是希望客人重新感受到自己被当作一个人来对待，而不是日程表上的一个时段。二十年过去了，这份初心从未改变。”',
  },
  paragraphs: [
    {
      en: "LEI Beauty Studio, originally named <em>Esther's Beauty &amp; Care</em>, was founded in 2005 by Esther Huang. After entering the industry in 2003 and training across Los Angeles and abroad, Esther opened a small studio in Fremont built around one simple idea — slow down, listen, and tailor every treatment to the person in the chair.",
      zh: "LEI Beauty Studio 前身为 <em>Esther's Beauty &amp; Care</em>，由 Esther Huang 于 2005 年创立。Esther 于 2003 年入行，曾在洛杉矶及海外接受培训，之后在弗里蒙特开设了一间小工作室，秉持一个简单的理念——放慢脚步、用心倾听，为每一位客人量身定制护理。",
    },
    {
      en: 'Today, twenty years on, Esther still personally services every client herself. She has chosen to stay small on purpose — every appointment is an unhurried conversation, every treatment hand-finished, every detail kept in your private session notes so each visit picks up exactly where the last one ended.',
      zh: '二十年后的今天，Esther 依然亲自为每位客人服务。她有意保持小规模——每次预约都是一场从容的交流，每项护理都亲手完成，每个细节都记录在您的专属护理档案中，让每次到访都能接续上一次的进度。',
    },
  ],
};

export const values = [
  {
    number: '01',
    heading: { en: 'Enhance, never alter', zh: '衬托，而非改变' },
    body: {
      en: 'We believe beauty work should reveal what is already there. Our protocols build on your features rather than replacing them.',
      zh: '我们相信美容应当展现您本有的美。我们的护理以您的五官为基础加以衬托，而不是取而代之。',
    },
  },
  {
    number: '02',
    heading: { en: 'Studio-grade standards', zh: '工作室级标准' },
    body: {
      en: 'Six-step facials, medical-grade product lines, and a patient layering approach that takes the time most studios skip.',
      zh: '六步面部护理、医学级产品线，以及耐心的分层护理方法——用足大多数工作室省去的时间。',
    },
  },
  {
    number: '03',
    heading: { en: 'A long-term relationship', zh: '长久的信任关系' },
    body: {
      en: 'Most of our clients have been with us for years. We keep detailed notes on every session so each visit builds on the last.',
      zh: '我们的大多数客人已相伴多年。我们为每次护理留下详细记录，让每次到访都在上一次的基础上更进一步。',
    },
  },
];

export const founder = {
  name: 'Esther Huang',
  role: 'Founder & lead esthetician',
  lede: {
    en: "Founder, lead esthetician, and the only person you'll see in the chair. Esther is intentionally a one-woman studio — every client is treated personally, by name, and never handed off.",
    zh: '创始人、首席美容师，也是您在工作室唯一会见到的人。Esther 有意坚持一人工作室的模式——每位客人都由她亲自用心服务，从不转交他人。',
  },
  credentials: [
    { term: { en: 'Years in practice', zh: '从业年限' }, detail: { en: '20+ years', zh: '20 年以上' } },
    {
      term: { en: 'Specialties', zh: '专长' },
      detail: {
        en: 'Brightening protocols, hair color correction, six-step facials',
        zh: '亮白护理、头发颜色修正、六步面部护理',
      },
    },
    {
      term: { en: 'Training', zh: '培训' },
      detail: {
        en: 'Licensed esthetician and stylist; trained in the Bay Area and abroad',
        zh: '持证美容师及发型师，在湾区及海外接受培训',
      },
    },
    {
      term: { en: 'Education', zh: '教学' },
      detail: {
        en: 'Ten years teaching advanced facial technique to Bay Area estheticians',
        zh: '十年来向湾区美容师教授高级面部护理技术',
      },
    },
  ],
};

/** Newest first — the timeline renders in this order. */
export const timeline = [
  {
    year: '2026',
    title: { en: 'Two decades on', zh: '二十年后' },
    body: {
      en: 'LEI Beauty marks twenty-one years in Fremont with the same single chair, the same patient pace, and a quietly full appointment book.',
      zh: 'LEI Beauty 在弗里蒙特迎来第二十一个年头，依旧是那一张座椅、那份从容的节奏，以及悄然排满的预约。',
    },
  },
  {
    year: '2020',
    title: { en: 'Rebrand to LEI Beauty', zh: '更名为 LEI Beauty' },
    body: {
      en: 'The studio is reborn as LEI Beauty Studio with a refreshed identity and an expanded service menu.',
      zh: '工作室以全新形象更名为 LEI Beauty Studio，并扩充了服务项目。',
    },
  },
  {
    year: '2014',
    title: { en: 'Becoming an educator', zh: '成为讲师' },
    body: {
      en: 'Esther begins teaching advanced facial techniques to estheticians across the Bay Area.',
      zh: 'Esther 开始向湾区各地的美容师教授高级面部护理技术。',
    },
  },
  {
    year: '2005',
    title: { en: "Esther's Beauty & Care opens", zh: "Esther's Beauty & Care 开业" },
    body: {
      en: 'A small two-chair studio opens in Fremont, focusing on a personalized client experience.',
      zh: '一间只有两张座椅的小工作室在弗里蒙特开业，专注于个性化的客户体验。',
    },
  },
  {
    year: '2003',
    title: { en: 'Beginning the craft', zh: '初入行业' },
    body: {
      en: 'Esther enters the beauty industry as a junior stylist, training under masters in Los Angeles and abroad.',
      zh: 'Esther 以初级发型师身份进入美容行业，在洛杉矶及海外师从名师。',
    },
  },
];
