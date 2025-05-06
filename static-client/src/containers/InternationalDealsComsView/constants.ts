import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";

export const INTERNATIONAL_SPEND_OFFER_URL = 'https://fi.onelink.me/GvZH/2ceikzvm' ;

export const ATM_WITHDRAWAL_OFFER_URL = 'https://fi.onelink.me/GvZH/odw04gei' ;

export const DEBIT_CARD_OFFER_URL = 'https://fi.onelink.me/GvZH/qa13oq1k' ;

export const MILESTONE_DEALS_OFFER_URL = 'https://fi.onelink.me/GvZH/p8lgp5wy' ;

export const WEB_CALLBACK_OBJECTS = {
    deeplinkRedirection: {
        eventName: 'DeeplinkRedirection',
    },
};

export const DC_TRAVEL_FEST_FN_NAME = 'ctaClickHandler';
export const DC_TRAVEL_FEST_WINDOW_OBJECT_NAME = 'javascriptInterface';

export const ATM_WITHDRAWAL_OFFER_DEEPLINK = 'CNMEyhSCAQpYdHlwZS5nb29nbGVhcGlzLmNvbS90eXBlcy5kZWVwbGlua19zY3JlZW5fb3B0aW9uLnJld2FyZHMuUmV3YXJkT2ZmZXJEZXRhaWxzU2NyZWVuT3B0aW9ucxImEiQwNDNmYzlkMy00NjNiLTQxMWYtOTIxMy02YjVlOWJhNmU2NGQ=';
export const INTERNATIONAL_SPEND_OFFER_DEEPLINK = 'CNMEyhSCAQpYdHlwZS5nb29nbGVhcGlzLmNvbS90eXBlcy5kZWVwbGlua19zY3JlZW5fb3B0aW9uLnJld2FyZHMuUmV3YXJkT2ZmZXJEZXRhaWxzU2NyZWVuT3B0aW9ucxImEiQ4NzhlZGY4ZS02OTg4LTQwYmQtYTFlYy01NThjNzNkN2E3ZmU=';
export const MILESTONE_DEALS_DEEPLINK = 'CNMEyhSCAQpYdHlwZS5nb29nbGVhcGlzLmNvbS90eXBlcy5kZWVwbGlua19zY3JlZW5fb3B0aW9uLnJld2FyZHMuUmV3YXJkT2ZmZXJEZXRhaWxzU2NyZWVuT3B0aW9ucxImEiQ3MWE3M2QzOC0xN2YxLTRiYzAtYTZjOC05Y2EyNTFmNTJlZWQ=' ;
export const ALL_TRAVEL_OFFERS_DEEPLINK = 'CJIE';

export const features = [
    {
      id: 1,
      icon: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.ONE_ICON,
      title: "Enable International usage",
      image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.CARD_USAGE_SETTING,
    },
    {
      id: 2,
      icon: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.TWO_ICON,
      title: "View daily ATM limits for any country",
      image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.TRAVEL_BENEFITS,
    },
    {
      id: 3,
      icon: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.THREE_ICON,
      title: "Check real-time exchange rates",
      image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.ATM_USAGE_SETTING,
    },
  ];

  export const deals = [
    { id: 1, image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.FLIGHT_OFFERS },
    { id: 2, image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.HOTEL_OFFERS },
    { id: 3, image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DUTY_FREE_OFFERS_IMG },
    { id: 4, image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.TAXI_OFFERS_IMG },
    {
      id: 5,
      image: DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.TOURIST_ATTRACTION_OFFERS,
    },
  ];
