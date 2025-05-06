import React, { useState } from "react";
import TravelCard from "./TravelCard";
import ForexFeatures from "./ForexFeatures";
import styled from "styled-components";
import Colors from "@/Themes/Colors";
import CurrenyBenefits from "./CurrenyBenefits";
import { Device, MAX_WIDTH_MEDIA_SCREENS, WINDOW_SIZE } from "@/Themes/Device";
import MagicPaymentFeature from "./MagicPaymentFeature";
import TravelOffers from "./TravelOffers";
import { TravelSavings } from "./TravelSavings";
import SecurityFeatures from "./SecurityFeatures";
import ResearchHelp from "./ResearchHelp";
import SecurityPartners from "./SecurityPartners";
import CardFeatures from "./CardFeatures";
import FAQSection from "./FAQSection";
import TestimonialSection from "./TestimonialSection";
import { DEBIT_CARD_IMG_URL_MAP } from "@/constants/AssetConstants";
import { Font } from "@/Abstract";
import { useWindow } from "@/hooks";
import { HOME_PAGE_VARIANT_ONE_LINK_URL } from "@/constants/AppConstant";
import { CLICKED_GET_THE_ZERO_FOREX_DEBIT_CARD, DEBIT_CARD_TRACKING_PAYLOAD } from "./constants";
import { trackEvent, trackGTMEvent } from "@/events";

// TODO: Remove Styles from all the components of this feature page and move them to the styled file

const Details = styled.div`
  background-color: #eff2f6;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    border-radius: 60px 60px 0px 0px;
    padding: 60px 0;
    background-color: ${Colors.WHITE};
    gap: 50px;
  }
`;

const TravelContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  padding: 50px 0;
  background-color: var(--Supporting-Jade-50, #dcf3ee);
`;

const Content = styled.div`
  background-color: #f5f5f5;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

const Comparison = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1130px;
  align-items: center;
  gap: 50px;
  padding: 0 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    gap: 30px;
    max-width: 100%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0;
  }
`;
const ComparisonTitle = styled.div`
  color: #333333;
  font: 48px/50px Gilroy, sans-serif;
  text-align: center;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 600;
    margin: 0 5rem;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

const ComparisonTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: auto;
  width: 100%;
  scrollbar-width: none;
`;

const ComparisonImage = styled.img`
  min-width:882.35px;
  min-height: 600px;
  aspect-ratio: 1.68;
  content: url(${DEBIT_CARD_IMG_URL_MAP.DEBIT_CARD_COMPARISON});

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    min-width: 735.29px;
    min-height: 500px;
    padding: 0 20px;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    min-width: 630px;
    min-height: 350px;
    padding: 0 20px;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  object-position: left;
  height: 50px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    height: 2rem;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    height: 30px;
  }
`;

const HelpContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 64px;
  background: linear-gradient(0deg, #a8e0d3 0%, #dcf3ee 100%);

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding-bottom: 40px;
    padding-top: 10px;
  }
`;

const HelpContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  width: 100%;
  max-width: 1130px;
  flex-wrap: nowrap;
  align-items: center;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 80%;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    max-width: 90%;
  }
`;

const HelpTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  color: #004e2d;
`;

const HelpTextHeader = styled.h2`
  font: 30px/1 Gilroy, sans-serif;
  font-weight: 600;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Inter;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4rem;
    text-align: left;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 20px;
  }
`;

const HelpTextDescription = styled.p`
  font: 20px/30px Inter, sans-serif;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Inter;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    text-align: left;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const StickyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5%;
  z-index: 3;

  @media (${Device.tab}) {
    padding: 16px 40px;
  }

  @media (${Device.desktop}) {
    display: none;
  }
`;

const HomePageVariantButton = styled(Font)`
  background-color: ${(props) => props.theme.color.FOREST_GREEN};
  border-radius: 20px;
  border: none;
  color: ${(props) => props.theme.color.WHITE};
  height: 44px;
  outline: none;
  padding: 14px 20px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 4px 0px 0px #00866F;


  @media (${Device.tab}) {
    height: 48px;
  }
`;
export interface BlogData {
  title: string;
  category: string;
  categorySlug: string;
  readingDuration: string;
  slug: string;
  headerImage: string;
}

interface DebitCardContainerProps {
  blogsData: Array<BlogData>;
  FAQData: any;
}

const DebitCardContainer: React.FC<DebitCardContainerProps> = ({
  blogsData,
  FAQData,
}) => {
  const [windowState] = useWindow();
  const [ctaText, setCtaText] = useState("");

  const trackingData = {
      ...DEBIT_CARD_TRACKING_PAYLOAD,
      cta_location: 'footer',
  };

  const clickedGetTheFiAppCTA = (key: string) => () => {
      trackEvent(key, { ...trackingData, method: 'manual', entry_point: 'home_page' });

      trackGTMEvent(key);
  };
  
  return (
    <>
      <div style={{ backgroundColor: Colors.BLACK_3 }}>
        <TravelCard setCtaText={setCtaText} />
      </div>
      <Details>
        <ForexFeatures />
        <CurrenyBenefits />
        <Comparison>
          <ComparisonTitle>Looks like we have a winner</ComparisonTitle>
          <ComparisonTable>
            <ComparisonImage alt="Compare Debit Card" />
          </ComparisonTable>
        </Comparison>
        <MagicPaymentFeature />
      </Details>
      <TravelContent>
        <TravelOffers />
        <HelpContainerWrapper>
          <HelpContainer>
            <StyledImage
              src={DEBIT_CARD_IMG_URL_MAP.MESSAGE_ICON}
              alt="telephone"
            />
            <HelpTextContainer>
              <HelpTextHeader>Need help while you’re abroad?</HelpTextHeader>
              <HelpTextDescription>
                We are available on priority support for you 24x7, no matter
                where you are.
              </HelpTextDescription>
            </HelpTextContainer>
          </HelpContainer>
        </HelpContainerWrapper>
        <TravelSavings />
      </TravelContent>
      <Content>
        <CardFeatures />
        {/* <TestimonialSection /> */}
        <SecurityFeatures />
        <ResearchHelp blogsData={blogsData} />
        {Object.keys(FAQData || {}).length !== 0 ? <FAQSection data={FAQData} /> : <></>}
        <SecurityPartners />
      </Content>
      <StickyFooter>
        <a
          onClick={clickedGetTheFiAppCTA(CLICKED_GET_THE_ZERO_FOREX_DEBIT_CARD)}
          href={
            (windowState && windowState.oneLinkCommonUrl) ||
            HOME_PAGE_VARIANT_ONE_LINK_URL
          }
          id="poster_link"
          target="_blank"
          rel="noreferrer"
        >
          <HomePageVariantButton font="button" tagType="button" type="button">
            {ctaText}
          </HomePageVariantButton>
        </a>
      </StickyFooter>
    </>
  );
};

export default DebitCardContainer;
