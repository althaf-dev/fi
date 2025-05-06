import React from 'react';
import styled from 'styled-components';
import { Font } from '@/Abstract';
import { Device } from '@/Themes/Device';

type WrapperProps = {
    isQRCodeShown?: boolean,
    fontVariant?: any,
    enableBoxShadow?: boolean,
    borderRadius?: string,
    disableTransForm?: boolean,
    disableBgColor?: string;
    disableFontColor: string;
    [key: string]: any;
}

const Wrapper = styled(Font)<WrapperProps>`
    width: 100%;
    padding: 14px;
    border: none;
    outline: none;
    border-radius: ${(props) => {
        if (props.fontVariant === 'buttonVariantTwo') return '19px';
        if (props.borderRadius) return props.borderRadius;
        return '10px';
    }};
        
    text-transform: ${(props) => (props.disableTransForm ? 'none' : 'uppercase')};
    transition: 0.1s ease;
    background-color: ${(props) => props.style.bgcolor};

    cursor: pointer;
    letter-spacing: 0.45px;

    &:active {
        box-shadow: none;
        transform: scale(0.98);
    }

    &:disabled {
        background-color: ${(props) => (props.theme.color[props.disableBgColor])};
        color: ${(props) => props.theme.color[props.disableFontColor]};

        cursor: not-allowed;
    }

    @media ${Device.tab} {
        border-radius: ${(props) => {
        if (props.fontVariant === 'buttonVariantTwo') return '19px';
        if (props.borderRadius) return props.borderRadius;
        return '12px';
    }};
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

type StyledButtonProps = React.HTMLAttributes<HTMLElement> & {
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
}& WrapperProps;

const StyledButton = ({
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
}: StyledButtonProps) => (
    <Wrapper
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
    </Wrapper>
);

StyledButton.defaultProps = {
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
    style: {},
};

export default StyledButton;
