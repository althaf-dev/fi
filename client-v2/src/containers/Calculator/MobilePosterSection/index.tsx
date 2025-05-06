/**
 * @file MobilePosterSection: Poster Section for the calculator mobile design
 */
import React from 'react';
import { InView } from 'react-intersection-observer';

import { PrimaryButton, Image } from '../../../components';

import {
    Container, Title, Description, ButtonHolder, ImageHolder,
} from './styled';

interface IMobilePosterSectionProps {
    title: string;
    description: string;
    mobileIconUrl?: string;
    mobileFallbackIconUrl?: string;
    mobilePosterLabel?: string;
    onNextButtonClick: (value: number) => any;
    onViewChange: (inView: boolean) => void;
    loadingType: 'lazy' | 'eager';
}

const MobilePosterSection = (props: IMobilePosterSectionProps) => {
    const {
        title, description, mobileIconUrl, mobileFallbackIconUrl, onNextButtonClick, onViewChange,
        loadingType, mobilePosterLabel,
    } = props;

    return (
        <InView threshold={0.5} onChange={onViewChange}>
            <Container>
                <ImageHolder>
                    <Image icon={mobileIconUrl} fallBackImage={mobileFallbackIconUrl} loadingType={loadingType} alt='calculator icon' />
                </ImageHolder>
                <Title font='h3VariantThree' tagType='h3' color='MINE_SHAFT'>{title}</Title>
                <Description font='pSmallVariantEleven' tagType='p' color='OSLO_GRAY'>{description}</Description>
                <ButtonHolder onClick={onNextButtonClick(-1)}>
                    <PrimaryButton
                        label={mobilePosterLabel}
                        borderRadius='19px'
                        
                    />
                </ButtonHolder>
            </Container>
        </InView>
    );
};

export default MobilePosterSection;
