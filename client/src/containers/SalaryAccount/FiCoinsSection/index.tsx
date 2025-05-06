/**
 * @file Salary Page Fi Coins Section
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 50px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0px 40px 60px 60px;
    }

    @media ${Device.desktop} {
        padding: 0px 70px 100px;
        max-width: 1290px;
    }
`;

const Container = styled.div`
    background: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 20px 16px;

    @media ${Device.tab} {
        padding: 35px 40px;
    }

    @media ${Device.desktop} {
        padding: 34px 42px;
    }
`;

const ImageHolder = styled.div`
    width: 28px;
    height: 28px;
    margin-right: 12px;

    @media ${Device.tab} {
        width: 52px;
        height: 52px;
        margin-right: 24px;
    }

    @media ${Device.desktop} {
        width: 68px;
        height: 68px;
        margin-right: 30px;
    }
`;

const CardTitle = styled(Font)`
    text-align: left;
    margin-right: 23px;
    max-width: 203px;

    @media ${Device.tab} {
        margin-right: 48px;
        max-width: 444px;
    }

    @media ${Device.desktop} {
        margin-right: 143px;
        max-width: 785px;
    }
`;

const ArrowHolder = styled.div`
    width: 20px;
    height: 20px;

    @media ${Device.tab} {
        width: 40px;
        height: 40px;
    }
`;

interface SectionFiveInterface {
    data: {
        icon: any,
        title: string,
        url: string,
    }
}

const FiCoinsSection = (props: SectionFiveInterface) => {
    const { data } = props;
    const { icon, title, url } = data;

    const navigate = useNavigate();

    return (
        <PosterSection>
            <Container onClick={() => navigate(url)}>
                <ImageHolder>
                    <Image
                        icon={icon}
                        alt='logo'
                        loadingType='lazy'
                    />
                </ImageHolder>
                <CardTitle font='cardTitleVariantSix' tagType='text' color='SAN_MARINO'>
                    {title}
                </CardTitle>
                <ArrowHolder>
                    <Image
                        icon={ICONS_URL_MAP.RIGHT_ARROW_V2}
                        alt='arrow icon'
                        loadingType='lazy'
                    />
                </ArrowHolder>
            </Container>
        </PosterSection>
    );
};

export default FiCoinsSection;
