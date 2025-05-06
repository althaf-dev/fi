/* eslint-disable no-nested-ternary */
/* eslint-disable dot-notation */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-case-declarations */
import React from 'react';
import styled from 'styled-components';
import {
    PAGE_MAP, steps, getResultScreenData, ConsentType, PageConfig
} from '../constants';
import { creditCardEvents } from '@/events/constants';
import LandingPage from '../LandingPage';
import LandingPageV2 from '../LandingPageV2';
import {
    stepChangeAction, mobileGenerateOTP, verifyOtp, checkEligibility, updateOtp, setErrorMessage, setOtpValueArray,
} from '@/rtk/components/CreditCard/reducer';
import UserDetailsPage from '../GenerateOtp';
import PersonalDetails from '../PersonalDetails';
import SucessOrFailureScreen from '../SuccessOrFaliureScreen';
import PollingForEligibilitStatus from '../PollingStatus';
import OTPVerificationPage from '../OTPVerificationPage';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo, fireCreditCardEvents, isValidDob } from '../utils';
import { ErrorDescription, ErrorWrapper, MainContainer } from '@/components/Waitlist/styled';
import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';
import Header from '../Header';
import { DesktopSubtitleContainer } from '../styled';
import InnerContainer from './InnerContainer';
import { ASSETS_URL } from '@/constants/AssetConstants';
import { Font, Image } from '@/components/Abstract';
import { APP_URLS, CREDIT_CARD_TYPE } from '@/constants/AppConstant';
import StyledButton from './styledButton';
import Loader from '@/components/Loader';

const ButtonHolder = styled.div`
    height: 52px;
    min-width: 100%;
    margin-bottom: 5px;

    @media ${Device.desktop} {
        min-width: 312px;
        width: 100%;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    background: transparent;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
        height: 100%;
    }
`;

const HeaderContainer = styled.div`
    margin-bottom: 30px;

    @media ${Device.desktop} {
        margin-bottom: 20px;
    }
`;

const FooterHeading = styled.div<any>`
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    color: ${(props) => props.style.consentText};

    @media ${Device.desktop} {
        font-size: 16px;
    }
`;

const BodyContainer = styled.div`
    overflow-y: auto;
    height: calc(100% - 54px);
    display: flex;
    align-content: center;
    justify-content: space-around;

    ::-webkit-scrollbar {
        width: 10px;
      }
       
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
       
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }

    @media ${Device.desktop} {

    }
`;

const BodyContainerInnerWrapper = styled.div`
    width: 100%;
    @media ${Device.desktop} {
        width: 552px;
        padding: 0px 30px;
    }
`;

const FooterContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })}; 
    height: 103px;
    margin-top: 30px;
