import React from 'react';
import styled from 'styled-components';

import { Font, Flex, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { EXTERNAL_JOBS_URL } from '../../../constants/AppConstant';
import { WEBP_URL, PNGS_URL, ICONS_URL_MAP } from '../../../constants/AssetConstants';

const Section = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.color.TEA_GREEN};
`;

const Wrapper = styled(Flex)`
    padding: 40px 20px;
    flex-direction: column;
    align-items: center;
    max-width: 360px;
    margin: auto;

    @media ${Device.tab} {
        max-width: 610px;
        padding: 60px 20px;
    }

    @media ${Device.desktop} {
        max-width: 1160px;
        padding: 80px 85px 100px;
    }
`;

const Title = styled(Font)`
    text-align: center;
    max-width: 205px;
    margin-top: 5px;

    @media ${Device.tab} {
        max-width: 550px;
    }

    @media ${Device.desktop} {
        max-width: 740px;
        margin-top: 10px;
    }
`;

const Button = styled(Font)`
    padding: 15px 18px 14px 20px;
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
    border-radius: 10px;
    margin: 20px 0 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px !important;

    &:active {
        transform: scale(0.9);
    }

    @media ${Device.desktop} {
        margin: 40px 0 80px;
    }
`;

const ArrowTop = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 10px;
`;

const Imageholder = styled.div`
    overflow: hidden;
    border-radius: 15px;
`;

const Grid = styled.div`
    display: grid;
    overflow-x: scroll;
    width: 100vw;
    max-width: max-content;
    gap: 20px;
    grid-template-columns: 216px 216px 216px 216px 216px 216px;
    grid-template-rows: 134px;

    grid-template-areas:
        'one two four five six eight'
        'one three four five seven eight';

    /* To hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media ${Device.tab} {
        gap: 30px;
        grid-template-columns: 288px 288px 288px 288px 288px 288px;
        grid-template-rows: 177px;
    }

    @media ${Device.desktop} {
        gap: 40px;
        grid-template-columns: 360px 360px 360px 360px 360px 360px;
        grid-template-rows: 220px;
    }
`;

const SingleImageholder = styled(Imageholder)`
    /* additional css to fix unloading issue */
    width: 216px;
    height: 288px;

    @media ${Device.tab} {
        width: 288px;
        height: 384px;
    }

    @media ${Device.desktop} {
        width: 360px;
        height: 480px;
    }
`;

const DoubleImageholder = styled(Imageholder)`
    /* additional css to fix unloading issue */
    width: 216px;
    height: 134px;

    @media ${Device.tab} {
        width: 288px;
        height: 177px;
    }

    @media ${Device.desktop} {
        width: 360px;
        height: 220px;
    }
`;

const FirstImageHolder = styled(SingleImageholder)`
    grid-area: one;
`;

const SecondImageHolder = styled(DoubleImageholder)`
    grid-area: two;
    align-self: start;
`;

const ThirdImageHolder = styled(DoubleImageholder)`
    grid-area: three;
    align-self: end;
`;

const FourthImageHolder = styled(SingleImageholder)`
    grid-area: four;
`;

const FifthImageHolder = styled(SingleImageholder)`
    grid-area: five;
`;

const SixthImageHolder = styled(DoubleImageholder)`
    grid-area: six;
    align-self: start;
`;

const SeventhImageHolder = styled(DoubleImageholder)`
    grid-area: seven;
    align-self: end;
`;

const EighthImageHolder = styled(SingleImageholder)`
    grid-area: eight;
`;

const HiringSection = () => (
    <Section>
        <Wrapper>
            <Font tagType='text' font='h3' color='FOREST_GREEN'>
                {'We\'re hiring!'}
            </Font>
            <Title font='h1' tagType='text'>
                Your window of opportunity is wide open
            </Title>
            <a href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
                <Button tagType='text' font='button' color='WHITE'>
                    <span>VIEW OPEN ROLES</span>

                    <ArrowTop>
                        <Image
                            icon={ICONS_URL_MAP.TOP_RIGHT_ARROW}
                            loadingType='lazy'
                            alt='arrow'
                            objectType='contain'
                        />
                    </ArrowTop>
                </Button>
            </a>

            <Grid>
                <FirstImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-1.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='cover'
                        fallBackImage={`${PNGS_URL}hiring-img-1.png`}
                    />
                </FirstImageHolder>
                <SecondImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-2.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-2.png`}
                    />
                </SecondImageHolder>
                <ThirdImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-3.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-3.png`}
                    />
                </ThirdImageHolder>
                <FourthImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-4.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-4.png`}
                    />
                </FourthImageHolder>
                <FifthImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-5.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-5.png`}
                    />
                </FifthImageHolder>
                <SixthImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-6.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-6.png`}
                    />
                </SixthImageHolder>
                <SeventhImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-7.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-7.png`}
                    />
                </SeventhImageHolder>
                <EighthImageHolder>
                    <Image
                        icon={`${WEBP_URL}hiring-img-8.webp`}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                        fallBackImage={`${PNGS_URL}hiring-img-8.png`}
                    />
                </EighthImageHolder>
            </Grid>
        </Wrapper>
    </Section>
);

export default HiringSection;
