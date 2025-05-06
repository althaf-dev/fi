import styled from 'styled-components';

import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

export const ImageWrapper = styled.div`
  display: flex;
  min-height: 347px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  grid-row: 1 / 4;
  grid-column: 2 / 3;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    width: 100%;
    max-width: 100%;
    margin: 40px -2px 0 0;
    grid-row: unset;
    grid-column: unset;
    min-height: unset;
  }
  
   @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
     margin: 20px -2px 0 0;
   }
`;

export const StyledImage = styled.img`
  aspect-ratio: 1.58;
  object-position: center;
  width: 100%;
  border-radius: 20px;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
  }
`;

export const TermsAndConditionsUnderImage = styled.p`
  font-feature-settings: "liga" off, "clig" off;
  max-width: 100%;
  color: var(--Content-On-Dark-Low-Emphasis-600, #6a6d70);
  text-align: center;
  margin-top: 14px;
  font: 400 12px/1 Inter, sans-serif;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    display: none;
  }
`