`;

const PageConfigMap = {
    [PAGE_MAP.LANDING_PAGE]: {
        submitButtonText: 'CONFIRM',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
    },
    [PAGE_MAP.MOBILE_VERIFICATION]: {
        submitButtonText: 'CONFIRM',
        SubmitButtonVisbility: true,
        backNavVisbility: true,
        description: 'Use your primary number here',
        headerStyle: {
            desktop: {
                marginTop: '80px',
            },
            phone: {
                marginTop: '115px',
            },
        },
    },
    [PAGE_MAP.VERIFY_OTP_PAGE]: {
        submitButtonText: 'CONFIRM',
        SubmitButtonVisbility: true,
        backNavVisbility: true,
        description: 'Use your primary number here',
        headerStyle: {
            desktop: {
                marginTop: '80px',
            },
            phone: {
                marginTop: '115px',
            },
        },
    },
    [PAGE_MAP.USER_DETAILS_PAGE]: {
        submitButtonText: 'CHECK MY ELIGIBILTY',
        SubmitButtonVisbility: true,
        backNavVisbility: true,
        description: 'Use your primary number here',
        headerStyle: {
            desktop: {
                marginTop: '60px',
            },
            phone: {
                marginTop: '25px',
            },
        },
    },
    [PAGE_MAP.CREDIT_CARD_ELIGIBILITY_SUCCESS]: {
        submitButtonText: 'CHECK MY ELIGIBILTY',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
    },
    [PAGE_MAP.CREDIT_CARD_POLLING_STATUS]: {
        submitButtonText: 'CHECK MY ELIGIBILTY',
        SubmitButtonVisbility: false,
        backNavVisbility: false,
        headerStyle: {
            desktop: {
                marginTop: '60px',
            },
            phone: {
                marginTop: '25px',
            },
        },
    },
};

const ComponentHeader = styled.div<any>`
        margin-top: ${(props) => props.headerStyle.phone.marginTop};
        text-align: center;
        .title {    
            ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '24px',
        lineHeight: '28px',
    })};
       
            color: ${(props) => props.headerStyle.phone.titleColor}
        }
        .sub-title {
            font-size: 14px;
            margin-top: 12px;
            font-weight: 500;
            color: ${(props) => props.headerStyle.phone.subTitleColor}
        }

    @media ${Device.desktop} {
        margin-top: ${(props) => props.headerStyle.desktop.marginTop};
        .sub-title {
            font-size: 20px;
            margin-top: 30px;
            
        }
        .title {
            text-align: center;

            ${MIXINS.FontMixin({
        weight: 500,
        size: '48px',
        lineHeight: '52px',
    })};

            
        }

        .sub-title {
            font-family: Inter;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0px;
            text-align: center;
        }
    }    
`;

const LinkLabel = styled.a<any>`
    border-bottom: 1px solid ${(props: any) => props?.style?.text2?.color};
