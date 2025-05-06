import React, { useState, useEffect } from 'react';
import {
    ModalOverlay,
    ModalContainer,
    SearchBar,
    SearchInput,
    ListContainer,
    ListItem,
    LeftContent,
    RadioButton,
    Label,
    PrimaryText,
    SecondaryText,
} from './styles';

type Currency = {
    code: string;
    name: string;
    flag: string;
    country: string;
}

// Modal Component
type CurrencyModalProps = {
  visible: boolean;
  onClose: () => void;
  setCurrency: (currency: string) => void;
  currencyList: Currency[];
  currencyCode: string;
};

const CurrencyModal: React.FC<CurrencyModalProps> = ({
    visible,
    onClose,
    setCurrency,
    currencyList,
    currencyCode,
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(currencyCode);

    useEffect(() => {
        setSelectedCurrency(currencyCode);
    }, [currencyCode]);

    function filterByCountryName(data: Currency[], searchString: string) {
        return data.filter((item: Currency) => item.country.toLowerCase().startsWith(searchString.toLowerCase()));
    }

    function onSearch(val: string) {
        setFilteredCurrencies(filterByCountryName(currencyList, val));
        setSearchTerm(val);
    }

    function handleOnSelect(currency: string) {
        setSelectedCurrency(currency);
        setCurrency(currency);
        onClose();
    }
    return (
        <ModalOverlay visible={visible} onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <SearchBar>
                    <SearchInput
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </SearchBar>
                <ListContainer>
                    {(filteredCurrencies.length > 0
                        ? filteredCurrencies
                        : currencyList
                    ).map((currency: Currency) => (
                        <ListItem
                            key={currency.code}
                            selected={selectedCurrency === currency.code}
                            onClick={() => handleOnSelect(currency.code)}
                        >
                            <LeftContent>
                                <Label>
                                    <PrimaryText>
                                        {currency.flag}
                                        {' '}
                                        {currency.country}
                                        {` (${currency.code})`}
                                    </PrimaryText>
                                    <SecondaryText>{currency.name.toUpperCase()}</SecondaryText>
                                </Label>
                            </LeftContent>
                            <RadioButton selected={selectedCurrency === currency.code} />
                        </ListItem>
                    ))}
                </ListContainer>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default CurrencyModal;
