import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import {
    AboutCard,
    AboutCardTag,
    AboutCardTitleTextHolder,
} from '../AboutStyled/AboutStyled';

import { Device } from '../../../Themes/Device';
import { WEBP_URL, JPGS_URL } from '../../../constants/AssetConstants';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.TUNDORA_2};
    border-radius: 20px;
    overflow: hidden;
`;

const StyledCard = styled(AboutCard)`
    padding-bottom: 0;
`;

const Divider = styled.div`
    background-color: ${(props) => props.theme.color.TUNDORA_2};
    width: 100%;
    height: 5px;
`;

const TitleHolder = styled(AboutCardTitleTextHolder)`
    width: 170px;

    @media ${Device.desktop} {
        width: 220px;
    }
`;

const ImageHolder = styled.div`
    width: 260px;
    height: 214px;

    @media ${Device.tab} {
        border-radius: 8px;
        width: 260px;
        height: 214px;
    }

    @media ${Device.desktop} {
        border-radius: 8px;
        width: 390px;
        height: 322px;
    }
`;

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
                icon={`${WEBP_URL}about-scroll-card-2.webp`}
                fallBackImage={`${JPGS_URL}about-scroll-card-2.jpg`}
                alt='card-image'
                loadingType='lazy'
            />
        </ImageHolder>
    </Container>
);

export default CardTwo;
