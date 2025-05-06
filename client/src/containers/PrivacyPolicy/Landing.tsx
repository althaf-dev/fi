import React, { useEffect, useReducer, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer,
} from '../../components';
import { useWindowDimensions, useIsSSR } from '../../hooks';
import { WINDOW_SIZE } from '../../Themes/Device';
import {
    PosterSection,
    DefinitionSection,
    MenuSection,
    InfoSection,
    ApplicabilitySection,
    DataCollectSection,
    InformationUsedSection,
    DataShareSection,
    SecureDataSection,
    RightsSection,
    PolicyUpgradeSection,
    // MenuStickyHeader,
} from './index';
import {
    // DoNotFixHeaderSpan,
    // InfoOne,
    StyledLanding,
    BarOne,
    MenuContainer,
    MenuList,
    MenuItemsSperator,
    DesktopMenuContainer,
} from './PrivacyStyled/PrivacyStyled';

// eslint-disable-next-line no-var
declare var window: any;

const trackingPayload = {
    flow_name: 'waitlist',
    channel: 'waitlist',
    page_name: 'privacy policy page',
};

const titleArray = [
    'Definitions',
    'Applicability of this policy',
    'What data do we collect and why?',
    'How is your information used?',
    'Who do we share your data with?',
    'How do we secure your data?',
    'Know your rights',
    'Policy upgrades and changes',
];

let allowFixHeader = true;
let myTimer = null;

const Landing = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const myRef = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const trackGtagEvent = () => {
        if (window.gtag) {
            window.gtag('set', 'page', '/privacy');
            window.gtag('send', 'pageview');
        }
    };

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
                    <MenuSection>
                        {!isSSR && width <= WINDOW_SIZE.DESKTOP ? (
                            <>
                                <MenuContainer>
                                    {MenuItems}
                                </MenuContainer>
                                <BarOne />
                            </>
                        ) : null}
                    </MenuSection>

                    <InfoSection />

                    {!isSSR && width >= WINDOW_SIZE.DESKTOP ? (
                        <BarOne />
                    ) : null}

                    <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 0)}>
                        <div ref={myRef[0]}>
                            <DefinitionSection />
                        </div>
                    </InView>

                    <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 1)}>
                        <div ref={myRef[1]}>
                            <ApplicabilitySection />
                        </div>
                    </InView>

                    <InView threshold={0.3} onChange={(inView: boolean) => onViewChange(inView, 2)}>
                        <div ref={myRef[2]}>
                            <DataCollectSection />
                        </div>
                    </InView>

                    <InView threshold={0.3} onChange={(inView: boolean) => onViewChange(inView, 3)}>
                        <div ref={myRef[3]}>
                            <InformationUsedSection />
                        </div>
                    </InView>

                    <InView threshold={0.3} onChange={(inView: boolean) => onViewChange(inView, 4)}>
                        <div ref={myRef[4]}>
                            <DataShareSection />
                        </div>
                    </InView>

                    <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 5)}>
                        <div ref={myRef[5]}>
                            <SecureDataSection />
                        </div>
                    </InView>

                    <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 6)}>
                        <div ref={myRef[6]}>
                            <RightsSection />
                        </div>
                    </InView>

                    <InView onChange={(inView: boolean) => onViewChange(inView, 7)}>
                        <div ref={myRef[7]}>
                            <PolicyUpgradeSection />
                        </div>
                    </InView>
                </div>
            </StyledLanding>

            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default Landing;
