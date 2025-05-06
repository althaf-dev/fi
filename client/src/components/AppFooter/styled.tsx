import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { Font, Flex } from '../Abstract';

const FlexDirColumn = styled(Flex)`
    flex-direction: column;
`;

const FlexAlign = styled(Flex)`
    align-items: center;
`;

const Container = styled.div<{ noPadding?: boolean }>`
    padding-top: ${(props) => (props.noPadding ? '0px' : '42px')};;

    @media ${Device.tab} {
        padding-top: ${(props) => (props.noPadding ? '0px' : '78px')};;
    }

    @media ${Device.desktop} {
        padding-top: ${(props) => (props.noPadding ? '0px' : '126px')};;
    }
`;

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    position: relative;

    @media ${Device.desktop} {
        padding: 0px 85px;
    }
`;

const SubWrapper = styled(FlexAlign)`
    max-width: 306px;
    margin: auto;
    flex-direction: column;
    padding: 178px 0px 40px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: auto;
        max-width: 1350px;
        justify-content: space-between;
        align-items: flex-start;
        padding: 122px 0px 52px;
        position: relative;
    }
`;

const GridCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    max-width: 300px;
    width: 100%;
    position: absolute;
    top: -42px;
    left: 50%;
    transform: translateX(-50%);

    @media ${Device.tab} {
        max-width: 610px;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    @media ${Device.desktop} {
        max-width: 1350px;
        top: -126px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 60px;
    }
`;

const GridCardLinkWrapper = styled.div`
    width: 10px;
    height: 10px;
    margin-left: 2px;
    margin-bottom: 3px;

    @media ${Device.desktop} {
        width: 20px;
        height: 20px;
        margin-left: 0px;
        margin-bottom: 6px;
    }
`;

const FiLogo = styled.div`
    width: 46px;
    margin-bottom: 16px;

    @media ${Device.tab} {
        margin-bottom: 14px;
    }

    @media ${Device.desktop} {
        width: 64px;
        margin-bottom: 20px;
    }
`;

const FirstRowContainer = styled(Flex)`
    flex-direction: column;

    @media ${Device.desktop} {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

const FiPronouncedContainer = styled(FlexDirColumn)`
    align-items: left;

    @media ${Device.desktop} {
        align-items: flex-start;
    }
`;

const FiPronouncedLabel = styled.div`
    width: 150px;

    @media ${Device.tab} {
        width: auto;
    }

    @media ${Device.desktop} {
        width: auto;
    }
