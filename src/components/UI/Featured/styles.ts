'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto 0;
  max-width: 1440px;
  width: 90%;

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 6.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 3.75rem;
    }
  }
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 80%;
  z-index: 1;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      margin: 0.5rem 0;
      &:before {
        content: '✔️ ';
        margin-right: 0.5rem;
        color: #00ff00;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    p,
    li {
      font-size: 0.875rem;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 1.2rem;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
    filter: brightness(50%); /* Applies a dark overlay effect */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay */
    z-index: 0;
  }

  @media (max-width: 768px) {
    border-radius: 1.2rem;

    img {
      height: 23.75rem;
    }
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  max-width: 53.7rem;
  margin: 3rem auto 0;
`;

export const Div = styled(motion.div)`
  position: relative;
  height: 35rem;
  overflow: hidden;

  @media (max-width: 599px) {
    height: 23.75rem;

    img {
      object-fit: cover;
    }
  }
`;
