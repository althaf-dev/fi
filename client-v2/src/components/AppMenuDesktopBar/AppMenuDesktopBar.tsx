import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useNavigate } from '@/utils/router';

import { Font, PrimaryButton, Image } from '../Abstract';
import { LogoWrapper } from '../AppHeader/styles';
import { Device } from '../../Themes/Device';

import QRCodeSection from './QRCodeSection';
import MenuItemsDropdown from './MenuItemsDropdown';
import MenuPagesDropdown from './MenuPagesDropdown';

import { selectDynamicConfig } from '@/rtk/components/App/selectors';
import { CONSUL_META_INFO_PATH_NAME } from '@/constants/AppConstant';

import { NAV_AND_ACCORDION_DATA, NAVIGATION_URLS } from '../../constants/AppConstant';
import { LOGOS_URL_MAP } from '../../constants/AssetConstants';

const MenuActionButtonHolder = styled(Font)`
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-align: center;

    & > div {
        padding: 16px 12px;
        cursor: pointer;
    }

    & > div:not(:first-child) {
        margin-left: 6px;
    }

    @media ${Device.desktop} {
        & > div {
            padding: 16px;
        }

        & > div:not(:first-child) {
            margin-left: 28px;
        }
        position: relative;
    }
`;

const StyledLink = styled(Link)`
    all: unset;
    color: inherit;
    cursor: pointer;
`;

const StyledDiv = styled.div`
    position: relative;

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

// this is getting used only for desktop devices
const FixHeaderPrimaryButtonHolder = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        margin-left: 44px !important;
        padding: 0 !important;
        width: 154px;
    }
`;

const MenuContainer = styled.div`
    position: relative;
`;

interface AppMenuDesktopBarProps {
    trackingPayload?: any;
    defaultFontColor?: 'GAINSBORO' | 'SILVER_2' | 'GREY_2';
    dataTestId?: string;
}

const AppMenuDesktopBar = (props: AppMenuDesktopBarProps) => {
    const { defaultFontColor, trackingPayload, dataTestId } = props;

    const navigate = useNavigate();

    const [isQRCodeShown, setIsQRCodeShown] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState(0);

    const dynamicConfigInfo: any = useSelector(
        selectDynamicConfig(CONSUL_META_INFO_PATH_NAME),
        shallowEqual,
    );

    const dynamicConfigNavigation = dynamicConfigInfo?.navigation || {};

    const dynamicPageProps = {
        hideSalaryAccountItem: dynamicConfigNavigation?.hideSalaryAccount,
        hideCreditCardWaitlistPageItem: dynamicConfigNavigation?.hideCreditCardWaitlistPage,
    };

    const showQRCode = () => {
        setIsQRCodeShown(true);
    };

    const hideQRCode = () => {
        setIsQRCodeShown(false);
    };

    const redirectToHomePage = () => {
        navigate('/');
    };

    return (
        <>
            <LogoWrapper onClick={redirectToHomePage}>
                <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='Fi Money' />
            </LogoWrapper>
            <MenuContainer>
                <MenuActionButtonHolder
                    tagType='text'
                    font='button'
                    color={defaultFontColor}
                >
                    {NAV_AND_ACCORDION_DATA.map((item: any) => {
                        // list of internal site links
                        if (item.menuItems) {
                            return (
                                <React.Fragment key={item.id}>
                                    <StyledDiv
                                        key={item.id}
                                        onMouseOver={() => setActiveMenuId(item.id)}
                                        onMouseLeave={() => setActiveMenuId(0)}
                                    >
                                        {item.label}

                                        {item.menuPage ? (
                                            <MenuPagesDropdown
                                                visible={activeMenuId === item.id}
                                                data={item.menuItems}
                                                dynamicConfigInfo={dynamicConfigInfo}
                                                onClick={() => setActiveMenuId(0)}
                                                dataTestId={dataTestId}
                                                isCards={item.label === 'Cards'}
                                            />
                                        ) : (
                                            <MenuItemsDropdown
                                                visible={activeMenuId === item.id}
                                                data={item.menuItems}
                                                onClick={() => setActiveMenuId(0)}
                                                dynamicConfigInfo={dynamicConfigInfo}
                                                dataTestId={dataTestId}
                                            />
                                        )}
                                    </StyledDiv>
                                </React.Fragment>
                            );
                        }

                        if (item.isDeprecated) return null;

                        // external site link
                        if (item.label === NAVIGATION_URLS.CREDIT_CARD_WAITLIST.label && dynamicPageProps.hideCreditCardWaitlistPageItem) return null;

                        // external link
                        if (item.external) {
                            return (
                                <StyledDiv key={item.id}>
                                    <a href={item.url}>{item.label}</a>
                                </StyledDiv>
                            );
                        }

                        // internal site link
                        if (item.label === NAVIGATION_URLS.SALARY_ACCOUNT.label && dynamicPageProps.hideSalaryAccountItem) return null;

                        return (
                            <StyledDiv key={item.id}>
                                <StyledLink href={item.url}>{item.label}</StyledLink>
                            </StyledDiv>
                        );
                    })}
                    <FixHeaderPrimaryButtonHolder>
                        <PrimaryButton
                            isQRCodeShown={isQRCodeShown}
                            label='DOWNLOAD FI'
                            onMouseOver={showQRCode}
                            onMouseLeave={hideQRCode}
                            bgcolor=''
                            disableFontColor=''

                        />
                    </FixHeaderPrimaryButtonHolder>
                </MenuActionButtonHolder>
                <QRCodeSection
                    trackingPayload={trackingPayload}
                    isQRCodeShown={isQRCodeShown}
                    showQRCode={showQRCode}
                    hideQRCode={hideQRCode}
                />
            </MenuContainer>
        </>
    );
};

AppMenuDesktopBar.defaultProps = {
    trackingPayload: {},
    defaultFontColor: 'SILVER_2',
    dataTestId: '',
};

export default AppMenuDesktopBar;
