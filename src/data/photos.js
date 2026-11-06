/**
 * Photographs for the image slots, keyed by where they appear. Files live in
 * public/photos/, already cropped to each slot's aspect ratio and colour-graded
 * to the site's palette. `wide` is a landscape crop for the home page's About
 * slot, which is landscape on desktop and portrait on mobile.
 */
export const photos = {
  homeHero: {
    src: '/photos/home-hero.jpg',
    width: 1000,
    height: 1250,
    alt: {
      en: 'Esther Huang, founder of Lei Beauty Studio, smiling',
      zh: 'Lei Beauty Studio 创始人 Esther Huang 面带微笑',
    },
    position: '50% 30%',
  },
  homeAbout: {
    src: '/photos/home-about.jpg',
    width: 1000,
    height: 1250,
    alt: {
      en: 'Esther Huang shading her eyes as she looks into the distance',
      zh: 'Esther Huang 手搭凉棚眺望远方',
    },
    position: '50% 30%',
    wide: {
      src: '/photos/home-about-wide.jpg',
      width: 1400,
      height: 1157,
      position: '50% 40%',
    },
  },
  aboutHero: {
    src: '/photos/about-hero.jpg',
    width: 944,
    height: 1180,
    alt: {
      en: 'Portrait of Esther Huang',
      zh: 'Esther Huang 的肖像',
    },
    position: '50% 30%',
  },
  aboutFounder: {
    src: '/photos/about-founder.jpg',
    width: 780,
    height: 975,
    alt: {
      en: 'Esther Huang holding a cup and smiling at the camera',
      zh: 'Esther Huang 手捧杯子，对着镜头微笑',
    },
    position: '50% 30%',
  },
};
