import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const Container = styled.div`
    position: relative;
    width: 300px;
    padding-top: 32px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 100%;
        padding-top: 35px;
    }
`;

const SliderTrack = styled.div<{SliderOneColorValue: number, SliderTwoColorValue: number}>`
    width: 100%;
    height: 10px;
    background: linear-gradient(to right,
        ${(props) => props.theme.color.CHALK_GREY} ${(props) => props.SliderOneColorValue}%,
        ${(props) => props.theme.color.FOREST_GREEN} ${(props) => props.SliderOneColorValue}%,
        ${(props) => props.theme.color.FOREST_GREEN} ${(props) => props.SliderTwoColorValue}%,
        ${(props) => props.theme.color.CHALK_GREY} ${(props) => props.SliderTwoColorValue}%);
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    border-radius: 5px;
`;

const Range = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    outline: none;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    pointer-events: none;

    ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 10px;
    }

    ::-moz-range-track {
        -moz-appearance: none;
        height: 10px;
    }

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
        height: 28px;
        width: 28px;
        border-radius: 50%;
        box-shadow: 0 3px 5px 2px ${(props) => props.theme.color.BLACK_GRBA_10};
        margin-top: -9px;
        cursor: pointer;
        pointer-events: auto;
    }

    ::-moz-range-thumb {
        border: none; /*Removes extra border that Firefox applies*/
        border-radius: 0; /*Removes default border-radius that Firefox applies*/
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
        height: 28px;
        width: 28px;
        border-radius: 50%;
        box-shadow: 0 3px 5px 2px ${(props) => props.theme.color.BLACK_GRBA_10};
        margin-top: -9px;
        cursor: pointer;
        pointer-events: auto;
    }

    :active::-webkit-slider-thumb {
        background-color: ${(props) => props.theme.color.WHITE};
    }
`;

export { Container, Range, SliderTrack };
