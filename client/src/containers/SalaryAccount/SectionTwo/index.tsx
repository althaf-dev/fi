import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';
import FinePrintText from '../../../components/FinePrintText';
import { CenterTextDiv } from '../../../components/styled';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 28px;
    max-width: 360px;
    margin: auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0px 40px 30px 40px;
    }

    @media ${Device.desktop} {
        text-align: left;
        padding: 0px 70px 40px 70px;
        max-width: 1290px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 30px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;        
    }

    @media ${Device.desktop} {
        grid-gap: 40px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    width: 100%;
    overflow: hidden;
    padding: 34px 26px;

    @media ${Device.tab} {
        display: block;
        width: 329px;
    }

    @media ${Device.desktop} {
        width: 555px;
    }
`;

// Need to give specific width and height otherwise it does not render correctly on Safari
const ImageHolder = styled.div<{ hasComingSoonSection: boolean }>`
    width: min(100%, 268px);
    height: 210px;
    margin: 12px auto 34px;

    @media ${Device.tab} {
        width: 162px;
        height: 162px;
        margin: ${(props) => (props.hasComingSoonSection ? '1px' : '24px')} auto 12px;
    }

    @media ${Device.desktop} {
        width: 180px;
        height: 180px;
        margin: ${(props) => (props.hasComingSoonSection ? '1px' : '48px')} auto 24px;
    }
`;

const Title = styled(Font)<{ hasComingSoonSection: boolean }>`
    text-align: center;
    margin: ${(props) => (props.hasComingSoonSection ? '8px' : '34px')} auto 0px;

    @media ${Device.tab} {
        margin: 0px auto 24px;
        width: 274px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 48px;
        width: 470px;
    }
`;

const ComingSoonBlock = styled.div`
    background: ${(props) => props.theme.color.LIGHT_YELLOW};
    border-radius: 20px;
    color: ${(props) => props.theme.color.TURMERIC};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 10px;
    width: 102px;
    padding: 4px 8px;
    margin: 8px auto 0px 8px;
    order: 1;

    @media ${Device.desktop} {
        width: 180px;
        font-size: 20px;
        line-height: 24px;
        padding: 8px 16px;
        margin: 12px auto 0px 12px;
    }
`;

interface SectionTwoProps {
    data: {
        id: number,
        comingSoon?: boolean,
        icon: any,
        fallbackIcon: any,
        title: string,
        finePrint: any,
    }[];
}

const SectionTwo = (props: SectionTwoProps) => {
    const { data } = props;

    return (
        <PosterSection>
            <Container>
                {data.map((ele) => (
                    <Card>
                        {ele?.comingSoon ? <ComingSoonBlock>COMING SOON</ComingSoonBlock> : null}
                        <ImageHolder hasComingSoonSection={ele?.comingSoon}>
                            <Image
                                icon={ele.icon}
                                fallBackImage={ele.fallbackIcon}
                                alt='card-image'
                                loadingType='lazy'
                                objectType='contain'
                            />
                        </ImageHolder>
                        <Title hasComingSoonSection={ele?.comingSoon} font='cardTitleVariantThree' tagType='text' color='MINE_SHAFT'>
                            {ele.title}
                        </Title>
                        <CenterTextDiv>
                            <FinePrintText data={ele.finePrint} />
                        </CenterTextDiv>
                    </Card>
                ))}
            </Container>
        </PosterSection>
    );
};

export default SectionTwo;
