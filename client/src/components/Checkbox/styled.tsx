import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const CheckboxWrapper = styled.input.attrs({ type: 'checkbox' })<{ checkMarkCssCode: string }>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.color.FOREST_GREEN};
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.30s;

    @media ${Device.tab} {
        margin: 0px;
        width: 35px;
        height: 35px;
    }

    &:before {
        content: ${(props) => props.checkMarkCssCode};
        color: ${(props) => props.theme.color.WHITE};
        font-size: 18px;

        @media ${Device.tab} {
            font-size: 25px;
        }
    }

    &:checked {
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

export { CheckboxWrapper };
