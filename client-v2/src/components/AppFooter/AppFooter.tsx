/* eslint-disable react/require-default-props */
/* eslint-disable max-len, no-nested-ternary */

'use client';

import React, { useContext, useMemo } from 'react';
import { shallowEqual, } from 'react-redux';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from '@/utils/router';

import { Device, WINDOW_SIZE } from '../../Themes/Device';
import { useWindowDimensions, useIsSSR } from '../../hooks';
import { HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT, trackEvent } from '../../events';
import { MetaInfoContext } from '@/context';

import { useSelector } from 'react-redux';
import {
    NAV_AND_ACCORDION_DATA, FOOTER_NAVIGATION, EXTERNAL_JOBS_URL, FOOTER_NAVIGATION_TAB, APP_URLS, NAVIGATION_URLS,
} from '../../constants/AppConstant';
import { LOGOS_URL_MAP, ICONS_URL_MAP } from '../../constants/AssetConstants';

import AppAssistanceCard from '../AppAssistanceCard';
import FiPronouncedCard from '../FiPronouncedCard';
import SpeechIcon from '../SpeechIcon';

import { Font, Flex, Image } from '../Abstract';

import { selectDynamicConfig } from '@/rtk/components/App/selectors';
import { CONSUL_META_INFO_PATH_NAME } from '@/constants/AppConstant';

import OverlayGridCard from './OverlayGridCard';
import {
    FI_PRONUNCIATION_DATA, APP_ASSISTANCE_DATA, SOCIAL_MEDIA_LINK_DATA, FOOTER_LINK_DATA, PATHS_TO_SHOW_SEBI_REGIONAL_OFFICE_ADDRESS,
} from './constants';

import {
    Container, Wrapper, SubWrapper, GridCardWrapper, GridCardLinkWrapper, FiLogo,
    FiPronouncedContainer, FiPronouncedLabel, FiPronouncedCardWrapper, SecondRowContainer,
    SecondRowFirstColumnWrapper, FooterLink, StyledLink, AppAssistanceLabel,
    AppAssistanceCardWrapper, SocialIcon, FooterLinkWrapper, AboutFiContainer, CopyrightContainer, CopyrightLabel, AppSubAssistanceLabel,
} from './styled';
import HeaderAccordionCr from '@/components/AppHeader/AppPhoneFixHeader/AppPhoneHeaderAccordionContainer';
import filterUrlFromDynamicConfig from '../../utils/filterUrlFromDynamicConfig';
import AboutFooterContent from './AboutFooterContent';
import { ElementTypes, makeDataTestId } from '../../DataTestIds';

interface AppFooterProps {
    trackingPayload?: object;
    noPadding?: boolean;
    backgroundColor?: string;
    showSecondaryContent?: boolean;
    screenName?: string;
    parentComponent?: string;
    salaryProgram?: boolean;
}

const NavLinkParentGrid = styled.div`
    display: none;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
    width: 100%;
    margin-bottom: 20px; 
    
    @media ${Device.tab} {
        display: grid;
    }

    @media ${Device.desktop} {
        grid-template-columns: repeat(6, auto);
    }
`;

const NavigationGrid = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const NavSubitemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Subtext = styled(Font)`
    color: ${(props) => props.theme.color.WHITE};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
    cursor: pointer;
`;

const Subtextheading = styled(Subtext) <{ isFirstIndex?: boolean }>`
    color: ${(props) => props.theme.color.STEEL};
    font-weight: 600 !important;
    text-transform: capitalize;
    margin-top: ${(props) => (!props.isFirstIndex ? '16px' : '0')};
    cursor: default;
`;

const SubTextComponent = (subItem: any) => {
    const item = subItem?.subItem;

    return item.external ? (
        <Subtext
            key={item.id}
            font='labelVariantThree'
            tagType='text'
        >
            <a href={item.url}>{item.label}</a>
        </Subtext>
    ) : (
        <Subtext
            key={item.id}
            font='labelVariantThree'
            tagType='text'
        >
            <Link href={item.url}>
                {item.label}
            </Link>
        </Subtext>
    );
};

const currentYear = new Date().getFullYear();

