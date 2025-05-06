import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Holder } from '../InsightsStyled/InsightsStyled';
import AmazonOrders from '../AmazonOrders/AmazonOrders';
import TopSpend from '../TopSpend/TopSpend';
import SplurgeOn from '../SplurgeOn/SplurgeOn';
import FavMerchants from '../FavMerchants/FavMerchants';
import TopMonth from '../TopMonth/TopMonth';
import { getInsightSpendInfoApi } from '../api';
import { RootDispatch } from '../../../store';
import { updateActiveStateInsightAction } from '../actions';

const QuizWrapper = styled.div<{ blockDisplay: boolean }>`
    width: 100%;
    display: ${(props) => (props.blockDisplay ? 'block' : 'none')};
`;

interface ReturningUserFlowProps {
    insightsEmail: string;
    updateActiveStateInsightAction?: (state: number) => void;
}

const ReturningUserFlow = (props: ReturningUserFlowProps) => {
    const [activePage, setActivePage] = useState(1);
    const [merchantResponse, setMerchantResponse] = useState([]);
    const [categoryResponse, setCategoryResponse] = useState([]);
    const [answerOne, setAnswerOne] = useState<any>(0);
    const [answerTwo, setAnswerTwo] = useState<any>(null);
    const [answerThree, setAnswerThree] = useState<any>(null);
    const [answerFour, setAnswerFour] = useState<any>(null);
    const [answerFive, setAnswerFive] = useState<any>(null);

    const [isDataAvailable, setIsDataAvailable] = useState(false);

    const { insightsEmail } = props;

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

    const getRequiredMerchants = () => {
        if (categoryResponse.length && categoryResponse[0].category === 'FOOD') {
            const data = merchantResponse.filter(
                (res) => (res.merchant === 'SWIGGY' || res.merchant === 'ZOMATO'),
            );

            return data;
        }

        if (categoryResponse.length && categoryResponse[0].category === 'SHOPPING') {
            const data = merchantResponse.filter(
                (res) => (
                    res.merchant !== 'SWIGGY'
                    && res.merchant !== 'ZOMATO'
                    && res.merchant !== 'BIGBASKET'
                ),
            );

            return data.slice(0, 2);
        }
    };

    return (
        isDataAvailable && (
            <Holder color='dark'>
                <QuizWrapper blockDisplay={activePage === 1}>
                    <AmazonOrders
                        answer={answerOne}
                        activePageNumber={1}
                        isReturning
                        email={insightsEmail}
                        data={
                            merchantResponse.length > 1
                                ? merchantResponse[1]
                                : merchantResponse.length > 0
                                ? merchantResponse[0]
                                : null
                        }
                        nextInsight={() => setActivePage(2)}
                    />
                </QuizWrapper>
                <QuizWrapper blockDisplay={activePage === 2}>
                    <TopSpend
                        activePageNumber={2}
                        isReturning
                        email={insightsEmail}
                        topMerchantData={
                            merchantResponse.length > 0 && merchantResponse[0]
                        }
                        previousInsight={() => setActivePage(1)}
                        nextInsight={() => setActivePage(3)}
                    />
                </QuizWrapper>
                <QuizWrapper blockDisplay={activePage === 3}>
                    <SplurgeOn
                        category={
                            categoryResponse.length && categoryResponse[0]
                        }
                        activePageNumber={3}
                        isReturning
                        email={insightsEmail}
                        merchantData={getRequiredMerchants()}
                        previousInsight={() => setActivePage(2)}
                        nextInsight={() => setActivePage(4)}
                    />
                </QuizWrapper>

                <QuizWrapper blockDisplay={activePage === 4}>
                    <FavMerchants
                        merchantData={
                            merchantResponse.length && merchantResponse
                        }
                        activePageNumber={4}
                        isReturning
                        email={insightsEmail}
                        previousInsight={() => setActivePage(3)}
                        nextInsight={() => setActivePage(5)}
                    />
                </QuizWrapper>

                <QuizWrapper blockDisplay={activePage === 5}>
                    <TopMonth
                        activePageNumber={5}
                        isReturning
                        email={insightsEmail}
                        answer={answerFive}
                        previousInsight={() => setActivePage(4)}
                    />
                </QuizWrapper>
            </Holder>
        )
    );
};

const mapStateToProps = ({ insightReducer }) => {
    const { insightsEmail } = insightReducer;

    return { insightsEmail };
};

// eslint-disable-next-line object-curly-newline
const mapDispatchToProps = (dispatch: RootDispatch) => ({
    updateActiveStateInsightAction: (payload: number) => dispatch(updateActiveStateInsightAction(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ReturningUserFlow);
