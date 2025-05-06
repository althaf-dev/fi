import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import ICON from '../../../../assets/pngs/insight-five.png';
import ICONWebp from '../../../../assets/webp/insight-five.webp';

import InsightCard from '../InsightCard/InsightCard';

const FontStyle = styled(Font)`
    font-size: 18px;
    line-height: 140%;
    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 140%;
    }
`;

const InsightCardFive = () => {
    return (
        <InsightCard label='VIEW INSTANCES' cardType='poster' poster={ICONWebp} fallBackImage={ICON}>
            <FontStyle font='h4' tagType='text' color='GREY_3'>
                You were charged an
                <FontStyle font='h4' tagType='span'>
                    &nbsp; ‘Annual Fee’ 👀&nbsp;
                </FontStyle>
                <br />
                on your credit card ending in
                <FontStyle font='h4' tagType='span'>
                    &nbsp;4290
                </FontStyle>
                . Try requesting a waiver!
            </FontStyle>
        </InsightCard>
    );
};

export default InsightCardFive;
