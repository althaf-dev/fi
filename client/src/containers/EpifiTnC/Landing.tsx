import React, {
    useState, useEffect,
} from 'react';
import { InView } from 'react-intersection-observer';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer,
} from '../../components';
import { sectionArray } from './Constants';
import { useWindowDimensions, useIsSSR, useCreateMultipleRefs } from '../../hooks';
import { WINDOW_SIZE } from '../../Themes/Device';
import PosterSection from './PosterSection';
import {
    BarOne,
    MenuList,
    StyledLanding,
    MenuItemsSperator,
    DesktopMenuContainer,
} from '../PrivacyPolicy/PrivacyStyled/PrivacyStyled';
import { MenuContainer } from './EpifiTnCStyled/EpifiTnCStyled';
import {
    MenuSection,
} from './index';

// eslint-disable-next-line no-var
declare var window: any;

const trackingPayload = {
    flow_name: 'waitlist',
    channel: 'waitlist',
    page_name: 'epifi tnc page',
};

const Landing = () => {
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    const [activeMenu, setActiveMenu] = useState(0);
    const myRef = useCreateMultipleRefs(sectionArray?.length);

    const trackGtagEvent = () => {
        if (window.gtag) {
            window.gtag('set', 'page', '/T&C');
            window.gtag('send', 'pageview');
        }
    };

    useEffect(() => {
        trackGtagEvent();
        window.scrollTo(0, 0);
    }, []);

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

    const MenuItems = sectionArray.map(({ titleText }, index) => (
        <MenuList
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            font='h2VariantSix'
            tagType='text'
            color={activeMenu === index ? 'MINE_SHAFT' : 'FOREST_GREEN'}
            onClick={() => onTitleClick(index)}
        >
            {titleText}
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
                <DesktopMenuContainer>
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

                    {!isSSR && width >= WINDOW_SIZE.DESKTOP ? (
                        <BarOne />
                    ) : null}

                    {sectionArray.map(({ Component, titleText, threshold }, index) => (
                        <InView threshold={threshold} onChange={(inView: boolean) => onViewChange(inView, index)} key={titleText}>
                            <div ref={myRef[index]}>
                                <Component />
                            </div>
                        </InView>
                    ))}

                </div>
            </StyledLanding>

            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default Landing;
