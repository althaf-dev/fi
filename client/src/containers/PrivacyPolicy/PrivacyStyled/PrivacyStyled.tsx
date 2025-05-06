import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components/Abstract';
import {
    SectionContainer,
    Bar,
    WidthHolder,
    TitleTextHolder,
    TitleText,
    Card,
} from '../../TnC/TnCStyled/TnCStyled';

const InfoOne = styled(Font)`
    text-align: center;

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media ${Device.tab} {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    @media ${Device.desktop} {
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
`;

const InfoTwo = styled(InfoOne)`
    text-align: left;
    margin-bottom: 60px;

    @media ${Device.tab} {
        margin-bottom: 80px;
    }

    @media ${Device.desktop} {
        margin-bottom: 100px;
    }
`;

const InfoThree = styled(InfoOne)`
    text-align: left;

    @media ${Device.tab} {
        margin-bottom: 60px;
    }

    @media ${Device.desktop} {
        margin-bottom: 34px;
    }
`;

const CardInfo = styled(InfoOne)`
    margin-top: 15px;
    margin-bottom: 40px;
    text-align: left;

    @media ${Device.tab} {
        margin-bottom: 60px;
    }

    @media ${Device.desktop} {
        margin-top: 20px;
        margin-bottom: 40px;
    }
`;

const CardInfoOne = styled(Font)`
    text-align: left;
    margin-bottom: 60px;

    @media ${Device.tab} {
        margin-bottom: 80px;
    }

    @media ${Device.desktop} {
        margin-bottom: 100px;
    }
`;

const CardMiddleInfo = styled(InfoOne)`
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: left;

    @media ${Device.tab} {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;

const CardFooterInfo = styled(Font)`
    margin-top: 40px;
    text-align: left;
    margin-bottom: 60px;

    @media ${Device.tab} {
        margin-top: 60px;
        margin-bottom: 80px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
        margin-bottom: 100px;
    }
`;

const CardHolder = styled(TitleTextHolder)<{marginBottom?: boolean}>`
    text-align: left;

    & > div:last-child {
        margin-bottom: ${(props) => (props.marginBottom ? '0px' : '60px')};
    }

    @media ${Device.tab} {
        display: flex;
        margin-bottom: ${(props) => (props.marginBottom ? '0px' : '80px')};
        & > div {
            flex: 1;
        }

        & > div:first-child {
            margin-right: 16px;
        }

        & > div:last-child {
            margin-bottom: 0px;
        }
    }

    @media ${Device.desktop} {
        text-align: left;
        margin-bottom: 100px;
        margin-bottom: ${(props) => (props.marginBottom ? '0px' : '100px')};
        & > div:first-child {
            margin-right: 30px;
        }
    }
`;

const BarHolder = styled(TitleTextHolder)`
    text-align: left;
`;

const PrivacyCard = styled(Card)`
    margin-bottom: 20px;

    @media ${Device.tab} {
        margin-bottom: 16px;
    }

    @media ${Device.desktop} {
        margin-bottom: 20px;
    }
`;

const PrivacyLastCard = styled(Card)`
    margin-bottom: 20px;

    @media ${Device.tab} {
        margin-bottom: 0;
    }
`;

const ColoredSpan = styled.span<{ color: 'MINE_SHAFT' | 'FOREST_GREEN', isActive?: boolean }>`
    color: ${(props) => props.theme.color[props.color]};
    // cursor: ${(props) => (props.isActive ? 'pointer' : 'inherit')};
`;

const CardCenterText = styled.span`
    text-align: center;

    @media ${Device.desktop} {
        text-align: left;
    }
`;

const DoNotFixHeaderSpan = styled.span<{ show: boolean }>`
    height: 168px;
    display: block;
    transition: ${(props) => (props.show ? 'all 0.3s ease' : 'none')};
    max-height: ${(props) => (props.show ? '168px' : '0')};
`;

const MenuList = styled(Font)`
    text-align: left;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media ${Device.tab} {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    @media ${Device.desktop} {
        &:not(:last-child) {
            margin-bottom: 12px;
        }

        &:last-child div {
            display: none;
        }
    }
`;

const MenuContainer = styled.div<{ show?: boolean }>`
    margin-bottom: 60px;
    margin-top: 15px;
    max-width: 380px;

    @media ${Device.tab} {
        margin-bottom: 80px;
    }

    @media ${Device.desktop} {
        position: sticky;
        top: ${(props) => (props.show ? '180px' : '110px')};
        margin-top: -60px;
        margin-right: 50px;
    }
`;

const DesktopMenuContainer = styled.div<{ show?: boolean }>`
    display: none;

    @media ${Device.desktop} {
        display: block;
        position: sticky;
        top: ${(props) => (props.show ? '180px' : '110px')};
        margin: -60px 50px 100px 0px;
        padding-bottom: 100px;
    }
`;

const StyledLanding = styled.div`
    margin: auto;
    max-width: 1440px;

    @media ${Device.desktop} {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px 85px;
    }
`;

const WidthHolderOne = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 850px;
    }
`;

const DescriptionContainer = styled.div`
    padding: 60px 20px 0px;

    @media ${Device.tab} {
        padding: 80px 20px 0px;
    }

    @media ${Device.desktop} {
        padding: 0px;
    }
`;

const SectionContainerOne = styled.div`
    padding: 60px 20px 0px;

    @media ${Device.tab} {
        padding: 80px 20px 0px;
    }

    @media ${Device.desktop} {
        padding: 100px 0px 0px;
    }
`;

const MenuItemsSperator = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        height: 1px;
        width: 374px;
        background-color: ${(props) => props.theme.color.GAINSBORO};
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const TitleTextOne = styled(Font)`
    text-align: left;
    margin-bottom: 16px;

    @media ${Device.desktop} {
        margin-bottom: 32px;
    }
`;

const BarOne = styled.div`
    display: block;
    height: 2px;
    width: 100px;
    background-color: ${(props) => props.theme.color.MID_GREY};
`;

const PrivacyCardSegment = styled.div`
    margin-bottom: 10px;
`;

export {
    DescriptionContainer,
    SectionContainer,
    SectionContainerOne,
    Bar,
    BarOne,
    CardHolder,
    BarHolder,
    Card,
    PrivacyCard,
    PrivacyLastCard,
    WidthHolder,
    TitleTextHolder,
    TitleText,
    InfoOne,
    InfoTwo,
    InfoThree,
    CardInfo,
    CardInfoOne,
    CardMiddleInfo,
    CardFooterInfo,
    ColoredSpan,
    CardCenterText,
    DoNotFixHeaderSpan,
    MenuList,
    MenuContainer,
    StyledLanding,
    WidthHolderOne,
    MenuItemsSperator,
    TitleTextOne,
    DesktopMenuContainer,
    PrivacyCardSegment,
};
