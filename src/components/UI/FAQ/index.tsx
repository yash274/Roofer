'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from './styles';
import Image from 'next/image';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  animate,
} from './constants';

const desktopHeaderPhrase = ['Your Roofing Questions Answered'];
const mobileHeaderPhrase = ['Roofing FAQs'];

const faqData = [
  {
    question: 'What roofing services do you offer?',
    answer:
      'We provide a wide range of services including roof installations, repairs, inspections, and maintenance for both residential and commercial properties.',
  },
  {
    question: 'Do you offer 24/7 emergency roofing services?',
    answer:
      'Yes, our team is available 24/7 to handle roofing emergencies, ensuring your home or business stays safe and protected.',
  },
  {
    question: 'How can I maintain my roof?',
    answer:
      'Regularly clean your roof of debris, check for signs of damage, and schedule professional inspections at least once a year.',
  },
  {
    question: 'What should I do if my roof is leaking?',
    answer:
      'Try to contain the leak by using buckets or tarps and call us immediately. We’ll respond quickly to minimize damage and repair the issue.',
  },
  {
    question: 'How often should I inspect my roof?',
    answer:
      'We recommend professional roof inspections twice a year or after severe weather events to catch and address issues early.',
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        {isMobile ? (
          <MaskText phrases={mobileHeaderPhrase} tag="h1" />
        ) : (
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        )}
        <Accordion ref={accordionRef}>
          {faqData.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              key={index}
            >
              <Question onClick={() => toggleItem(index)}>
                {item.question}
                <Image src={ic_chevron_down} alt="chevron down" />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;
