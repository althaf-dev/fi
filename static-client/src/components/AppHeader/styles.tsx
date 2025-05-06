import styled from 'styled-components';

import { Device } from '@/Themes/Device';

// this is getting used only for tablet & desktop devices
const HeaderWrapper = styled.div`
    display: none;

    @media ${Device.tab} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        max-width: 1440px;
        padding: 30px 40px 10px;
    }

    @media ${Device.desktop} {
        padding: 26px 85px;
    }
`;

const LogoWrapper = styled.div`
    width: 32px;
    cursor: pointer;

    @media ${Device.tab} {
        width: 42px;
    }

    @media ${Device.desktop} {
        width: 48px;
    }
`;

const FixedHeaderContainer = styled.div<{ headerBackgroundColor: boolean, hideFixedHeader: boolean }>`
    background-color: ${(props) => (props.headerBackgroundColor
        ? props.theme.color.PATTERNS_BLUE_TWO : props.theme.color?.CHALK_GREY)};
    position: fixed;
    display: ${(props) => (props.hideFixedHeader ? 'none' : 'block')};
    top: 0px;
    width: 100%;
`;

export {
    HeaderWrapper,
    LogoWrapper,
    FixedHeaderContainer,
};
