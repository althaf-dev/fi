/**
 * @file Debit Card Travel Budget index page
 */

'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import TravelPlannerDetail from '@/containers/DebitCardTravelBudget/TravelPlannerDetail';
import TravelBudgetPlanner from '@/containers/DebitCardTravelBudget/TravelPlannerLanding';
import Loader from '@/components/Loader';
import { useAppSelector } from '@/rtk/hooks';
import { ClientPlatform } from '@/interfaces/mobile';

import { triggerMobileEvents } from './utils';
import { WEB_CALLBACK_OBJECTS } from './constants';
import {
    BackButton, Header, PlannerContainer, PlannerWrapper, Title
} from './styles';
import Toast from '../../components/Toast';
import { ICONS_URL_MAP } from '@/constants/AssetConstants';

const DebitCardTravelBudget = () => {
    const [page, setPage] = useState<number>(1);
    const [title, setTitle] = useState<string | null>(null);
    const { error: err, loading } = useAppSelector((state) => state?.travelBudget) || {};
    const searchParams = useSearchParams();
    const showCloseButton = searchParams.get('show_close_button') === 'true';

    return (
        <PlannerWrapper>
            <PlannerContainer>
                {page === 1 && (
                    <>
                        {showCloseButton && (
                            <Header>
                                <BackButton
                                    src={ICONS_URL_MAP.CLOSE_CROSS_WHITE}
                                    alt='Back'
                                    onClick={() => {
                                        triggerMobileEvents(WEB_CALLBACK_OBJECTS.backButtonClicked, ClientPlatform.ANDROID);
                                        triggerMobileEvents(WEB_CALLBACK_OBJECTS.backButtonClicked, ClientPlatform.IOS);
                                    }}
                                />
                            </Header>
                        )}
                        <TravelBudgetPlanner setPage={setPage} />
                    </>
                )}
                {page === 2 && (
                    <>
                        <Header>
                            <BackButton
                                src={ICONS_URL_MAP.GREY_LEFT_ARROW}
                                alt='Back'
                                onClick={() => {
                                    setPage((prevPage) => prevPage - 1);
                                }}
                            />
                            {title && <Title>{title}</Title>}
                        </Header>
                        <TravelPlannerDetail setTitle={setTitle} />
                    </>
                )}
                {err && <Toast message={(err as Error)?.message || (err as string)} />}
                <Loader isLoading={loading} />
            </PlannerContainer>
        </PlannerWrapper>
    );
};

export default DebitCardTravelBudget;