`;

const SecondRowContainer = styled(Flex)`
    flex-direction: column;

    @media ${Device.desktop} {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

const FiPronouncedCardWrapper = styled(FlexAlign)`
    margin-top: 20px;
    margin-bottom: 24px;

    & > div {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }

    @media ${Device.tab} {
        margin-top: 14px;
        margin-bottom: 32px;
    }

    @media ${Device.desktop} {
        align-items: flex-start;
        margin-top: 20px;
        margin-bottom: 32px;

        & > div {
            &:not(:last-child) {
                margin-right: 14px;
            }
        }
    }
`;

const StyledLink = styled(Link)`
    all: unset;
    color: inherit;
    cursor: pointer;
    white-space: nowrap;
    margin-bottom: 20px
`;

const FirstRowNavLinkWrapper = styled(Flex)`
    justify-content: center;
    margin: 0 0 20px;

    & > h3:not(:last-child) {
        margin-right: 20px;
    }

    @media ${Device.tab} {
        margin: 0 0 20px;

        & > h3:not(:last-child) {
            margin-right: 40px;
        }
    }

    @media ${Device.desktop} {
        margin: 0 0 36px;
        justify-content: flex-end;

        & > h3:not(:last-child) {
            margin-right: 56px;
        }
    }
`;

const SecondRowNavLinkWrapper = styled(Flex)<{ hideSalaryAccountItem: boolean }>`
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 32px;

    & > h3:nth-child(-n + 3) {
        margin-bottom: ${(props) => (props.hideSalaryAccountItem ? '0px' : '22px')};
    }

    & > h3:not(:last-child) {
        margin-right: 20px;
    }

    @media ${Device.tab} {
        & > h3:not(:last-child) {
            margin-right: 40px;
        }

        & > h3:nth-child(-n + 3) {
            margin-bottom: 0px;
        }
    }

    @media ${Device.desktop} {
        margin: 0px;
        justify-content: flex-end;

        & > h3:not(:last-child) {
            margin-right: 56px;
        }
    }
`;

const NavLink = styled(Font)`
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.color.WHITE};

    &:hover,
    &:focus,
    &:active {
        color: ${(props) => props.theme.color.FOREST_GREEN};
        border-bottom: 1px solid ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const SecondRowFirstColumnWrapper = styled(FlexDirColumn)`
    align-items: left;

    @media ${Device.desktop} {
        align-items: flex-start;
    }
`;

/**
* add display:none for mobile/tab to move the elements up in UI
* add visibility:hidden for desktop to leave the blank space in UI
*/
const AppAssistanceLabel = styled(Font)<{ hide: boolean }>`
    display: ${(props) => (props.hide ? 'none' : 'block')};
    width: 198px;
    text-align: left;

    @media ${Device.tab} {
        width: auto;
    }

    @media ${Device.desktop} {
        visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
        display: block;
        width: auto;
        margin: 0px;
        text-align: left;
    }
`;

const AppSubAssistanceLabel = styled(Font)<{ hide: boolean }>`
    display: ${(props) => (props.hide ? 'none' : 'block')};
    width: 285px;
    text-align: left;
    margin-top: 20px;

    @media ${Device.tab} {
        width: 53%;
        margin-top: 20px;
    }

    @media ${Device.desktop} {
        visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
        display: block;
        width: 63%;
        margin-top: 20px;
        text-align: left;
    }
`;

/**
 * add display:none for mobile/tab to move the elements up in UI
 * add visibility:hidden for desktop to leave the blank space in UI
 */
const AppAssistanceCardWrapper = styled(FlexAlign)<{ hide: boolean }>`
    display: ${(props) => (props.hide ? 'none' : 'flex')};
    margin-top: 10px;
    margin-bottom: 32px;

    & > div {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }

    @media ${Device.tab} {
        margin-bottom: 36px;
    }

    @media ${Device.desktop} {
        visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
        display: flex;
        margin-top: 12px;
        margin-bottom: 32px;
    }
`;

const SocialIcon = styled.div`
    cursor: pointer;
    height: 24px;
    width: 24px;

    &:not(:last-child) {
        margin-right: 20px;
    }

    @media ${Device.desktop} {
        height: 32px;
        width: 32px;

        &:not(:last-child) {
            margin-right: 40px;
        }
    }
`;

const FooterLinkWrapper = styled(Flex)`
    flex-wrap: wrap;

    @media ${Device.tab} {
        margin-top: 30px;
        justify-content: left;

       

    @media ${Device.desktop} {
        margin-top: 49px;

        & > div:not(:last-child) {
            margin-right: 20px;
        }
    }
`;

const FooterLink = styled(Font)`
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.color.MID_GREY};
    margin-top: 20px;
    margin-right: 20px;
`;

const AboutFiContainer = styled.div`
    margin: 32px 0 0;
    text-align: left;
    width: 286px;

    @media ${Device.tab} {
        margin: 20px 0 0;
        width: 100%;
    }

    @media ${Device.desktop} {
        margin: 0px;
        text-align: left;
        width: auto;
    }
`;

const AboutFiWrapper = styled(Flex)`
    flex-direction: column;

    @media ${Device.desktop} {
        flex-direction: row;
    }
`;

const AboutFiFirstContent = styled(Font)`
    @media ${Device.desktop} {
        margin-right: 40px;
        width: 340px;
    }
`;

const AboutFiSecondContent = styled(Font)`
    margin-top: 24px;

    @media ${Device.desktop} {
        margin-top: 0px;
        width: 316px;
    }
`;

const DisclaimerLabelHead = styled(Font)`
    margin-top: 20px;

    @media ${Device.desktop} {
        margin-top: 24px;
        width: 696px;
    }
`;

const DisclaimerLabel = styled(Font)`
    margin-top: 20px;

    @media ${Device.desktop} {
        margin-top: 24px;
        width: 696px;
    }
`;

const CopyrightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;

    @media ${Device.tab} {
        flex-direction: row;
        gap: 20px;
    }

    @media ${Device.desktop} {
        margin-top: 167px;
        justify-content: right;
        gap: 24px;
    }
`;

const CopyrightLabel = styled(Font)`
    @media ${Device.desktop} {
        text-align: right;
    }
`;

export {
    Container,
    Wrapper,
    SubWrapper,
    GridCardWrapper,
    GridCardLinkWrapper,
    FiLogo,
    FirstRowContainer,
    FiPronouncedContainer,
    FiPronouncedLabel,
    FiPronouncedCardWrapper,
    StyledLink,
    FirstRowNavLinkWrapper,
    SecondRowNavLinkWrapper,
    NavLink,
    SecondRowContainer,
    SecondRowFirstColumnWrapper,
    AppAssistanceLabel,
    AppSubAssistanceLabel,
    AppAssistanceCardWrapper,
    SocialIcon,
    FooterLinkWrapper,
    FooterLink,
    AboutFiContainer,
    AboutFiWrapper,
    AboutFiFirstContent,
    AboutFiSecondContent,
    DisclaimerLabelHead,
    DisclaimerLabel,
    CopyrightContainer,
    CopyrightLabel,
};
