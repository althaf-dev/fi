import React, { useState } from 'react';
import styled from 'styled-components';

import { Image, PrimaryButton, Font } from '../../../components';

import { OptionCard, OptionCardImage } from '../InsightsStyled/InsightsStyled';

import { Device } from '../../../Themes/Device';
import CommonModalPage from '../../../components/CommonModalPage/CommonModalPage';
import { SVGS_URL } from '../../../constants/AssetConstants';

const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 248px;
    margin: auto;

    @media ${Device.desktop} {
        width: 433px;
    }
`;

const Button = styled.div`
    @media ${Device.desktop} {
        width: 225px;
        margin-left: auto;
    }
`;

const Tag = styled(Font)`
    margin-top: 16px;

    @media ${Device.desktop} {
        margin-top: 24px;
    }
`;
type CardType = 'FOOD' | 'SHOPPING';

interface RevealSectionProps {
    activePageNumber?: number;
    onClose?: () => void;
    onContinue?: (cardtype: CardType) => void;
}

const RevealSection = (props: RevealSectionProps) => {
    const [selectedCard, setSelectedCard] = useState<CardType>();

    return (
        <CommonModalPage
            qnText='Did you splurge more on food or shopping in the last 3 months?'
            activePageNumber={props.activePageNumber}
            onClose={props.onClose}
        >
            <CardHolder>
                <div>
                    <OptionCard
                        isSelected={selectedCard === 'FOOD'}
                        onClick={() => setSelectedCard('FOOD')}
                        type={2}
                    >
                        <OptionCardImage>
                            <Image icon={`${SVGS_URL}reveal-card2.svg`} alt='card image' />
                        </OptionCardImage>
                    </OptionCard>
                    <Tag tagType='text' font='input' color='GREY_2'>
                        Ordering In
                    </Tag>
                </div>

                <div>
                    <OptionCard
                        isSelected={selectedCard === 'SHOPPING'}
                        onClick={() => setSelectedCard('SHOPPING')}
                        type={2}
                    >
                        <OptionCardImage>
                            <Image icon={`${SVGS_URL}reveal-card1.svg`} alt='card image' />
                        </OptionCardImage>
                    </OptionCard>
                    <Tag tagType='text' font='input' color='GREY_2'>
                        Shopping
                    </Tag>
                </div>
            </CardHolder>
            <Button>
                <PrimaryButton
                    label='CONTINUE'
                    disabled={!selectedCard}
                    onClick={() => props.onContinue(selectedCard)}
                />
            </Button>
        </CommonModalPage>
    );
};

RevealSection.defaultProps = {
    onClose: () => {},
    onContinue: () => {},
};

export default RevealSection;
