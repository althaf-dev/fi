/**
 * @file Min kyc closed accounts flow styled components
 */

import styled from 'styled-components';

import { MarginAuto, CenterText, Font } from '../../components';
import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

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

export const TextAboveButton = styled(CenterText)`
    margin: 10px 0px 10px;
    padding: 10px;

    @media ${Device.tab} {
        max-width: 470px;
        margin: 10px auto 30px;
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
    width: 30px;
    height: 30px;
    margin: 20px auto 30px;

    @media ${Device.tab} {
        width: 30px;
        height: 30px;
        margin: 10px 30px 10px 20px;
    }

    @media ${Device.desktop} {
        width: 30px;
        height: 30px;
        margin: 10px 40px 10px 50px;
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
    text-align: center;
    padding-bottom: 10px;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SafeViewBlock = styled.div``;

export const CheckboxWrapper = styled.input.attrs({ type: 'checkbox' })<{ checkMarkCssCode: string }>`
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
        color: white;
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
        border-color: ${(props) => props.theme.color.FOREST_GREEN}
    }
`;

export const CheckBoxText = styled.div`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '10px', lineHeight: '14px',
    })};
    color: ${(props) => props.theme.color.OSLO_GRAY};
    position: relative;
    text-align: start;
    width: 100%;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '14px', lineHeight: '20px',
    })};
    }
`;

export const ButtonHolder = styled.div`
    z-index: 99;
    cursor: pointer;
    height: 52px;
    width: 312px;

    @media ${Device.tab} {
        margin: 10px auto;
    }
    @media ${Device.desktop} {
        margin: 10px auto;
    }
`;
