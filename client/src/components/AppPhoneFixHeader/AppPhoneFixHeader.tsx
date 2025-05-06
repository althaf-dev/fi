import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
    trackEvent, HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT,
} from '../../events';
import { Device } from '../../Themes/Device';

import { Image } from '../Abstract';

import { SOCIAL_MEDIA_LINK_DATA } from './constants';
import HeaderAccordionCr from './AppPhoneHeaderAccordionContainer';

import { NAV_AND_ACCORDION_DATA } from '../../constants/AppConstant';
import { SVGS_URL, LOGOS_URL_MAP } from '../../constants/AssetConstants';

// this is getting used only for mobile devices
const HeaderHolder = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 15px 30px;
    background-color: ${(props) => (props.isOpen ? props.theme.color.NERO : 'transparent')};
    height: ${(props) => (props.isOpen ? '100vh' : '100%')}; /* Fallback for browsers that do not support Custom Properties */
    height: ${(props) => (props.isOpen ? 'calc(var(--vh, 1vh) * 100)' : '100%')};
    position: ${(props) => (props.isOpen ? 'fixed' : 'static')};
    width: 100%;
    z-index: 1;

    & > .nav-items > * {
        visibility: hidden;
    }

    .active > .nav-items > * {
        visibility: visible;
    }

    @media ${Device.tab} {
        display: none;
    }
`;

const MenuHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuWrapper = styled.div`
    width: 24px;
    cursor: pointer;
`;

const LogoWrapper = styled.div`
    width: 32px;
    cursor: pointer;
`;

const ActionHolder = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
    & > * {
        visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    }
`;

const MenuItemHolder = styled.div`
    margin-top: 30px;
    text-align: left;
    max-height: 650px;
    overflow-y: scroll;
`;

const SocialLinkHolder = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 85px;

    & > div {
        width: 38px;
        height: 32px;

        &:not(:last-child) {
            margin-right: 24px;
        }
    }
`;

interface AppPhoneFixHeaderProps {
    // eslint-disable-next-line react/no-unused-prop-types
    activeMenu?: 'HOME' | 'ABOUT' | 'OUR TEAM' | 'CAREERS' | 'CONTACT US' | 'FEATURES' | 'FEES' | 'CALCULATORS' | 'FAQ' | 'SALARY ACCOUNT' | 'MUTUAL FUNDS' | 'JUMP' | 'CONNECTED ACCOUNTS' | 'PAYMENTS' | 'ASK FI';
    // activeMenu?: 'Home' | 'What’s Fi' | 'Team' | 'Careers' | 'Features' | 'Fees' | 'Blog' | 'Faq';
    menuType?: 'WHITE' | 'GRAY';
    trackingPayload?: any;
    onMenuToggle?: (value: boolean) => void;
    isFixed?: boolean;
    hideMenu?: boolean;
    disableGoHome?: boolean;
}

const AppPhoneFixHeader = (props: AppPhoneFixHeaderProps) => {
    const {
        isFixed, hideMenu, menuType, trackingPayload,
        // activeMenu,
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    let trackingData = {
        ...trackingPayload,
        cta_location: 'menu',
    };

    const onMenuClick = () => {
        if (props.onMenuToggle) {
            props.onMenuToggle(!isOpen);
        }

        if (isOpen) {
            document.body.style.overflow = 'unset';
        } else {
            document.body.style.overflow = 'hidden';
        }

        setIsOpen((prev) => !prev);
    };

    useEffect(() => () => {
        document.body.style.overflow = 'unset';
    }, []);

    const onSocialMediaIconClick = (value) => {
        trackingData = {
            ...props.trackingPayload,
            method: value,
        };

        trackEvent(HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT, trackingData);
    };

    return (
        <HeaderHolder isOpen={isFixed && isOpen}>
            <MenuHolder>
                <LogoWrapper
                    onClick={() => {
                        if (!props.disableGoHome) {
                            navigate('/');
                        }
                    }}
                >
                    <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='Fi Money' loadingType='eager' />
                </LogoWrapper>

                {!hideMenu && (
                    <MenuWrapper onClick={onMenuClick}>
                        {isOpen ? (
                            <Image icon={`${SVGS_URL}menu-close.svg`} alt='Fi' />
                        ) : (
                            <Image
                                icon={menuType === 'GRAY'
                                    ? `${SVGS_URL}menu-gray.svg` : `${SVGS_URL}menu.svg`}
                                alt='Fi'
                            />
                        )}
                    </MenuWrapper>
                )}
            </MenuHolder>

            <ActionHolder isOpen={isOpen}>
                <MenuItemHolder>
                    <HeaderAccordionCr data={NAV_AND_ACCORDION_DATA} isFooter={false} onClick={onMenuClick} />
                </MenuItemHolder>

                <SocialLinkHolder>
                    {SOCIAL_MEDIA_LINK_DATA.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => onSocialMediaIconClick(`${item.name}`)}
                            aria-hidden='true'
                        >
                            <a href={item.link} target='_blank' rel='noreferrer'>
                                <Image icon={item.icon} alt={item.name} />
                            </a>
                        </div>
                    ))}
                </SocialLinkHolder>
            </ActionHolder>
        </HeaderHolder>
    );
};

AppPhoneFixHeader.defaultProps = {
    trackingPayload: {},
    onMenuToggle: () => {},
    isFixed: false,
    hideMenu: false,
    disableGoHome: false,
    activeMenu: '',
    menuType: '',
};

export default AppPhoneFixHeader;
