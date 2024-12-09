'use client';

import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer, ImageContainer, CTAContainer, BackgroundVideo } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <BackgroundVideo
        autoPlay
        loop
        muted
        playsInline
        src="/video.mp4" /* Path to your video file */
      />
      <Inner>
        <Pill>
          <span>Repairing Services Now</span>
          <Image src={ic_chevron_right} alt="chevron-right" width={16} height={16} />
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <CTAContainer>
          <GetStartedButton padding="1rem 2rem" />
          <button className="secondary-button">Learn More</button>
        </CTAContainer>
        <ImageContainer>
          <Image
            src="/images/man.png"
            alt="Professional Plumber"
            width={800}
            height={400}
            className="hero-image"
          />
          <div className="stats">
            <div className="stat">
              <span className="number">500+</span>
              <span className="label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="number">15+</span>
              <span className="label">Years Experience</span>
            </div>
          </div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};


export default HeroSection;

