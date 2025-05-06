import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Image, Font, Flex } from '../../../components';
import { SVGS_URL } from '../../../constants/AssetConstants';

const data = [
    {
        icon: `${SVGS_URL}beach.svg`,
        description:
            "If you're stressed out, take the day off to chill. Unwell? Use your unlimited wellness leaves.",
    },
    {
        icon: `${SVGS_URL}lunch.svg`,
        description:
            'Yearning for munchies? Check our stacked pantry. Oh, and lunch is on the house!',
    },
    {
        icon: `${SVGS_URL}flag.svg`,
        description:
            'Embrace diversity. Meet and jam with folks from all walks of life.',
    },
    {
        icon: `${SVGS_URL}ambulance.svg`,
        description:
            'Our truly wholesome medical benefits plan takes care of you and your loved ones.',
    },
    {
        icon: `${SVGS_URL}joystick.svg`,
        description:
            "Taking a break? Unwind in our fabulous gaming room. Of course, there's a scoreboard!",
    },
    {
        icon: `${SVGS_URL}loudspeaker.svg`,
        description:
            'Our employee referral rewards are bonkers. Know someone who will fit right in? Holler!',
    },
];

const Icon = styled.div`
    width: 30px;
    height: 30px;
    margin-bottom: 15px;

    @media ${Device.tab} {
        width: 28px;
        height: 28px;
        margin-bottom: 20px;
    }

    @media ${Device.desktop} {
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
    }
`;

const Card = styled.div`
    padding: 20px;
    width: 240px;
    height: 200px;
    background: #ffffff;
    border-radius: 15px;

    &:not(:nth-last-child(-n + 2)) {
        margin-right: 20px;
    }

    &:nth-child(-n + 2) {
        margin-left: 30px;
    }

    &:not(:nth-child(2n)) {
        margin-bottom: 20px;
    }

    @media ${Device.tab} {
        width: 190px;
        height: 196px;
        &:nth-child(-n + 2) {
            margin-left: 0px;
        }
        &:not(:nth-last-child(-n + 2)) {
            margin-right: 20px;
        }
        &:not(:nth-child(2n)) {
            margin-bottom: 20px;
        }
    }

    @media ${Device.desktop} {
        padding: 30px;
        width: 320px;
        height: 275px;
        border-radius: 20px;

        &:not(:nth-last-child(-n + 2)) {
            margin-right: 40px;
        }
        &:not(:nth-child(2n)) {
            margin-bottom: 40px;
        }
    }
`;

const Wrapper = styled.div`
    overflow: hidden;
    padding: 80px 0 70px;
    @media ${Device.tab} {
        padding-bottom: 104px;
    }
    @media ${Device.desktop} {
        padding: 120px 0 200px;
    }
`;

const Section = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.color.CHALK_GREY};
`;

const Cards = styled(Flex)`
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 420px;
    max-width: 780px;
    margin: auto;
    overflow-x: auto;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 1040px;
        max-height: 590px;
    }
`;

const Title = styled(Font)`
    max-width: 225px;
    margin: 0 auto 30px;
    text-align: center;

    @media ${Device.tab} {
        max-width: 100%;
        margin-bottom: 60px;
    }

    @media ${Device.desktop} {
        margin-bottom: 80px;
    }
`;

const cards = data.map(({ icon, description }) => (
    <Card key={description}>
        <Icon>
            <Image icon={icon} loadingType='lazy' />
        </Icon>
        <Font font='h5VariantOne' tagType='text' color='TUNDORA_2'>
            {description}
        </Font>
    </Card>
));

const AboveBeyondSection = () => (
    <Section>
        <Wrapper>
            <Title tagType='h2' font='h1'>
                Above & beyond work
            </Title>

            <Cards>{cards}</Cards>
        </Wrapper>
    </Section>
);

export default AboveBeyondSection;
