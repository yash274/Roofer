import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Expert Roofing Services,', 'Your Way'];
export const desktopParagraphPhrase = [
  'We believe that roofing services should be reliable, durable, and affordable.',
  "That's why we offer solutions tailored to your needs.",
];
export const desktopBriefNotePhrase = [
  'Professional repairs,',
  'seamless installations,',
  'and 24/7 emergency support, all in one',
  'place.',
];

// For mobile
export const mobileHeaderPhrase = ['Expert Roofing', 'Services, Your Way'];
export const mobileParagraphPhrase = [
  'We believe that roofing services should be reliable,',
  "durable, and affordable. That's why we offer solutions",
  'tailored to your needs.',
];

export const mobileBriefNotePhrase = [
  'Professional',
  'repairs,',
  'seamless',
  'installations,',
  'and 24/7',
  'emergency',
  'support, all',
  'in one place.',
];

export const edges = [
  {
    point: 'No hidden fees',
    details:
      'Enjoy transparent pricing with no hidden charges. Know exactly what you’re paying for.',
    icon: ic_banknotes,
  },
  {
    point: 'Flexible scheduling',
    details:
      'Book roofing services at a time that works for you. We’re here to accommodate your busy schedule.',
    icon: ic_circle_stack,
  },
  {
    point: '24/7 emergency service',
    details:
      'Get immediate assistance for roofing emergencies any time, day or night.',
    icon: ic_arrows_left_right,
  },
];
