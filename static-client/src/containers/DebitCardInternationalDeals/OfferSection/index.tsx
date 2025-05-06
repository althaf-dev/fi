import React from 'react';
import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";

import { ATM_WITHDRAWAL_OFFER_DEEPLINK, INTERNATIONAL_SPEND_OFFER_DEEPLINK, WEB_CALLBACK_OBJECTS } from '../constants';
import { ClientPlatform, triggerMobileEvents } from '../utils';

import { OfferSectionWrapper, OfferContent, OfferDescription, OfferCard, OfferCardImage, OfferCardImage2, OfferCardImage3, TermsAndConditions, OfferContent2, TopOverlay, BottomOverlay } from './styles';

export const OfferSection: React.FC = () => {
  /**
   * Handles button click events by triggering mobile events for both Android and iOS platforms.
   *
   * @param {object} payload - The event name and optional data to be passed with the event.
   */
  const onButtonClick = (payload: { eventName: string, data?: object }) => {
    triggerMobileEvents(payload, ClientPlatform.ANDROID);
    triggerMobileEvents(payload, ClientPlatform.IOS);
  };

  return (
    <OfferSectionWrapper>
      <OfferContent>
        <OfferContent2 src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.KICK_STARTER_DEALS} alt="Offer" />
        <OfferDescription>
          Earn cashback on international payments as you shop online
        </OfferDescription>
        <OfferCard>
          <OfferCardImage src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.CASHBACK_100_IMG} alt="Offer Card" />
          <TopOverlay
            onClick={() => {
              onButtonClick({
                  ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
                  data: {
                      deeplink: ATM_WITHDRAWAL_OFFER_DEEPLINK,                  
                  }
              });
            }}
          />
          <BottomOverlay
            onClick={() => {
              onButtonClick({
                  ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
                  data: {
                      deeplink: INTERNATIONAL_SPEND_OFFER_DEEPLINK, 
                  }
              });
            }}
          />
          <OfferCardImage2 src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.CASHBACK_DESKTOP_IMG} alt="Offer Card" />
          <OfferCardImage3/>  
        </OfferCard>
        <TermsAndConditions>T&C Apply</TermsAndConditions>
      </OfferContent>
    </OfferSectionWrapper>
  );
};

export default OfferSection;