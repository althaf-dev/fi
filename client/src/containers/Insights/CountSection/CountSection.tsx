import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Font, PrimaryButton, Flex } from '../../../components';

import { Device } from '../../../Themes/Device';
import CommonModalPage from '../../../components/CommonModalPage/CommonModalPage';
import { MerchantData } from '../MerchantData/MerchantData';
import { OptionCard, OptionCardImage } from '../InsightsStyled/InsightsStyled';

const Holder = styled(Flex)`
    width: 324px;
    margin: auto;

    @media ${Device.desktop} {
        width: 581px;
    }
`;

const Button = styled.div`
    @media ${Device.desktop} {
        width: 225px;
        margin-left: auto;
    }
`;

const Wrapper = styled.div`
    &:not(:last-child) {
        margin-right: 12px;
    }

    @media ${Device.desktop} {
        &:not(:last-child) {
            margin-right: 39px;
        }
    }
`;

const Text = styled(Font)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const getMerchantData = (id) => {
    const merchant = MerchantData.filter((res) => res.merchant === id);

    return merchant[0];
};

interface CountSectionProps extends React.HTMLAttributes<HTMLElement> {
    activePageNumber?: number;
    data: any;
    onClose?: () => void;
    onContinue?: (cardtype: number) => void;
}

const CountSection = (props: CountSectionProps) => {
    const [intervals, setIntervals] = useState([]);
    const [merchant, setMerchant] = useState(null);
    const [selectedCard, setSelectedCard] = useState(0);

    useEffect(() => {
        if (props.data && props.data.merchant) {
            setMerchant(getMerchantData(props.data.merchant));
        }
    }, [props.data]);

    const setArray = (value: number) => {
        if (value - 5 < 0) {
            setIntervals([value, value + 5, value + 10, value + 15]);
        } else {
            setIntervals([value - 5, value, value + 5, value + 10]);
        }
    };

    useEffect(() => {
        if (props.data) {
            setArray(props.data.totalOrders);
        }
    }, [props.data]);

    return (
        <CommonModalPage
            qnText={`In the past 3 months, how many orders did you place on ${
                merchant && merchant.name
            }?`}
            hintText='Choose one of the options below'
            activePageNumber={props.activePageNumber}
            onClose={props.onClose}
        >
            <Holder>
                {intervals.map((value) => (
                    <Wrapper key={value}>
                        <OptionCard
                            dimension={72}
                            isSelected={selectedCard === value}
                            onClick={() => setSelectedCard(value)}
                        >
                            <OptionCardImage>
                                <Text
                                    tagType='span'
                                    font='h2VariantTwo'
                                    color='GREY_3'
                                >
                                    {value}
                                </Text>
                            </OptionCardImage>
                        </OptionCard>
                    </Wrapper>
                ))}
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

CountSection.defaultProps = {
    onClose: () => {},
    onContinue: () => {},
};

export default CountSection;
