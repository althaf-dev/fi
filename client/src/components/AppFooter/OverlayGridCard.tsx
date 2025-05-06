/* eslint-disable react/require-default-props */

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Device } from '../../Themes/Device';
import { ElementTypes, makeDataTestId } from '../../DataTestIds';

const OverlayCard = styled.div<{ isFirstCard?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.color.GREY_2};
    overflow: hidden;
    cursor: pointer;
    ${(props) => (props.isFirstCard ? 'grid-column: 1/3' : null)};

    @media ${Device.desktop} {
        padding: 40px;
        border-radius: 20px;
        grid-column: auto;
    }
`;

const ThirdOverlayCard = styled(OverlayCard)`
    display: block;
`;

interface OverlayGridCardProps {
    type?: 1 | 2 | 3;
    isFirstCard?: boolean;
    font: ReactNode;
    action: ReactNode;
    onClick?: () => void;
    screenName?: string;
    parentComponent?: string;
    name?: string;
}

const OverlayGridCard = (props: OverlayGridCardProps) => {
    const {
        type, onClick, isFirstCard, font, action, screenName, parentComponent, name,
    } = props;
    switch (type) {
        case 3:
            return (
                <ThirdOverlayCard
                    isFirstCard={isFirstCard}
                    onClick={onClick}
                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Card, `${name}Card`)}
                >
                    <div>{font}</div>
                    {action}
                </ThirdOverlayCard>
            );
        default:
            return (
                <OverlayCard
                    isFirstCard={isFirstCard}
                    onClick={onClick}
                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Card, `${name}Card`)}
                >
                    <div>{font}</div>
                    {action}
                </OverlayCard>
            );
    }
};

OverlayGridCard.defaultProps = {
    screenName: '',
    parentComponent: '',
    name: '',
};

export default OverlayGridCard;
