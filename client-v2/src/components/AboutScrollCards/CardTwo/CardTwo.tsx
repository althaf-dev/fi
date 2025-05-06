import React from 'react';
import Image from 'next/image';
import Font from '../../Font/Font';
import { AboutCardTag } from '../Styled';
import {
    Container,
    StyledCard,
    TitleHolder,
    Divider,
    ImageHolder,
} from './Styled';

import { WEBP_URL } from '../../../constants/AssetConstants';

const CardTwo = () => (
    <Container>
        <StyledCard>
            <AboutCardTag>
                <Font tagType='text' font='cardTagFont' color='GREY_2'>
                    WHY
                </Font>
            </AboutCardTag>
            <TitleHolder>
                <Font font='cardTitleFont' tagType='text' color='FI_GREEN'>
                    To help people get better with their money
                </Font>
            </TitleHolder>
        </StyledCard>
        <Divider />
        <ImageHolder>
            <Image
                src={`${WEBP_URL}about-scroll-card-2.webp`}
                alt='card-image'
                layout='responsive'
                width={350}
                height={200}
            />
        </ImageHolder>
    </Container>
);

export default CardTwo;
