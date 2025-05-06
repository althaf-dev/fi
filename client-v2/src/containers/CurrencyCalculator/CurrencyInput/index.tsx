import React, { useState } from 'react';
import CurrencyModal from '../CurrencyModal';
import { ICONS_URL_MAP } from '@/constants/AssetConstants';
import {
    InputContainer,
    Container,
    AmountWrapper,
    AmountText,
    CurrencyWrapper,
    CurrencyGroup,
    CurrencyCode,
    CurrencyIcon,
    CurrencyLabelContainer,
    InputLabel,
    CurrencyNameLabel,
    DropdownIcon
} from './styles';

type Currency = {
    code: string;
    name: string;
    flag: string;
    country: string;
};

interface CurrencyInputProps {
    amount: number;
    currencyCode: string;
    iconSrc: string;
    setFromCurrency?: (currency: string) => void;
    setToCurrency?: (currency: string) => void;
    setFromAmount?: (amount: number) => void;
    setToAmount?: (amount: number) => void;
    type: string;
    currencyList: Currency[];
    CurrencyName: string;
    disabled?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
    amount,
    currencyCode,
    iconSrc,
    setFromCurrency,
    setToCurrency,
    setFromAmount,
    setToAmount,
    type,
    currencyList,
    CurrencyName,
    disabled = false
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const formatAmount = (value: number): string => {
        try {
            // Check if the decimal places are zeros
            const hasSignificantDecimals = value % 1 !== 0;

            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: currencyCode,
                minimumFractionDigits: hasSignificantDecimals ? 2 : 0,
                maximumFractionDigits: 2
            }).format(value);
        } catch (error) {
            return String(value);
        }
    };

    const handleOnclick = () => {
        setIsModalOpen(!isModalOpen);
    };

    const changeAmount = type === 'Convert' ? setFromAmount : setToAmount;
    const changeCurrency = (type === 'Convert' ? setFromCurrency : setToCurrency) || (() => {});

    const onClose = () => {
        setIsModalOpen(false);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && changeAmount) {
            // Remove any non-numeric characters except decimal point and negative sign
            const value = e.target.value.replace(/[^0-9.-]/g, '');

            // Ensure only one decimal point
            const parts = value.split('.');
            if (parts.length > 2) {
                return;
            }

            // Ensure only one negative sign at the start
            if (value.split('-').length > 2 || (value.includes('-') && value.indexOf('-') !== 0)) {
                return;
            }

            // If the value is empty or just a negative sign or decimal point, set it to 0
            if (value === '' || value === '-' || value === '.') {
                changeAmount(0);
                return;
            }

            // Convert to number and update if it's a valid number
            const numValue = parseFloat(value);
            if (!Number.isNaN(numValue)) {
                changeAmount(numValue);
            }
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const displayValue = () => {
        if (disabled) {
            return formatAmount(amount);
        }
        return isFocused ? amount : formatAmount(amount);
    };

    return (
        <InputContainer>
            <CurrencyLabelContainer>
                <InputLabel>{type.toUpperCase()}</InputLabel>
                <CurrencyNameLabel>{CurrencyName.toUpperCase()}</CurrencyNameLabel>
            </CurrencyLabelContainer>
            <Container>
                <AmountWrapper>
                    <AmountText
                        type='text'
                        value={displayValue()}
                        onChange={handleOnChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={disabled}
                        readOnly={disabled}
                        style={{ cursor: disabled ? 'not-allowed' : 'text' }}
                    />
                    <CurrencyWrapper
                        onClick={handleOnclick}
                        style={{ cursor: 'pointer' }}
                    >
                        <CurrencyGroup>
                            <CurrencyIcon>{iconSrc}</CurrencyIcon>
                            <CurrencyCode>{currencyCode}</CurrencyCode>
                            <DropdownIcon
                                src={ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                alt='Dropdown'
                                style={{ opacity: 1 }}
                            />
                        </CurrencyGroup>
                    </CurrencyWrapper>
                </AmountWrapper>
            </Container>
            <CurrencyModal
                visible={isModalOpen}
                onClose={onClose}
                setCurrency={changeCurrency}
                currencyList={currencyList}
                currencyCode={currencyCode}
            />
        </InputContainer>
    );
};

CurrencyInput.defaultProps = {
    setToAmount: () => {},
    setFromCurrency: () => {},
    setToCurrency: () => {},
    setFromAmount: () => {},
    disabled: false
};

export default CurrencyInput;
