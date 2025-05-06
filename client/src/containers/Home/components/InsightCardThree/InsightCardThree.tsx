import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import ICON from '../../../../assets/svgs/insight-three.svg';

import InsightCard from '../InsightCard/InsightCard';

const FontStyle = styled(Font)`
    font-size: 18px;
    line-height: 140%;
    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 140%;
    }
`;

const InsightCardThree = () => {
    return (
        <InsightCard label='' cardType='poster' poster={ICON}>
            <FontStyle font='h4' tagType='text' color='GREY_3'>
                Vineet, you tend to indulge the most on
                <br />
                <FontStyle font='h4' tagType='span'>
                    Flipkart 📦
                </FontStyle>
                &nbsp;between the
                <FontStyle font='h4' tagType='span'>
                    &nbsp;7th and 14th of every month
                </FontStyle>
            </FontStyle>
        </InsightCard>
    );
};

export default InsightCardThree;
