import React from 'react';
import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP, LOGOS_URL_MAP } from "@/constants/AssetConstants";
import { CardInfo, CardIssuer, CardIssuerLogo, CardIssuerText, HeroImage4, HeroContent, HeroImage, HeroImage2, HeroImage3, HeroSection, Logo, PartnershipInfo } from './styles';

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Logo src={LOGOS_URL_MAP.FI_LOGO} alt="Logo" />
        <HeroImage src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.INTERNATIONAL_DEALS} alt="Internaational Deals" />
        <HeroImage2 src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.SUN_VISA_IMG} alt="Sun Visa Card" className='federalvisa' />
        <HeroImage3 src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.POWERED_BY_ICON} alt="Powered By" className='poweredBy' />
        <HeroImage4 src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DATE_RANGE_IMG}alt="Date Range" className='date' />       
        <CardInfo>
          <CardIssuer>
            <CardIssuerText>Card issued by</CardIssuerText>
            <CardIssuerLogo src={LOGOS_URL_MAP.FI_FEDERAL} alt="Card Issuer" />
          </CardIssuer>
          <PartnershipInfo>
            Co-branded partnership with Fi Brand Pvt Ltd
          </PartnershipInfo>
        </CardInfo>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;