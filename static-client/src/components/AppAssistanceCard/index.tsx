// moved this from Home container
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const Card = styled.div`
    height: 32px;
    padding: 0px 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.DARK_GREY};
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${Device.desktop} {
        height: 40px;
        padding: 10px 15px;
    }
`;

const Text = styled.div`
    font-family: Inter;
    font-size: 11px;
    line-height: 140%;
    color: ${(props) => props.theme.color.FOREST_GREEN};

    @media ${Device.desktop} {
        font-size: 16px;
    }
`;
interface AppAssistanceCardProps {
    text: string;
    mailto?: string;
}

const AppAssistanceCard = ({ text, mailto }: AppAssistanceCardProps) => (
    <Card>
        {
            mailto ? (
                <a href={mailto}>
                    <Text>{text}</Text>
                </a>
            ) : (
                <Text>{text}</Text>
            )
        }
    </Card>
);

AppAssistanceCard.defaultProps = { mailto: '' };

export default AppAssistanceCard;
