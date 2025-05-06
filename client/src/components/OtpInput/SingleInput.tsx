import React, { memo, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Device } from '../../Themes/Device';

const Input = styled.input`
    width: 24px;
    text-align: center;
    background-color: ${[(props) => props.theme.color.TRANSPARENT]};
    font-size: ${(props) => props.theme.typography.h4VariantTwo.phone.fontSize};
    font-weight: ${(props) => props.theme.typography.h4VariantTwo.phone.fontWeight};
    line-height: ${(props) => props.theme.typography.h4VariantTwo.phone.lineHeight};
    font-family: ${(props) => props.theme.typography.h4VariantTwo.fontFamily};
    color: transparent;
    text-shadow: 0 0 0 ${(props) => props.theme.color.MINE_SHAFT};
    caret-color: transparent;
    border: none;
    outline: none;

    &:not(:last-child) {
        margin-right: 3px;
    }

    &:focus,
    &:focus-within {
        text-shadow: 0 0 0 ${(props) => props.theme.color.FOREST_GREEN};
    }

    &:disabled {
        text-shadow: 0 0 0 ${(props) => props.theme.color.MID_GREY};
        pointer-events: none;
    }

    /* Dash Style */
    &:not(:placeholder-shown) ~ div {
        display: none;
    }

    @media ${Device.tab} {
        font-size: ${(props) => props.theme.typography.h4.tab.fontSize};
        font-weight: ${(props) => props.theme.typography.h4.tab.fontWeight};
        line-height: ${(props) => props.theme.typography.h4.tab.lineHeight};
    }

    @media ${Device.desktop} {
        width: 32px;
        font-size: ${(props) => props.theme.typography.h4.desktop.fontSize};
        font-weight: ${(props) => props.theme.typography.h4.desktop.fontWeight};
        line-height: ${(props) => props.theme.typography.h4.desktop.lineHeight};
    }

    /* To remove up down arrow on number input */
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }

    &[type='number'] {
        -moz-appearance: textfield;
    }

    &[type=number]::-webkit-outer-spin-button,
    &[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const Dash = styled.div<{ color: string }>`
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 2px;
    background-color: ${(props) =>
        props.color || props.theme.color.CHARCOAL_GREY};
    user-select: none;

    @media ${Device.desktop} {
        width: 24px;
        height: 2.76px;
        left: 5px;
    }
`;

const Wrapper = styled.div`
    position: relative;
`;

export type SingleOTPInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    focus?: boolean;
    autoFocus?: boolean;
    color?: string;
    disabled?: boolean;
    name?: string;
};

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
    const { focus, color, autoFocus, ...rest } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    // this is affecting the ssr as useLayoutEffect doesn't work with ssr
    useLayoutEffect(() => {
        if (inputRef.current && focus && autoFocus) {
            const timer = setTimeout(() => inputRef.current.focus(), 300);
            return () => clearTimeout(timer);
        }
    }, [autoFocus]);

    useLayoutEffect(() => {
        if (inputRef.current && focus && autoFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus, focus]);

    return (
        <Wrapper>
            <Input
                ref={inputRef}
                {...rest}
                className='focusInput'
                maxLength={1}
                disabled={props.disabled}
                placeholder=' '
                name={props.name}
                type='tel'
            />
            <Dash color={color} />
        </Wrapper>
    );
}

const SingleInput = memo(SingleOTPInputComponent);
export default SingleInput;
