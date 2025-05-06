import styled from 'styled-components';

import { Device, MAX_WIDTH_MEDIA_SCREENS } from '../../Themes/Device';
import { Font } from '../../components';

import { SectionContainer as TncSectionContainer, Bar } from '../TnC/TnCStyled/TnCStyled';

import {
    BarOne,
    MenuList,
    StyledLanding,
    MenuItemsSperator,
    DesktopMenuContainer,
} from '../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionContainer = styled(TncSectionContainer)`
    @media (min-width: 400px) and ${MAX_WIDTH_MEDIA_SCREENS.phone} {
        padding: 60px 40px;
    }
`;

const SectionSeparator = styled(Bar)`
    width: 100px;
    margin: unset;
`;

const SectionSeparatorHolder = styled.div`
    margin: auto;
    min-width: 320px;
    padding: 0px 20px;
    text-align: left;

    @media (min-width: 400px) and ${MAX_WIDTH_MEDIA_SCREENS.phone} {
        padding: 0px 40px;
    }

    @media ${Device.tab} {
        max-width: 610px;
        padding: 0px;
    }

    @media ${Device.desktop} {
        max-width: 850px;
    }
`;

// reference - TitleTextHolder from TnCStyled
const TitleContainer = styled.div`
    margin: 0 auto 16px;
    min-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: 0 auto 20px;
        max-width: 850px;
    }
`;

const TitleHeader = styled(Font)`
    text-align: start;
`;

// reference - WidthHolder from TnCStyled
const DescriptionContainer = styled.div`
    margin: auto;
    min-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 850px;
    }
`;

const DescriptionHeader = styled(Font)`
    text-align: left;
    // margin-top: 40px;
    margin-bottom: 20px;

    @media ${Device.tab} {
        // margin-top: 60px;
        margin-bottom: 15px;
    }

    @media ${Device.desktop} {
        // margin-top: 40px;
        margin-bottom: 20px;
    }
`;

const DescriptionContent = styled(Font)`
    text-align: left;
`;

const CardContainer = styled.div<{ isSingleCard: boolean, addBottomMargin?: boolean }>`
    columns: 320px;
    // to center the single card in center
    display: ${(props) => (props.isSingleCard ? 'flex' : 'block')};
    justify-content: center;
    margin: 40px auto 0;
    margin-bottom: ${(props) => (props.addBottomMargin && '40px')};
    min-width: 320px;

    @media ${Device.tab} {
        columns: 296px;
        column-gap: 16px;
        margin: 60px auto 0;
        margin-bottom: ${(props) => (props.addBottomMargin && '60px')};
        max-width: 608px; // 296 * 2 + 16
    }

    @media ${Device.desktop} {
        columns: 400px;
        column-gap: 30px;
        margin: 40px auto 0;
        margin-bottom: ${(props) => (props.addBottomMargin && '40px')};
        max-width: 830px; // 400 * 2 + 30
    }
`;

const Card = styled.div`
    border-radius: 26px;
    background-color: ${(props) => props.theme.color.WHITE};
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    padding: 20px;

    @media ${Device.desktop} {
        padding: 40px;
    }
`;

const CardWrapper = styled(Card)<{ isSingleCard: boolean }>`
    margin-bottom: ${(props) => (props.isSingleCard ? '0px' : '20px')};
    // min-width: 320px;

    @media ${MAX_WIDTH_MEDIA_SCREENS.phone} {
        &:last-child {
            margin-bottom: 0px;
        }
    }

    @media ${Device.tab} {
        margin-bottom: ${(props) => (props.isSingleCard ? '0px' : '16px')};
        max-width: ${(props) => (props.isSingleCard ? '610px' : '296px')};;
    }

    @media ${Device.desktop} {
        margin-bottom: ${(props) => (props.isSingleCard ? '0px' : '20px')};
        max-width: 850px;
    }
`;

// reference - InfoOne from TnCStyled
const MenuItemLabel = styled(Font)`
    text-align: center;
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
    }
`;

const MenuContainer = styled.div<{ show?: boolean }>`
    margin-bottom: 60px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    min-width: 320px;
    padding: 0px 20px;

    @media (min-width: 400px) and ${MAX_WIDTH_MEDIA_SCREENS.phone} {
        padding: 0px 40px;
    }

    @media ${Device.tab} {
        margin-bottom: 80px;
        max-width: 610px;
        padding: 0px;
    }

    @media ${Device.desktop} {
        position: sticky;
        top: ${(props) => (props.show ? '180px' : '110px')};
        margin-top: -60px;
        margin-right: 50px;
    }
`;

export {
    SectionContainer,
    SectionSeparator,
    SectionSeparatorHolder,
    TitleContainer,
    TitleHeader,
    DescriptionContainer,
    DescriptionHeader,
    DescriptionContent,
    CardContainer,
    CardWrapper,
    MenuItemLabel,
    MenuContainer,
    BarOne,
    MenuList,
    StyledLanding,
    MenuItemsSperator,
    DesktopMenuContainer,
};
