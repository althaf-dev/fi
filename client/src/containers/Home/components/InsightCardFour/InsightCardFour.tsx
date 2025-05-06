import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import ICON from '../../../../assets/svgs/insight-four.svg';

import InsightCard from '../InsightCard/InsightCard';

const FontStyle = styled(Font)`
    font-size: 18px;
    line-height: 140%;
    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 140%;
    }
`;

const InsightCardFour = () => {
    return (
        <InsightCard label='VIEW INSTANCES' cardType='poster' poster={ICON}>
            <FontStyle font='h4' tagType='text' color='GREY_3'>
                Your
                <FontStyle font='h4' tagType='span'>
                    &nbsp;PF contributions&nbsp;
                </FontStyle>
                in 2020 make up
                <FontStyle font='h4' tagType='span'>
                    &nbsp;30%
                </FontStyle>
                <br />
                of your total PF balance! 🚀
            </FontStyle>
        </InsightCard>
    );
};

export default InsightCardFour;
