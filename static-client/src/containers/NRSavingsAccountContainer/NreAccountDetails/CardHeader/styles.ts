import styled from 'styled-components';

import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

import { WINDOW_SIZE } from '@/Themes/Device';

const Header = styled.header`
  align-items: center;
  background: #18191b;
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: Gilroy, sans-serif;
  text-align: center;
  justify-content: flex-start;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    text-align: left;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4em;
  font-weight: 500;
  line-height: 1;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    font-weight: 600;
  }
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-weight: 550;
    font-size: 2rem;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-weight: 600;
  }
`;

const Subtitle = styled.h2`
  color: #6a6d70;
  font-family: Gilroy;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.7em;
  font-weight: 600;
  line-height: 1;
  margin-top: 12px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-weight: 500;
    text-align: left;
    font-size: 1.3rem;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-weight: 500;
    text-align: left;
  }
`;

export { Header, Title, Subtitle };