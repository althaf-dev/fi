/**
 * @file Credit Card Eligibility styled components
 */

import styled from 'styled-components';

import {
    MarginAuto, CenterText, Font, Input, NumberInput,
} from '../../components';
import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const Title = styled(CenterText)`
    color: ${(props) => props.theme.color.WHITE}
`;

const Description = styled(CenterText)`
    margin: 16px 0px 10px;
    padding: 0px 10px;

    @media ${Device.tab} {
        margin: 24px auto 10px;
        padding: 0;
    }
`;

const Wrapper = styled(MarginAuto)`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'space-between' })};
    max-width: 360px;
    overflow: auto;
    height: 100%;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
    }

    .animation {
        animation: shaken ease-out;
        animation-duration: 0.7s;
    }

    input::-webkit-date-and-time-value {
      text-align: left;
    }
  
    input[type='date'] {
      -webkit-appearance: none; 
      -moz-appearance: none;
    }
`;

const LogoHolder = styled.div`
    width: 32px;
    height: 32px;

    @media ${Device.desktop} {
        width: 44px;
        height: 44px;
    }
`;

const SubDescription = styled.span``;

const InnerContainer = styled.div`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
    width: 100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
`;

const InfoContainer = styled.div`
    text-align: center;
    padding-bottom: 16px;
    padding-top: 24px;

    @media ${Device.desktop} {
        padding-top: 28px;
        padding-bottom: 32px;
    }
`;

const InfoDescription = styled(Font) <{ textAlign?: string }>`
    text-align: ${(props) => (props.textAlign || 'center')};
    position: relative;
`;

const LabelWithImage = styled.div`
    background: ${(props) => props.theme.color.MINE_SHAFT};
    border-radius: 10px;
    padding: 16px;
    width: 320px;
    margin: 25px auto;
    ${MIXINS.FlexMixin({})};

    @media ${Device.tab} {
        width: auto;
    }
`;

const LogoWrapper = styled.div`
    margin-right: 12px;
`;

const NumberInputDark = styled(NumberInput)`
    color: ${(props) => props.theme.color.SILVER_2} !important;
`;

const InputDark = styled(Input)`
    background-color: ${(props) => props.theme.color.LIGHT_GREY};
    color: ${(props) => props.theme.color.WHITE};
`;

const Iconholder = styled.div`
    width: 95px;
    height: 25px;

    @media ${Device.desktop} {
        width: 172px;
        height: 43px;
    }
`;

const Separator = styled.div`
    border: 1px solid ${(props) => props.theme.color.OSLO_GRAY};
    height: 32px;
    margin: 0px 16px;

    @media ${Device.desktop} {
        height: 44px;
        margin: 0px 29px;
    }
`;

const CheckboxWrapper = styled.input.attrs({ type: 'checkbox' })<{ checkMarkCssCode: string }>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #6A6D70;
    border-radius: 5px;
    cursor: pointer;
    width: 20px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.30s;

    @media ${Device.tab} {
        margin: 0px;
        width: 30px;
        height: 27px;
    }

    &:before {
        content: ${(props) => props.checkMarkCssCode};
        color: ${(props) => props.theme.color.MINE_SHAFT};
        font-size: 18px;
        opacity: 0; /* Initially hidden */

        @media ${Device.tab} {
            font-size: 25px;
        }
    }

    &:checked:before {
        opacity: 1; /* Display checkmark when checked */
    }

    &:checked {
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const LoadingPageWrapper = styled.div`
    position: relative;
    height: 100vh;
`;

const LoaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;

    @media ${Device.desktop} {
        top: 40%;
    }
`;

const LoaderText = styled.div`
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '24px', lineHeight: '28px',
    })};
    color: ${(props) => props.theme.color.WHITE};
    margin-top: 16px;
    text-align: center;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ font: 'Gilroy', weight: 600, size: '32px', lineHeight: '36px' })};
        margin-top: 32px;
    }
`;

const OtpDescriptionWrapper = styled.div`
    margin-bottom: 24px;
`;

export {
    Title, Description, Wrapper, LogoHolder, SubDescription, InnerContainer, InfoContainer,
    InfoDescription, LabelWithImage, LogoWrapper, NumberInputDark, InputDark, Iconholder,
    Separator, CheckboxWrapper, LoaderContainer, LoaderText, LoadingPageWrapper,
    OtpDescriptionWrapper,
};
