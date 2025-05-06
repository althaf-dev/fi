import React from "react";
import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";

import { features, MILESTONE_DEALS_DEEPLINK, WEB_CALLBACK_OBJECTS } from "../constants";
import { ClientPlatform, triggerMobileEvents } from "../utils";
/**
   *  To do :- correct import order.
   */
import {
  BackgroundImage,
  BannerContent,
  BannerImage,
  BannerLine,
  BannerLine2,
  FeatureCard,
  FeatureGrid,
  FeatureIcon,
  FeatureImage,
  FeatureTitle,
  FeatureUsage,
  MileStoneDealsLink,
  MileStoneDesktopImage,
  ReadyToSaveSection,
  SectionTitle,
} from "./styles";
import { MILESTONE_DEALS_OFFER_URL } from "@/containers/InternationalDealsComsView/constants";

export const ReadyToSave: React.FC = () => {
  const mileStoneDealsClick = () => {
    window.open(MILESTONE_DEALS_OFFER_URL);
  };

  /**
   * Handles button click events by triggering mobile events for both Android and iOS platforms.
   *
   * @param {object} payload - The event name and optional data to be passed with the event.
   */
  const onButtonClick = (payload: { eventName: string; data?: object }) => {
    triggerMobileEvents(payload, ClientPlatform.ANDROID);
    triggerMobileEvents(payload, ClientPlatform.IOS);
    window.open(MILESTONE_DEALS_OFFER_URL);
  };

  return (
    <ReadyToSaveSection>
      <BannerImage
        onClick={() => {
          onButtonClick({
            ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
            data: {
              deeplink: MILESTONE_DEALS_DEEPLINK,
            },
          });
        }}
      >
        <BackgroundImage
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.MILESTONE_DEALS}
          alt="Banner Background"
        />
      </BannerImage>
      <MileStoneDealsLink onClick={mileStoneDealsClick}>
          <MileStoneDesktopImage
            src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_MILESTONE_DEALS}
            alt="Milestone Background"
          />
      </MileStoneDealsLink>
      <BannerLine></BannerLine>
      <BannerLine2></BannerLine2>
      <SectionTitle>Ready to save as you travel?</SectionTitle>
      <BannerContent
        src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.LINE_STAR_ICON}
        alt="Banner Content"
      />
      <FeatureGrid>
        {features.map((feature) => (
          <FeatureCard key={feature.id}>
            <FeatureIcon src={feature.icon} alt={`${feature.title} Icon`} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureImage src={feature.image} alt={feature.title} />
          </FeatureCard>
        ))}
      </FeatureGrid>
      <FeatureUsage src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_ATM_USAGE}
        alt="Usage Content"
      />
    </ReadyToSaveSection>
  );
};

export default ReadyToSave;
