import React from 'react';
import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";

import { MILESTONE_DEALS_DEEPLINK, WEB_CALLBACK_OBJECTS } from '../constants';
import { ClientPlatform, triggerMobileEvents } from '../utils';

import { BackgroundImage, BannerContent, BannerImage, BannerLine, BannerLine2, FeatureCard, FeatureGrid, FeatureIcon, FeatureImage, FeatureTitle, ReadyToSaveSection, SectionTitle } from './styles';


const features = [
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

export const ReadyToSave: React.FC = () => {

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
                <BackgroundImage src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.MILESTONE_DEALS} alt="Banner Background" />
            </BannerImage>
            <BannerLine >
            </BannerLine>
            <BannerLine2 >
            </BannerLine2>
            <SectionTitle>Ready to save as you travel?</SectionTitle>
            <BannerContent src={DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.LINE_STAR_ICON} alt="Banner Content" />
            <FeatureGrid>
                {features.map((feature) => (
                    <FeatureCard key={feature.id}>
                        <FeatureIcon src={feature.icon} alt={`${feature.title} Icon`} />
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureImage src={feature.image} alt={feature.title} />
                    </FeatureCard>
                ))}
            </FeatureGrid>
        </ReadyToSaveSection>
    );
};

export default ReadyToSave;