import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import {
    AboutCard,
    AboutCardTag,
    AboutCardTitleTextHolder,
    AboutCardFooterTextHolder,
} from '../AboutStyled/AboutStyled';

import { Device } from '../../../Themes/Device';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const StyledCard = styled(AboutCard)`
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
`;

const ImageWrapper = styled.div`
    border-radius: 5px;
    overflow: hidden;
    width: 200px;
    height: 80px;

    @media ${Device.tab} {
        border-radius: 8px;
        width: 210px;
        height: 84px;
    }

    @media ${Device.desktop} {
        border-radius: 8px;
        width: 310px;
        height: 124px;
    }
`;

const Text = styled(Font)`
    max-width: 170px;

    @media ${Device.desktop} {
        max-width: 250px;
    }
`;

const CardOne = () => (
    <StyledCard>
        <AboutCardTag>
            <Font tagType='text' font='cardTagFont' color='GREY_2'>
                HOW
            </Font>
        </AboutCardTag>
        <AboutCardTitleTextHolder>
            <Text font='cardTitleFont' tagType='text' color='GREY_2'>
                With a digital-first, no-nonsense approach
            </Text>
        </AboutCardTitleTextHolder>

        <ImageWrapper>
            <Image icon={`${WEBP_URL}about-scroll-card-1.webp`} alt='card-image' loadingType='lazy' fallBackImage={`${PNGS_URL}about-scroll-card-1.png`} />
        </ImageWrapper>

        <AboutCardFooterTextHolder>
            <Text font='cardTitleFont' tagType='text' color='TEXT_GREY_1'>
                No branches or tiresome paperwork
            </Text>
        </AboutCardFooterTextHolder>
    </StyledCard>
);

export default CardOne;
