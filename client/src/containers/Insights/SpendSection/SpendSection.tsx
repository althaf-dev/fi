import React, { useState } from 'react';
import styled from 'styled-components';

import { Image, PrimaryButton } from '../../../components';
import { OptionCard, OptionCardImage } from '../InsightsStyled/InsightsStyled';

import { Device } from '../../../Themes/Device';
import CommonModalPage from '../../../components/CommonModalPage/CommonModalPage';
import { PNGS_URL } from '../../../constants/AssetConstants';

const Holder = styled.div`
    width: 248px;
    margin: auto;

    @media ${Device.desktop} {
        width: 456px;
    }
`;

const CardHolder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 8px;

    @media ${Device.desktop} {
        grid-column-gap: 36px;
    }
`;

const CardHolderTop = styled(CardHolder)`
    margin-bottom: 8px;
    margin-left: 16px;

    @media ${Device.desktop} {
        margin-bottom: 36px;
        margin-left: 36px;
    }
`;

const CardHolderBottom = styled(CardHolder)`
    margin-right: 16px;
`;

const Button = styled.div`
    @media ${Device.desktop} {
        width: 225px;
        margin-left: auto;
    }
`;

type CardType =
    | 'AMAZON'
    | 'SWIGGY'
    | 'ZOMATO'
    | 'BIGBASKET'
    | 'MYNTRA'
    | 'FLIPKART';

interface SpendSectionProps {
    activePageNumber?: number;
    onClose?: () => void;
    onContinue?: (cardtype: CardType) => void;
}

const SpendSection = (props: SpendSectionProps) => {
    const [selectedCard, setSelectedCard] = useState<CardType>();

    return (
        <CommonModalPage
            qnText='On which brand did you spend the most in the last 90 days?'
            hintText='Choose one of the options below'
            activePageNumber={props.activePageNumber}
            onClose={props.onClose}
        >
            <Holder>
                <CardHolderTop>
                    <OptionCard
                        dimension={72}
                        isSelected={selectedCard === 'AMAZON'}
                        onClick={() => setSelectedCard('AMAZON')}
                    >
                        <OptionCardImage dimension={'100%'}>
                            <Image icon={`${PNGS_URL}amazon.png`} alt='amazon' />
                        </OptionCardImage>
                    </OptionCard>

                    <OptionCard
                        dimension={72}
                        isSelected={selectedCard === 'ZOMATO'}
                        onClick={() => setSelectedCard('ZOMATO')}
                    >
                        <OptionCardImage dimension={'100%'}>
                            <Image icon={`${PNGS_URL}zomato.png`} alt='zomato' />
                        </OptionCardImage>
                    </OptionCard>

                    <OptionCard
                        dimension={72}
                        isSelected={selectedCard === 'MYNTRA'}
                        onClick={() => setSelectedCard('MYNTRA')}
                    >
                        <OptionCardImage dimension={'100%'}>
                            <Image icon={`${PNGS_URL}myntra.png`} alt='myntra' />
                        </OptionCardImage>
                    </OptionCard>
                </CardHolderTop>
                <CardHolderBottom>
                    <OptionCard
                        dimension={72}
                        isSelected={selectedCard === 'FLIPKART'}
                        onClick={() => setSelectedCard('FLIPKART')}
                    >
                        <OptionCardImage dimension={'100%'}>
                            <Image icon={`${PNGS_URL}flipkart.png`} alt='flipkart' />
                        </OptionCardImage>
                    </OptionCard>

                    <OptionCard
                        dimension={72}
                        isSelected={selectedCard === 'BIGBASKET'}
                        onClick={() => setSelectedCard('BIGBASKET')}
                    >
                        <OptionCardImage dimension={'100%'}>
                            <Image icon={`${PNGS_URL}bigbasket.png`} alt='bigbasket' />
                        </OptionCardImage>
                    </OptionCard>

                    <OptionCard
                        dimension={72}
                        isSelected={selectedCard === 'SWIGGY'}
                        onClick={() => setSelectedCard('SWIGGY')}
                    >
                        <OptionCardImage dimension={'100%'}>
                            <Image icon={`${PNGS_URL}swiggy.png`} alt='swiggy' />
                        </OptionCardImage>
                    </OptionCard>
                </CardHolderBottom>
            </Holder>
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

SpendSection.defaultProps = {
    onClose: () => {},
    onContinue: () => {},
};

export default SpendSection;
