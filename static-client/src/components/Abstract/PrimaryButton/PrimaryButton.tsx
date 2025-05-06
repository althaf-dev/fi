/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { Font } from '../index';
import { Device } from '../../../Themes/Device';

type StyledButtonProps = {
    bgcolor: string,
    isQRCodeShown?: boolean,
    fontVariant?: any,
    enableBoxShadow?: boolean,
    borderRadius?: string,
    disableTransForm?: boolean,
    disableBgColor?: string;
    disableFontColor: string;
    [key: string]: any;
}

const StyledButton = styled(Font)<StyledButtonProps>`
    width: 100%;
    padding: 14px;
    border: none;
    outline: none;
    border-radius: ${(props) => (props.fontVariant === 'buttonVariantTwo' ? '19px' : props.borderRadius ? props.borderRadius : '10px')};
    text-transform: ${(props) => (props.disableTransForm ? 'none' : 'uppercase')};
    transition: 0.1s ease;
    background-color: ${(props) => (props.bgcolor === 'GREEN' && !props.isQRCodeShown
        ? props.theme.color.FOREST_GREEN
        : props.theme.color.WHITE)};
    color: ${(props) => (props.bgcolor !== 'GREEN'
        ? props.theme.color.FOREST_GREEN
        : props.isQRCodeShown ? props.theme.color.FOREST_GREEN
            : props.theme.color.WHITE)};

    cursor: pointer;
    letter-spacing: 0.45px;

    /* &:hover {
        background-color: ${(props) => props.theme.color.AQUA_FOREST};
    } */

    &:active {
        box-shadow: none;
        transform: scale(0.98);
    }

    &:disabled {
        background-color: ${(props) => (props.bgcolor === 'GREEN'
        ? ((props.disableBgColor && (props.theme.color[props.disableBgColor])) || 'rgba(0, 184, 153, 0.4)')
        : props.theme.color.WHITE)};

        color: ${(props) => (props.bgcolor !== 'GREEN'
        ? 'rgba(0, 184, 153, 0.4)'
        : (props.theme.color[props.disableFontColor] || props.theme.color.WHITE))};

        cursor: not-allowed;
    }

    @media ${Device.tab} {
        border-radius: ${(props) => ((props.fontVariant === 'buttonVariantTwo') ? '19px' : props.borderRadius ? props.borderRadius : '12px')};
        padding: ${(props) => (props.fontVariant === 'buttonVariantTwo' ? '16px 0px' : '14px')};
    }

    @media ${Device.desktop} {
        padding: ${(props) => {
        let padding = '16px';
        if (props.fontVariant === 'buttonVariantTwo') {
            padding = '24px 0px';
        } else if (props.fontVariant === 'buttonVariantFive') {
            padding = '14px';
        }
        return padding;
    }};
    }

    ${(props) => (props.enableBoxShadow ? `box-shadow: 0px 4px 0px ${props.theme.color.DARK_GREEN_1}; border-radius: 19px;` : '')}
`;

type PrimaryButtonProps = React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    label?: string;
    testId?: string;
    color?: 'WHITE' | 'GREEN';
    isQRCodeShown?: boolean;
    fontVariant?: any;
    enableBoxShadow?: boolean
    borderRadius?: string;
    disableTransForm?: boolean;
    disableBgColor?: string;
    disableFontColor?: string;
    style?: any;
}& StyledButtonProps;

const PrimaryButton = ({
    onClick,
    onMouseOver,
    onMouseLeave,
    disabled,
    label,
    testId,
    isQRCodeShown,
    color = 'GREEN',
    fontVariant,
    enableBoxShadow,
    borderRadius,
    disableTransForm,
    disableBgColor,
    disableFontColor,
    style,
}: PrimaryButtonProps) => (
    <StyledButton
        tagType='button'
        font={fontVariant}
        type='button'
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        id={testId}
        bgcolor={color}
        isQRCodeShown={isQRCodeShown}
        fontVariant={fontVariant}
        enableBoxShadow={enableBoxShadow}
        borderRadius={borderRadius}
        disableTransForm={disableTransForm}
        disableBgColor={disableBgColor}
        disableFontColor={disableFontColor}
        style={style}
    >
        {label}
    </StyledButton>
);

PrimaryButton.defaultProps = {
    disabled: false,
    onClick: () => {},
    onMouseOver: () => {},
    onMouseLeave: () => {},
    isQRCodeShown: false,
    label: 'submit',
    testId: '',
    color: 'GREEN',
    fontVariant: 'button',
    enableBoxShadow: false,
    borderRadius: '',
    disableTransForm: false,
    disableBgColor: '',
    disableFontColor: '',
    style: {},
};

export default PrimaryButton;
