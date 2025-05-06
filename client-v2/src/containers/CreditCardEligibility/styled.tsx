/**
 * @file Credit Card Eligibility styled components
 */

import React from 'react';
import styled from 'styled-components';

import {
    CenterText, Font, Input, NumberInput,
} from '../../components';
import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';
import { numInputProps } from '@/components/NumberInput';

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

const Wrapper = styled.div`
    background: transparent;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
        height: 100%;
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

const InfoDescription = styled(Font) <{ textAlign?: string, style: any }>`
    text-align: ${(props) => (props.textAlign || 'center')};
    position: relative;
    color: ${(props) => props?.style?.color};
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

const NumberInputDark = styled(NumberInput)<numInputProps>`
    color: ${(props) => props.theme.color.SILVER_2} !important;
`;

const InputDark = styled(Input)<any>`
    background-color: ${(props) => props?.style?.bgColor};
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

const CheckboxWrapper = styled.input.attrs({ type: 'checkbox' })<{ checkMarkCssCode: string, style: any }>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid ${(props) => props?.style?.whatsappConsentCheckbox?.color};
    border-radius: 5px;
    cursor: pointer;
    width: 20px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.30s;
    background: white;

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
        background-color: ${(props) => props.style.bgColor};
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
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '32px', lineHeight: '36px'
    })};
        margin-top: 32px;
    }
`;

const OtpDescriptionWrapper = styled.div`
    margin-bottom: 24px;
`;

const DesktopSubtitleContainer = styled.div`

    @media ${Device.phone} {
        display: none;
    }

    @media ${Device.desktop} {

        display: flex;
        flex-direction: row;
        width: 488px;
        top: 798px;
        left: 246px;
        padding: 16px;
        border-radius: 10px;
        background: #333333;
        margin-top: 2rem;

        .logo-container {
            flex-basis: 14%;
            text-align:center;

            img {
                height: 32px;
                width: 32px;
            }
        }

        .logo {
            color: black;
            font-size: 16px;
            border: 2px solid gray;
            border-radius: 50%;
            padding: 9px;
        }

        .text {
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            letter-spacing: 0em;
            color: #8D8D8D;
            flex-basis: 84%;
            text-align: left;
            margin-top: 7px;
        }
    }

`;

const FooterSubTitle = styled.div`
    .text {
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #A4A4A4;
    }

`;

const RotationLoaderContainer = styled.div`
    display: inline-block;
    position: absolute;
    right: 27px;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to { 
            transform: rotate(360deg);
        }
    }
    
    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
        }
        to { 
            -webkit-transform: rotate(360deg);
        }
    }

    .loader {
        width: 25px;
        height: 25px;
        border:solid 4px white;
        border-radius: 50%;
        border-right-color: transparent;
        border-bottom-color: transparent;
        -webkit-transition: all 2s ease-in;
        -webkit-animation-name:             rotate; 
        -webkit-animation-duration:         1.0s; 
        -webkit-animation-iteration-count:  infinite;
        -webkit-animation-timing-function: linear;
        background: #bdaeae;
        transition: all 1s ease-in;
        animation-name:             rotate; 
        animation-duration:         2.0s; 
        animation-iteration-count:  infinite;
        animation-timing-function: linear; 
    }

    @media ${Device.desktop} {
        right: 43px;
    }
`;

const ProgressBar = styled.div<any>`
        display: inline-block;
        position: absolute;
        right: 0px;
        svg {
            max-width: 100%;
            vertical-align: middle;
        }
        
        .svg-indicator {
            width: 100px;
            height: 100px;
        }
        
        .svg-indicator-track,
        .svg-indicator-indication {
            cx: 50px;
            cy: 50px;
            r: 10px;
            fill: transparent;
            stroke-width: 5px;
        }
        
        .svg-indicator-track {
            stroke: #48535b;;
        }
        
        .svg-indicator-indication {
            stroke: ${(props) => props.stroke};    
            stroke-dasharray: ${(props) => props.stokeDashArray}px;
            stroke-dashoffset: 200px;
            stroke-linecap: round;
        }

        @media ${Device.desktop} {
            right: 43px;
        }
`;

const CircularProgressBar = ({ steps, currentStep, stroke = '#00B899' }: any) => {
    const percentage = ((steps.indexOf(currentStep)) / (steps.length - 1)) * 100;
    return (
        <ProgressBar stokeDashArray={200 + ((63 * percentage) / 100)} stroke={stroke}>
            <svg className='svg-indicator'>
                <circle className='svg-indicator-track' />
                <circle className='svg-indicator-indication' />
            </svg>
        </ProgressBar>
    );
};

export {
    Title, Description, Wrapper, LogoHolder, SubDescription, InnerContainer, InfoContainer,
    InfoDescription, LabelWithImage, LogoWrapper, NumberInputDark, InputDark, Iconholder,
    Separator, CheckboxWrapper, LoaderContainer, LoaderText, LoadingPageWrapper,
    OtpDescriptionWrapper, DesktopSubtitleContainer, FooterSubTitle, RotationLoaderContainer, CircularProgressBar
};
