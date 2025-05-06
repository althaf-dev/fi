import React, { useMemo } from 'react';
import CurrencyInput from '../CurrencyInput/index';
import { useAppDispatch } from '@/rtk/hooks';
import { getForexExchangeRate } from '@/rtk/components/forexCalculatorBudget/saga';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';
import { setErrorMessage } from '@/rtk/components/forexCalculatorBudget/reducer';
import {
    Container,
    CurrencyList,
    CurrencyItem,
    ExchangeButton,
    Image,
    CurrencyCode,
    CurrencyIcon
} from './styles';
import { popularCurrencies } from '../constants';
import { FOREX_CALCULATOR_URL_MAP } from '@/constants/AssetConstants';

type Currency = {
    code: string;
    name: string;
    flag: string;
    country: string;
};

interface CurrencyConvertorInputProps {
    fromCurrency: string,
    toCurrency: string,
    fromAmount: number,
    toAmount: number,
    setFromCurrency: (currency: string) => void,
    setToCurrency: (currency: string) => void,
    setFromAmount: (amount: number) => void,
    setToAmount: (amount: number) => void,
    currencyList: Currency[],
}

const CurrencyConvertorInput: React.FC<CurrencyConvertorInputProps> = (props) => {
    const dispatch = useAppDispatch();
    const handleClick = (key: string) => {
        props.setFromCurrency(key);
    };

    const getForexExchangeData = (fromCurrency:string, toCurrency:string) => new Promise((resolve, reject) => {
        const payload = {
            from_country_code: toCurrency,
            to_country_code: fromCurrency,
            amount: props.fromAmount
        };
        try {
            dispatch(getForexExchangeRate(constructPayloadWithCommonInfo({
                ...payload,
                resolve,
                reject,
            })));
        } catch (e) {
            reject(e);
        }
    });

    const availableFromCurrencies = useMemo(() => props.currencyList.filter((currency) => currency.code !== props.toCurrency),
        [props.currencyList, props.toCurrency]);

    const availableToCurrencies = useMemo(() => props.currencyList.filter((currency) => currency.code !== props.fromCurrency),
        [props.currencyList, props.fromCurrency]);

    const handleCurrencyExchange = () => {
        props.setToCurrency(props.fromCurrency);
        props.setFromCurrency(props.toCurrency);

        getForexExchangeData(props.fromCurrency, props.toCurrency).catch(() => {
            setTimeout(() => {
                dispatch(setErrorMessage({ error: '' }));
            }, 2000);
        });
    };
    const fromCurrencyIcon = useMemo(() => props.currencyList.find((currency) => currency.code === props.fromCurrency)?.flag || '', [props.currencyList, props.fromCurrency]);
    const toCurrencyIcon = useMemo(() => props.currencyList.find((currency) => currency.code === props.toCurrency)?.flag || '', [props.currencyList, props.toCurrency]);
    const fromCurrencyName = useMemo(() => props.currencyList.find((currency) => currency.code === props.fromCurrency)?.name || '', [props.currencyList, props.fromCurrency]);
    const toCurrencyName = useMemo(() => props.currencyList.find((currency) => currency.code === props.toCurrency)?.name || '', [props.currencyList, props.toCurrency]);
    return (
        <Container>
            <CurrencyInput
                amount={props.fromAmount}
                currencyCode={props.fromCurrency}
                iconSrc={fromCurrencyIcon}
                setFromCurrency={props.setFromCurrency}
                setFromAmount={props.setFromAmount}
                type='Convert'
                currencyList={availableFromCurrencies}
                CurrencyName={fromCurrencyName}
            />
            <CurrencyList>
                {popularCurrencies.map((currency) => (
                    <CurrencyItem onClick={() => handleClick(currency.code)} key={currency.code}>
                        <CurrencyIcon>{currency.flag}</CurrencyIcon>
                        <CurrencyCode>
                            {currency.code}
                        </CurrencyCode>
                    </CurrencyItem>
                ))}
            </CurrencyList>
            <ExchangeButton onClick={handleCurrencyExchange}>
                <Image src={`${FOREX_CALCULATOR_URL_MAP.CALCULATOR_EXCHANGE_ICON}`} alt='arrow' />
            </ExchangeButton>
            <CurrencyInput
                amount={props.toAmount}
                currencyCode={props.toCurrency}
                iconSrc={toCurrencyIcon}
                setToCurrency={props.setToCurrency}
                setToAmount={props.setToAmount}
                type='to'
                currencyList={availableToCurrencies}
                CurrencyName={toCurrencyName}
                disabled
            />
        </Container>
    );
};

export default CurrencyConvertorInput;
