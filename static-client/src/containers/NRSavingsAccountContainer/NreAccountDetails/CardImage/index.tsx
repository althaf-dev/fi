import React from 'react';

import { DEBIT_CARD_IMG_URL_MAP } from '@/constants/AssetConstants';

import { ImageWrapper, StyledImage, TermsAndConditionsUnderImage } from './styles';

const CardImage: React.FC = () => (
  <ImageWrapper>
    <StyledImage
      src={DEBIT_CARD_IMG_URL_MAP.PASSPORT_DEBIT_CARD}
      alt="Fi-Federal Debit Card"
    />
    <TermsAndConditionsUnderImage>*T&C Apply</TermsAndConditionsUnderImage>

  </ImageWrapper>
);

export default CardImage;
