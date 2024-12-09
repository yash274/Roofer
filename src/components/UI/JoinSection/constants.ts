import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "The team at Roofing Experts saved the day! They fixed a major leak in my roof quickly and professionally. I couldn’t be happier with their service. Highly recommended!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "I had a roofing issue that several other companies couldn’t resolve. Roofing Experts came in and fixed it in no time! Their expertise and professionalism are unmatched.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Roofing Experts installed a new roof for me, and the whole process was seamless. They explained everything clearly and left my home spotless. I’ll definitely call them again!",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "I was dealing with persistent leaks for weeks. Roofing Experts diagnosed the issue and fixed it efficiently. My roof has never been better. Thank you!",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Roofing Experts are simply the best. Their 24/7 emergency service saved me when a storm damaged my roof in the middle of the night. The technician was friendly, skilled, and professional.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Trusted by homeowners', 'for roofing solutions'];
