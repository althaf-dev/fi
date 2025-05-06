import React from 'react';
import styled from 'styled-components';

import { Font, Flex, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { EXTERNAL_JOBS_URL } from '../../../constants/AppConstant';
import { WEBP_URL, PNGS_URL, SVGS_URL } from '../../../constants/AssetConstants';

const Text = styled(Font)`
    text-align: center;
`;

const FlexAlign = styled(Flex)`
    align-items: center;
`;

const Title = styled(Text)`
    max-width: 253px;

    @media ${Device.tab} {
        max-width: 500px;
    }

    @media ${Device.desktop} {
        max-width: 730px;
    }
`;

const Section = styled(FlexAlign)`
    width: 100%;
    background-color: ${(props) => props.theme.color.FI_LIGHT_BLUE};
`;

const Description = styled(Text)`
    margin: 15px 0 29px;
    max-width: 280px;
    @media ${Device.tab} {
        max-width: 430px;
    }

    @media ${Device.desktop} {
        max-width: 600px;
        margin: 20px 0 40px;
    }
`;

const ArrowTop = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 5px;
    @media ${Device.desktop} {
        width: 16px;
        height: 16px;
        margin-left: 10px;
    }
`;

const Poster = styled.div`
    border-radius: 30px;
    filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.2));
    margin-top: 40px;
    overflow: hidden;
    width: 320px;
    height: 180px;

    @media ${Device.tab} {
        margin-top: 30px;
        width: 610px;
        height: 338px;
    }

    @media ${Device.desktop} {
        margin-top: 80px;
        width: 820px;
        height: 460px;
    }
`;

const Wrapper = styled(FlexAlign)`
    flex-direction: column;
    align-items: center;
    padding: 25px 20px 40px;
    max-width: 360px;
    margin: auto;

    @media ${Device.tab} {
        max-width: 610px;
        padding: 70px 20px 80px;
        padding-bottom: 60px;
    }
    @media ${Device.desktop} {
        max-width: 1440px;
        padding: 20px 85px 100px;
    }
`;

const LinkText = styled.div`
    font-size: 16px;
    font-family: 'Gilroy', sans-serif;
    font-weight: bold;
    line-height: 110%;
    color: ${(props) => props.theme.color.TUNDORA_2};

    @media ${Device.tab} {
        font-size: 18px;
    }
    @media ${Device.desktop} {
        font-size: 20px;
    }
`;

const PosterSection = () => (
    <Section>
        <Wrapper>
            <Title tagType='h1' font='h1'>
                Help banking time travel & have fun doing it 😇
            </Title>

            <Description tagType='h2' font='p' color='GREY_3'>
                Our creed isn’t relentless disruption. It’s to always do the
                right thing – both for the team and our users.
            </Description>

            <FlexAlign>
                <a href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
                    <LinkText>VIEW OPEN ROLES</LinkText>
                </a>
                <ArrowTop>
                    <Image
                        loadingType='eager'
                        icon={`${SVGS_URL}arrow-grey.svg`}
                        alt='arrow'
                        objectType='contain'
                    />
                </ArrowTop>
            </FlexAlign>

            <Poster>
                <Image
                    icon={`${WEBP_URL}careers-main-top.webp`}
                    alt='Team'
                    objectType='cover'
                    loadingType='eager'
                    fallBackImage={`${PNGS_URL}careers-main-top.png`}
                />
            </Poster>
        </Wrapper>
    </Section>
);

export default PosterSection;
