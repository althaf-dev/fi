/**
 * @file Verify Otp Page styled components
 */

import styled from 'styled-components';

import { MarginAuto, CenterText } from '../../../components';
import { Device } from '../../../Themes/Device';
import OTPInput from '../../../components/OtpInput/OtpInput';

const Wrapper = styled(MarginAuto)`
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
        padding: 20px 20px 80px;
    }

    .animation {
        animation: shaken ease-out;
        animation-duration: 0.7s;
    }
`;

const WrapperOne = styled(Wrapper)`
    justify-content: space-between;
`;

const OtpWrapper = styled(Wrapper)`
    justify-content: space-between;
    @media ${Device.desktop} {
        padding-bottom: 0px;
    }
`;

const Title = styled(CenterText)`
    padding-top: 12px;

    @media ${Device.desktop}{
        padding-top: 20px;
    }

    @media ${Device.desktop} and (max-height: 850px){
        padding-top: 20px;
    }
`;

const AnimationPlaceholder = styled.div`
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    position: relative;

    @media ${Device.tab} {
        width: 450px;
        height: 450px;
        margin-bottom: 97px;
    }

    @media ${Device.desktop} {
        margin: auto;
        width: 90%;
        height: auto;
    }
`;

const FooterText = styled(CenterText)``;

const InputWrapperOne = styled(MarginAuto)`
    z-index: 1;
    margin-top: auto;
    margin-bottom: auto;
    transition: 0.5s ease all;
    .color {
        text-shadow: 0 0 0 ${(props) => props.theme.color.CHARCOAL_GREY};
    }
    @media ${Device.desktop} {
        /* margin-bottom: 63px; */
        /* add fixed margin so that otp input does not move down after animation */
        margin-top: 45px;
        margin-bottom: 45px;
    }
`;

const CodeInput = styled(OTPInput)`
    max-width: 242px;
    margin: auto;

    .focusInput {
        &:focus + div {
            background-color: ${(props) => props.theme.color.FOREST_GREEN};
        }
    }

    @media ${Device.desktop} {
        max-width: 270px;
    }
`;

const CodeInputWrapper = styled.div`
    max-width: 242px;
    margin: 0px auto 30px;

    @media ${Device.desktop} {
        max-width: 270px;
        margin: 100px auto 150px;
    }
`;

const Description = styled(CenterText)<{ visible: boolean }>`
    margin: 10px 0px 40px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};

    @media ${Device.tab} {
        margin: 10px 60px 40px;
    }

    @media ${Device.desktop} {
        max-width: 470px;
        margin: 20px auto 40px;
    }
`;

const HighlightedDescription = styled.span`
    color: ${(props) => props.theme.color.CHARCOAL_GREY};
    font-weight: 700;
`;

const Footer = styled(CenterText)``;

const FacingIssueFooter = styled(CenterText)`
    position: relative;
    margin-top: 16px
`;

const InfoFont = styled(CenterText)<{
    showVisibility: boolean;
}>`
    visibility: ${(props) => (props.showVisibility ? 'visible' : 'hidden')};
`;

const ErrorInfoFont = styled(CenterText)<{
    showVisibility: boolean;
}>`
    visibility: ${(props) => (props.showVisibility ? 'visible' : 'hidden')};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;

    @media ${Device.desktop} {
        bottom: 100px;
    }
`;

const CodeHolder = styled.div`
    position: relative;
    margin-bottom: 12px;
`;

const ButtonHolder = styled.div`
    z-index: 99;
    cursor: pointer;
    height: 52px;
    width: 312px;

    @media ${Device.desktop} {
        margin-top: -100px;
    }
`;

export {
    Wrapper,
    WrapperOne,
    Title,
    InputWrapperOne,
    CodeInput,
    Description,
    HighlightedDescription,
    Footer,
    InfoFont,
    ErrorInfoFont,
    CodeHolder,
    FooterText,
    AnimationPlaceholder,
    OtpWrapper,
    FacingIssueFooter,
    CodeInputWrapper,
    ButtonHolder,
};
