import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const Container = styled.div<{ showComponentInsideStickyGraph?: boolean}>`
    position: relative;
    width: ${(props) => (props.showComponentInsideStickyGraph ? '100%' : '300px')};
    padding-top: 32px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 100%;
        padding-top: 35px;
    }
`;

const Range = styled.input.attrs({ type: 'range' })<{sliderValue: number, bgColor?: string }>`
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;

    ::-webkit-slider-runnable-track {
        background: linear-gradient(90deg,
            ${(props) => (props.bgColor || props.theme.color.FOREST_GREEN)} ${(props) => props.sliderValue}%,
            ${(props) => props.theme.color.CHALK_GREY} 0%);
        border-radius: 8px;
        height: 10px;
    }

    ::-moz-range-track {
        background: linear-gradient(90deg,
            ${(props) => (props.bgColor || props.theme.color.FOREST_GREEN)} ${(props) => props.sliderValue}%,
            ${(props) => props.theme.color.CHALK_GREY} 0%);
        border-radius: 8px;
        height: 10px;
    }

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background-color: ${(props) => (props.bgColor || props.theme.color.FOREST_GREEN)};
        height: 28px;
        width: 28px;
        border-radius: 50%;
        box-shadow: 0 3px 5px 2px ${(props) => props.theme.color.BLACK_GRBA_10};
        position: relative;
        top: -10px;
        left: 1px;
    }

    ::-moz-range-thumb {
        border: none; /*Removes extra border that Firefox applies*/
        border-radius: 0; /*Removes default border-radius that Firefox applies*/
        background-color: ${(props) => (props.bgColor || props.theme.color.FOREST_GREEN)};
        height: 28px;
        width: 28px;
        border-radius: 50%;
        box-shadow: 0 3px 5px 2px ${(props) => props.theme.color.BLACK_GRBA_10};
        position: relative;
        top: -10px;
        left: 1px;
    }

    :active::-webkit-slider-thumb {
        background-color: ${(props) => props.theme.color.WHITE};
    }
`;

export { Container, Range };
