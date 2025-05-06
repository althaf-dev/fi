/**
 * @file Landing Page
 */

import React from 'react';
import styled from 'styled-components';

import { FooterContainer } from '../../../components/Waitlist/styled';

import { LOGOS_URL_MAP, PNGS_URL, SVGS_URL, WEBP_URL } from '../../../constants/AssetConstants';
import { APP_URLS } from '../../../constants/AppConstant';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import { GFF_ELIG_CHECK_START } from '../../../events/EventName';

import { Font, PrimaryButton, Image } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';
import { trackGTMEvent } from '../../../events';

import Header from '../Header';
import {
    Wrapper, SubDescription, InfoContainer, InfoDescription,
} from '../styled';
import { onChangeCreditCardEligibilityValue } from '../actions';
import { LANDING_PAGE_DESCRIPTION_DATA, PAGE_MAP } from '../constants';

const ButtonHolder = styled.div`
    height: 52px;
    max-width: 312px;
    width: 100%;
`;

const LinkLabel = styled.a`
    text-decoration: none;
`;

const ImageHolder = styled.span<{ imageMobileWidth?: string, imageDesktopWidth: string, imageMobileHeight: string, imageDesktopHeight: string }>`
    display: inline-block;
    vertical-align: middle;
    height: ${((props) => props.imageMobileHeight)};
    width: ${((props) => props.imageMobileWidth)};
    margin-right: 7px;

    @media ${Device.desktop} {
        margin-right: 14px;
        height: ${((props) => props.imageDesktopHeight)};
        width: ${((props) => props.imageDesktopWidth)};
    }
`;

const HeaderDescriptionHolder = styled.div`
    margin-bottom: 12px;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${Device.desktop} {
        margin-bottom: 24px;
    }
`;

const TextHolder = styled.span`
    ${MIXINS.FontMixin({ weight: 500, size: '12px', lineHeight: '14px' })};
    vertical-align: middle;
    background: radial-gradient(74.8% 775.15% at 53.19% 128.79%, #FFFFFF 0%, #9C9C9C 77.08%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 500, size: '25px', lineHeight: '30px' })};
    }
`;

const CreditCardImageHolder = styled.div`
    width: 271px;
    height: 203px;
    margin: 0px auto;

    @media ${Device.desktop} {
        display: none;
    }
`;

const AmplifiCreditCardImageHolder = styled.div`
    width: 75px;
    height: 20px;
    margin: 7px auto 4px;

    @media ${Device.desktop} {
        display: none;
    }
`;

const FederalBankText = styled.div`
    display: block;

    @media ${Device.desktop} {
        display: none;
    }
`;

type HeaderDescriptionProps = {
    content: string | React.ReactElement;
};

// Header Description component
const HeaderDescription = (props: HeaderDescriptionProps) => {
    const { content } = props;

    return (
        <SubDescription>
            {content}
        </SubDescription>
    );
};

const LandingPage = () => {
    const onChangeReducerValue = useOnChangeReducerValue(onChangeCreditCardEligibilityValue);

    const onButtonClick = () => {
        onChangeReducerValue({
            currentStep: PAGE_MAP.GENERATE_OTP_PAGE,
        });

        trackGTMEvent(GFF_ELIG_CHECK_START);
    };

    return (
        <Wrapper>
            <Header
                title='AmpliFi your rewards on every spend'
                description={(
                    <HeaderDescription
                        content={(
                            <>
                                {LANDING_PAGE_DESCRIPTION_DATA?.map((data) => {
                                    const {
                                        id, title, icon, fallbackIcon, imageMobileWidth,
                                        imageDesktopWidth, imageMobileHeight, imageDesktopHeight,
                                    } = data || {};

                                    return (
                                        <HeaderDescriptionHolder key={id}>
                                            <ImageHolder
                                                imageMobileWidth={imageMobileWidth}
                                                imageDesktopWidth={imageDesktopWidth}
                                                imageMobileHeight={imageMobileHeight}
                                                imageDesktopHeight={imageDesktopHeight}
                                            >
                                                <Image icon={icon} fallBackImage={fallbackIcon} alt='logo' />
                                            </ImageHolder>
                                            <TextHolder>
                                                {title}
                                            </TextHolder>
                                        </HeaderDescriptionHolder>
                                    );
                                })}
                            </>
                        )}
                    />
                )}
                ctaCssId='cc-waitlist-back-btn'
                icon={LOGOS_URL_MAP.FI_FEDERAL}
            />
            <div>
                <CreditCardImageHolder>
                    <Image icon={`${WEBP_URL}waitlist-credit-card-image.webp`} fallBackImage={`${PNGS_URL}waitlist-credit-card-image.png`} alt='credit-card-image' />
                </CreditCardImageHolder>
                <AmplifiCreditCardImageHolder>
                    <Image icon={`${SVGS_URL}amplifi-credit-card-logo.svg`} fallBackImage={`${PNGS_URL}waitlist-credit-card-image.png`} alt='credit-card-image' />
                </AmplifiCreditCardImageHolder>
                <FederalBankText>
                    <InfoDescription
                        font='descriptionVariantOne'
                        tagType='text'
                        color='SUVA_GREY'
                    >
                        Issued by Federal Bank in co-branded
                        <br />
                        Partnership with Fi Brand Pvt. Ltd
                    </InfoDescription>
                </FederalBankText>
            </div>
            <FooterContainer>
                <InfoContainer>
                    <InfoDescription
                        font='descriptionVariantOne'
                        tagType='text'
                        color='SUVA_GREY'
                    >
                        This is one loaded card.&nbsp;
                        <LinkLabel href={APP_URLS.CREDIT_CARD_PAGE} target='_blank'>
                            <Font
                                color='FOREST_GREEN'
                                tagType='span'
                                font='descriptionVariantOne'
                            >
                                Know all about it here.
                            </Font>
                        </LinkLabel>
                    </InfoDescription>
                </InfoContainer>
                <ButtonHolder>
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label='CHECK ELIGIBILITY'
                        onClick={onButtonClick}
                        borderRadius='12px'
                        disableTransForm
                        disableBgColor='GREEN_PEA'
                        disableFontColor='BOMBAY'
                    />
                </ButtonHolder>
            </FooterContainer>
        </Wrapper>
    );
};

export default LandingPage;
