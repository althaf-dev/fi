import React, { useState } from 'react';

import AppFixHeader from '../AppFixHeader/AppFixHeader';
import AppPhoneFixHeader from '../AppPhoneFixHeader/AppPhoneFixHeader';
import AppMenuDesktopBar from '../AppMenuDesktopBar/AppMenuDesktopBar';
import { HamBurgerContainer } from '../StyledContainer';

import { HeaderWrapper } from './styles';

interface AppHeaderProps {
    activeMenu?: 'HOME' | 'ABOUT' | 'OUR TEAM' | 'CAREERS' | 'CONTACT US' | 'FEATURES' | 'FEES' | 'CALCULATORS' | 'FAQ' | 'SALARY ACCOUNT';
    fontColor?: 'GAINSBORO' | 'SILVER_2' | 'GREY_2';
    menuColor?: 'WHITE' | 'GRAY';
    trackingPayload?: any;
    dataTestId?: string;
}

const AppHeader = (props: AppHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        activeMenu, fontColor, menuColor, trackingPayload, dataTestId,
    } = props;

    return (
        <>
            <AppFixHeader
                activeMenu={activeMenu}
                trackingPayload={trackingPayload}
            />
            <HamBurgerContainer isOpen={isOpen}>
                <AppPhoneFixHeader
                    menuType={menuColor}
                    activeMenu={activeMenu}
                    onMenuToggle={(value) => setIsOpen(value)}
                    trackingPayload={trackingPayload}
                />
            </HamBurgerContainer>
            <HeaderWrapper>
                <AppMenuDesktopBar
                    defaultFontColor={fontColor}
                    trackingPayload={trackingPayload}
                    dataTestId={dataTestId}
                />
            </HeaderWrapper>
        </>
    );
};

AppHeader.defaultProps = {
    activeMenu: '',
    fontColor: 'SILVER_2',
    menuColor: 'WHITE',
    trackingPayload: {},
    dataTestId: '',
};

export default AppHeader;