const AppFooter = (props: AppFooterProps) => {
    const { appAssistanceData: appAssistanceMetaData } = useContext(MetaInfoContext);

    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();
    const { pathname } = useLocation();

    const showSebiRegionalOfficeAddress = useMemo(() => {
        const pathInfo = PATHS_TO_SHOW_SEBI_REGIONAL_OFFICE_ADDRESS
            .find((route) => route === pathname);

        // If matching path found, then show address
        if (pathInfo) return true;

        // else do not show
        return false;
    }, [pathname]);

    const footerLinkData = useMemo(() => {
        const filteredFooterLinkData = FOOTER_LINK_DATA.filter((pathInfo) => {
            const { hiddenPathsList = [], showPathsList = [] } = pathInfo;

            // first check if the link item needs to be shown for the current path
            const showPath = showPathsList.find((hiddenPathName) => hiddenPathName === pathname);

            // if found, render the link
            if (showPath) return true;

            // if there is a showPathsList and the current path is not there in it, do not show the link
            if (!showPath && showPathsList.length > 0) return false;

            // then check if the link needs to be hidden for the current path
            const hidePath = hiddenPathsList.find((hiddenPathName) => hiddenPathName === pathname);

            // if found, then hide the link
            if (hidePath) return false;

            // if none satisfy, show the link on the page
            return true;
        });

        const modifiedFooterLinkData = filteredFooterLinkData.map((pathInfo) => {
            const { urlMap } = pathInfo;

            if (!urlMap) return pathInfo;

            if (!urlMap[pathname]) return pathInfo;

            // since urlMap exists, modify the url from the default one
            return {
                ...pathInfo,
                ...urlMap[pathname],
            };
        });

        return modifiedFooterLinkData;
    }, [pathname]);

    const {
        trackingPayload = {},
        noPadding = false,
        showSecondaryContent = false,
        screenName = '',
        parentComponent = '',
        salaryProgram = false,
        backgroundColor = '',
    } = props;
    const {
        hideFooterSection, hideInAppChatLabel, hidePhoneNumberLabel, hideEmailLabel,
    } = appAssistanceMetaData;
    const hideAppAssistanceFooterSection = hideFooterSection
        || (hideInAppChatLabel && hidePhoneNumberLabel && hideEmailLabel);

    const onSocialMediaIconClick = (value: any) => {
        const trackingData = {
            ...trackingPayload,
            method: value,
        };

        trackEvent(HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT, trackingData);
    };

    const dynamicConfigInfo = useSelector(
        selectDynamicConfig(CONSUL_META_INFO_PATH_NAME),
        shallowEqual,
    );

    const onNavigate = (defaultUrl: string, alternateUrl?: string) => () => {
        if (alternateUrl && !isSSR && Number(width) < WINDOW_SIZE.DESKTOP) {
            navigate(alternateUrl);
        } else {
            navigate(defaultUrl);
        }
    };

    return (
        <Container noPadding={noPadding} backgroundColor={backgroundColor || '#f5f5f5'}>
            <Wrapper>
                <SubWrapper
                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'FooterSubWrapper')}
                >

                    {
                        !salaryProgram ? (
                            <>
                                <GridCardWrapper
                                    data-test-id={makeDataTestId(screenName, 'FooterSubWrapper', ElementTypes.Container, 'GridCardWrapper')}
                                >
                                    <OverlayGridCard
                                        type={1}
                                        isFirstCard
                                        onClick={onNavigate(APP_URLS.PRIVACY_PAGE)}
                                        font={(
                                            <Font font='h4VariantOne' tagType='text' color='FI_GREEN'>
                                                Your Privacy.
                                                {
                                                    !isSSR && Number(width) > WINDOW_SIZE.DESKTOP ? (
                                                        <>
                                                            <br />
                                                            You are in control.
                                                        </>
                                                    ) : null
                                                }
                                                <br />
                                                Minus the jargon.
                                            </Font>
                                        )}
                                        action={(
                                            <GridCardLinkWrapper>
                                                <Font font='button' tagType='span' color='WHITE'>
                                                    <Image
                                                        icon={ICONS_URL_MAP.TOP_RIGHT_ARROW}
                                                        alt='arrow'
                                                        objectType='contain'
                                                    />
                                                </Font>
                                            </GridCardLinkWrapper>
                                        )}
                                        screenName={screenName}
                                        parentComponent='GridCardWrapper'
                                        name='YouAreInControl'
                                    />

                                    {/* Currently we have no any text to show inside the mobile footer for the credit card that why we are keeping it only for the desktop page and on the mobile we are showing fees page */}
                                    {
                                        !isSSR && Number(width) > WINDOW_SIZE.DESKTOP ? (
                                            <a aria-label='credit-card-page' href={APP_URLS.CREDIT_CARD_PAGE} target='_blank' rel='noreferrer'>
                                                <OverlayGridCard
                                                    type={2}
                                                    font={(
                                                        <Font font='h4VariantOne' tagType='text' color='FI_PINK'>
                                                            Finally!
                                                            <br />
                                                            A Credit Card made
                                                            <br />
                                                            just for you
                                                        </Font>
                                                    )}
                                                    action={(
                                                        <GridCardLinkWrapper>
                                                            <Font font='button' tagType='span' color='WHITE'>
                                                                <Image
                                                                    icon={ICONS_URL_MAP.TOP_RIGHT_ARROW}
                                                                    alt='arrow'
                                                                    objectType='contain'
                                                                />
                                                            </Font>
                                                        </GridCardLinkWrapper>
                                                    )}
                                                    screenName={screenName}
                                                    parentComponent='GridCardWrapper'
                                                    name='ACreditCardMade'
                                                />
                                            </a>
                                        ) : (
                                            <OverlayGridCard
                                                type={2}
                                                onClick={onNavigate(NAVIGATION_URLS.FEES.url)}
                                                font={(
                                                    <Font font='h4VariantOne' tagType='text' color='FI_PINK'>
                                                        No Hidden
                                                        <br />
                                                        Fees!
                                                    </Font>
                                                )}
                                                action={(
                                                    <GridCardLinkWrapper>
                                                        <Font font='button' tagType='span' color='WHITE'>
                                                            <Image
                                                                icon={ICONS_URL_MAP.TOP_RIGHT_ARROW}
                                                                alt='arrow'
                                                                objectType='contain'
                                                            />
                                                        </Font>
                                                    </GridCardLinkWrapper>
                                                )}
                                                screenName={screenName}
                                                parentComponent='GridCardWrapper'
                                                name='NoHiddenFees'
                                            />
                                        )
                                    }

                                    <a aria-label='external-jobs' href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
                                        <OverlayGridCard
                                            type={2}
                                            font={(
                                                <Font font='h4VariantOne' tagType='text' color='FI_LIGHT_BLUE'>
                                                    {
                                                        !isSSR && Number(width) > WINDOW_SIZE.DESKTOP ? (
                                                            <>
                                                                Join the team and
                                                                <br />
                                                                help us build the
                                                                <br />
                                                                future of fintech.
                                                            </>
                                                        ) : (
                                                            <>
                                                                Join the
                                                                <br />
                                                                team.
                                                            </>
                                                        )
                                                    }
                                                </Font>
                                            )}
                                            action={(
                                                <GridCardLinkWrapper>
                                                    <Font font='button' tagType='span' color='WHITE'>
                                                        <Image
                                                            icon={ICONS_URL_MAP.TOP_RIGHT_ARROW}
                                                            alt='arrow'
                                                            objectType='contain'
                                                        />
                                                    </Font>
                                                </GridCardLinkWrapper>
                                            )}
                                            screenName={screenName}
                                            parentComponent='GridCardWrapper'
                                            name='JoinTheTeam'
                                        />
                                    </a>
                                </GridCardWrapper>

                                <NavLinkParentGrid>
                                    {
                                        (!isSSR && Number(width) > WINDOW_SIZE.DESKTOP ? FOOTER_NAVIGATION : FOOTER_NAVIGATION_TAB)?.map((item) => (
                                            <NavigationGrid key={item.id}>
                                                {
                                                    item.menuItems.filter((filteredItem) => !filterUrlFromDynamicConfig(filteredItem.label, dynamicConfigInfo)).map((subItem: any) => (
                                                        <NavSubitemContainer key={subItem.id}>
                                                            {!subItem?.url ? (
                                                                <Subtextheading
                                                                    font='labelVariantThree'
                                                                    tagType='text'
                                                                    isFirstIndex={subItem.id === 1}
                                                                >
                                                                    {subItem.label}
                                                                </Subtextheading>
                                                            ) : (
                                                                <SubTextComponent subItem={subItem} />
                                                            )}
                                                        </NavSubitemContainer>
                                                    ))
                                                }
                                            </NavigationGrid>
                                        ))
                                    }
                                </NavLinkParentGrid>

                                <HeaderAccordionCr data={NAV_AND_ACCORDION_DATA} isFooter />

                            </>
                        ) : null
                    }

                    <SecondRowContainer>
                        <SecondRowFirstColumnWrapper>
                            <FiLogo>
                                <Image loadingType='lazy' icon={LOGOS_URL_MAP.FI_LOGO_FOOTER} alt='Fi logo' />
                            </FiLogo>

                            <FiPronouncedContainer>
                                <FiPronouncedLabel>
                                    <Font font='pSmallVariantFour' tagType='text' color='TEXT_GREY_1'>
                                        Pronounced&nbsp;
                                        <Font font='p2' tagType='span' color='WHITE'>
                                            {' Fī(-ē) '}
                                        </Font>
                                        and sounds like
                                        <SpeechIcon />
                                    </Font>
                                </FiPronouncedLabel>

                                <FiPronouncedCardWrapper>
                                    {FI_PRONUNCIATION_DATA.map((item) => (
                                        <FiPronouncedCard
                                            key={item.id}
                                            text={item.text}
                                            icon={item.icon}
                                            alt={item.alt}
                                        />
                                    ))}
                                </FiPronouncedCardWrapper>
                            </FiPronouncedContainer>
                            {
                                !salaryProgram ? (
                                    <>
                                        <AppAssistanceLabel
                                            hide={hideAppAssistanceFooterSection}
                                            font='pSmall'
                                            tagType='text'
                                            color='TEXT_GREY_1'
                                        >
                                            Contact Fi Money customer care
                                        </AppAssistanceLabel>

                                        <AppAssistanceCardWrapper hide={hideAppAssistanceFooterSection}>
                                            {
                                                APP_ASSISTANCE_DATA
                                                // hide label config from app assistance meta data
                                                    .filter((data) => !appAssistanceMetaData[data.key])
                                                    .map((item) => (
                                                        <AppAssistanceCard
                                                            key={item.id}
                                                            text={item.text}
                                                            mailto={item.mailto}
                                                        />
                                                    ))
                                            }
                                        </AppAssistanceCardWrapper>
                                    </>
                                ) : null
                            }

                            {showSebiRegionalOfficeAddress ? (
                                <>
                                    <AppAssistanceLabel
                                        hide={hideAppAssistanceFooterSection}
                                        font='pSmall'
                                        tagType='text'
                                        color='WHITE'
                                    >
                                        SEBI regional office address
                                    </AppAssistanceLabel>

                                    <AppSubAssistanceLabel
                                        hide={hideAppAssistanceFooterSection}
                                        font='pSmall'
                                        tagType='text'
                                        color='TEXT_GREY_1'
                                    >
                                        2nd Floor, Jeevan Mangal Building, No.4, Residency Road, Bengaluru - 560025, Karnataka. Tel. Board: +91-080-22222262/ 22222264/ 2222 2283 E-mail: bangalore-lo@sebi.gov.in
                                    </AppSubAssistanceLabel>
                                </>
                            ) : null}

                            {/* <AppSubAssistanceLabel
                                hide={hideAppAssistanceFooterSection}
                                font='pSmall'
                                tagType='text'
                                color='TEXT_GREY_1'
                            >
                                Principal officer details : Loremipsum@epifi.com
                            </AppSubAssistanceLabel> */}

                            <Flex>
                                {SOCIAL_MEDIA_LINK_DATA.map((item) => (
                                    <SocialIcon
                                        key={item.id}
                                        onClick={() => onSocialMediaIconClick(`${item.name}`)}
                                    >
                                        <a href={item.link} target='_blank' rel='noreferrer'>
                                            <Image
                                                loadingType='lazy'
                                                icon={item.icon}
                                                alt={item.name}
                                                objectType='contain'
                                            />
                                        </a>
                                    </SocialIcon>
                                ))}
                            </Flex>

                            {
                                !salaryProgram ? (
                                    <>
                                        <FooterLinkWrapper>
                                            {footerLinkData.map((item) => (
                                                <FooterLink key={item.id} font='pSmall' tagType='text' color='TEXT_GREY_1'>
                                                    {
                                                        item.external ? (
                                                            <a href={item.url} target='_blank' rel='noreferrer'>
                                                                {item.label}
                                                            </a>
                                                        ) : (
                                                            <StyledLink href={item.url}>
                                                                {item.label}
                                                            </StyledLink>
                                                        )
                                                    }
                                                </FooterLink>
                                            ))}
                                        </FooterLinkWrapper>

                                    </>
                                ) : null
                            }

                        </SecondRowFirstColumnWrapper>

                        <AboutFiContainer>
                            <AboutFooterContent showSecondaryContent={showSecondaryContent} />
                            <CopyrightContainer>
                                <CopyrightLabel font='pSmallVariantSeven' tagType='text' color='TEXT_GREY_1'>
                                    {`© epiFi Wealth Pvt. Ltd. ${currentYear}`}
                                </CopyrightLabel>

                                <CopyrightLabel font='pSmallVariantSeven' tagType='text' color='TEXT_GREY_1'>
                                    {`© epiFi Technologies Pvt. Ltd. ${currentYear}`}
                                </CopyrightLabel>
                            </CopyrightContainer>
                        </AboutFiContainer>
                    </SecondRowContainer>
                </SubWrapper>
            </Wrapper>
        </Container>
    );
};

export default AppFooter;
