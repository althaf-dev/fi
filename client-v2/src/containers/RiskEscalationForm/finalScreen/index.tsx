import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { Device } from '@/Themes/Device';
import { PrimaryButton } from '@/Abstract';
import { fireEvent, stepChangeAction } from '@/rtk/components/riskForm/reducer';
import { riskFormEvents } from '@/events/EventName';
import htmlSanitization from '@/utils/htmlSanitization';

const IntroScreenWrapper = styled.div`

    .title {
        font-family: Gilroy;
        font-size: 32px;
        font-weight: 600;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        color: #313234;
    }

    .message div {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        color: #878A8D;
        margin-top: 30px;
    }

    .bottm-cta {
        height: 52px;
        min-width: 100%;
        margin-bottom: 5px;
    
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
`;

function FinalScrren() {
    const dispatch = useAppDispatch();

    const screen = useAppSelector((state: any) => state.riskForm.screens);

    const { message, bottom_cta: bottomCta } = screen.outroScreen || { message: [], title: '', bottom_cta: {} };

    const onSubmit = () => {
        dispatch(stepChangeAction('QUESTION_PAGE'));
    };

    useEffect(() => {
        dispatch(fireEvent({ eventName: riskFormEvents.RISK_FORM_LANDED_ON_FINAL_SCREEN }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IntroScreenWrapper>
            <div className='message'>
                {
                    Array.isArray(message) && message.map((item: string) => (
                        <div
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(item || '&nbsp;') }}
                        />
                    ))
                }
            </div>
            <div className='bottm-cta'>
                {
                    bottomCta && bottomCta.label && (
                        <PrimaryButton
                            fontVariant='buttonVariantFive'
                            label={bottomCta.label}
                            disabled={false}
                            borderRadius='12px'
                            disableTransForm
                            disableBgColor='GREEN_PEA'
                            disableFontColor='BOMBAY'
                            testId='cc-waitlist-mobile-number-btn'
                            onClick={onSubmit}
                        />
                    )
                }
            </div>

        </IntroScreenWrapper>
    );
}

export default FinalScrren;
