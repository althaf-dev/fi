import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import {
    AppHeader, AppFooter, StyledContainer, StyledLanding,
    HomePosterContainer, Image, SecureMoneySection,
} from '../../../components';
import { ICONS_URL } from '../../../constants/AssetConstants';
import { HomeComponentUniqueIds, ScreenName, Components } from '../../../DataTestIds/Home';

import {
    HeroSectionV2,
    HeroSectionSavingAccount,
    // HeroSectionDigitalBanking,
    // HeroSectionNeoBank,
    AnswerSection,
    RewardSection,
    ChatSection,
    OpenAccountSection,
    BankingSection,
    FitRulesSection,
    CommonQuestionsSection,
    ConnectedAccountSection,
} from '../containers';
import {
    HOME_PAGE_VARIANTS, ONLINE_SAVINGS_ACCOUNT_HOME_PAGE_VARIANT,
    // DIGITAL_BANKING_HOME_PAGE_VARIANT, NEO_BANK_HOME_PAGE_VARIANT,
} from '../constants';
import { ElementTypes, makeDataTestId } from '../../../DataTestIds';

const trackingPayload = {
    flow_name: 'waitlist',
    channel: 'waitlist',
    page_name: 'web home page',
};

const ArrowWrapper = styled.div`
    display:none;

    @media ${Device.desktop} {
        bottom: 0;
        cursor: pointer;
        display: block;
        left: calc(50% - 60px);
        position: absolute;
        width: 120px;
    }
`;

const Landing = () => {
    const nextSection = useRef(null);
    const location = useLocation();

    let posterSection:any;
    let isHomePageVariant:Boolean = false;
    let homePageVariant:any = HOME_PAGE_VARIANTS.HOME;
    const homePageVariantStickyFooter:any = {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goToNextSection = () => {
        window.scrollTo({
            top: nextSection.current.offsetTop,
            behavior: 'smooth',
        });
    };

    if (location.pathname === '/open-savings-account-online') {
        posterSection = (
            <HeroSectionSavingAccount />
        );
        homePageVariant = HOME_PAGE_VARIANTS.ONLINE_SAVINGS_ACCOUNT;
        isHomePageVariant = true;
        homePageVariantStickyFooter.ctaLabel = ONLINE_SAVINGS_ACCOUNT_HOME_PAGE_VARIANT.ctaLabel;
    } else {
        posterSection = (
            <HeroSectionV2 trackingPayload={trackingPayload} screenName={ScreenName} parentComponent={Components.HeroSection} />
        );
    }
    /* comment out to disable neobank/banking related changes
    else if (location.pathname === '/digital-banking-in-india') {
        posterSection = (
            <HeroSectionDigitalBanking />
        );
        homePageVariant = HOME_PAGE_VARIANTS.DIGITAL_BANKING;
        isHomePageVariant = true;
        homePageVariantStickyFooter.ctaLabel = DIGITAL_BANKING_HOME_PAGE_VARIANT.ctaLabel;
    } else if (location.pathname === '/best-neobank-in-india') {
        posterSection = (
            <HeroSectionNeoBank />
        );
        homePageVariant = HOME_PAGE_VARIANTS.NEO_BANK;
        isHomePageVariant = true;
        homePageVariantStickyFooter.ctaLabel = NEO_BANK_HOME_PAGE_VARIANT.ctaLabel;
    }
    */

    const homePageVariantLandingSection = (
        <StyledLanding data-test-id={makeDataTestId(ScreenName, Components.HomeScreenLayout, ElementTypes.Container,
            Components.HomePageVariantLandingSection)}
        >
            <BankingSection
                nextSection={nextSection}
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <ConnectedAccountSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <AnswerSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <FitRulesSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <RewardSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <ChatSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <OpenAccountSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <CommonQuestionsSection
                variant={homePageVariant}
            />
            <SecureMoneySection
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
        </StyledLanding>
    );

    const homePageLandingSection = (
        <StyledLanding data-test-id={makeDataTestId(ScreenName, Components.HomeScreenLayout, ElementTypes.Container,
            Components.HomePageLandingSection)}
        >
            <BankingSection
                nextSection={nextSection}
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <ConnectedAccountSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <AnswerSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <FitRulesSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <RewardSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <ChatSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <OpenAccountSection
                variant={homePageVariant}
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
            <SecureMoneySection
                screenName={ScreenName}
                parentComponent={Components.HomePageLandingSection}
            />
        </StyledLanding>
    );

    return (
        <StyledContainer data-test-id={HomeComponentUniqueIds.HomeScreenLayout}>
            <HomePosterContainer data-test-id={HomeComponentUniqueIds.HeroSection}>
                <AppHeader activeMenu='HOME' trackingPayload={trackingPayload} dataTestId={HomeComponentUniqueIds.NavBarElements} />
                {posterSection}
                <ArrowWrapper onClick={goToNextSection}>
                    <Image icon={`${ICONS_URL}page-down-arrow.png`} alt='page down arrow' dataTestId={makeDataTestId(ScreenName, Components.HeroSection, ElementTypes.Image, 'DownArrow')} />
                </ArrowWrapper>
            </HomePosterContainer>
            { isHomePageVariant ? homePageVariantLandingSection : homePageLandingSection }
            <AppFooter
                trackingPayload={trackingPayload}
                homePageVariant={homePageVariantStickyFooter}
            />
        </StyledContainer>
    );
};

export default Landing;
