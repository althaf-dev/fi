/**
   *  To do :- Make it appropriately name.
   */
import React from "react";
import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";

import {
  ATM_WITHDRAWAL_OFFER_DEEPLINK,
  INTERNATIONAL_SPEND_OFFER_DEEPLINK,
  WEB_CALLBACK_OBJECTS,
} from "../constants";
import { ClientPlatform, triggerMobileEvents } from "../utils";

import {
  OfferSectionWrapper,
  OfferContent,
  OfferDescription,
  OfferCard,
  OfferCardImage,
  OfferCardImage2,
  OfferCardImage3,
  TermsAndConditions,
  OfferContent2,
  TopOverlay,
  BottomOverlay,
  OfferContent3,
  OfferCardDesktop,
  OfferLink,
  OffersLink,
  RightOverlay,
  LeftOverlay,
  OfferMids,
} from "./styles";
import {
  ATM_WITHDRAWAL_OFFER_URL,
  INTERNATIONAL_SPEND_OFFER_URL,
} from "@/containers/InternationalDealsComsView/constants";

/**
   *  Handles button click events specifically for desktop users 
   */
export const OfferSection: React.FC = () => {
  const handleRightClick = () => {
    window.open(INTERNATIONAL_SPEND_OFFER_URL);
  };

  const handleLeftClick = () => {
    window.open(ATM_WITHDRAWAL_OFFER_URL);
  };
  /**
   * Handles button click events by triggering mobile events for both Android and iOS platforms.
   *
   * @param {object} payload - The event name and optional data to be passed with the event.
   */
  const onButtonClickBottomButton = (payload: { eventName: string; data?: object }) => {
    triggerMobileEvents(payload, ClientPlatform.ANDROID);
    triggerMobileEvents(payload, ClientPlatform.IOS);
    handleRightClick();
  };

  const onButtonClickTopButton = (payload: { eventName: string; data?: object }) => {
    triggerMobileEvents(payload, ClientPlatform.ANDROID);
    triggerMobileEvents(payload, ClientPlatform.IOS);
    handleLeftClick();
  };

  return (
    <OfferSectionWrapper>
      <OfferContent>
        <OfferMids>
          <OfferContent3
            src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_GIFT_BOX_ICON}
            alt="Gift Box"
          />
          <OfferContent2
            src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.KICK_STARTER_DEALS}
            alt="Offer"
          />
          <OfferDescription>
            Earn cashback on international payments as you shop online
          </OfferDescription>
        </OfferMids>
        <OfferCard>
          <OfferCardImage
            src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.CASHBACK_100_IMG}
            alt="Offer Card"
          />
          <TopOverlay
            onClick={() => {
              onButtonClickTopButton({
                ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
                data: {
                  deeplink: ATM_WITHDRAWAL_OFFER_DEEPLINK,
                },
              });
            }}
          />
          <BottomOverlay
            onClick={() => {
              onButtonClickBottomButton({
                ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
                data: {
                  deeplink: INTERNATIONAL_SPEND_OFFER_DEEPLINK,
                },
              });
            }}
          />
          {/* These both are kept to maintain the margin and the layout of the image section */}
          {/* TODO: Will have to adjust the styles later. */}
          <OfferCardImage2/>
          <OfferCardImage3/>
        </OfferCard>
        <OfferLink>
          <OfferCardDesktop
            src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_CASKBACK_IMG}
            alt="Offer Card"
          />
          <RightOverlay onClick={handleRightClick} />
          <LeftOverlay onClick={handleLeftClick} />
        </OfferLink>

        <TermsAndConditions hide>* Applicable only if you have never made an international transaction previously</TermsAndConditions>
        <TermsAndConditions>T&C Apply</TermsAndConditions>
      </OfferContent>
    </OfferSectionWrapper>
  );
};

export default OfferSection;
