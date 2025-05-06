'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { PAGE_MAP, steps } from '../constants';
import {
    stepChangeAction, mobileGenerateOTP, updateOtp, setErrorMessage, setOtpValueArray, updateFormId
} from '@/rtk/components/riskForm/reducer';
import GenerateOtp from '../GenerateOtp';
import OTPVerificationPage from '../OTPVerificationPage';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '../utils';
import ModuleWrapper from './ModuleWrapper';
import QuestionPage from '../QuestionPage';
import IntroScreen from '../IntroScreen';
import FinalScreen from '../finalScreen';
import InvalidFrom from '../InvalidForm';
import { Image } from '@/components/Abstract';
import { Device } from '@/Themes/Device';
import { SVGS_URL } from '@/constants/AssetConstants';
import Loader from '@/components/Loader';

const otpLength = 6;

const LogoContainer = styled.div`
    height: 28px;
    width: 28px;
    img {
        object-fit: contain;
    }

    @media ${Device.desktop} {
        height: 44px;
        width: 44px;
    }
`;

const HeaderContainer = styled.div` 

    position: relative;
    .prev-icon-container {
        cursor: pointer;
        position: absolute;
        left: 0px;
        width: 24px;
        height: 24px;
    
        @media ${Device.desktop} {
            width: 52px;
            height: 52px;
            left: 0px;
        }
    }

    .header-container {
        margin: 0 10px 0 10px;
        .title {
            font-family: Gilroy;
            font-size: 25px;
            font-weight: 600;
            line-height: 35px;
            letter-spacing: 0em;
            text-align: center;
            color: #313234;
        }
    
        .sub-title {
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0px;
            text-align: center;
            color: #878A8D;
            margin-top: 10px;
        }
    }

    @media ${Device.desktop} {

        .header-container {
            margin: 0 10px 0 10px;
            .title {
                font-family: Gilroy;
                font-size: 25px;
                font-weight: 600;
                line-height: 35px;
                letter-spacing: 0em;
                text-align: center;
                color: #313234;
            }
        
            .sub-title {
                font-family: Inter;
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
                letter-spacing: 0px;
                text-align: center;
                color: #878A8D;
                margin-top: 10px;
            }
        }
        
    }

`;

const FiImage = styled(Image)`
    height: 28px;
    width: 28px;

    @media ${Device.desktop} {
        height: 33px;
        width: 21px;
    }
`;

const StepperUI = () => {
    const riskFormState = useAppSelector((state: any) => state.riskForm);
    const searchParams = useSearchParams();

    const {
        phone, currentStep, token, otpValueArray, screens,
    } = riskFormState;

    const { phoneNumber } = phone;

    const { mobileOtpToken } = token;

    const router = useRouter();

    const dispatch = useAppDispatch();

    const resendOtp = () => {
        dispatch(mobileGenerateOTP(constructPayloadWithCommonInfo(phone)));
    };

    const onClickBack = () => {
        const stepIndex = steps.findIndex((step) => step === currentStep);
        if (stepIndex !== -1 && stepIndex > 0) {
            dispatch(stepChangeAction(steps[stepIndex - 1]));
            dispatch(setErrorMessage(''));
        }
    };

    const onOtpChange = (opt: any) => {
        dispatch(updateOtp(opt));
    };

    const handleSetOptValueArray = (value: any) => {
        dispatch(setOtpValueArray(value));
    };

    const formId = searchParams.get('form-id');

    useEffect(() => {
        if (formId) {
            dispatch(updateFormId(formId));
            dispatch(stepChangeAction(PAGE_MAP.MOBILE_VERIFICATION));
        } else dispatch(stepChangeAction(PAGE_MAP.INVALID_FROM));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const HeaderContent = () => {
        switch (currentStep) {
            case PAGE_MAP.INTRO_SCREEN: {
                const { title } = screens?.introScreen || { title: screens?.errorScreen?.title || '' };
                return (
                    <HeaderContainer>
                        <div className='header-container'>
                            <div className='title'>{title}</div>
                        </div>
                    </HeaderContainer>
                );
            }
            case PAGE_MAP.QUESTION_PAGE: {
                const { title, sub_title: subTitle } = screens?.questionnaireScreen || { };
                return (
                    <HeaderContainer>
                        <div className='header-container'>
                            <div className='title'>{title || 'Got it. Some last questions.' }</div>
                            <div className='sub-title'>{subTitle || 'These will further help us identify and address the reason why your account is blocked'}</div>
                        </div>
                    </HeaderContainer>
                );
            }

            case PAGE_MAP.FINAL_SCREEN: {
                const { title } = screens?.outroScreen || { title: '' };
                return (
                    <HeaderContainer>
                        <div className='header-container'>
                            <div className='title'>{title}</div>
                        </div>
                    </HeaderContainer>
                );
            }
            default:
                return (
                    <LogoContainer>
                        <FiImage icon={`${SVGS_URL}logo.svg`} alt='fi-logo' />
                    </LogoContainer>
                );
        }
    };

    switch (currentStep) {
        case PAGE_MAP.MOBILE_VERIFICATION:
            return (
                <ModuleWrapper
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                    stepTitle='Enter your mobile number'
                    stepSubTitle='Make sure you use the same one that is linked with your account'
                >
                    <HeaderContent />
                    <GenerateOtp onSubmit={onSubmit} />
                </ModuleWrapper>
            );

        case PAGE_MAP.VERIFY_OTP_PAGE:
            return (
                <ModuleWrapper
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                    stepTitle='Verify with OTP'
                    stepSubTitle={`OTP was sent as an SMS to ${phoneNumber}`}
                >
                    <HeaderContent />
                    <OTPVerificationPage
                        onChange={onOtpChange}
                        resendOtp={resendOtp}
                        otpVerifyError=''
                        phoneNumber={phoneNumber}
                        mobileOtpToken={mobileOtpToken}
                        length={otpLength}
                        otpValueArray={otpValueArray}
                        handleSetOptValueArray={handleSetOptValueArray}
                        onEnterClick={onSubmit}
                    />
                </ModuleWrapper>
            );

        case PAGE_MAP.QUESTION_PAGE:
            return (
                <ModuleWrapper
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                >
                    <HeaderContent />
                    <QuestionPage />
                </ModuleWrapper>
            );

        case PAGE_MAP.INTRO_SCREEN:
            return (
                <ModuleWrapper
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                >
                    <HeaderContent />
                    <IntroScreen />
                </ModuleWrapper>
            );

        case PAGE_MAP.FINAL_SCREEN:
            return (
                <ModuleWrapper
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                >
                    <HeaderContent />
                    <FinalScreen />
                </ModuleWrapper>
            );

        case PAGE_MAP.INVALID_FROM:
            return (
                <ModuleWrapper
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                >
                    <HeaderContent />
                    <InvalidFrom />
                </ModuleWrapper>
            );
        default:
            return <Loader isLoading={currentStep === ''} />;
    }
};
export default StepperUI;
