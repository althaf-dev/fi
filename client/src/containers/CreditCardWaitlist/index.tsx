/**
 * @file Credit Card Waitlist index page
 */

import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { MainContainer } from '../../components/Waitlist/styled';
import InnerContainer from '../../components/Waitlist/components/InnerContainer';
import { PNGS_URL } from '../../constants/AssetConstants';

import { CONSUL_META_INFO_PATH_NAME, DEBUG_ENABLE_QUERY_PARAM } from '../App/constants';
import { selectDynamicConfig } from '../App/selectors';
import NotFound from '../404Page';

import { selectCreditCardWaitlistReducer } from './selectors';
import StepModule from './StepModule';
import { useQueryParams } from '../../hooks';

const CreditCardWaitlist = () => {
    const [isPageReadyToRender, setPageReadyToRender] = useState(false);
    const [isCreditCardFeaturePageHidden, setCreditCardFeaturePageHidden] = useState(false);
    const [isDebugModeEnabled, setDebugModeEnabled] = useState(false);

    const { isModalOpen } = useSelector(
        selectCreditCardWaitlistReducer,
        shallowEqual,
    );

    const dynamicConfigInfo = useSelector(
        selectDynamicConfig(CONSUL_META_INFO_PATH_NAME),
        shallowEqual,
    );

    const queryParams = useQueryParams();

    useEffect(() => {
        setCreditCardFeaturePageHidden(dynamicConfigInfo?.navigation?.hideCreditCardWaitlistPage);

        const debugModeKeyValueFromQueryParam = queryParams.get(DEBUG_ENABLE_QUERY_PARAM);

        // Set to false if the debug value is not passed or incorrect
        const isDebugModeEnabledFromQueryParam = !!debugModeKeyValueFromQueryParam
            && debugModeKeyValueFromQueryParam === dynamicConfigInfo?.enableDebugKey;

        setDebugModeEnabled(isDebugModeEnabledFromQueryParam);

        if (!!dynamicConfigInfo?.navigation === false) {
            return;
        }

        setPageReadyToRender(true);
    }, [dynamicConfigInfo?.navigation]);

    if (!isPageReadyToRender) {
        return null;
    }

    // Show 404 not found only if credit card feature is disabled from consul and debug mode is not enabled.
    // This means if the debug key value is passed as query param the page will be visible even if credit card feature page is disabled from consul.
    if (isCreditCardFeaturePageHidden && !isDebugModeEnabled) {
        return (
            <NotFound />
        );
    }

    return (
        <MainContainer>
            <InnerContainer isModalOpen={isModalOpen} imageUrl={`${PNGS_URL}fi-card-desktop.png`}>
                <StepModule />
            </InnerContainer>
        </MainContainer>
    );
};

export default CreditCardWaitlist;
