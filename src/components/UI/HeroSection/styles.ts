import { styled, keyframes } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.section`
  position: relative; /* Ensure the background is positioned relative to the section */
  padding: 4rem 0;
  overflow: hidden;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%; /* Covers half the width of the screen */
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 12%;
  border-bottom-right-radius:70%;
  border-bottom-left-radius:20%;
  z-index: 0; /* Behind the content */
  opacity: 0.06; /* Very transparent */
  pointer-events: none; /* Prevent interaction with the video */
`;


export const Inner = styled.div`
  position: relative; /* Stack content above the background */
  z-index: 1;
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: cover;
  padding: 2rem;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 1px solid #989898;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease-out;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease-out 0.2s both;

  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    background: linear-gradient(60deg, #f3ec78, #fafafa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  }

  p {
    max-width: 41.75rem;
    color: #e0e0e0;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease-out 0.4s both;

  .secondary-button {
    padding: 1rem 2rem;
    border: 2px solid #FFEE00;
    border-radius: 50px;
    background: transparent;
    color: #FFEE00;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: #FFEE00;
      color: white;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  right:0;
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 0.5s ease-out 0.6s both;

  .hero-image {
    width: 100%;
    height: auto;
  }

  .stats {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;

      .number {
        font-size: 1.5rem;
        font-weight: 700;
        color: #af4261;
      }

      .label {
        font-size: 0.875rem;
        color: #4a4a4a;
      }
    }
  }

  @media (max-width: 768px) {
    .stats {
      position: static;
      transform: none;
      margin-top: 1rem;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

