import styled from 'styled-components';
import { Device } from '../Themes/Device';

const StyledLanding = styled.div`
    margin: auto;
    max-width: 1440px;
    padding-bottom: 56px;

    @media ${Device.tab}{
        padding-bottom: 100px;
    }

    @media ${Device.desktop}{
        padding-bottom: 180px;
    }
`;

const StyledContainer = styled.div<{ bgColor?: string }>`
    background-color: ${(props) => props.bgColor || props.theme.color.CHALK_GREY};
`;

const PosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const HomePosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        height: 100vh;
        min-height: 700px;
        max-height: 1080px;
        margin-bottom: 140px;
        position: relative;
    }
`;

// this is getting used only for mobile devices
const HamBurgerContainer = styled.div<{ isOpen: boolean }>`
    padding-top: 15px;
    background-color: ${(props) => (props.isOpen ? props.theme.color.NERO : 'transparent')};
    height: ${(props) => (props.isOpen ? '100vh' : 'auto')};
    position: ${(props) => (props.isOpen ? 'fixed' : 'static')};
    width: 100%;
    z-index: 20;
    top: 0;

    @media ${Device.tab} {
        display: none;
    }
`;

const IOSButton = styled.button`
    border: none;
    background: none;
    color: ${(props) => props.theme.color.GREY_2};
    cursor: pointer;
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    outline: none;
`;

export {
    StyledContainer,
    StyledLanding,
    PosterContainer,
    HomePosterContainer,
    HamBurgerContainer,
    IOSButton,
};
