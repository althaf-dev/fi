/**
 * @file Housing Page LimitedTimeOffer Section
 */

import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';

import { countDownTimer } from '../../../utils/time';
import { Device } from '../../../Themes/Device';

import { Font } from '../../../components';
import { CONSUL_META_INFO_PATH_NAME } from '../../App/constants';
import { selectDynamicConfig } from '../../App/selectors';

const PosterSection = styled.div`
      text-align: center;
      padding: 0px 20px 30px;
      max-width: 360px;
      margin: 0px auto;
  
      @media ${Device.tab} {
          padding: 0px 40px 30px;
          max-width: 768px;
      }
  
      @media ${Device.desktop} {
          padding: 0px 70px 70px;
          max-width: 1290px;
      }
`;

const Title = styled(Font)`
      margin-bottom: 20px;
      text-align: center;
  
      @media ${Device.desktop} {
          margin-bottom: 25px;
      }
`;

const Container = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    width: 320px;
    padding: 20px 0px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 590px;
    }

    @media ${Device.desktop} {
        border-radius: 60px;
        width: 996px;
        padding: 42px 0px;
    }
`;

const Text = styled(Font)`
    text-align: center;
    margin-bottom: 20px;

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

const CountDownWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 10px;

    @media ${Device.desktop} {
        gap: 20px;
    }
`;

const TimeSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;

    @media ${Device.desktop} {
        gap: 22px;
        margin-bottom: 12px;
    }
`;

const TimeBlock = styled(Font)`
    background: ${(props) => props.theme.color.ALTO};
    border-radius: 10px;
    padding: 6px 14px;

    @media ${Device.desktop} {
        border-radius: 28px;
        padding: 27px 45px;
    }
`;

const Spearator = styled.div`
    color: ${(props) => props.theme.color.GREY_3};
    font-size: 16px;

    @media ${Device.desktop} {
        font-size: 48px;
    }
`;

const Subtext = styled(Font)`
    text-align: center;
`;

const LimitedTimeOfferSection = () => {
    const dynamicConfigInfo = useSelector(
        selectDynamicConfig(CONSUL_META_INFO_PATH_NAME),
        shallowEqual,
    );

    const limitedTimeOffer = dynamicConfigInfo?.housingOffers?.limitedTimeOffer;

    const [timeLeft, setTimeLeft] = useState(null);

    const { days, hours } = timeLeft || {};

    const daysArray: String[] = days?.toString().split('') || ['0', '0'];
    const hoursArray: String[] = hours?.toString().split('') || ['0', '0'];

    if (daysArray?.length === 1) {
        daysArray.unshift('0');
    }

    if (hoursArray?.length === 1) {
        hoursArray.unshift('0');
    }

    // 60000ms = 60sec, so setInterval will run after every minute
    useEffect(() => {
        setTimeLeft(countDownTimer(limitedTimeOffer));

        const id = setInterval(() => {
            setTimeLeft(countDownTimer(limitedTimeOffer));
        }, 60000);

        return () => {
            clearInterval(id);
        };
    }, [limitedTimeOffer]);

    return (
        <PosterSection>
            <Title font='h1VariantThree' tagType='h1' color='MINE_SHAFT'>Limited Time Offer</Title>
            <Container>
                <Text font='p' tagType='text' color='GREY_3'>Get ahead of everyone else!</Text>
                <CountDownWrapper>
                    <div>
                        <TimeSection>
                            {daysArray?.map((value) => (
                                <TimeBlock font='h1VariantSeven' tagType='text' color='FOREST_GREEN'>{value}</TimeBlock>
                            ))}
                        </TimeSection>
                        <Subtext font='p' tagType='text' color='GREY_3'>Days</Subtext>
                    </div>
                    <Spearator>
                        :
                    </Spearator>
                    <div>
                        <TimeSection>
                            {hoursArray?.map((value) => (
                                <TimeBlock font='h1VariantSeven' tagType='text' color='FOREST_GREEN'>{value}</TimeBlock>
                            ))}
                        </TimeSection>
                        <Subtext font='p' tagType='text' color='GREY_3'>Hours</Subtext>
                    </div>
                </CountDownWrapper>
            </Container>
        </PosterSection>
    );
};

export default memo(LimitedTimeOfferSection);
