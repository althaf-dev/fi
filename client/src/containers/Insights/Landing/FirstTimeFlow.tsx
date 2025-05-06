import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { RootDispatch } from '../../../store';
import {
    updateInsightQuizState,
    setAnswerState,
    updateActiveStateInsightAction,
} from '../actions';

import { Holder } from '../InsightsStyled/InsightsStyled';
import CountSection from '../CountSection/CountSection';
import AmazonOrders from '../AmazonOrders/AmazonOrders';
import SpendSection from '../SpendSection/SpendSection';
import TopSpend from '../TopSpend/TopSpend';
import RevealSection from '../RevealSection/RevealSection';
import SplurgeOn from '../SplurgeOn/SplurgeOn';
import FavMerchants from '../FavMerchants/FavMerchants';
import MostSpendSection from '../MostSpendSection/MostSpendSection';
import TopMonth from '../TopMonth/TopMonth';
import SwipeSection from '../SwipeSection/SwipeSection';
import { getInsightSpendInfoApi } from '../api';
import {
    INSIGHTS_CLICKEDNEXTINSIGHTWL_EVENT,
    INSIGHTS_SHOWNGMAILINSIGHTWL_EVENT,
    trackEvent,
} from '../../../events';

const QuizWrapper = styled.div<{
    blockDisplay: boolean;
    revealed: boolean;
}>`
    display: ${(props) => (props.blockDisplay ? 'block' : 'none')};
    width: 100%;

    .quiz {
        display: ${(props) => (!props.revealed ? 'block' : 'none')};
    }

    .answer {
        display: ${(props) => (props.revealed ? 'block' : 'none')};
    }
`;

// page specific tracking data for continue cta
const PageDataForEvent = {
    1: { page_name: 'order number page' },
    2: { page_name: 'most spend page' },
    3: { page_name: 'splurge page' },
    4: { page_name: 'all merchant spend reveal page' },
    5: { page_name: 'most spend month page' },
};

interface FirstTimeFlowProps {
    insightQuizState: number;
    answerState: boolean[];
    insightsEmail: string;
    setAnswerState: (state: boolean[]) => void;
    updateInsightQuizState: (state: number) => void;
    updateActiveStateInsightAction: (state: number) => void;
    trackingPayload: any;
}

