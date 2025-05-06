import React from 'react';
import Image from 'next/image';
import Font from '../../Font/Font';
import { AboutCardTag, AboutCardTitleTextHolder } from '../Styled';
import { StyledCard, ImageHolder } from './Styled';
import { WEBP_URL } from '../../../constants/AssetConstants';

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
                src={`${WEBP_URL}about-scroll-card-3.webp`}
                alt='card-image'
                layout='responsive'
                width={350}
                height={200}
            />
        </ImageHolder>
    </StyledCard>
);

export default CardThree;
