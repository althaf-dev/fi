/**
 * @file Housing Page Legit Section
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import { ASSETS_URL } from '../../../constants/AssetConstants';
import { Device } from '../../../Themes/Device';

import { Font, Image } from '../../../components';

const PosterSection = styled.div`
     text-align: center;
     padding: 0px 20px 30px;
     max-width: 360px;
     margin: 0px auto;
 
     @media ${Device.tab} {
         padding: 0px 40px 30px;
         max-width: 768px;
     }
 
     @media ${Device.desktop} {
         padding: 0px 70px 70px;
         max-width: 1290px;
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

const ImageWrapper = styled.div`
     display: flex;
     gap: 20px;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     @media ${Device.desktop} {
        flex-direction: row;
        gap: 45px;
    }
`;

const ImageHolder = styled.div`
     width: 187px;
     height: 48px;
 
     @media ${Device.desktop} {
         width: 355px;
         height: 90px;
     }
 `;

const LegitSection = () => (
    <PosterSection>
        <Title font='h1VariantThree' tagType='h1' color='MINE_SHAFT'>Our Partners</Title>
        <Description font='p' tagType='p' color='SUVA_GREY'>
            Being a home owner for the first time can be daunting. We’re here to make things a little easier
        </Description>
        <ImageWrapper>
            <ImageHolder>
                <Image
                    icon='https://dza2kd7rioahk.cloudfront.net/assets/feature-pages/pre-approved-loans/federal-bank.webp'
                    fallBackImage='https://dza2kd7rioahk.cloudfront.net/assets/feature-pages/pre-approved-loans/federal-bank.webp'
                    alt='icon'
                    loadingType='lazy'
                />
            </ImageHolder>
            <ImageHolder>
                <Image
                    icon={`${ASSETS_URL}/housing-project/home-capital.png`}
                    fallBackImage={`${ASSETS_URL}/housing-project/home-capital.png`}
                    alt='icon'
                    loadingType='lazy'
                />
            </ImageHolder>
        </ImageWrapper>
    </PosterSection>
);

export default memo(LegitSection);
