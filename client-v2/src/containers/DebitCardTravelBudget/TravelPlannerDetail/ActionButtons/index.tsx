/**
 * @file ActionButtons
 * This file defines a component that renders action buttons for sharing and setting limits or ordering a card,
 * based on the travel budget context.
 */

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { setLoading } from '@/rtk/components/debitCardTravelBudget/reducer';
import { ClientPlatform } from '@/interfaces/mobile';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { helpers } from '@/utils';

import { triggerMobileEvents } from '../../utils';
import { WEB_CALLBACK_OBJECTS } from '../../constants';

import {
    ButtonContainer, ButtonWrapper, SetLimitsButton, ShareButton, Spacer
} from '../styles';

const ActionButtons = () => {
    const dispatch = useAppDispatch();
    // Retrieve the budget details from the application's state
    const { budget } = useAppSelector((state) => state?.travelBudget);

    // Retrieve the title and link from the query parameters
    const searchParams = useSearchParams();
    const queryTitle = searchParams.get('cta_title') || '';
    const queryLink = searchParams.get('cta_link') || '';

    // Extract the primary call-to-action (CTA) details from the budget
    const { cta } = budget || {};
    const { title, base64DeeplinkString } = cta || {};

    /**
     * Handles button click events by triggering mobile events for both Android and iOS platforms.
     *
     * @param {object} payload - The event name and optional data to be passed with the event.
     */
    const onButtonClick = (payload: { eventName: string, data?: object }) => {
        triggerMobileEvents(payload, ClientPlatform.ANDROID);
        triggerMobileEvents(payload, ClientPlatform.IOS);
    };

    return (
        <ButtonWrapper>
            <ButtonContainer>
                {/* Share button triggers an event for sharing */}
                <ShareButton
                    onClick={async () => {
                        dispatch(setLoading({ loading: true }));
                        /* TODO: replace this library if alternative is found */
                        // eslint-disable-next-line import/no-extraneous-dependencies
                        const html2canvas = (await import('html2canvas')).default;
                        const html = document.querySelector('#travelBudgetScreen') as HTMLElement;
                        const canvas = await html2canvas(html, {
                            allowTaint: true,
                            useCORS: false,
                            proxy: '/html2canvas-proxy',
                            backgroundColor: '#000000',
                            windowWidth: html.scrollWidth,
                            width: html.scrollWidth,
                            windowHeight: html.scrollHeight,
                            height: html.scrollHeight,
                            onclone: (document, element) => {
                                element.style.overflow = 'visible';
                            },
                        });
                        const data = canvas.toDataURL('image/jpg');
                        const base64 = helpers.getBase64StringFromDataURL(data);
                        dispatch(setLoading({ loading: false }));
                        onButtonClick({
                            ...WEB_CALLBACK_OBJECTS.shareButtonClicked,
                            data: {
                                text: '',
                                image: base64,
                            }
                        });
                    }}
                >
                    Share
                </ShareButton>
                {/* Set Limits or Order Card button triggers an event with additional data */}
                <SetLimitsButton
                    onClick={async () => {
                        onButtonClick({
                            ...WEB_CALLBACK_OBJECTS.deeplinkRedirection,
                            data: {
                                deeplink: queryLink || base64DeeplinkString,
                            }
                        });
                    }}
                >
                    {queryTitle || title}
                </SetLimitsButton>
            </ButtonContainer>
            <Spacer />
        </ButtonWrapper>
    );
};

export default ActionButtons;
