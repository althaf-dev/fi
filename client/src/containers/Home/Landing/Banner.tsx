import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const BannerWrapper = styled.div`
    text-align: center;
    padding: 14px 0;
    background-color: ${(props) => props.theme.color.FOREST_GREEN};

    @media ${Device.desktop} {
        padding: 28px;
    }
`;

const BannerFont = styled(Font)`
    max-width: 290px;
    margin: 0 auto;

    @media ${Device.tab} {
        max-width: 325px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
    }
`;

const Banner = () => (
    <BannerWrapper>
        <Link to='/cbo'>
            <BannerFont font='input' tagType='text' color='WHITE'>
                Become a Chief Broke Officer and get paid to fix your
                relationship with money 👉
            </BannerFont>
        </Link>
    </BannerWrapper>
);

export default Banner;