const FirstTimeFlow = (props: FirstTimeFlowProps) => {
    const [activePage, setActivePage] = useState({
        id: 1,
        revealed: false,
    });
    const [merchantResponse, setMerchantResponse] = useState([]);
    const [categoryResponse, setCategoryResponse] = useState([]);
    const [answerOne, setAnswerOne] = useState<any>(0);
    const [answerTwo, setAnswerTwo] = useState<any>(null);
    const [answerThree, setAnswerThree] = useState<any>(null);
    const [answerFour, setAnswerFour] = useState<any>(null);
    const [answerFive, setAnswerFive] = useState<any>(null);
    const [isDataAvailable, setIsDataAvailable] = useState(false);

    const getAllMerchantPrice = () => {
        const payload = {
            quarter: '1',
            allMerchants: 'true',
            allCategories: 'true',
        };

        return getInsightSpendInfoApi(payload);
    };

    useEffect(() => {
        getAllMerchantPrice().then((res) => {
            if (res && res.spendList && res.spendList.length) {
                if (res.spendList[0].spendInfo.merchants.length) {
                    setCategoryResponse(res.spendList[0].spendInfo.categories);
                    setMerchantResponse(res.spendList[0].spendInfo.merchants);
                    setIsDataAvailable(true);
                } else {
                    props.updateActiveStateInsightAction(3);
                }
            }
        });
    }, []);

    const setRemainingQuizState = () => {
        switch (props.insightQuizState) {
            case 1:
                setActivePage({
                    id: 2,
                    revealed: false,
                });
                break;
            case 2:
                setActivePage({
                    id: 3,
                    revealed: false,
                });
                break;
            case 3:
                setActivePage({
                    id: 4,
                    revealed: false,
                });
                break;
            case 4:
                setActivePage({
                    id: 5,
                    revealed: false,
                });
                break;

            default:
                setActivePage({
                    id: 1,
                    revealed: false,
                });
                break;
        }
    };

    useEffect(() => {
        setRemainingQuizState();

        // Tracking Event For first time loading
        trackEvent(INSIGHTS_SHOWNGMAILINSIGHTWL_EVENT, props.trackingPayload);
    }, []);

    const getRequiredMerchants = () => {
        if (
            categoryResponse.length &&
            categoryResponse[0].category === 'FOOD'
        ) {
            const data = merchantResponse.filter(
                (res) => res.merchant === 'SWIGGY' || res.merchant === 'ZOMATO'
            );

            return data;
        } else if (
            categoryResponse.length &&
            categoryResponse[0].category === 'SHOPPING'
        ) {
            const data = merchantResponse.filter(
                (res) =>
                    res.merchant !== 'SWIGGY' &&
                    res.merchant !== 'ZOMATO' &&
                    res.merchant !== 'BIGBASKET'
            );
            return data.slice(0, 2);
        }
    };

    // Tracking continue cta event
    const trackOnContinueEvent = (pageNumber: 1 | 2 | 3 | 4 | 5) => {
        trackEvent(INSIGHTS_CLICKEDNEXTINSIGHTWL_EVENT, {
            ...props.trackingPayload,
            ...PageDataForEvent[pageNumber],
        });
    };

    return (
        isDataAvailable && (
            <Holder color='dark'>
                <QuizWrapper
                    blockDisplay={activePage.id === 1}
                    revealed={activePage.revealed}
                >
                    <div className='quiz'>
                        <CountSection
                            activePageNumber={1}
                            data={
                                merchantResponse.length > 1 &&
                                activePage.id === 1
                                    ? merchantResponse[1]
                                    : merchantResponse.length > 0 &&
                                      activePage.id === 1
                                    ? merchantResponse[0]
                                    : null
                            }
                            onContinue={(value) => {
                                setAnswerOne(value);
                                props.updateInsightQuizState(1);
                                setActivePage({
                                    id: 1,
                                    revealed: true,
                                });
                                if (
                                    merchantResponse.length > 1 &&
                                    merchantResponse[1].totalOrders === value
                                ) {
                                    props.setAnswerState([
                                        true,
                                        props.answerState[1],
                                        props.answerState[2],
                                        props.answerState[3],
                                        props.answerState[4],
                                    ]);
                                }
                                trackOnContinueEvent(1);
                            }}
                        />
                    </div>
                    <div className='answer'>
                        <AmazonOrders
                            activePageNumber={1}
                            answer={answerOne}
                            email={props.insightsEmail}
                            data={
                                merchantResponse.length > 1 &&
                                activePage.id === 1
                                    ? merchantResponse[1]
                                    : merchantResponse.length > 0 &&
                                      activePage.id === 1
                                    ? merchantResponse[0]
                                    : null
                            }
                            nextInsight={() =>
                                setActivePage({
                                    id: 2,
                                    revealed: false,
                                })
                            }
                        />
                    </div>
                </QuizWrapper>

                <QuizWrapper
                    blockDisplay={activePage.id === 2}
                    revealed={activePage.revealed}
                >
                    <div className='quiz'>
                        <SpendSection
                            activePageNumber={2}
                            onContinue={(value) => {
                                setAnswerTwo(value);
                                props.updateInsightQuizState(2);
                                setActivePage({
                                    id: 2,
                                    revealed: true,
                                });

                                if (
                                    merchantResponse.length &&
                                    merchantResponse[0].merchant === value
                                ) {
                                    props.setAnswerState([
                                        props.answerState[0],
                                        true,
                                        props.answerState[2],
                                        props.answerState[3],
                                        props.answerState[4],
                                    ]);
                                }
                                trackOnContinueEvent(2);
                            }}
                        />
                    </div>
                    <div className='answer'>
                        <TopSpend
                            topMerchantData={
                                merchantResponse.length > 0 &&
                                merchantResponse[0]
                            }
                            email={props.insightsEmail}
                            activePageNumber={2}
                            nextInsight={() => setActivePage({ id: 3, revealed: false })}
                        />
                    </div>
                </QuizWrapper>
                <QuizWrapper
                    blockDisplay={activePage.id === 3}
                    revealed={activePage.revealed}
                >
                    <div className='quiz'>
                        <RevealSection
                            activePageNumber={3}
                            onContinue={(value) => {
                                setAnswerThree(value);
                                props.updateInsightQuizState(3);
                                if (
                                    categoryResponse.length &&
                                    value === categoryResponse[0].category
                                ) {
                                    props.setAnswerState([
                                        props.answerState[0],
                                        props.answerState[1],
                                        true,
                                        props.answerState[3],
                                        props.answerState[4],
                                    ]);
                                }
                                setActivePage({
                                    id: 3,
                                    revealed: true,
                                });
                                trackOnContinueEvent(3);
                            }}
                        />
                    </div>
                    <div className='answer'>
                        <SplurgeOn
                            category={
                                categoryResponse.length && categoryResponse[0]
                            }
                            activePageNumber={3}
                            merchantData={getRequiredMerchants()}
                            isCorrectAnswer={props.answerState[2]}
                            email={props.insightsEmail}
                            nextInsight={() => setActivePage({ id: 4, revealed: false })}
                        />
                    </div>
                </QuizWrapper>

                <QuizWrapper
                    blockDisplay={activePage.id === 4}
                    revealed={activePage.revealed}
                >
                    <div className='quiz'>
                        <SwipeSection
                            activePageNumber={4}
                            onContinue={(value) => {
                                setAnswerFour(value);
                                props.updateInsightQuizState(4);
                                setActivePage({
                                    id: 4,
                                    revealed: true,
                                });
                                trackOnContinueEvent(4);
                            }}
                        />
                    </div>
                    <div className='answer'>
                        <FavMerchants
                            merchantData={
                                merchantResponse.length && merchantResponse
                            }
                            activePageNumber={4}
                            email={props.insightsEmail}
                            nextInsight={() => setActivePage({ id: 5, revealed: false })}
                        />
                    </div>
                </QuizWrapper>

                <QuizWrapper
                    blockDisplay={activePage.id === 5}
                    revealed={activePage.revealed}
                >
                    <div className='quiz'>
                        <MostSpendSection
                            activePageNumber={5}
                            onContinue={(value) => {
                                setAnswerFive(value);
                                props.updateInsightQuizState(5);
                                setActivePage({
                                    id: 5,
                                    revealed: true,
                                });
                                trackOnContinueEvent(5);
                            }}
                        />
                    </div>
                    <div className='answer'>
                        <TopMonth
                            answer={answerFive}
                            activePageNumber={5}
                            email={props.insightsEmail}
                        />
                    </div>
                </QuizWrapper>
            </Holder>
        )
    );
};

const mapStateToProps = ({ insightReducer }) => {
    const { insightQuizState, answerState, insightsEmail } = insightReducer;

    return {
        insightQuizState,
        answerState,
        insightsEmail,
    };
};

const mapDispatchToProps = (dispatch: RootDispatch) => ({
    updateInsightQuizState: (payload: number) => dispatch(updateInsightQuizState(payload)),
    setAnswerState: (payload: boolean[]) => dispatch(setAnswerState(payload)),
    updateActiveStateInsightAction: (payload: number) => dispatch(updateActiveStateInsightAction(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FirstTimeFlow);
