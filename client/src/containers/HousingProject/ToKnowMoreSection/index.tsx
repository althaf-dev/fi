/**
* @file Housing Page ToKnowMore Section
*/

import React, { memo } from 'react';
import styled from 'styled-components';

import { ASSETS_URL } from '../../../constants/AssetConstants';
import { Device } from '../../../Themes/Device';

import { Font, Image } from '../../../components';

import FormSection from '../FormSection';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 60px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        padding: 0px 89px 60px;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        padding: 0px 70px 180px;
        max-width: 1290px;
    }
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    overflow: hidden;

    @media ${Device.desktop} {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const Title = styled(Font)`
    margin-bottom: 20px;
    text-align: center;

    @media ${Device.desktop} {
        margin-bottom: 25px;
    }
`;

const Description = styled(Font)`
    max-width: 320px;
    margin: 0px auto 30px;
    text-align: center;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 60px;
        max-width: 684px;
    }
`;

const ImageHolder = styled.div`
    width: 320px;
    height: 90px;

    @media ${Device.tab} {
        width: 688px;
        height: 200px;
    }

    @media ${Device.desktop} {
        width: 643px;
        height: 485px;
    }
`;

const ToKnowMoreSection = () => (
    <PosterSection>
        <Title font='h1VariantThree' tagType='h1' color='MINE_SHAFT'>To know more</Title>
        <Description font='p' tagType='p' color='SUVA_GREY'>
            Your new home should be more than just a roof over your head. Give us a call, and let us show you around.
        </Description>
        <Container>
            <ImageHolder>
                <Image
                    icon={`${ASSETS_URL}/housing-project/banner.webp`}
                    fallBackImage={`${ASSETS_URL}/housing-project/banner.png`}
                    alt='building banner'
                    loadingType='lazy'
                />
            </ImageHolder>
            <FormSection />
        </Container>
    </PosterSection>
);

export default memo(ToKnowMoreSection);
