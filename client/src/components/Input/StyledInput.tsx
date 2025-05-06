import styled from 'styled-components';
import { Device } from '../../Themes/Device';
import { Font } from '../Abstract';

const StyledInput = styled(Font)<{ showLabelAlways?: boolean, caretColor?: string }>`
    caret-color: ${(props) => props.theme.color.FOREST_GREEN};
    background-color: ${(props) => props.theme.color.WHITE};
    color: ${(props) => props.theme.color.CHARCOAL_GREY};
    border: none;
    outline: none;
    width: 100%;
    padding: 12px 15px;
    height: 56px;
    border-radius: 10px;
    transition: 0.1s ease;

    &:focus,
    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14),
            0px 5px 10px rgba(0, 0, 0, 0.04), 0px 0px 15px rgba(0, 0, 0, 0.05);
    }

    &:focus,
    &:not(:placeholder-shown) {
        padding-top: 26px;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: 4px;
        text-transform: uppercase;
        transform: translateY(10px);
        letter-spacing: 0.45px;
        font-size: 10px !important;
    }

    ${(props) =>
        props.showLabelAlways &&
        `
        padding-top: 26px;
        & + label {
            top: 4px;
            text-transform: uppercase;
            transform: translateY(10px);
            letter-spacing: 0.45px;
            font-size: 10px !important;
        }

        &:focus + label,
        &:not(:placeholder-shown) + label {
            top: 0px;
        }
        
        &::placeholder {
            font-size: 14px !important;
        }
        
        ::-webkit-input-placeholder {
            font-size: 14px !important;
        }
        ::-moz-placeholder {
            font-size: 14px !important;
        }
        :-ms-input-placeholder {
            font-size: 14px !important;
        }

        `}

    &:disabled {
        box-shadow: none;
    }

    ::-webkit-input-placeholder {
        font-size: 10px;
    }
    ::-moz-placeholder {
        font-size: 10px;
    }
    :-ms-input-placeholder {
        font-size: 10px;
    }
    :-moz-placeholder {
        font-size: 10px;
    }

    @media ${Device.tab} {
        height: 82px;
        padding: 18px 20px;

        &:focus,
        &:not(:placeholder-shown) {
            padding-top: 41px;
        }

        &:focus + label,
        &:not(:placeholder-shown) + label {
            top: 12px;
            font-size: 14px !important;
        }

        ${(props) =>
            props.showLabelAlways &&
            `
            padding-top: 41px;
            & + label {
            top: 12px;
            font-size: 14px !important;
        }`}

        ::-webkit-input-placeholder {
            font-size: 15px;
        }
        ::-moz-placeholder {
            font-size: 15px;
        }
        :-ms-input-placeholder {
            font-size: 15px;
        }
        :-moz-placeholder {
            font-size: 15px;
        }
    }

    @media ${Device.desktop} {
        &:focus + label,
        &:not(:placeholder-shown) + label {
            font-size: 14px !important;
        }

        ::-webkit-input-placeholder {
            font-size: 15px;
        }
        ::-moz-placeholder {
            font-size: 15px;
        }
        :-ms-input-placeholder {
            font-size: 15px;
        }
        :-moz-placeholder {
            font-size: 15px;
        }
    }
    
    ${({ caretColor }) => `caret-color: ${caretColor}`}
`;

export default StyledInput;
