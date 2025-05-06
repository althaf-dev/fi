import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import ICON from '../../../../assets/pngs/insight-two.png';
import ICONWebp from '../../../../assets/webp/insight-two.webp';

import InsightCard from '../InsightCard/InsightCard';

const FontStyle = styled(Font)`
    font-size: 18px;
    line-height: 140%;
    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 140%;
    }
`;

const InsightCardTwo = () => {
    return (
        <InsightCard label='' cardType='poster' poster={ICONWebp} fallBackImage={ICON}>
            <FontStyle font='h4' tagType='text' color='GREY_3'>
                Expecting a
                <FontStyle font='h4' tagType='span'>
                    &nbsp;refund from Myntra?&nbsp;
                </FontStyle>
                If it's not in your account in 3 days, we'll ping you! 👊
            </FontStyle>
        </InsightCard>
    );
};

export default InsightCardTwo;
