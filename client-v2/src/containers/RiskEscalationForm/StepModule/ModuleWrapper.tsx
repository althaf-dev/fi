/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-case-declarations */

'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { PAGE_MAP, PageConfigMap } from '../constants';
import {
    stepChangeAction, mobileGenerateOTP, verifyOtp,
} from '@/rtk/components/riskForm/reducer';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '../utils';
import { ErrorDescription, ErrorWrapper } from '@/components/Waitlist/styled';
import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';
import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';
import { PrimaryButton } from '@/components';
import Header from '../Header';
import InnerContainer from './InnerContainer';

const ButtonHolder = styled.div`
    height: 52px;
    min-width: 100%;
    margin-bottom: 5px;
    padding: 0 15px 0 15px;

    @media ${Device.desktop} {
        min-width: 312px;
        width: 100%;
    }
`;

const HeaderContainer = styled.div<any>`
    width: 100%;
    margin-top: 35px;
    display: ${(props: any) => (props?.isHeaderRequired ? 'block' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position:relative;
    max-height: 180px;

    @media ${Device.desktop} {
        margin-top: 80px;
        width: 700px;
        position: relative;
    }
`;

const BodyContainer = styled.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
    justify-content: normal;
    width: 100%;
    flex-direction: column;

    .body {
        width: 100%;
        height: calc(100% - 20px);
        margin-bottom: 10px;
        margin-top: 10px;
    }

    @media ${Device.tab} {
        height: calc(100% - 70px);
        width: 500px;
        margin-top: 10px;
        .body {
            width: 100%;
            height: 100%; 
        }
    }

    @media ${Device.desktop} {
        height: 100%;
        width: 500px;
        margin-top: 10px;
        .body {
            height: calc(100% - 20px);
            margin-bottom: 10px;
            margin-top: 10px;
        }
    }
`;

const FooterContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })}; 
    height: 103px;
    margin-top: 30px;
`;

const ComponentHeader = styled.div<any>`
        display: ${(props) => (props?.isContentRequired ? 'block' : 'none')};
        margin-top: ${(props) => props?.headerStyle?.phone.marginTop};
        text-align: center;
        .title {   
        color: ${(props) => props.theme.color.SHARK1} 
        ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '20px',
        lineHeight: '28px'
    })};
            
        }
        .sub-title {
            font-size: 14px;
            margin-top: 12px;
            font-weight: 500;
        }
    @media ${Device.desktop} {
        margin-top: ${(props) => props.headerStyle?.desktop.marginTop};
        .sub-title {
            font-size: 20px;
            margin-top: 30px;
        }
        .title {
            color: ${(props) => props.theme.color.SHARK1} 
            text-align: center;
            ${MIXINS.FontMixin({
        weight: 500,
        size: '32px',
        lineHeight: '52px',
    })};
        }
    }   

    .sub-title {
        font-family: Inter;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: center;
        color: #929599;
    }
`;

const MainContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const InnerWrapper = styled.div`
        display: flex;
        padding: 0px 20px;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        height: calc(100% - 180px);

        @media ${Device.tab} {
            width: 500px;
        }

        @media ${Device.desktop} {
            width: 500px;
            padding: 0px 20px;
        }
`;

function WrapperUI(props: any) {
    const {
        currentStep, children, onClickBack, stepTitle, stepSubTitle,
    } = props;
    const [HeaderComponent, contentContainer] = children;
    const riskFormState = useAppSelector((state: any) => state.riskForm);

    const router = useRouter();

    const {
        phone, errorMessage, isLoading, token
    } = riskFormState;

    const { mobileOtpToken, accessToken } = token;

    const dispatch = useAppDispatch();

    const areAllFieldsValid = () => {
        try {
            switch (currentStep) {
                case PAGE_MAP.MOBILE_VERIFICATION:
                    return phone.phoneNumber.length < 10;
                case PAGE_MAP.VERIFY_OTP_PAGE:
                    return mobileOtpToken.length != 6;
                default:
                    return false;
            }
        } catch (error: any) {
            return false;
        }
    };

    const onSubmit = () => {
        let payload: any;
        switch (currentStep) {
            case PAGE_MAP.LANDING_PAGE:
                dispatch(stepChangeAction(PAGE_MAP.MOBILE_VERIFICATION));
                break;

            case PAGE_MAP.MOBILE_VERIFICATION:
                payload = {
                    phoneNumber: phone.phoneNumber,
                    otpFlow: 'OTP_FLOW_RISK_OUTCALL',
                    auth_identifier_type: 'escalation-form'
                };
                dispatch(mobileGenerateOTP(constructPayloadWithCommonInfo(payload)));
                break;

            case PAGE_MAP.INTRO_SCREEN:
                dispatch(stepChangeAction(PAGE_MAP.QUESTION_PAGE));
                break;
            case PAGE_MAP.INVALID_FROM:
                router.push('/');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (mobileOtpToken.length === 6) {
            const payload = {
                token: accessToken,
                otp: mobileOtpToken,
                phoneNumber: phone.phoneNumber,
                otpFlow: 'OTP_FLOW_RISK_OUTCALL',
            };
            dispatch(verifyOtp(constructPayloadWithCommonInfo(payload)));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mobileOtpToken]);

    return (
        <InnerContainer>
            <MainContainer>
                <HeaderContainer isHeaderRequired={PageConfigMap[currentStep].isHeaderRequired}>
                    <Header
                        onClickPrevButton={onClickBack}
                        icon={LOGOS_URL_MAP.FI_FEDERAL}
                        description={PageConfigMap[currentStep].description}
                        backNavVisbility={PageConfigMap[currentStep].backNavVisbility}
                    >
                        { HeaderComponent }
                    </Header>
                </HeaderContainer>
                <InnerWrapper>
                    <BodyContainer>
                        <ComponentHeader
                            headerStyle={PageConfigMap[currentStep].headerStyle}
                            isContentRequired={PageConfigMap[currentStep].isContentRequired}
                        >
                            <div className='title'>{stepTitle}</div>
                            <div className='sub-title'>{stepSubTitle}</div>
                        </ComponentHeader>
                        <div className='body'>
                            {
                                contentContainer
                            }
                        </div>
                        {PageConfigMap[currentStep].SubmitButtonVisbility && (
                            <FooterContainer>
                                {errorMessage ? (
                                    <ErrorWrapper textAlignment='center' noPadding>
                                        <ErrorDescription
                                            font='labelVariantOne'
                                            color='ERROR_RED'
                                            tagType='label'
                                        >
                                            {errorMessage}
                                        </ErrorDescription>
                                    </ErrorWrapper>
                                ) : null}
                                <ButtonHolder>
                                    <PrimaryButton
                                        fontVariant='buttonVariantFive'
                                        label={PageConfigMap[currentStep].submitButtonText}
                                        disabled={areAllFieldsValid() || isLoading}
                                        borderRadius='12px'
                                        disableTransForm
                                        disableBgColor='GREEN_PEA'
                                        disableFontColor='BOMBAY'
                                        testId='cc-waitlist-mobile-number-btn'
                                        onClick={onSubmit}
                                        bgcolor=''
                                    />
                                </ButtonHolder>
                            </FooterContainer>
                        )}
                    </BodyContainer>
                </InnerWrapper>
            </MainContainer>
        </InnerContainer>

    );
}

export default WrapperUI;
