import styled from 'styled-components';

import { Device, MAX_WIDTH_MEDIA_SCREENS, WINDOW_SIZE } from '@/Themes/Device';
import { Font } from '@/components/Abstract';
import MIXINS from '@/Themes/mixins';

const SecurityPartnersContainer = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1130px;
  width: 100%;
  padding-top: 40px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 80%;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    padding: 0 50px;
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    width: 100%;
    gap: 20px;
  }
`;

const Title = styled.h2`
  color: #333;
  font: 600 50px/1 Gilroy, sans-serif;
  margin-top: -15px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    text-align: center;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 30px;
    line-height: 33px;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    width: 100%;
    text-align: center;
  }
`;

const Description = styled.p`
  color: #8d8d8d;
  align-self: stretch;
  margin: auto 0;
  font: 500 20px/24px Inter, sans-serif;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
  color: #8d8d8d;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: start;
  flex-wrap: wrap;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img<{ aspectRatio?: number }>`
  aspect-ratio: ${(props) => props.aspectRatio};
  object-fit: contain;
  object-position: center;
  width: ${(props) => props.width}px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    width: ${(props) => (props.width as number * 5) / 6}px;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: ${(props) => (props.width as number * 2) / 3}px;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    width: ${(props) => (props.width as number) / 2}px;
  }
`;

const Text = styled(Font)`
  white-space: nowrap;
  ${MIXINS.FontMixin({
      weight: 700, size: '14px', lineHeight: '120%', font: 'Inter',
  })};

  @media ${Device.tab} {
      ${MIXINS.FontMixin({
          weight: 700, size: '16px', lineHeight: '120%', font: 'Inter',
      })};
  }


  @media ${Device.desktop} {
      ${MIXINS.FontMixin({
          weight: 700, size: '20px', lineHeight: '120%', font: 'Inter',
      })}; 
  }
`;

export {
  SecurityPartnersContainer,
  ContentWrapper,
  TextColumn,
  Title,
  InfoColumn,
  Description,
  Highlight,
  LogoContainer,
  Logo,
  Text,
};
