/**
 * @file Verify Otp Page styled components
 */

import styled from 'styled-components';

import OTPInput from '../../../components/OtpInput/OtpInput';
import { MarginAuto, CenterText } from '../../../components';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const Title = styled(CenterText)`
    padding-top: 12px;

    @media ${Device.desktop}{
        padding-top: 20px;
    }

    @media ${Device.desktop} and (max-height: 850px){
        padding-top: 20px;
    }
`;

const InputWrapperOne = styled(MarginAuto)`
    z-index: 1;
    transition: 0.5s ease all;
    .color {
        text-shadow: 0 0 0 ${(props) => props.theme.color.CHARCOAL_GREY};
    }
`;

const CodeInput = styled(OTPInput)`
    max-width: 242px;
    margin: auto;

    .focusInput {
        color: ${(props) => props.theme.color.GREY_3};

        /* Horizontal dash for the otp input before number is entered */
        & + div {
            background-color: ${(props) => props.theme.color.GREY_3};
        }
        
        /* Color of the dash when the number is entered */
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
        margin: 60px auto;
    }
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

const RocketImageHolder = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 11px;

    @media ${Device.desktop} {
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }
`;

const VerifiedImageHolder = styled.div`
    width: 20px;
    height: 19px;
    margin-right: 13px;

    @media ${Device.desktop} {
        margin-right: 20px;
    }
`;

const WaitlistAccessImageHolder = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 9px;
`;

const OtpVerificationHolder = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
`;

export {
    Title,
    InputWrapperOne,
    CodeInput,
    CodeInputWrapper,
    ButtonHolder,
    RocketImageHolder,
    VerifiedImageHolder,
    WaitlistAccessImageHolder,
    OtpVerificationHolder,
};
