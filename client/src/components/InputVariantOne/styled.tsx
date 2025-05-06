import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const SliderLabelContainer = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NumberInputContainer = styled.div<{ hasMobileDesignV1?: boolean }>`
    text-align: center;
    padding-top: ${(props) => (props.hasMobileDesignV1 ? '0px' : '30px')};

    @media ${Device.tab} {
        padding-top: 0px;
    }
`;

const InputWidthSection = styled.div`
    text-align: center;
    opacity: 0;
    position: absolute;
`;

const NumberInputSection = styled.input<{ hasMobileDesignV1?: boolean }>`
    border: none;
    background-color: ${(props) => (props.hasMobileDesignV1 ? props.theme.color.CHALK_GREY : 'unset')};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    caret-color: ${(props) => props.theme.color.DARK_GREEN};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: ${(props) => (props.hasMobileDesignV1 ? '20px' : '28px')};
    line-height: 110%;
    letter-spacing: 0.45px;
    outline: none;
    width: 100%;
    text-align: right;

    @media ${Device.tab} {
        background-color: ${(props) => props.theme.color.CHALK_GREY};
        font-size: 24px;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type=number] {
        -moz-appearance: textfield;
    }
`;

const MultipleInputSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 35px;

    @media ${Device.tab} {
        margin-top: 0px;
        justify-content: end;
        gap: 25px;
    }
`;

const NumberInputContainerVOne = styled(NumberInputContainer)`
    text-align: center;
    padding-top: 0px;
`;

const NumberInputSectionVOne = styled.input`
    ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '24px' })};
    border: none;
    background: ${(props) => props.theme.color.TRANSPARENT};
    color: ${(props) => props.theme.color.WHITE};
    caret-color: ${(props) => props.theme.color.DARK_GREEN};
    letter-spacing: 0.45px;
    outline: none;
    width: 100%;
    text-align: center;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '24px' })};
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '36px', lineHeight: '24px' })};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Firefox */
    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export {
    NumberInputContainer, InputWidthSection, NumberInputSection, SliderLabelContainer,
    MultipleInputSection, NumberInputContainerVOne, NumberInputSectionVOne,
};
