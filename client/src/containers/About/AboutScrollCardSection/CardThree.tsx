import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import {
    AboutCard,
    AboutCardTag,
    AboutCardTitleTextHolder,
} from '../AboutStyled/AboutStyled';

import { Device } from '../../../Themes/Device';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const StyledCard = styled(AboutCard)`
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE};
`;

const ImageHolder = styled.div`
    width: 200px;
    height: 153px;

    @media ${Device.tab} {
        border-radius: 8px;
        width: 200px;
        height: 161px;
    }

    @media ${Device.desktop} {
        border-radius: 8px;
        width: 310px;
        height: 238px;
    }
`;

const CardThree = () => (
    <StyledCard>
        <AboutCardTag>
            <Font tagType='text' font='cardTagFont' color='GREY_2'>
                WHAT
            </Font>
        </AboutCardTag>
        <AboutCardTitleTextHolder>
            <Font font='cardTitleFont' tagType='text' color='GREY_2'>
                Through a platform where privacy & security are
                {'\n'}
                a priority
            </Font>
        </AboutCardTitleTextHolder>
        <ImageHolder>
            <Image
                icon={`${WEBP_URL}about-scroll-card-3.webp`}
                fallBackImage={`${PNGS_URL}about-scroll-card-3.png`}
                alt='card-image'
                loadingType='lazy'
            />
        </ImageHolder>
    </StyledCard>
);

export default CardThree;
