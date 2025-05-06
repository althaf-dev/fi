'use client';

import React from 'react';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import Toast from '@/components/Toast';
import { useAppSelector } from '@/rtk/hooks';
import CurrencyCalculatorHeader from '@/containers/CurrencyCalculator/pageHeader';
import { FAQPage } from '@/containers/CurrencyCalculator/FAQpage/index';
import { Calculator } from '@/containers/CurrencyCalculator/Calculator/index';
import Colors from '@/Themes/Colors';
import { StyledPage } from './styles';

interface CurrencyCalculatorProps {}

const CurrencyCalculator: React.FC<CurrencyCalculatorProps> = () => {
    const { error } = useAppSelector((state) => state?.forexCalculator);
    return (
        <div>
            <div
                style={{
                    backgroundColor: Colors.BLACK_3,
                }}
            >
                <AppHeader />
            </div>

            <StyledPage>
                <main>
                    <CurrencyCalculatorHeader />
                    <Calculator />
                    <FAQPage />
                    {error && <Toast message={(error as Error)?.message || (error as string)} />}
                </main>
            </StyledPage>
            <AppFooter />
        </div>
    );
};

export default CurrencyCalculator;
