import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import ICON from '../../../../assets/pngs/insight-one.png';
import ICONWebp from '../../../../assets/webp/insight-one.webp';

import InsightCard from '../InsightCard/InsightCard';

const FontStyle = styled(Font)`
    font-size: 18px;
    line-height: 140%;
    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 140%;
    }
`;

const InsightCardOne = () => {
    return (
        <InsightCard label='VIEW INSTANCES' cardType='poster' poster={ICONWebp} fallBackImage={ICON}>
            <FontStyle font='h4' tagType='text' color='GREY_3'>
                This month,
                <FontStyle font='h4' tagType='span'>
                    &nbsp;Zomato
                </FontStyle>
                <br />
                brought delicious grub to your doorstep
                <FontStyle font='h4' tagType='span'>
                    &nbsp;7 times!
                </FontStyle>
                <br />
                Total =
                <FontStyle font='h4' tagType='span'>
                    &nbsp;₹3,700&nbsp;
                </FontStyle>
                🥡
            </FontStyle>
        </InsightCard>
    );
};

export default InsightCardOne;
