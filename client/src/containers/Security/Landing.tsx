import React, { useEffect, useReducer, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer,
} from '../../components';
import { useWindowDimensions, useIsSSR } from '../../hooks';
import { WINDOW_SIZE } from '../../Themes/Device';
import { MenuSection } from '../PrivacyPolicy';
import {
    // DoNotFixHeaderSpan,
    // InfoOne,
    InfoTwo,
    DescriptionContainer,
    BarOne,
    MenuList,
    MenuContainer,
    StyledLanding,
    WidthHolderOne,
    MenuItemsSperator,
    DesktopMenuContainer,
    ColoredSpan,
    CardInfo,
} from '../PrivacyPolicy/PrivacyStyled/PrivacyStyled';
import PosterSection from './PosterSection';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';

// eslint-disable-next-line no-var
declare var window: any;

const trackingPayload = {
    flow_name: 'waitlist',
    channel: 'waitlist',
    page_name: 'security page',
};

const titleArray = [
    'Cloud Infrastructure',
    'Host Security',
    'Data Security',
    'Incident and Change Management',
    'Vulnerability Assessment and Penetration Testing',
    'Responsible Disclosure',
];

const PosterData = { menuDescription: 'We aim for the highest standards of safety, security and confidentiality when using your data. This policy also describes how we securely collect and preserve your information.' };

let allowFixHeader = true;
let myTimer = null;

const Landing = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const trackGtagEvent = () => {
        if (window.gtag) {
            window.gtag('set', 'page', '/Fi-Secure');
            window.gtag('send', 'pageview');
        }
    };

    const myRef = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useEffect(() => {
        trackGtagEvent();
        window.scrollTo(0, 0);
        return () => {
            if (myTimer !== null) {
                clearTimeout(myTimer);
            }
        };
    }, []);

    const scrollManager = () => {
        if (!allowFixHeader) {
            if (myTimer !== null) {
                clearTimeout(myTimer);
            }

            myTimer = setTimeout(() => {
                // allowFixHeader = true;
                forceUpdate();
            }, 300);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollManager);
        return () => window.removeEventListener('scroll', scrollManager);
    }, []);

    const onTitleClick = (index: number) => {
        allowFixHeader = true;
        if (myRef[index]) {
            myRef[index].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            if (activeMenu > index) {
                allowFixHeader = false;
            }
        }
        setActiveMenu(index);
    };

    const onViewChange = (inView: boolean, index: number) => {
        if (inView) {
            setActiveMenu(index);
        }
    };

    const MenuItems = titleArray.map((value, index) => (
        <MenuList
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            font='h2VariantSix'
            tagType='text'
            color={activeMenu === index ? 'MINE_SHAFT' : 'FOREST_GREEN'}
            onClick={() => onTitleClick(index)}
        >
            {value}
            <MenuItemsSperator />
        </MenuList>
    ));

    return (
        <StyledContainer>
            <PosterContainer>
                <AppHeader trackingPayload={trackingPayload} />
                <PosterSection />
            </PosterContainer>

            <StyledLanding>
                <DesktopMenuContainer show={!allowFixHeader}>
                    {MenuItems}
                </DesktopMenuContainer>

                <div>
                    <MenuSection titleText={PosterData.menuDescription}>
                        {!isSSR && width <= WINDOW_SIZE.DESKTOP ? (
                            <>
                                <MenuContainer>
                                    {MenuItems}
                                </MenuContainer>
                                <BarOne />
                            </>
                        ) : null}
                    </MenuSection>

                    <DescriptionContainer>
                        <WidthHolderOne>
                            <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                                TL;DR: We have deployed state-of-the-art
                                infrastructure audited by industry experts to ensure maximum security of your data.
                                But here are the details for each section -
                            </InfoTwo>
                        </WidthHolderOne>
                    </DescriptionContainer>

                    {!isSSR && width >= WINDOW_SIZE.DESKTOP ? (
                        <BarOne />
                    ) : null}

                    <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 0)}>
                        <div ref={myRef[0]}>
                            <SectionOne />
                        </div>
                    </InView>

                    <InView threshold={0.9} onChange={(inView: boolean) => onViewChange(inView, 1)}>
                        <div ref={myRef[1]}>
                            <SectionTwo />
                        </div>
                    </InView>

                    <InView threshold={0.7} onChange={(inView: boolean) => onViewChange(inView, 2)}>
                        <div ref={myRef[2]}>
                            <SectionThree />
                        </div>
                    </InView>

                    <InView threshold={1} onChange={(inView: boolean) => onViewChange(inView, 3)}>
                        <div ref={myRef[3]}>
                            <SectionFour />
                        </div>
                    </InView>

                    <InView threshold={1} onChange={(inView: boolean) => onViewChange(inView, 4)}>
                        <div ref={myRef[4]}>
                            <SectionFive />
                        </div>
                    </InView>

                    <InView threshold={0.8} onChange={(inView: boolean) => onViewChange(inView, 5)}>
                        <div ref={myRef[5]}>
                            <SectionSix />
                        </div>
                    </InView>

                    <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                        Please refer to our&nbsp;
                        <a href='/privacy' target='_blank'>
                            <ColoredSpan color='FOREST_GREEN'>
                                Privacy Policy
                            </ColoredSpan>
                        </a>
                        &nbsp;for more information.
                    </CardInfo>
                </div>
            </StyledLanding>

            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default Landing;
