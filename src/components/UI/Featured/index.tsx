"use client";
import Image from 'next/image';
import big_banner from '../../../../public/images/image1.jpg';
import featured_mobile_banner from '../../../../public/images/image1.jpg';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div, OverlayContent } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';

export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={big_banner} alt="big_banner" fill />
            )}
            <OverlayContent>
              <h1>Expert Roofing Solutions</h1>
              <p>
                From roof repairs to full replacements, we provide reliable roofing services
                to protect your home or business.
              </p>
              <ul>
                <li>Roof Repairs & Maintenance</li>
                <li>New Roof Installations</li>
                <li>Leak Detection & Fixes</li>
              </ul>
            </OverlayContent>
          </Div>
        </ImageContainer>
        <h2>We have worked with</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="companies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
