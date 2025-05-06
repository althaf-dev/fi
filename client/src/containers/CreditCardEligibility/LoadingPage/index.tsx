/**
 * @file Landing Page
 */

import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';
import { CREDIT_CARD_ELIGIBILITY_URL } from '../../../Api/ApiRoutes';

import { Loader } from '../../../components';
import { clientApiWrapper } from '../../../utils';

import { selectCreditCardEligibilityReducer } from '../selectors';
import Header from '../Header';
import SucessOrFailureScreen from '../SuccessOrFaliureScreen';
import {
    LoaderContainer,
    LoaderText,
    LoadingPageWrapper,
} from '../styled';
import { URL_MAP } from '../constants';

const LoadingPage = () => {
    const { clientReqId, actorId } = useSelector(selectCreditCardEligibilityReducer, shallowEqual);

    const [displayInfoData, setDisplayInfoData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const intervalIdRef = useRef(null);

    const payload = {
        clientReqId,
        actorId,
        webflow: 'WEB_FLOW_OFF_APP_CC_ELIGIBILITY_CHECK',
    };

    const stopPolling = () => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    };

    const getRequestStatusOfWaitlistFlow = async () => {
        try {
            const response = await clientApiWrapper.post(
                `${CREDIT_CARD_ELIGIBILITY_URL}/${URL_MAP.GET_WAITLIST_FLOW_STATUS}`,
                payload,
            );

            const { success, data } = response || {};

            if (!success) {
                throw new Error('Failed to get request status of waitlist flow');
            }

            const { requestStatus, displayInfo } = data || {};

            if (requestStatus === 'STATUS_SUCCESSFUL' || requestStatus === 'STATUS_FAILED') {
                setDisplayInfoData(displayInfo);

                stopPolling();
            }
        } catch (error) {
            setErrorMessage(error);
        }
    };

    const startPolling = () => {
        const id = setInterval(() => {
            getRequestStatusOfWaitlistFlow();
        }, 1000);

        intervalIdRef.current = id;
    };

    useEffect(() => {
        startPolling();

        return () => {
            stopPolling();
        };
    }, []);

    useEffect(() => {
        if (errorMessage) {
            stopPolling();
        }
    }, [errorMessage]);

    return (
        <>
            {displayInfoData ? <SucessOrFailureScreen displayInfoData={displayInfoData} /> : (
                <LoadingPageWrapper>
                    <Header
                        title=''
                        description=''
                        ctaCssId='cc-waitlist-back-btn'
                        icon={LOGOS_URL_MAP.FI_FEDERAL}
                    />
                    <LoaderContainer>
                        <Loader isLoading hasOverlay={false} />
                        <LoaderText>Loading up your card</LoaderText>
                    </LoaderContainer>
                </LoadingPageWrapper>
            )}
        </>
    );
};

export default LoadingPage;
