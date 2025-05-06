import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Font, PrimaryButton } from '../../../components';

import { MonthCard } from '../InsightsStyled/InsightsStyled';

import { MonthArray } from './Constant';
import { Device } from '../../../Themes/Device';
import CommonModalPage from '../../../components/CommonModalPage/CommonModalPage';

const MonthHolder = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 318px;
    margin-right: -6px;

    @media ${Device.desktop} {
        max-width: 595px;
        margin-right: -8px;
    }
`;
const Button = styled.div`
    @media ${Device.desktop} {
        width: 225px;
        margin-left: auto;
    }
`;
interface MostSpendSectionProps {
    activePageNumber?: number;
    onClose?: () => void;
    onContinue?: (cardtype: string) => void;
}

const MostSpendSection = (props: MostSpendSectionProps) => {
    const [selectedMonth, setSelectedMonth] = useState<string>();

    return (
        <CommonModalPage
            qnText='In which month of 2020 did you embark on a spending spree? '
            hintText='Choose one of the months below'
            activePageNumber={props.activePageNumber}
            onClose={props.onClose}
        >
            <MonthHolder>
                {MonthArray.map((value, index: number) => (
                    <MonthCard
                        key={index}
                        isSelected={selectedMonth === value.name}
                        onClick={() => setSelectedMonth(value.name)}
                    >
                        <Font
                            tagType='span'
                            font='h5VariantFive'
                            color={
                                selectedMonth === value.name
                                    ? 'MINE_SHAFT'
                                    : 'SUVA_GREY'
                            }
                        >
                            {value.name}
                        </Font>
                    </MonthCard>
                ))}
            </MonthHolder>
            <Button>
                <PrimaryButton
                    label='CONTINUE'
                    disabled={!selectedMonth}
                    onClick={() => props.onContinue(selectedMonth)}
                />
            </Button>
        </CommonModalPage>
    );
};

MostSpendSection.defaultProps = {
    onClose: () => {},
    onContinue: () => {},
};

export default MostSpendSection;
