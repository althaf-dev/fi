import React from "react";
import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";

import { ALL_TRAVEL_OFFERS_DEEPLINK, deals, WEB_CALLBACK_OBJECTS } from "../constants";
import { ClientPlatform, triggerMobileEvents } from "../utils";

import {
  TravelDealsSection,
  TravelImage,
  TravelImage2,
  DealsGrid,
  DealCard,
  DealImage,
  ViewAllDeals,
  ArrowIcon,
  TermsAndConditions,
  TermsAndConditions2,
  TravelDealsCard,
  DesktopOfferscard,
  DesktopTravelBeach,
} from "./styles";
import { DEBIT_CARD_OFFER_URL } from "@/containers/InternationalDealsComsView/constants";

export const TravelDeals: React.FC = () => {
  const viewTravelDealsClick = () => {
    window.open(DEBIT_CARD_OFFER_URL);
  };

  /**
   * Handles button click events by triggering mobile events for both Android and iOS platforms.
   *
   * @param {object} payload - The event name and optional data to be passed with the event.
   */
  const onButtonClick = (payload: { eventName: string; data?: object }) => {
    triggerMobileEvents(payload, ClientPlatform.ANDROID);
    triggerMobileEvents(payload, ClientPlatform.IOS);
    window.open(DEBIT_CARD_OFFER_URL);
  };

  return (
    <TravelDealsSection>
      <TravelImage
        src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.BEACH_HOUSE_IMG}
        alt="beach house"
      />
      <TravelImage2
        src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.TRAVEL_DEALS_IMG}
        alt="travel deal"
      />
      <TravelDealsCard>
        <DesktopTravelBeach
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_TRAVEL_DEALS_IMG}
          alt="Travel beach house"
        />
        <a onClick={viewTravelDealsClick}>
          <DesktopOfferscard
            src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_OFFER_PERCENTAGE}
            alt="Offer card"
          />
        </a>
      </TravelDealsCard>
      <DealsGrid>
        {deals.map((deal) => (
          <DealCard key={deal.id}>
            <DealImage
              src={deal.image}
              alt={`Travel Deal ${deal.id}`}
              style={
                deal.id === 4
                  ? { height: "190px", width: "370px", margin: "-13px" }
                  : {}
              }
            />
          </DealCard>
        ))}
      </DealsGrid>
      <ViewAllDeals>
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            onButtonClick({
              ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
              data: {
                deeplink: ALL_TRAVEL_OFFERS_DEEPLINK,
              },
            });
          }}
        >
          View all travel deals
        </span>
        <ArrowIcon
          src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.ARROW_ICON}
          alt="Arrow"
        />
      </ViewAllDeals>
      <TermsAndConditions2>T&C Apply</TermsAndConditions2>
    </TravelDealsSection>
  );
};

export default TravelDeals;
