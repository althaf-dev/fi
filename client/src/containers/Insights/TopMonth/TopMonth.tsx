import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Device } from '../../../Themes/Device';
import { ICONS_URL } from '../../../constants/AssetConstants';

import CommonInsightPage from '../CommonInsightPage/CommonInsightPage';
import TextIconSkeleton from '../TextIconSkeleton/TextIconSkeleton';
import { setAnswerState, updateActiveStateInsightAction } from '../actions';
import { RootDispatch } from '../../../store';
import { getInsightSpendInfoApi } from '../api';

const Wrapper = styled.div`
    max-width: 270px;
    width: 100%;
    margin: 0px auto;

    @media ${Device.desktop} {
        max-width: 438px;
    }
`;

interface TopSpendProps extends React.HTMLAttributes<HTMLElement> {
    answer: string;
    isReturning?: boolean;
    activePageNumber?: number;
    answerState?: boolean[];
    email: string;
    nextInsight?: () => void;
    previousInsight?: () => void;
    setAnswerState?: (state: boolean[]) => void;
    updateActiveStateInsightAction?: (state: number) => void;
}

const TopMonth = ({
    answer,
    activePageNumber,
    isReturning = false,
    nextInsight,
    email,
    answerState,
    previousInsight,
    updateActiveStateInsightAction,
}: TopSpendProps) => {
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        data && setIsAnswerCorrect(answer === data.highestSpendInfo.month);
    }, [answer]);

    useEffect(() => {
        if (isAnswerCorrect) {
            setAnswerState([
                answerState[0],
                answerState[1],
                answerState[2],
                answerState[3],
                true,
            ]);
        }
    }, [isAnswerCorrect]);

    const getAllMerchantPrice = () => {
        const payload = {
            quarter: '1',
            allMerchants: 'true',
            allMonths: 'true',
        };

        return getInsightSpendInfoApi(payload);
    };

    useEffect(() => {
        getAllMerchantPrice().then((res) => {
            setData(res);
        });
    }, []);

    return (
        <CommonInsightPage
            isReturning={isReturning}
            preText={
                !isReturning
                    ? isAnswerCorrect
                        ? `That's right – 10 points to Gryffindor 🦁. It looks like your orders peaked in ${
                              data &&
                              data.highestSpendInfo &&
                              data.highestSpendInfo.month
                          }`
                        : `Technically, you caught the Add-To-Cart fever in   🥁drumroll please🥁 ${
                              data &&
                              data.highestSpendInfo &&
                              data.highestSpendInfo.month
                          } .`
                    : `It looks like your orders peaked in ${
                          data &&
                          data.highestSpendInfo &&
                          data.highestSpendInfo.month
                      }`
            }
            email={email}
            qnText='In which month of 2020 did you embark on a spending spree? '
            btnText='DONE'
            activePageNumber={activePageNumber}
            previousInsight={previousInsight}
            nextInsight={() => {
                if (!isReturning) {
                    updateActiveStateInsightAction(2);
                } else {
                    // navigate('/');
                }
            }}
        >
            <Wrapper>
                <TextIconSkeleton
                    subText='Highest spends in'
                    text={`${data && data.highestSpendInfo && data.highestSpendInfo.month}
                        ₹${data && data.highestSpendInfo && data.highestSpendInfo.totalAmount} `}
                    childIcon={`${ICONS_URL}shopping-cart.png`}
                    color='PATTERNS_BLUE_TWO'
                />
            </Wrapper>
        </CommonInsightPage>
    );
};

const mapStateToProps = ({ insightReducer }) => {
    const { answerState } = insightReducer;

    return { answerState };
};

const mapPropsToState = (dispatch: RootDispatch) => ({
    setAnswerState: (payload: boolean[]) => dispatch(setAnswerState(payload)),
    updateActiveStateInsightAction: (payload: number) => dispatch(updateActiveStateInsightAction(payload)),
});

const connector = connect(mapStateToProps, mapPropsToState);
export default connector(TopMonth);
