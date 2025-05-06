/**
 * @file Salary Page Employer Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';
import { ICONS_URL } from '../../../constants/AssetConstants';

import FormSection from '../FormSection';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 0px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        padding: 0px 40px 0px;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        padding: 0px 70px 0px;
        max-width: 1290px;
    }
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;

    @media ${Device.desktop} {
        flex-direction: row;
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
    max-width: 100%;
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
    width: 90px;
    height: 90px;

    @media ${Device.desktop} {
        width: 140px;
        height: 140px;
    }

    @media ${Device.desktop} {
        width: 154px;
        height: 154px;
    }
`;

const BannerHolder = styled.div`
    background: ${(props) => props.theme.color.PATTERNS_BLUE};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;

    @media ${Device.tab} {
        width: 688px;
        height: 150px;
    }

    @media ${Device.desktop} {
        width: 282px;
        height: 481px;
    }
`;

const ForEmployersSection = () => (
    <PosterSection>
        <Title font='h1VariantThree' tagType='h1' color='MINE_SHAFT'>For companies</Title>
        <Description font='p' tagType='p' color='SUVA_GREY'>
            Have a great team? Give them a great account. Give us your details and we&apos;ll get in touch.
        </Description>
        <Container>
            <BannerHolder>
                <ImageHolder>
                    <Image
                        icon={`${ICONS_URL}cup.svg`}
                        alt='cup icon'
                        loadingType='lazy'
                    />
                </ImageHolder>
            </BannerHolder>
            <FormSection />
        </Container>
    </PosterSection>
);

export default ForEmployersSection;
