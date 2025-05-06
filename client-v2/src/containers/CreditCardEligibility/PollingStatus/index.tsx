import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Device } from '@/Themes/Device';
import { Wrapper } from '../styled';
import { getEligibiityStatus, stepChangeAction, updateCCState } from '@/rtk/components/CreditCard/reducer';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '../utils';
import { creditCardEligibilityStatus, PAGE_MAP } from '../constants';
import { ErrorDescription, ErrorWrapper } from '@/components/Waitlist/styled';

const RotationLoaderContainer = styled.div`
    width: 100%;

    .position {
        display: block;
        position: absolute;
        margin-top: 37px;
        left: 37%;
    }

    .inner-container {
        display: block;
        position: absolute;
        margin-top: 50px;

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to { 
                transform: rotate(360deg);
            }
        }
        
        @-webkit-keyframes rotate {
            from {
                -webkit-transform: rotate(0deg);
            }
            to { 
                -webkit-transform: rotate(360deg);
            }
        }

        .loader {
            width: 100px;
            height: 100px;
            border:solid 4px white;
            border-radius: 50%;
            border-right-color: transparent;
            border-bottom-color: transparent;
            -webkit-transition: all 2s ease-in;
            -webkit-animation-name:             rotate; 
            -webkit-animation-duration:         1.0s; 
            -webkit-animation-iteration-count:  infinite;
            -webkit-animation-timing-function: linear;
            background: transparent;
            transition: all 1s ease-in;
            animation-name:             rotate; 
            animation-duration:         2.0s; 
            animation-iteration-count:  infinite;
            animation-timing-function: linear; 
        }

    }


    @media ${Device.desktop} {
        .position {
            left: 43%;
        }
    }
`;

const ErrorPollingWrapper = styled(ErrorWrapper)`
    margin-top: 10px;
`;

const PollingForEligibilitStatus = () => {
    const dispatch = useAppDispatch();

    const creditCardEligibility = useAppSelector((state) => state.creditCardEligibility);

    const {
        actorId, clientReqId, isLoading, eligibilityStatus, errorMessage
    } = creditCardEligibility;

    const { requestStatus } = eligibilityStatus;

    const timerRef = useRef<any>(null);

    const dispatchEligibilityAction = () => {
        if (errorMessage === '' && actorId && clientReqId) {
            dispatch(getEligibiityStatus(constructPayloadWithCommonInfo({
                actorId, clientReqId
            })));
        } else {
            if (timerRef) clearInterval(timerRef.current!);
            dispatch(updateCCState({ isLoading: false, errorMessage: 'Unable to process, Please try again in some time.' }));
        }
    };

    useEffect(() => {
        if (errorMessage) {
            if (!timerRef.current) clearInterval(timerRef.current);
        } else if (requestStatus === creditCardEligibilityStatus.STATUS_UNSPECIFIED
            || requestStatus === creditCardEligibilityStatus.STATUS_FAILED
            || requestStatus === creditCardEligibilityStatus.STATUS_SUCCESSFUL) {
            dispatch(stepChangeAction(PAGE_MAP.CREDIT_CARD_ELIGIBILITY_SUCCESS));
        } else if ((errorMessage === '' && requestStatus === '')
        || requestStatus === creditCardEligibilityStatus.STATUS_IN_PROGRESS) {
            if (!isLoading) {
                if (timerRef.current) clearInterval(timerRef.current);
                timerRef.current = setInterval(() => {
                    dispatchEligibilityAction();
                }, 3000);
            }
        }
        return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestStatus, errorMessage]);

    return (
        <Wrapper>
            {errorMessage ? (
                <ErrorPollingWrapper textAlignment='center'>
                    <ErrorDescription
                        font='labelVariantOne'
                        color='ERROR_RED'
                        tagType='label'
                    >
                        {errorMessage}
                    </ErrorDescription>
                </ErrorPollingWrapper>
            ) : (
                <RotationLoaderContainer>
                    <div className='inner-container position'>
                        <div className='loader center'><span /></div>
                    </div>
                </RotationLoaderContainer>
            )}
        </Wrapper>
    );
};

export default PollingForEligibilitStatus;
