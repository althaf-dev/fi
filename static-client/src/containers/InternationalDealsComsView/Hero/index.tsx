import React from "react";
import {
  DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP,
  LOGOS_URL_MAP,
} from "@/constants/AssetConstants";
import {
  CardInfo,
  CardIssuer,
  CardIssuerLogo,
  CardIssuerText,
  HeroContent,
  HeroSection,
  PartnershipInfo,
  DealFestText,
  DebitDealsContent,
  SunVisaCardImage,
  PoweredByImage,
  DateRangeImage,
  InternationalDealsImage
} from "./styles";

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <DebitDealsContent>
        <InternationalDealsImage
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.INTERNATIONAL_DEALS}
          alt="Internaational Deals"
        />
        <DealFestText>
        Enjoy the best deals and offers on international payments when you 
       <b> pay with your Fi-Federal Debit Card</b>
        </DealFestText>
        </DebitDealsContent>
        <SunVisaCardImage
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.SUN_VISA_IMG}
          alt="Sun Visa Card"
          className="federalvisa"
        />
        <PoweredByImage
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.POWERED_BY_ICON}
          alt="Powered By"
          className="poweredBy"
        />
        <DateRangeImage
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DATE_RANGE_IMG}
          alt="Date Range"
          className="date"
        />
        
      </HeroContent>
      <CardInfo>
          <CardIssuer>
            <CardIssuerText>Card issued by</CardIssuerText>
            <CardIssuerLogo src={LOGOS_URL_MAP.FI_FEDERAL} alt="Card Issuer" />
          </CardIssuer>
          <PartnershipInfo>
            Co-branded partnership with Fi Brand Pvt Ltd
          </PartnershipInfo>
        </CardInfo>
    </HeroSection>
  );
};

export default Hero;