`;

const WrapperUI = (props: any) => {
    const {
        currentStep, children, onClickBack, stepTitle, stepSubTitle
    } = props;

    const creditCardEligibilityState = useAppSelector((state: any) => state.creditCardEligibility);

    const {
        phone, errorMessage, errorMessages, isLoading, token, has_whatsapp_consent, userDetails, pageType,
    } = creditCardEligibilityState;

    const { mobileOtpToken, accessToken, headerAccessToken } = token;

    const dispatch = useAppDispatch();

    const checkRequiredField = (details: any) => {
        const {
            firstName, lastName, dateOfBirth, panCardNumber, emailId
        } = details;
        if (firstName == '' || lastName == '' || (dateOfBirth == '' || !isValidDob(dateOfBirth, 18)) || panCardNumber == '' || emailId == '') return true;
        return false;
    };

    const areAllFieldsValid = () => {
        try {
            switch (currentStep) {
                case PAGE_MAP.MOBILE_VERIFICATION:
                    return phone.phoneNumber.length < 10;
                case PAGE_MAP.VERIFY_OTP_PAGE:

                    return mobileOtpToken.length != 6;
                case PAGE_MAP.USER_DETAILS_PAGE:

                    const {
                        CONSENT_TYPE_CREDIT_REPORT_DATA_PULL, CONSENT_TYPE_FI_TNC,
                        ...rest
                    } = userDetails;

                    const {
                        firstName, lastName, dateOfBirth, panCardNumber, emailId
                    } = errorMessages;

                    return checkRequiredField(rest) || !CONSENT_TYPE_CREDIT_REPORT_DATA_PULL || !CONSENT_TYPE_FI_TNC || (firstName != '' || lastName != '' || dateOfBirth != '' || panCardNumber != '' || emailId != '');
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
                    ...phone,
                    has_whatsapp_consent
                };
                dispatch(mobileGenerateOTP(constructPayloadWithCommonInfo(payload)));
                fireCreditCardEvents(pageType, creditCardEvents.CLICKED_VERIFY_MOBILE_NUMBER_SCREEN);
                break;

            case PAGE_MAP.VERIFY_OTP_PAGE:
                payload = {
                    token: accessToken,
                    otp: mobileOtpToken,
                    countryCode: phone.countryCode,
                    phoneNumber: phone.phoneNumber,
                    consentType: [
                        ConsentType.CONSENT_TYPE_FI_TNC,
                        ConsentType.CONSENT_TYPE_FED_TNC,
                        ConsentType.CONSENT_TYPE_FI_PRIVACY_POLICY,
                        ConsentType.CONSENT_TYPE_FI_WEALTH_TNC,
                        ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL,
                    ],
                    cardProgramType: PageConfig[pageType].cardProgramType,
                    cardProgramVendor: PageConfig[pageType].cardProgramVendor,
                };
                dispatch(verifyOtp(constructPayloadWithCommonInfo(payload)));
                fireCreditCardEvents(pageType, creditCardEvents.ENTERED_OTP_WLCC);
                break;

            case PAGE_MAP.USER_DETAILS_PAGE:
                const {
                    firstName, lastName, dateOfBirth, panCardNumber, emailId,
                } = userDetails;
                payload = {
                    firstName,
                    lastName,
                    dob: dateOfBirth,
                    pan: panCardNumber,
                    email_id: emailId,
                    token: accessToken,
                    consents: [
                        ConsentType.CONSENT_TYPE_FI_TNC,
                        ConsentType.CONSENT_TYPE_CREDIT_REPORT_DATA_PULL
                    ],
                    accessToken: headerAccessToken,
                    cardProgramType: PageConfig[pageType].cardProgramType,
                    cardProgramVendor: PageConfig[pageType].cardProgramVendor,
                };
                dispatch(checkEligibility(constructPayloadWithCommonInfo(payload)));
                fireCreditCardEvents(pageType, creditCardEvents.CLICKED_CHECK_ELIGIBILITY_BUTTON_ON_DETAILS_PAGE);
                break;
            default:
        }
    };

    const { styleConfig, url, } = PageConfig[pageType];

    return (
        <MainContainer>
            <InnerContainer isModalOpen={false} imageUrl={`${url.posterUrl}`} style={styleConfig.posterStyle}>
                <Wrapper>
                    <HeaderContainer>
                        <Header
                            onClickPrevButton={onClickBack}
                            ctaCssId='cc-waitlist-back-btn'
                            backNavVisbility={PageConfigMap[currentStep].backNavVisbility}
                        />
                    </HeaderContainer>
                    <BodyContainer>
                        <BodyContainerInnerWrapper>
                            <ComponentHeader headerStyle={styleConfig.headerStyle}>
                                <div className='title'>{stepTitle}</div>
                                <div className='sub-title'>{stepSubTitle}</div>
                            </ComponentHeader>
                            {children}
                            {
                                PageConfigMap[currentStep].SubmitButtonVisbility && (
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
                                            <StyledButton
                                                fontVariant='buttonVariantFive'
                                                label={PageConfigMap[currentStep].submitButtonText}
                                                disabled={areAllFieldsValid() || isLoading}
                                                borderRadius='12px'
                                                disableTransForm
                                                disableBgColor={styleConfig.submitButton.disableBgColor}
                                                disableFontColor={styleConfig.submitButton.disableFontColor}
                                                testId='cc-waitlist-mobile-number-btn'
                                                onClick={onSubmit}
                                                color={styleConfig.submitButton.bgColor}
                                                bgcolor='WHITE'
                                            >
                                                {PageConfigMap[currentStep].submitButtonText}
                                            </StyledButton>

                                        </ButtonHolder>
                                        <FooterHeading style={styleConfig.footer}>
                                            By continuing, I consent to Fi’s
                                            <LinkLabel href={APP_URLS.PRIVACY_PAGE} target='_blank' style={styleConfig.privacyText}>
                                                <Font
                                                    style={{ wordBreak: 'keep-all', fontSize: '10px' }}
                                                    color={styleConfig?.privacyText?.text2.color}
                                                    tagType='span'
                                                    font='labelVariantSeventeen'
                                                >
                                            &nbsp;Privacy Policy & Terms
                                                </Font>
                                            </LinkLabel>
                                        </FooterHeading>
                                    </FooterContainer>
                                )
                            }
                            {
                                currentStep === PAGE_MAP.GENERATE_OTP_PAGE && (
                                    <DesktopSubtitleContainer>
                                        <div className='logo-container'>
                                            <Image icon={`${ASSETS_URL}/svg/amplifi-eligibility/amplify-fi-logo.svg`} alt='Bank Fi logo' />
                                        </div>
                                        <div className='text'>OTP from Fi Money may take up to 30 seconds to arrive</div>
                                    </DesktopSubtitleContainer>
                                )
                            }

                        </BodyContainerInnerWrapper>
                    </BodyContainer>
                </Wrapper>
            </InnerContainer>
        </MainContainer>
    );
};

const otpLength = 6;

const StepperUI = () => {
    const creditCardEligibilityState = useAppSelector((state: any) => state.creditCardEligibility);

    const {
        phone, currentStep, token, eligibilityStatus, otpValueArray, pageType
    } = creditCardEligibilityState;

    const { phoneNumber } = phone;

    const { mobileOtpToken } = token;

    const dispatch = useAppDispatch();

    const resendOtp = () => {
        dispatch(mobileGenerateOTP(constructPayloadWithCommonInfo(phone)));
    };

    const onClickBack = () => {
        const stepIndex = steps.findIndex((step) => step === currentStep);
        if (stepIndex != -1 && stepIndex > 0) {
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

    if (pageType === '') return <Loader isLoading={pageType === ''} />;

    const { styleConfig, benefitData } = PageConfig[pageType];

    switch (currentStep) {
        case PAGE_MAP.LANDING_PAGE:

            if (pageType === CREDIT_CARD_TYPE.AMPLIFI) return <LandingPage />;
            return <LandingPageV2 />;

        case PAGE_MAP.MOBILE_VERIFICATION:
            return (
                <WrapperUI
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                    stepTitle='Enter your mobile number'
                    stepSubTitle='Use your primary number here'
                >
                    <UserDetailsPage styleConfig={styleConfig} />
                </WrapperUI>
            );

        case PAGE_MAP.VERIFY_OTP_PAGE:
            return (
                <WrapperUI
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                    stepTitle='Verify with OTP'
                    stepSubTitle={`OTP was sent as an SMS to ${phoneNumber}`}
                >
                    <OTPVerificationPage
                        onChange={onOtpChange}
                        goBack={() => { }}
                        resendOtp={resendOtp}
                        otpVerifyError=''
                        emailId=''
                        phoneNumber={phoneNumber}
                        mobileOtpToken={mobileOtpToken}
                        length={otpLength}
                        otpValueArray={otpValueArray}
                        handleSetOptValueArray={handleSetOptValueArray}
                        pageType={pageType}
                    />
                </WrapperUI>
            );

        case PAGE_MAP.USER_DETAILS_PAGE:
            return (
                <WrapperUI
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                    stepTitle='Enter your personal details'
                    stepSubTitle='These details are required to check your eligibility '
                >
                    <PersonalDetails styleConfig={styleConfig.personalDetails} />
                </WrapperUI>
            );

        case PAGE_MAP.CREDIT_CARD_ELIGIBILITY_SUCCESS:
            const { displayInfo, requestStatus } = eligibilityStatus;
            return (
                <SucessOrFailureScreen
                    data={getResultScreenData(displayInfo, requestStatus, PageConfig[pageType], benefitData)}
                    pageType={pageType}
                    style={styleConfig}
                    requestStatus={requestStatus}
                />
            );

        case PAGE_MAP.CREDIT_CARD_POLLING_STATUS:
            return (
                <WrapperUI
                    currentStep={currentStep}
                    onClickBack={onClickBack}
                    stepTitle='Checking your eligibility...'
                    stepSubTitle='Please give us a bit and we’ll let you know'
                >
                    <PollingForEligibilitStatus />
                </WrapperUI>
            );

        default:
            return <div>Not implemented</div>;
    }
};

export default StepperUI;
