import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { Device } from '@/Themes/Device';
import { PrimaryButton } from '@/Abstract';
import { getRiskEscaltionForm, stepChangeAction, fireEvent } from '@/rtk/components/riskForm/reducer';
import htmlSanitization from '@/utils/htmlSanitization';
import { riskFormEvents } from '@/events/EventName';

import { PAGE_MAP } from '../constants';
import { formatIntroScreenData } from '../utils';

const IntroScreenWrapper = styled.div`
    width: 100%;

    .title {
        font-family: Gilroy;
        font-size: 32px;
        font-weight: 600;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        color: #313234;
    }

    ul {
        margin-left: 15px;
    }

    .message ul li {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        color: #878A8D;
        margin-top: 8px;
        list-style: inside;
    }

    .bottm-cta {
        height: 52px;
        min-width: 100%;
        
        margin-top: 10px;
    
        @media ${Device.desktop} {
            min-width: 312px;
            width: 100%;
        }

        .button {
            box-shadow: 0px 4px 0px 0px #00866F;
            color: white;
            background: #00866F;
            width: 312px;
            height: 52px;
            padding: 12px, 24px, 12px, 24px;
            border-radius: 19px;
            gap: 8px;
        }
        
    }

    .type-text {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        color: #878A8D;
        margin-top: 8px;
    }
`;

function IntroScreen() {
    const dispatch = useAppDispatch();

    const riskFormState = useAppSelector((state: any) => state.riskForm);
    const {
        screens, token: { authToken }, isLoading, formId, errorMessage,
    } = riskFormState;

    const { errorScreen } = screens;

    const { message, bottom_cta: bottomCta } = screens.introScreen || errorMessage;

    useEffect(() => {
        if (formId) {
            const payload = {
                form_id: formId,
                auth_token: authToken
            };

            if (!screens.introScreen) dispatch(getRiskEscaltionForm(payload));
            dispatch(fireEvent({ eventName: riskFormEvents.RISK_FORM_LAND_ON_INTRO_FROM }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = () => {
        dispatch(stepChangeAction(PAGE_MAP.QUESTION_PAGE));
        dispatch(fireEvent({ eventName: riskFormEvents.RISK_FROM_CLICKED_NEXT_BUTTON_IN_INTRO_PAGE }));
    };

    useEffect(() => {
        if (errorScreen) dispatch(stepChangeAction(PAGE_MAP.INVALID_FROM));
    }, [errorScreen, dispatch]);

    const data = formatIntroScreenData(message || []);

    return (
        <>
            {
                !isLoading && (
                    <IntroScreenWrapper>
                        <div className='message'>
                            {
                                Array.isArray(data) && data.map((item: any, index: number) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div key={index}>
                                        <>
                                            <div>
                                                {
                                                    item.type === 'list' && (
                                                        <ul>
                                                            {
                                                                Array.isArray(item.data)
                                                                // eslint-disable-next-line react/no-array-index-key
                                                                && item.data.map((li: string, liIndex: number) => <li key={liIndex}>{li}</li>)
                                                            }
                                                        </ul>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                {
                                                    item.type === 'text' && (
                                                        <div
                                                            className='type-text'
                                                            dangerouslySetInnerHTML={{ __html: htmlSanitization(item.data || '&nbsp;') }}
                                                        />
                                                    )
                                                }
                                            </div>
                                        </>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            bottomCta && (
                                <div className='bottm-cta'>
                                    <PrimaryButton
                                        fontVariant='buttonVariantFive'
                                        label={bottomCta.label || ''}
                                        disabled={false}
                                        borderRadius='12px'
                                        disableTransForm
                                        disableBgColor='GREEN_PEA'
                                        disableFontColor='BOMBAY'
                                        onClick={onSubmit}
                                    />
                                </div>
                            )
                        }
                    </IntroScreenWrapper>
                )
            }

        </>
    );
}

export default IntroScreen;
