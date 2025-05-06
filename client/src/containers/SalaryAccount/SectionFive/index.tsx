import React from 'react';
import styled from 'styled-components';

import { FeaturePageTitle } from '../../../components/FeaturesPage/styled';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 50px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0px 40px 60px 40px;
    }

    @media ${Device.desktop} {
        padding: 0px 70px 100px;
        max-width: 1290px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 20px;

    @media ${Device.desktop} {
        grid-gap: 28px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 20px;
    width: 100%;
    margin: 0px auto;

    @media ${Device.tab} {
        flex-direction: row;
        padding: 28px 34px 28px 28px;
    }

    @media ${Device.desktop} {
        padding: 28px;
    }
`;

const ImageHolder = styled.div`
    width: 32px;
    height: 32px;
    margin-bottom: 14px;

    @media ${Device.tab} {
        width: 36px;
        height: 36px;
        margin-right: 16px;
        margin-bottom: 0px;
    }

    @media ${Device.desktop} {
        width: 48px;
        height: 48px;
        margin-right: 30px;
    }
`;

const CardTitle = styled(Font)`
    text-align: center;
    width: 95%;

    @media ${Device.tab} {
        text-align : left;
    }
`;

interface SectionFiveInterface {
    values: {
        title: string,
        data: {
            id: number,
            icon: any,
            title: string,
        }[];
    }
}

const SectionFive = (props: SectionFiveInterface) => {
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
                        <CardTitle font='h3VariantEight' tagType='h3' color='MINE_SHAFT'>
                            {ele.title}
                        </CardTitle>
                    </Card>
                ))}
            </Container>
        </PosterSection>
    );
};

export default SectionFive;
