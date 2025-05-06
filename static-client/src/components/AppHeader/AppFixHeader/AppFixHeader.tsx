import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Device } from '@/Themes/Device';

import AppPhoneFixHeader from '../AppPhoneFixHeader/AppPhoneFixHeader';
import AppMenuDesktopBar from '../../AppMenuDesktopBar/AppMenuDesktopBar';

// this is getting used only for tablet & desktop devices
const FixHeaderWrapper = styled.div`
    display: none;

    @media ${Device.tab} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        max-width: 1440px;
        padding: 18px 40px;
    }

    @media ${Device.desktop} {
        padding: 26px 85px;
    }
`;

const FixHeader = styled.div<{ isFixed?: boolean }>`
    background-color: ${(props) => props.theme.color?.NERO};
    box-shadow: 0px 2px 8px ${(props) => props.theme.color?.BLACK_GRBA_10};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;
    transition: all 0.3s ease;

    transform: ${(props: any) => (props.isFixed ? 'translateY(0)' : 'translateY(-100%)')};
`;

interface AppFixHeaderProps {
    activeMenu?: 'HOME' | 'ABOUT' | 'OUR TEAM' | 'CAREERS' | 'CONTACT US' | 'FEATURES' | 'FEES' | 'CALCULATORS' | 'FAQ' | 'SALARY ACCOUNT';
    trackingPayload?: object;
}

// keeping global timer var
let delayTimer : any;

const AppFixHeader = (props: AppFixHeaderProps) => {
    const [sticky, setSticky] = useState({ isFixed: false, prevOffset: 0 });

    const {
        activeMenu, trackingPayload,
    } = props;

    const headerFixer = () => {
        const pageOffset = (globalThis.window)?.scrollY;
        if (pageOffset < sticky.prevOffset) {
            // when user scrolls up
            if (pageOffset === 0) {
                // immediately hide nav bar
                setSticky({ isFixed: false, prevOffset: pageOffset });
            } else {
                setSticky({ isFixed: true, prevOffset: pageOffset });
            }
        } else {
            // when user scrolls down
            setSticky({ isFixed: false, prevOffset: pageOffset });
            clearTimeout(delayTimer); // clear timer when user scrolls down
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFixer);
        return () => window.removeEventListener('scroll', headerFixer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sticky]);

    return (
        <FixHeader isFixed={sticky.isFixed}>
            <AppPhoneFixHeader
                isFixed
                activeMenu={activeMenu}
                trackingPayload={trackingPayload}
            />
            <FixHeaderWrapper>
                <AppMenuDesktopBar
                    defaultFontColor='GAINSBORO'
                    trackingPayload={trackingPayload}
                />
            </FixHeaderWrapper>
        </FixHeader>
    );
};

AppFixHeader.defaultProps = {
    activeMenu: '',
    trackingPayload: {},
};

export default AppFixHeader;
