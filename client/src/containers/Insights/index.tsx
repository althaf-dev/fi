import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { queryParams } from '../../utils/queryParams';

import {
    // checkAccessStatusAction,
    getStartedInsightAction,
    // updateRedirectUrlAction,
} from './actions';

import ReturningUserFlow from './Landing/ReturningUserFlow';
import FirstTimeFlow from './Landing/FirstTimeFlow';
import HomePage from './Home/HomePage';
import FinalSection from './FinalSection/FinalSection';
import NoMerchantSection from './NoMerchantSection/NoMerchantSection';
import { redirectBackToNativeApp } from './utils';

// eslint-disable-next-line no-var
declare var window: any;

// default tracking event payload
const insightsTrackingPayload = {
    flow_name: 'insights',
    channel: 'insights',
    page_name: 'insights home page',
};

interface InsightsProps {
    insightActiveState: number;
    insightQuizState: number;
    insightConsentUrl: string;
    emailSyncProgress: number;
    hasExhaustedInsights: boolean;
    openSyncModal: boolean;
    // accessToken: string;
    // redirectUrl: string;
}

interface QueryParams {
    src?: string; // dummy redirect param for WEB platform
    platform?: string;
    success?: string;
    code?: string;
}

const trackGtagEvent = () => {
    if (window.gtag) {
        window.gtag('set', 'page', '/insights');
        window.gtag('send', 'pageview');
    }
};

const Insights = (props: InsightsProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [quizFlow, setQuizFlow] = useState(1);
    const [isRedirectFlow, setRedirectFlow] = useState(false);
    const [openDuplicateEmailModal, setOpenDuplicateEmailModal] = useState(false);

    // check if gmail consent is given and redirect back to app if platform is android or ios
    useEffect(() => {
        const params: QueryParams = queryParams(location.search);
        const {
            platform, success, src, code,
        } = params;

        /**
         *  1. for web, we are showing dummy data & only using 'src' query param
         *  2. for android & ios,
         *    a. If we get success response from BE (using 'success' query param), we are giving control back to App
         *    b. If we get failure response from BE (using 'success' & 'code' query param), we are showing DuplicateEmailModal if 'code' is 101
         */
        if (src && atob(src) === 'WEB') { // for web
            setRedirectFlow(true);
            navigate('/insights', { replace: true });
        } else if (platform) { // for android & ios
            if (code === '101' && success === 'false') { // show DuplicateEmailModal
                setOpenDuplicateEmailModal(true);
                return;
            }

            if (success) {
                redirectBackToNativeApp(platform, success);
                setRedirectFlow(true);
            }
        }
    }, []);

    useEffect(() => {
        trackGtagEvent();

        if (props.insightQuizState === 5) {
            setQuizFlow(2);
        }

        // get auth url for insights access
        if (!props.insightConsentUrl) {
            dispatch(getStartedInsightAction());
        }

        /* we do not want to redirect user to redirect url for any platform
        if (!props.accessToken || !props.activeUserFlow) {
            dispatch(checkAccessStatusAction());
        }
        */
    }, []);

    /* we do not want to redirect user to redirect url for any platform
    useEffect(() => {
        if (props.redirectUrl === '/waitlist/login') {
            history.replace(props.redirectUrl);
            dispatch(updateRedirectUrlAction(null));
        }
    }, [props.redirectUrl]);
    */

    const onHomeClose = () => {
        navigate('/');
    };

    switch (props.insightActiveState) {
        case 1:
            return quizFlow === 1 ? (
                <FirstTimeFlow trackingPayload={insightsTrackingPayload} />
            ) : (
                <ReturningUserFlow />
            );

        case 2:
            return <FinalSection trackingPayload={insightsTrackingPayload} />;

        case 3:
            return (
                <NoMerchantSection
                    insightConsentUrl={props.insightConsentUrl}
                    onClose={onHomeClose}
                />
            );
        default:
            return (
                <HomePage
                    isRedirectFlow={isRedirectFlow}
                    emailSyncProgress={props.emailSyncProgress}
                    openSyncModal={props.openSyncModal}
                    insightConsentUrl={props.insightConsentUrl}
                    hasExhaustedInsights={props.hasExhaustedInsights}
                    onClose={onHomeClose}
                    trackingPayload={insightsTrackingPayload}
                    openDuplicateEmailModal={openDuplicateEmailModal}
                    setOpenDuplicateEmailModal={setOpenDuplicateEmailModal}
                />
            );
    }
};

const mapStateToProps = ({ insightReducer }) => {
    const {
        insightActiveState, insightQuizState, insightConsentUrl, emailSyncProgress, openSyncModal,
        redirectUrl, hasExhaustedInsights,
    } = insightReducer;

    return {
        insightActiveState,
        insightQuizState,
        insightConsentUrl,
        emailSyncProgress,
        openSyncModal,
        redirectUrl,
        hasExhaustedInsights,
    };
};

const connector = connect(mapStateToProps, null);

export default connector(Insights);
