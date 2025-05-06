import React from 'react';
import styled from 'styled-components';

import { Font, Flex, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const FlexAlign = styled(Flex)`
    align-items: center;
`;

const Section = styled(FlexAlign)`
    width: 100%;
    background-color: ${(props) => props.theme.color.CHALK_GREY};
`;

const Wrapper = styled(Flex)`
    flex-direction: column;
    padding: 70px 30px 39px;
    max-width: 360px;
    width: 100%;
    margin: auto;

    @media ${Device.tab} {
        max-width: 610px;
        padding-bottom: 60px;
        padding: 120px 30px 36px;
    }
    @media ${Device.desktop} {
        flex-direction: row;
        max-width: 1440px;
        padding: 120px 90px 40px;
        justify-content: space-between;
    }
`;
const CardContentWrapper = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 30px;
    width: 100%;
    height: 359px;

    @media ${Device.tab} {
        padding: 35px;
    }

    @media ${Device.desktop} {
        height: 430px;
        padding: 40px;
    }
`;

const Title = styled(Font)`
    margin-bottom: 15px;
`;

const Description = styled(Font)``;

const Poster = styled.div`
    border-radius: 10px;
    bottom: 30px;
    filter: drop-shadow(-4px 4px 12px rgba(0, 0, 0, 0.1));
    overflow: hidden;
    position: absolute;
    width: 270px;
    height: 159px;

    @media ${Device.tab} {
        bottom: 35px;
        width: 295px;
        height: 173px;
    }

    @media ${Device.desktop} {
        border-radius: 15px;
        bottom: 40px;
        width: 340px;
        height: 200px;
    }
`;

const PosterOne = styled(Poster)`
    left: 30px;

    @media ${Device.tab} {
        left: 35px;
    }

    @media ${Device.desktop} {
        left: 40px;
    }
`;

const PosterTwo = styled(Poster)`
    right: 30px;

    @media ${Device.tab} {
        right: 35px;
    }

    @media ${Device.desktop} {
        left: 40px;
        right: 0;
    }
`;

const CardWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 59px;
    }
    @media ${Device.tab} {
        &:not(:last-child) {
            margin-bottom: 120px;
        }
    }
    @media ${Device.desktop} {
        margin-bottom: 0px;
        width: 360px;

        &:first-child {
            align-self: flex-start;
            margin-bottom: 0px;
        }
        &:nth-of-type(2n) {
            align-self: center;
            margin-bottom: 0px;
        }

        &:last-child {
            align-self: flex-end;
        }
    }
`;

const Card = styled.div`
    width: 270px;
    height: 449px;
    border-radius: 15px;
    position: relative;

    @media ${Device.tab} {
        height: 479px;
        width: 295px;
    }

    @media ${Device.desktop} {
        height: 570px;
        width: 340px;
    }
`;

const CardOne = styled(Card)`
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
`;

const CardTwo = styled(Card)`
    background-color: ${(props) => props.theme.color.FI_PINK};
    margin-left: auto;

    @media ${Device.desktop} {
        margin-left: 0px;
    }
`;

const CardThree = styled(Card)`
    background-color: ${(props) => props.theme.color.LIGHT_YELLOW};
`;

const cardOne = (
    <CardOne>
        <CardContentWrapper>
            <Title tagType='text' font='careerCardTitle'>
                The idea is to make things & break norms
            </Title>
            <Description tagType='text' font='p2' color='TEXT_GREY_1'>
                In a positive and inclusive community, that nudges you to think
                harder, stay curious, and remain nimble.
            </Description>
        </CardContentWrapper>
        <PosterOne>
            <Image icon={`${WEBP_URL}card-one-poster.webp`} loadingType='lazy' fallBackImage={`${PNGS_URL}card-one-poster.png`} />
        </PosterOne>
    </CardOne>
);

const cardTwo = (
    <CardTwo>
        <CardContentWrapper>
            <Title tagType='text' font='careerCardTitle'>
                In an
                <br />
                employee-first
                <br />
                environment
            </Title>
            <Description tagType='text' font='p2' color='TEXT_GREY_1'>
                An equal opportunity,
                <br />
                working environment –
                <br />
                where you form our epicenter.
            </Description>
        </CardContentWrapper>
        <PosterTwo>
            <Image icon={`${WEBP_URL}card-two-poster.webp`} loadingType='lazy' fallBackImage={`${PNGS_URL}card-two-poster.png`} />
        </PosterTwo>
    </CardTwo>
);

const cardThree = (
    <CardThree>
        <CardContentWrapper>
            <Title tagType='text' font='careerCardTitle'>
                In a great space
            </Title>
            <Description tagType='text' font='p2' color='TEXT_GREY_1'>
                Work with high calibre people from a super fun office. Don’t forget to grab some snacks and take a break when you need to, though!
            </Description>
        </CardContentWrapper>
        <PosterOne>
            <Image icon={`${WEBP_URL}card-three-poster.webp`} loadingType='lazy' fallBackImage={`${PNGS_URL}card-three-poster.png`} />
        </PosterOne>
    </CardThree>
);

const SecondSection = () => (
    <Section>
        <Wrapper>
            <CardWrapper>{cardOne}</CardWrapper>
            <CardWrapper>{cardTwo}</CardWrapper>
            <CardWrapper>{cardThree}</CardWrapper>
        </Wrapper>
    </Section>
);

export default SecondSection;
