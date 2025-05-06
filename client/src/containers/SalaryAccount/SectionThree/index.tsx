import React from 'react';
import styled from 'styled-components';

import { FeaturePageTitle } from '../../../components/FeaturesPage/styled';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 80px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0px 40px 60px 40px;
    }

    @media ${Device.desktop} {
        text-align: left;
        padding: 0px 70px 120px 70px;
        max-width: 1290px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 20px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;        
    }

    @media ${Device.desktop} {
        grid-gap: 38px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    width: 100%;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 216px;
    }

    @media ${Device.desktop} {
        width: 358px;
    }
`;

const ImageHolder = styled.div`
    width: 48px;
    height: 48px;
    margin: 24px auto 14px;

    @media ${Device.tab} {
        width: 56px;
        height: 56px;
        margin: 40px auto 20px;
    }

    @media ${Device.desktop} {
        width: 72px;
        height: 72px;
        margin: 66px auto 32px;
    }
`;

const Title = styled(Font)`
    text-align: center;
    margin: 0px auto 24px;
    width: 240px;

    @media ${Device.tab} {
        margin: 0px auto 40px;
        width: 168px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 66px;
        width: 298px;
    }
`;

interface SectionThreeProps {
    values: {
        title: string,
        data: {
            id: number,
            icon: any,
            title: string,
        }[];
    },
}

const SectionThree = (props: SectionThreeProps) => {
    const { values } = props;
    const { title, data } = values;

    return (
        <PosterSection>
            <FeaturePageTitle font='cardTitleVariantFour' tagType='h1' color='MINE_SHAFT'>{title}</FeaturePageTitle>
            <Container>
                {data.map((ele) => (
                    <Card>
                        <ImageHolder>
                            <Image
                                icon={ele.icon}
                                alt='card-image'
                                loadingType='lazy'
                            />
                        </ImageHolder>
                        <Title font='cardTitleVariantTwo' tagType='text' color='LIGHT_GREY'>
                            {ele.title}
                        </Title>
                    </Card>
                ))}
            </Container>
        </PosterSection>
    );
};

export default SectionThree;
