import React, { useState, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

import { AppFooter, AppHeader, PosterContainer, StyledContainer } from '../../components';
import { useWindowDimensions, useIsSSR } from '../../hooks';
import { WINDOW_SIZE } from '../../Themes/Device';

import PosterSection from './PosterSection';
import MenuSection from './MenuSection';
import GeneralTermsSection from './GeneralTermsSection';
import YouAndUsSection from './YouAndUsSection';
import DefinitionsSection from './DefinitionsSection';
import ObligationsAndRightsSection from './ObligationsAndRightsSection';
import RightsOfUsageAndDataRightsSection from './RightsOfUsageAndDataRightsSection';
import NoticeSection from './NoticeSection';
import DisclaimerOfLiabilitySection from './DisclaimerOfLiabilitySection';
import IndemnitySection from './IndemnitySection';
import GoverningLawSection from './GoverningLawSection';
import ConfidentialitySection from './ConfidentialitySection';
import CommunicationFromEpifiSection from './CommunicationFromEpifiSection';
import FeesSection from './FeesSection';
import AssignmentSection from './AssignmentSection';
import InvestorCharterSection from './InvestorCharterSection';
import RegulatoryDisclosureSection from './RegulatoryDisclosureSection';
import CustomerGrievanceSection from './CustomerGrievance';
import DisclosureSection from './DisclosureSection';

import { TRACKING_PAYLOAD, MENU_ITEMS_LIST, CUSTOMER_GRIEVANCE_SECTION_HASH, INVESTOR_CHARTER_SECTION_HASH } from './constants';
import {
    MenuContainer,
    MenuList,
    StyledLanding,
    MenuItemsSperator,
    SectionSeparator,
    SectionSeparatorHolder,
    DesktopMenuContainer,
} from './styled';

const WealthTnC = () => {
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();
    const [activeMenu, setActiveMenu] = useState(0);
    const location = useLocation();

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
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const onTitleClick = (index: number) => {
        if (myRef[index]) {
            myRef[index].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setActiveMenu(index);
    };

    const onViewChange = (inView: boolean, index: number) => {
        if (inView) {
            setActiveMenu(index);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.hash === INVESTOR_CHARTER_SECTION_HASH) {
            onTitleClick(13);
        } if (location.hash === CUSTOMER_GRIEVANCE_SECTION_HASH) {
            onTitleClick(14);
        }
    }, [location]);

    const MenuItems = MENU_ITEMS_LIST.map((value, index) => (
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

    const SectionSeparatorWrapper = (
        <SectionSeparatorHolder>
            <SectionSeparator />
        </SectionSeparatorHolder>
    );

    const MenuItemsContainer = (
        <MenuContainer>
            {MenuItems}
        </MenuContainer>
    );

    const DesktopMenuItemsContainer = (
        <DesktopMenuContainer>
            {MenuItems}
        </DesktopMenuContainer>
    );

    const SectionContentWrapper = (
        <>
            <InView threshold={0.3} onChange={(inView: boolean) => onViewChange(inView, 0)}>
                <div ref={myRef[0]}>
                    <GeneralTermsSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.3} onChange={(inView: boolean) => onViewChange(inView, 1)}>
                <div ref={myRef[1]}>
                    <YouAndUsSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.1} onChange={(inView: boolean) => onViewChange(inView, 2)}>
                <div ref={myRef[2]}>
                    <DefinitionsSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.1} onChange={(inView: boolean) => onViewChange(inView, 3)}>
                <div ref={myRef[3]}>
                    <ObligationsAndRightsSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.1} onChange={(inView: boolean) => onViewChange(inView, 4)}>
                <div ref={myRef[4]}>
                    <RightsOfUsageAndDataRightsSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.2} onChange={(inView: boolean) => onViewChange(inView, 5)}>
                <div ref={myRef[5]}>
                    <NoticeSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.2} onChange={(inView: boolean) => onViewChange(inView, 6)}>
                <div ref={myRef[6]}>
                    <DisclaimerOfLiabilitySection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.3} onChange={(inView: boolean) => onViewChange(inView, 7)}>
                <div ref={myRef[7]}>
                    <IndemnitySection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.7} onChange={(inView: boolean) => onViewChange(inView, 8)}>
                <div ref={myRef[8]}>
                    <GoverningLawSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.6} onChange={(inView: boolean) => onViewChange(inView, 9)}>
                <div ref={myRef[9]}>
                    <ConfidentialitySection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 10)}>
                <div ref={myRef[10]}>
                    <CommunicationFromEpifiSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.5} onChange={(inView: boolean) => onViewChange(inView, 11)}>
                <div ref={myRef[11]}>
                    <FeesSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.9} onChange={(inView: boolean) => onViewChange(inView, 12)}>
                <div ref={myRef[12]}>
                    <AssignmentSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.1} onChange={(inView: boolean) => onViewChange(inView, 13)}>
                <div ref={myRef[13]}>
                    <InvestorCharterSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.2} onChange={(inView: boolean) => onViewChange(inView, 14)}>
                <div ref={myRef[14]}>
                    <CustomerGrievanceSection />
                </div>
            </InView>
            {SectionSeparatorWrapper}

            <InView threshold={0.4}>
                <div>
                    <RegulatoryDisclosureSection />
                </div>
            </InView>

            {SectionSeparatorWrapper}

            <InView threshold={0.2} onChange={(inView: boolean) => onViewChange(inView, 15)}>
                <div ref={myRef[15]}>
                    <DisclosureSection />
                </div>
            </InView>
        </>
    );

    return (
        <StyledContainer>
            <PosterContainer>
                <AppHeader trackingPayload={TRACKING_PAYLOAD} />
                <PosterSection />
            </PosterContainer>

            <StyledLanding>
                {DesktopMenuItemsContainer}

                <div>
                    <MenuSection>
                        {!isSSR && width <= WINDOW_SIZE.DESKTOP ? (
                            <>
                                {MenuItemsContainer}
                                {SectionSeparatorWrapper}
                            </>
                        ) : null}
                    </MenuSection>

                    {!isSSR && width >= WINDOW_SIZE.DESKTOP ? (
                        SectionSeparatorWrapper
                    ) : null}

                    {SectionContentWrapper}
                </div>
            </StyledLanding>

            <AppFooter trackingPayload={TRACKING_PAYLOAD} showSecondaryContent />
        </StyledContainer>
    );
};

export default WealthTnC;
