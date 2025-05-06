/**
 * @file Credit Card Waitlist styled components
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
    margin: 10px 0px 10px;
    padding: 0px 10px;

    @media ${Device.tab} {
        margin: 20px auto 10px;
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
`;

const LogoHolder = styled.div`
    width: 44px;
    height: 44px;
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

    @media ${Device.desktop} {
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

export {
    Title, Description, Wrapper, LogoHolder, SubDescription, InnerContainer, InfoContainer,
    InfoDescription, LabelWithImage, LogoWrapper, NumberInputDark, InputDark,
};
