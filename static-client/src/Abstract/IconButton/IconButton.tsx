import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.1s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14),
            0px 5px 10px rgba(0, 0, 0, 0.04), 0px 0px 15px rgba(0, 0, 0, 0.05);
    }

    &:active {
        box-shadow: none;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    @media (min-width: 610px) {
        width: 50px;
        height: 50px;
    }
`;

interface IconButtonProps {
    icon: string;
    disabled?: boolean;
    onClick?: () => void;
}

const IconButton = ({ onClick, disabled, icon }: IconButtonProps) => (
    <StyledButton type='button' onClick={onClick} disabled={disabled}>
        <Image icon={icon} />
    </StyledButton>
);

IconButton.defaultProps = {
    disabled: false,
    onClick: () => {},
};

export default IconButton;
