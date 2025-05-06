import styled from 'styled-components';

import { Device, MAX_WIDTH_MEDIA_SCREENS, WINDOW_SIZE } from '@/Themes/Device';

const InstructionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  max-width: 1130px;
`;

const InstructionsTitle = styled.h2`
  font-size: 3.5em;
  font-weight: 600;
  font-family: Gilroy, sans-serif;
  color: #004E2D;
  letter-spacing: 0.02em;
`;

const InstructionsDescription = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  font-family: Gilroy, sans-serif;
  color: #6A6D70;
  letter-spacing: 0.02em;
`;

const StepsContainer = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 80%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    gap: 60px;
    max-width: 100%;
    padding: 16px 0;
  }
`;

const CardWrapper = styled.article<{ index: number }>`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
  grid-template-columns: 50% 50%;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    grid-template-columns: 100%;
    gap: 30px;
    max-width: 100%;
    padding: 0 20px;
  }
  
  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    padding: 0 20px;
  }
`;

const TextContent = styled.div<{ index: number }>`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  padding-right: ${({ index }) => (index % 2 === 0 ? '50px' : '0')};
  padding-left: ${({ index }) => (index % 2 === 0 ? '0' : '50px')};

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    max-width: 100%;
    text-align: center;
    width: unset;
    padding: 0 30px;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    padding: 0 10px;
  }
`;

const CardTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
  font-family: Gilroy, sans-serif;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    max-width: 100%;
    padding: 0 50px;
    font-size: 1.5rem;
  }
  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 30px;
  }
`;

const CardDescription = styled.p`
  color: #8d8d8d;
  margin-top: 20px;
  font: 1.5rem/2.5rem Inter, sans-serif;
  white-space: pre-line;

   @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
   }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const ImageWrapper = styled.div<{ index:  number }>`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  margin: auto 0;
  width: 100%;
  padding-right: ${({ index }) => (index % 2 === 0 ? '0' : '50px')};
  padding-left: ${({ index }) => (index % 2 === 0 ? '50px' : '0')};
  grid-column: ${({ index }) => (index % 2 === 0 ? '2/3' : '1/2')};
  grid-row: 1/2;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    grid-row: 2/3;
    grid-column: unset;
    max-width: 100%;
    width: unset;
    padding: 0;
  }
`;

const CardImage = styled.img`
  aspect-ratio: 1.67;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 31px;

  @media ${Device.tab} {
    aspect-ratio: 1.24;
  }
`;

export {
    InstructionsContainer,
    InstructionsTitle,
    InstructionsDescription,
    StepsContainer,
    CardWrapper,
    TextContent,
    CardTitle,
    CardDescription,
    ImageWrapper,
    CardImage,
};
