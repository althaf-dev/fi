'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { ICONS_URL_MAP } from '@/constants/AssetConstants';
import Image from '../Image/Image';

const StyledArrow = styled.div`
    height: 32px;
    width: 32px;
    cursor: pointer;
`;

interface ArrowProps {
    type?: 'left' | 'right';
    onClick?: () => void;
}

const Arrow = ({ type, onClick }: ArrowProps) => {
    const [active, setActive] = useState(false);

    switch (type) {
        case 'left':
            return (
                <StyledArrow
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    onClick={onClick}
                >
                    <Image
                        icon={active ? ICONS_URL_MAP.ACTIVE_LEFT_ARROW : ICONS_URL_MAP.LEFT_ARROW}
                        alt='arrow icon'
                    />
                </StyledArrow>
            );

        default:
            return (
                <StyledArrow
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    onClick={onClick}
                >
                    <Image
                        objectType='contain'
                        icon={active ? ICONS_URL_MAP.ACTIVE_RIGHT_ARROW : ICONS_URL_MAP.RIGHT_ARROW}
                        alt='arrow icon'
                    />
                </StyledArrow>
            );
    }
};

Arrow.defaultProps = {
    type: 'right',
    onClick: () => {},
};

export default Arrow;
