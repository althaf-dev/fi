/* eslint-disable react/no-unused-prop-types */
/**
 * @file Header Section For Credit Card Waitlist
 */

'use client';

import React from 'react';
import styled from 'styled-components';
import { Image } from '@/components';
import { Device } from '@/Themes/Device';
import { SVGS_URL } from '@/constants/AssetConstants';

interface HeaderProps {
    title?: string;
    description?: string | React.ReactElement;
    onClickPrevButton?: () => void;
    ctaCssId?: string;
    icon?: string;
    backNavVisbility: boolean;
    children?: string | React.ReactElement
}

const PrevHolder = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 25px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    padding: 5px;
    z-index: 10;

    @media ${Device.desktop} {
        left: 15px;
        top: 10px;
    }
`;

const HeaderHolder = styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;
    .header-content {
        width: 300px;
        height: fit-content;
        display: flex;
        justify-content: center;
    }

    @media ${Device.desktop} {
        margin-bottom: 10px;
        .header-content {
            width: 600px;
            height: fit-content;
        }
    }

`;

const Header = (props: HeaderProps) => {
    const {
        onClickPrevButton, backNavVisbility, children
    } = props;

    return (
        <HeaderHolder>
            {onClickPrevButton && backNavVisbility ? (
                <PrevHolder onClick={onClickPrevButton}>
                    <Image
                        icon={`${SVGS_URL}arrow-left.svg`}
                        alt='Fi prev Icon'
                    />
                </PrevHolder>
            ) : null}
            <div className='header-content'>
                {
                    children
                }
            </div>
        </HeaderHolder>
    );
};

Header.defaultProps = {
    onClickPrevButton: false,
    title: false,
    description: false,
    ctaCssId: '',
    icon: '',
    children: null,
};

export default Header;
