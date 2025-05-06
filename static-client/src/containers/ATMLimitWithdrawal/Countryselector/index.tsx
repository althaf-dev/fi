/**
 * @file CountrySelector
 * This component renders a promotion section for international ATM usage with a Fi-Federal Debit Card.
 * It includes an icon and promotional text with an arrow icon.
 */

import React from 'react';
import { MainContainer, PromotionSection, PromotionContainer, AtmIcon, TextContainer, PromotionText, ArrowIcon, ContentWrapperDiv, DebitCardLink } from './styles';
import { ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP } from '@/constants/AssetConstants';
import { DEBIT_CARD } from '../constants';

const CountrySelector: React.FC<{}> = () => {
  return (
    <MainContainer role="main">
      <PromotionSection role="banner" aria-label="International ATM Promotion">
        <PromotionContainer>
            <DebitCardLink href={DEBIT_CARD}>
            <ContentWrapperDiv>
              <AtmIcon
              loading="lazy"
              src={ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP.VISA_CARD_IMG}
              alt="International ATM icon"
              />
              <TextContainer>
              <PromotionText>
                Use an international ATM for free with the Fi-Federal Debit Card. Get now
                <ArrowIcon
                loading="lazy"
                src={ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP.ARROW_RIGHT}
                alt="Arrow icon"
                />
              </PromotionText>
              </TextContainer>
            </ContentWrapperDiv>
            </DebitCardLink>
        </PromotionContainer>
      </PromotionSection>
    </MainContainer>
  );
};
interface CountrySelectorProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default CountrySelector;
