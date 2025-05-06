/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { Font } from '../index';
import { Device } from '@/Themes/Device';

const StyledButton = styled(Font)`
    padding: 2px;
    border: none;
    outline: none;
    text-transform: uppercase;
    display: inline-block;
    background-color: inherit;
    color: ${(props) => props.theme.color.GREY_2};
    transition: 0.1s ease;
    cursor: pointer;
    letter-spacing: 0.45px;

    &:hover {
        transform: scale(0.95);
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        opacity: 0.4;
        transform: scale(1);
        cursor: not-allowed;
    }

    @media ${Device.tab} {
        height: 50px;
    }
`;

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
    onClick?: () => void;
    label?: string;
    testId?: string;
};

const SecondaryButton = ({
    onClick,
    disabled,
    label,
    testId,
}: SecondaryButtonProps) => (
    <StyledButton
        tagType='button'
        font='button'
        type='button'
        onClick={onClick}
        disabled={disabled}
        id={testId}
    >
        {label}
    </StyledButton>
);

SecondaryButton.defaultProps = {
    disabled: false,
    onClick: () => {},
    label: 'SUBMIT',
};

export default SecondaryButton;
