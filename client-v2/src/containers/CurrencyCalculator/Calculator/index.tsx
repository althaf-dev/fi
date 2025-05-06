import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import CurrencyConvertorInput from '../CurrencyConvertorInput/index';
import { getForexExchangeRate } from '@/rtk/components/forexCalculatorBudget/saga';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';
import { debounce } from '@/utils/debounce';
import { setErrorMessage } from '@/rtk/components/forexCalculatorBudget/reducer';
import Carousel from '@/components/Carouselv2/Carousel/index';
import { LOGOS_URL_MAP, FOREX_CALCULATOR_URL_MAP } from '@/constants/AssetConstants';
import {
    PageContainer,
    ContentWrapper,
    CurrencyConvertorInputContainer,
    Condition,
    TermsAndConditions,
    Disclaimer,
    VisaIcon,
    LearnMore,
    Highlight,
    VisaLogo,
    ConditionAlert
} from './styles';
import { currencies } from '../constants';

export const Calculator = () => {
    const dispatch = useAppDispatch();
    const { convertedAmount, forexSavingsAmount, cardOffersAmount } = useAppSelector((state) => state?.forexCalculator);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [fromAmount, setFromAmount] = useState(400);
    const [toAmount, setToAmount] = useState(convertedAmount || 0);
    const [shouldUpdateToAmount, setShouldUpdateToAmount] = useState(true);
    const [countryName, setCountryName] = useState(currencies.find((currency) => currency.code === fromCurrency)?.country || '');

    // Update country name based on currency selection
    useEffect(() => {
        if (fromCurrency === 'INR') {
            setCountryName(currencies.find((currency) => currency.code === toCurrency)?.country || '');
        } else {
            setCountryName(currencies.find((currency) => currency.code === fromCurrency)?.country || '');
        }
    }, [fromCurrency, toCurrency]);

    const DesktopSlideImages = useMemo(() => [
        {
            src: `${FOREX_CALCULATOR_URL_MAP.FOREX_SAVINGS}`,
            alt: 'forex',
            amount: forexSavingsAmount,
            text: ''
        },
        {
            src: `${FOREX_CALCULATOR_URL_MAP.FOREX_OFFERS}`,
            alt: 'offer',
            amount: cardOffersAmount,
            text: `OFFERS IN ${countryName.toUpperCase()}`
        }
    ], [forexSavingsAmount, cardOffersAmount, countryName]);

    const MobileSlideImages = useMemo(() => [
        {
            src: `${FOREX_CALCULATOR_URL_MAP.MOB_FOREX_SAVINGS}`,
            alt: 'forex',
            amount: forexSavingsAmount,
            text: ''
        },
        {
            src: `${FOREX_CALCULATOR_URL_MAP.MOB_FOREX_OFFERS}`,
            alt: 'offer',
            amount: cardOffersAmount,
            text: `OFFERS IN ${countryName.toUpperCase()}`
        }
    ], [forexSavingsAmount, cardOffersAmount, countryName]);

    // Update toAmount when convertedAmount changes
    useEffect(() => {
        if (shouldUpdateToAmount) {
            setToAmount(convertedAmount || 0);
        }
    }, [convertedAmount, shouldUpdateToAmount]);

    // Create a memoized forex exchange data fetcher
    const getForexExchangeData = useMemo(() => (fromCurr: any, toCurr: any, amount: any) => new Promise((resolve, reject) => {
        const payload = {
            from_country_code: fromCurr,
            to_country_code: toCurr,
            amount
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
    }), [dispatch]);

    // Create a stable debounced function that persists across renders
    const debouncedForexExchange = useMemo(() => debounce((fromCurr, toCurr, amount) => {
        getForexExchangeData(fromCurr, toCurr, amount).catch(() => {
            setTimeout(() => {
                dispatch(setErrorMessage({ error: '' }));
            }, 2000);
        });
    }, 500),
    [getForexExchangeData, dispatch]);

    // Handle currency conversion updates
    useEffect(() => {
        if (!fromAmount || String(fromAmount).length === 0) {
            setShouldUpdateToAmount(false);
            setToAmount(0);
            return;
        }
        setShouldUpdateToAmount(true);
        debouncedForexExchange(fromCurrency, toCurrency, fromAmount);
    }, [fromCurrency, toCurrency, fromAmount, debouncedForexExchange]);

    return (
        <PageContainer>
            <ContentWrapper>
                <CurrencyConvertorInputContainer>
                    <CurrencyConvertorInput
                        fromCurrency={fromCurrency}
                        toCurrency={toCurrency}
                        fromAmount={fromAmount}
                        toAmount={toAmount}
                        setFromCurrency={setFromCurrency}
                        setToCurrency={setToCurrency}
                        setFromAmount={setFromAmount}
                        setToAmount={setToAmount}
                        currencyList={currencies}
                    />
                    <TermsAndConditions>
                        <Condition>
                            <ConditionAlert src={`${FOREX_CALCULATOR_URL_MAP.ALERT_SVG}`} />
                            There might be a slight change when you&apos;re buying and selling between currencies.
                            Don&apos;t worry, it&apos;s usually very minimal.
                        </Condition>
                        <Disclaimer>
                            <VisaIcon>
                                Powered by
                                <VisaLogo src={LOGOS_URL_MAP.FI_VISA} />
                            </VisaIcon>
                            <LearnMore>
                                This conversion is based on VISA rates.
                                <Highlight>Learn more.</Highlight>
                            </LearnMore>
                        </Disclaimer>
                    </TermsAndConditions>
                </CurrencyConvertorInputContainer>
                <Carousel
                    mobileSlides={MobileSlideImages}
                    desktopSlides={DesktopSlideImages}
                />
            </ContentWrapper>
        </PageContainer>
    );
};

export default Calculator;
