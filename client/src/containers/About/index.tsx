import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import {
    AppHeader, AppFooter, AppImageGridSection, PosterContainer,
    StyledContainer, StyledLanding, SecureMoneySection,
} from '../../components';
import { LOADED_ABOUT_US_WEBSITE, trackEvent } from '../../events';
import { ABOUT_PAGE_TRACKING_PAYLOAD as trackingPayload } from '../../events/constants';
import { queryParams } from '../../utils/queryParams';
import { WEBP_URL, PNGS_URL } from '../../constants/AssetConstants';

import AboutPosterSection from './AboutPosterSection/AboutPosterSection';
import AboutScrollCardSection from './AboutScrollCardSection/AboutScrollCardSection';
import AboutInfoSection from './AboutInfoSection/AboutInfoSection';
import AboutTeamSection from './AboutTeamSection/AboutTeamSection';

// eslint-disable-next-line no-var
declare var window: any;

const InfoCardDetailArray: Array<{
    id: number,
    cardType?: 'leftImage' | 'rightImage';
    titleText: ReactNode;
    descriptionText: ReactNode;
    imageIcon: any;
    fallBackImage: any;
}> = [
    {
        id: 1,
        cardType: 'rightImage',
        titleText: 'Is Fi a bank?',
        descriptionText: (
            <span>
                No, we aren&apos;t. Here&apos;s what we do – build on the existing infrastructure of our banking partner
                & take it to a whole new level. Think of it as banking 2.0 for a generation of digital natives.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-1.webp`,
        fallBackImage: `${PNGS_URL}about-section-1.png`,
    },
    {
        id: 2,
        cardType: 'leftImage',
        titleText: 'So, what is Fi?',
        descriptionText: (
            <span>
                Fi is a money management app emboldened by cutting-edge tech. Fi helps you know your money, grow your money and organise your funds.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-2.webp`,
        fallBackImage: `${PNGS_URL}about-section-2.png`,
    },
    {
        id: 3,
        cardType: 'rightImage',
        titleText: (
            <>
                <span>Built from </span>
                <span>the ground up</span>
            </>
        ),
        descriptionText: (
            <span>
                It&apos;s hard to secure anything if you don&apos;t know how it works. That&apos;s why we&apos;ve built
                Fi from its core without any short-cuts.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-3.webp`,
        fallBackImage: `${PNGS_URL}about-section-3.png`,
    },
    {
        id: 4,
        cardType: 'leftImage',
        titleText: 'In partnership with a licensed bank',
        descriptionText: (
            <span>
                You access a Savings Account via our partnership with Federal Bank.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-4.webp`,
        fallBackImage: `${PNGS_URL}about-section-4.png`,
    },
    {
        id: 5,
        cardType: 'rightImage',
        titleText: 'With tomorrow’s security, today',
        descriptionText: (
            <span>
                To safeguard all of your financial activities and have zero compromises on your privacy.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-5.webp`,
        fallBackImage: `${PNGS_URL}about-section-5.png`,
    },
];

const AboutPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.LIGHT_YELLOW};
`;

/* eslint-disable camelcase */
interface QueryParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
}
/* eslint-enable camelcase */

const About = () => {
    const location = useLocation();

    const trackGtagEvent = () => {
        if (window.gtag) {
            window.gtag('set', 'page', '/about');
            window.gtag('send', 'pageview');
        }
    };

    // track loaded page event
    useEffect(() => {
        const params: QueryParams = queryParams(location.search);
        const { ...utmParams } = params;

        trackEvent(LOADED_ABOUT_US_WEBSITE, {
            ...trackingPayload,
            ...utmParams,
        });

        trackGtagEvent();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledContainer>
            <AboutPosterContainer>
                <AppHeader
                    activeMenu='ABOUT'
                    fontColor='GREY_2'
                    menuColor='GRAY'
                    trackingPayload={trackingPayload}
                />
                <AboutPosterSection />
            </AboutPosterContainer>

            <StyledLanding>
                {InfoCardDetailArray.map((value, index: number) => (
                    <AboutInfoSection
                        key={value.id}
                        isThirdCard={index === 2}
                        cardType={value.cardType}
                        titleText={value.titleText}
                        descriptionText={value.descriptionText}
                        imageIcon={value.imageIcon}
                        fallBackImage={value.fallBackImage}
                    />
                ))}
                <AboutScrollCardSection />
                <AboutTeamSection />
                <AppImageGridSection />
                <SecureMoneySection />
            </StyledLanding>

            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default About;
