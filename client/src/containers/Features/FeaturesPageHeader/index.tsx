import React, { useState } from 'react';

import { useWindowDimensions } from '../../../hooks';
import { WINDOW_SIZE } from '../../../Themes/Device';

import { AppPhoneFixHeader, AppMenuDesktopBar, AppFixHeader, HamBurgerContainer } from '../../../components';
import { HeaderWrapper, FixedHeaderContainer } from '../../../components/AppHeader/styles';

interface FeaturesPageHeaderProps {
    activeMenu?: 'ABOUT' | 'CAREERS' | 'FAQ' | 'OUR TEAM' | 'FEATURES';
    fontColor?: 'GAINSBORO' | 'SILVER_2' | 'GREY_2';
    menuColor?: 'WHITE' | 'GRAY';
    trackingPayload?: any;
    headerBackgroundColor: boolean;
    hideFixedHeader: boolean;
}

const FeaturesPageHeader = (props: FeaturesPageHeaderProps) => {
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    const {
        activeMenu, fontColor, menuColor, trackingPayload, headerBackgroundColor, hideFixedHeader,
    } = props;

    const commonHeader = (
        <HeaderWrapper>
            <AppMenuDesktopBar
                defaultFontColor={fontColor}
                trackingPayload={trackingPayload}
            />
        </HeaderWrapper>
    );

    return (
        <>
            {/* hamburger menu */}
            {width < WINDOW_SIZE.DESKTOP
                ? (
                    <AppFixHeader
                        activeMenu={activeMenu}
                        trackingPayload={trackingPayload}
                    />
                )
                : null}
            {
                // mobile header view
                // eslint-disable-next-line no-nested-ternary
                width < WINDOW_SIZE.TAB ? (
                    <HamBurgerContainer isOpen={isOpen}>
                        <AppPhoneFixHeader
                            menuType={menuColor}
                            activeMenu={activeMenu}
                            onMenuToggle={(value) => setIsOpen(value)}
                            trackingPayload={trackingPayload}
                        />
                    </HamBurgerContainer>
                ) : width >= WINDOW_SIZE.DESKTOP
                    // desktop header view
                    ? (
                        <FixedHeaderContainer
                            headerBackgroundColor={headerBackgroundColor}
                            hideFixedHeader={hideFixedHeader}
                        >
                            {commonHeader}
                        </FixedHeaderContainer>
                    )
                    : (
                        commonHeader
                    )
            }
        </>
    );
};

FeaturesPageHeader.defaultProps = {
    activeMenu: '',
    fontColor: 'SILVER_2',
    menuColor: 'WHITE',
    trackingPayload: {},
};

export default FeaturesPageHeader;
