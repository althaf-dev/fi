/**
 * @file Success or Failure Screen Page
 */

import React from 'react';
import styled from 'styled-components';

import { FooterContainer } from '../../../components/Waitlist/styled';

import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';
import { GFF_COMPLETED_CHECK } from '../../../events/EventName';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import { Font, PrimaryButton, Image } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';
import { trackGTMEvent } from '../../../events';

import Header from '../Header';
import { Wrapper, Title } from '../styled';
import { onChangeCreditCardEligibilityValue } from '../actions';
import { PAGE_MAP } from '../constants';
import { IDisplayInfoData } from '../types';

// eslint-disable-next-line no-var
declare var window: any;

const ButtonHolder = styled.div`
    height: 52px;
    max-width: 312px;
    width: 100%;
`;

const ContentContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })}; 
    gap: 12px;

    @media ${Device.desktop} {
        gap: 23px;
        margin-bottom: 60px;
    }
`;

const HeaderIcon = styled.div`
    width: 40px;
    height: 40px;

    @media ${Device.desktop} {
        width: 82px;
        height: 82px;
    }
`;

const ScreenMessage = styled(Font)`
    text-align: center;
`;

const ScreenImageHolder = styled.div`
    width: 319px;
    height: 252px;
`;

const AdditionalText = styled.div`
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '12px', lineHeight: '14px',
    })};
    color: ${(props) => props.theme.color.FOREST_GREEN};
    text-align: center;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '48px', lineHeight: '55px',
    })};
    }
`;

const BottomText = styled.div`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '10px', lineHeight: '14px',
    })};
    color: ${(props) => props.theme.color.GREY_3};
    text-align: center;
    margin-top: 7px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '16px', lineHeight: '20px',
    })};
        margin-top: 14px;
    }
`;

interface ISucessOrFailureScreen {
    displayInfoData: IDisplayInfoData;
}

const SucessOrFailureScreen = (props: ISucessOrFailureScreen) => {
    const { displayInfoData } = props;

    const {
        headerIcon, screenTitle, screenMessage, screenImage, ctaText, additionalText, bottomText,
    } = displayInfoData || {};

    const onChangeReducerValue = useOnChangeReducerValue(onChangeCreditCardEligibilityValue);

    const onButtonClick = () => {
        onChangeReducerValue({
            currentStep: PAGE_MAP.LANDING_PAGE,
        });

        trackGTMEvent(GFF_COMPLETED_CHECK);
    };

    return (
        <Wrapper>
            <Header
                ctaCssId='cc-waitlist-back-btn'
                icon={LOGOS_URL_MAP.FI_FEDERAL}
                onClickPrevButton={onButtonClick}
            />
            <ContentContainer>
                {headerIcon ? (
                    <HeaderIcon>
                        <Image icon={headerIcon} alt='Partying Face' />
                    </HeaderIcon>
                ) : null}
                {screenTitle ? (
                    <Title
                        tagType='text'
                        font='h5VariantThree'
                    >
                        {screenTitle}
                    </Title>
                ) : null}
                {screenMessage ? (
                    <ScreenMessage
                        font='labelVariantEighteen'
                        tagType='text'
                        color='GREY_3'
                    >
                        {screenMessage}
                    </ScreenMessage>
                ) : null}
                {/* <ScreenImageHolder>
                    <Image icon={screenImage} alt='Partying Face' />
                </ScreenImageHolder> */}
                {additionalText ? (
                    <AdditionalText>
                        {additionalText}
                    </AdditionalText>
                ) : null}
            </ContentContainer>
            <FooterContainer>
                <ButtonHolder>
                    <a href={window.oneLinkCommonUrl} target='_blank' rel='noreferrer' className='onelink-common-url'>
                        <PrimaryButton
                            fontVariant='buttonVariantFive'
                            label={ctaText}
                            onClick={onButtonClick}
                            borderRadius='12px'
                            disableTransForm
                            disableBgColor='GREEN_PEA'
                            disableFontColor='BOMBAY'
                        />
                    </a>
                </ButtonHolder>
                <BottomText>
                    {bottomText}
                </BottomText>
            </FooterContainer>
        </Wrapper>
    );
};

export default SucessOrFailureScreen;
