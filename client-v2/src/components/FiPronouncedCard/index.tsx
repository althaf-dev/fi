// moved this from Home container
import React from 'react';
import styled from 'styled-components';

import { Image } from '../Abstract';
import { Device } from '../../Themes/Device';

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    border-radius: 5px;
    padding: 0px 10px;
    background-color: ${(props) => props.theme.color.DARK_GREY};

    @media ${Device.desktop} {
        height: 40px;
        padding: 10px 15px;
    }
`;

const ImageHolder = styled.div`
    height: 1em;
    width: 1em;
    margin-left: 5px;
`;

const Text = styled.div`
    font-family: Gilroy;
    font-size: 14px;
    line-height: 100%;
    color: ${(props) => props.theme.color.TEXT_GREY_1};

    @media ${Device.desktop} {
        font-size: 20px;
    }
`;
interface FiPronouncedCardProps {
    text: string;
    icon: string;
    alt: string;
}

const FiPronouncedCard = ({ text, icon, alt }: FiPronouncedCardProps) => (
    <Card>
        <Text>{text}</Text>
        <ImageHolder>
            <Image loadingType='lazy' icon={icon} alt={alt} />
        </ImageHolder>
    </Card>
);

export default FiPronouncedCard;
