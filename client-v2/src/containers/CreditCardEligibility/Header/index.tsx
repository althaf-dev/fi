/**
 * @file Header Section For Credit Card Waitlist
 */

'use client';

import React from 'react';
import styled from 'styled-components';
import { Image } from '@/components';
import { Device } from '@/Themes/Device';
import { useAppSelector } from '@/rtk/hooks';
import { PrevHolder, HeaderHolder } from '@/components/Waitlist/styled';
import { CircularProgressBar } from '../styled';
import { steps, PageConfig } from '../constants';

interface HeaderProps {
    onClickPrevButton?: () => void;
    ctaCssId?: string;
    backNavVisbility: boolean;
}

const FiImage = styled(Image)`
    @media ${Device.desktop} {
        height: 52px;
        width: 52px;
    }

    @media ${Device.phone} {
        height: 33px;
        width: 123px;
    }
`;

const LogoContainer = styled.div`
`;

const Header = (props: HeaderProps) => {
    const creditCardEligibilityState = useAppSelector((state: any) => state.creditCardEligibility);

    const { currentStep, pageType } = creditCardEligibilityState;

    const {
        onClickPrevButton, ctaCssId, backNavVisbility
    } = props;

    const { styleConfig, url } = PageConfig[pageType] || { };

    return (
        <>
            <HeaderHolder>
                {onClickPrevButton && backNavVisbility ? (
                    <PrevHolder onClick={onClickPrevButton} id={ctaCssId}>
                        <Image
                            icon={url.backnav}
                            alt='Fi prev Icon'
                        />
                    </PrevHolder>
                ) : null}
                <LogoContainer>
                    <FiImage icon={url.fiLogo} alt='credit-card-logo' />
                </LogoContainer>
                <CircularProgressBar steps={steps} currentStep={currentStep} stroke={styleConfig?.loader?.stroke} />
            </HeaderHolder>
        </>
    );
};

Header.defaultProps = {
    onClickPrevButton: false,
    ctaCssId: '',
};

export default Header;
