import React from 'react';
import Image from 'next/image';
import Font from '../../Font/Font';
import {
    AboutCardTag,
    AboutCardTitleTextHolder,
    AboutCardFooterTextHolder,
} from '../Styled';
import { StyledCard, ImageWrapper, Text } from './Styled';
import { WEBP_URL } from '../../../constants/AssetConstants';

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
            <Image
                src={`${WEBP_URL}about-scroll-card-1.webp`}
                alt='card-image'
                layout='responsive'
                width={350}
                height={200}
            />
        </ImageWrapper>

        <AboutCardFooterTextHolder>
            <Text font='cardTitleFont' tagType='text' color='TEXT_GREY_1'>
                No branches or tiresome paperwork
            </Text>
        </AboutCardFooterTextHolder>
    </StyledCard>
);

export default CardOne;
