/**
 * @file Salary Account SignUp styled components
 */

import styled from 'styled-components';

import { MarginAuto, CenterText, Font } from '../../components';
import { Device } from '../../Themes/Device';

export const Title = styled(CenterText)`
    padding-top: 12px;
    
    @media ${Device.desktop} {
        padding-top: 20px;
    }

    @media ${Device.desktop} and (max-height: 850px) {
        padding-top: 20px;
    }
`;

export const Description = styled(CenterText)`
    margin: 10px 0px 10px;
    padding: 0px 10px;

    @media ${Device.tab} {
        max-width: 470px;
        margin: 20px auto 10px;
        padding: 0px 20px;
    }
`;

export const Wrapper = styled(MarginAuto)`
    max-width: 360px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    height: 100%;
    padding: 0px 20px 20px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
        padding: 20px 20px 40px;
    }

    .animation {
        animation: shaken ease-out;
        animation-duration: 0.7s;
    }
`;

export const WrapperOne = styled(Wrapper)`
    justify-content: space-between;
`;

export const LogoHolder = styled.div`
    width: 28px;
    height: 28px;
    margin: 20px auto 30px;

    @media ${Device.tab} {
        width: 42px;
        height: 42px;
        margin: 20px auto 20px;
    }

    @media ${Device.desktop} {
        width: 44px;
        height: 44px;
        margin: 20px auto 20px;
    }
`;

export const PrevHolder = styled.div`
    cursor: pointer;
    position: absolute;
    left: 10px;
    width: 24px;
    height: 24px;

    @media ${Device.tab} {
        width: 32px;
        height: 32px;
        left: 64px;
    }

    @media ${Device.desktop} {
        width: 36px;
        height: 36px;
        left: 74px;
    }
`;

export const WorkBenifitHolder = styled.div`
    cursor: pointer;
    position: absolute;
    right: 10px;
    width: 24px;
    height: 24px;
    
    @media ${Device.tab} {
        width: 32px;
        height: 32px;
        right: 64px;
    }

    @media ${Device.desktop} {
        display: none;
    }
`;

export const HeaderHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media ${Device.tab} {
        margin-top: 30px;
    }
    @media ${Device.desktop} {
        margin-top: 0px;
    }
`;

export const SubDescription = styled.span``;

export const HighlightText = styled.span`
    color: black;
`;

export const Container = styled.div``;

export const ErrorDescription = styled(Font)`
`;

export const ErrorWrapper = styled.div`
    padding-top: 10px;
    text-align: center;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SafeViewBlock = styled.div``;
