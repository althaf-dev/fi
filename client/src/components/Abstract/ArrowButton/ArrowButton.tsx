import React from 'react';
import styled from 'styled-components';

import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import Image from '../Image/Image';

const StyledArrowButton = styled.div<{ disabled: boolean }>`
    height: 52px;
    width: 52px;
    border-radius: 100%;
    box-shadow: 0px 1px 1px rgba(148, 148, 148, 0.14),
        0px 2px 1px rgba(148, 148, 148, 0.12),
        0px 1px 3px rgba(148, 148, 148, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.disabled
            ? 'cursor: not-allowed; opacity: 0.5;'
            : 'cursor: pointer;'};
`;

const StyledArrow = styled.div`
    height: 28px;
    width: 28px;
`;

interface ArrowButtonProps {
    type?: 'left' | 'right';
    onClick?: () => void;
    disabled?: boolean;
}

const ArrowButton = (props: ArrowButtonProps) => {
    const onClick = () => {
        if (!props.disabled) {
            props.onClick();
        }
    };
    return (
        <StyledArrowButton disabled={props.disabled} onClick={onClick}>
            <StyledArrow>
                <Image
                    icon={
                        props.type === 'left' ? ICONS_URL_MAP.LEFT_ARROW : ICONS_URL_MAP.RIGHT_ARROW
                    }
                    alt='arrow button'
                />
            </StyledArrow>
        </StyledArrowButton>
    );
};

ArrowButton.defaultProps = {
    type: 'right',
    disabled: false,
    onClick: () => {},
};

export default ArrowButton;
