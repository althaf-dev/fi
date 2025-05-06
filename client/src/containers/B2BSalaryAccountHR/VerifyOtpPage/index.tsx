/**
 * @file OTP Verify page
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';

import { B2B_CREATE_LEAD_URL, B2B_VERIFY_OTP_URL } from '../../../Api/ApiRoutes';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import VerifyOtpPage from '../../SalaryAccountSignUp/VerifyOtpPage';
import { useOnChangeReducerValue } from '../../../hooks';
import { clientApiWrapper } from '../../../utils';

import selectSalaryAccountHRReducer from '../selectors';
import { onChangeSalaryAccountHRValue } from '../actions';
import { fireTrackingEvents } from '../utils';
import { EVENT_LIST } from '../constant';
import { CALANDER_LINK } from '../../../constants/AssetConstants';
import { trackGTMEvent } from '../../../events';

const VertifyOtpWrapper = styled.div`
    height: 300px;
    & .InfoFontB2b {
        margin-top: -20px;
        padding: 20px 0;
    }
    & .ButtonHolderB2b{
        padding: 0px 20px; 
    }
    @media ${Device.tab} {
        height: auto;
        & .InputB2bWrapper {
            margin: 30px auto;
        }
        & .WrapperOneB2b {
        padding-bottom: 60px;
        }
        & .InputWrapperB2b {
            margin-bottom: 20px;
        }
        & .ButtonHolderB2b{
            padding: 40px 20px; 
        }
    }

    @media ${Device.desktop} {
        height: auto;
        & .WrapperOneB2b {
        padding: 40px 20px 60px 20px;
    }
`;

const DescriptionB2b = styled.div`
   ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};

    @media ${Device.desktop} {
       ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '24px' })};
    }
`;

interface IVerfiyOtpPage {
    otpToken: string;
    otpRetryTime: number;
    type: string | null;
}

// Header Description component
const HeaderTitleB2b = () => (
    <DescriptionB2b>
        An OTP has been sent to your
        <br />
        company email ID
    </DescriptionB2b>
);

const VerfiyOtpPage = (props: IVerfiyOtpPage) => {
    const { otpToken, otpRetryTime, type } = props;

    const [otpAttemptBlocked, setOtpAttemptBlocked] = useState(false);
    const [otpVerifyInprocess, setOtpVerifyInprocess] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [apiInProgress, setApiInProgress] = useState(true);

    const { leadDetails } = useSelector(selectSalaryAccountHRReducer, shallowEqual);

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountHRValue,
    );

    const emailAddressObject = leadDetails?.find((item) => item.attribute === 'EmailAddress');
    const EmailAddress = emailAddressObject ? emailAddressObject.value : '';
    const [resendOtpToken, setResendOtpToken] = useState(otpToken);
    const [resendOtpRetryTime, setResendOtpRetryTime] = useState(otpRetryTime);

    const resetOtpVerifyError = () => (errorMsg);

    const resendOtp = async () => {
        setApiInProgress(true);

        const payload = {
            lead_details: leadDetails,
            otp_token: resendOtpToken || '',
        };
        try {
            const response = await clientApiWrapper.get(
                `${B2B_CREATE_LEAD_URL}?payload=${JSON.stringify(payload)}`,
            );
            const { otpToken: otpValue, retryTimerInSeconds } = response.data || {};
            const { code: statusCode } = response.data.status || {};
            if (statusCode === 0) {
                onChangeReducerValue({ currentForm: 'OTP_PAGE' });
                setResendOtpToken(otpValue);
                setResendOtpRetryTime(retryTimerInSeconds);
                setApiInProgress(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onOtpSubmit = async (otpValue) => {
        fireTrackingEvents(type, EVENT_LIST.ENTERED_OTP, null);
        const { otp } = otpValue || {};

        const payload = {
            lead_details: leadDetails,
            otp,
            otp_token: resendOtpToken,
        };

        try {
            setErrorMsg('');
            setOtpVerifyInprocess(true);
            const response = await clientApiWrapper.get(
                `${B2B_VERIFY_OTP_URL}?payload=${JSON.stringify(payload)}`,
            );

            const { code: statusCode } = response.data.status || {};

            // setTimeOut function for verification in process
            setTimeout(() => {
                if (statusCode === 0) {
                    fireTrackingEvents(type, EVENT_LIST.VERIFIED_OTP, null);
                    window.open(CALANDER_LINK, '_blank');
                    fireTrackingEvents(type, EVENT_LIST.OTP_SUCCESS, null);
                    trackGTMEvent(EVENT_LIST.LOADED_CALENDER, null);
                } if (statusCode === 104) {
                    onChangeReducerValue({ currentForm: 'EXPIRED_OTP_FORM' });
                }
            }, 500);
        } catch (error) {
            fireTrackingEvents(type, EVENT_LIST.OTP_FAILED, null);
            setTimeout(() => {
                // setTimeOut function for verification in process
                setOtpVerifyInprocess(false);

                if (error.description === 'Incorrect OTP, no more attempts left') {
                    setOtpAttemptBlocked(true);
                    setErrorMsg('You have 0 attempts left. Please wait for some time and try again');
                } else if (error.description === 'Incorrect OTP') {
                    setErrorMsg('Incorrect OTP. You have 2 attempts left.');
                } else if (error.description === 'Incorrect OTP last attempt left') {
                    setErrorMsg('Incorrect OTP. You have 1 attempts left.');
                } else {
                    setErrorMsg(error.description);
                }
            }, 500);
        }
    };

    const ExpiredOtpSectionForm = () => {
        onChangeReducerValue({ currentForm: 'EXPIRED_OTP_FORM' });
        fireTrackingEvents(type, EVENT_LIST.CLICKED_OTHER_WAYS_VERIFY, null);
    };

    useEffect(() => {
        fireTrackingEvents(type, EVENT_LIST.LANDED_ON_OTP_PAGE, null);
    }, []);

    return (
        <VertifyOtpWrapper>
            <VerifyOtpPage
                title={<HeaderTitleB2b />}
                otpRetryTime={resendOtpRetryTime}
                description={`${EmailAddress}`}
                apiInProgress={apiInProgress}
                logoImage={false}
                length={6}
                onNextStep={onOtpSubmit}
                resetOtpVerifyError={resetOtpVerifyError}
                resendOtp={resendOtp}
                otpVerifyInprocess={otpVerifyInprocess}
                otpVerifyError={errorMsg}
                isVerifyOtpBlocked={otpAttemptBlocked}
                onVerifyAnotherWayClick={ExpiredOtpSectionForm}
                workBenifitListIcon
            />
        </VertifyOtpWrapper>
    );
};

export default React.memo(VerfiyOtpPage);
