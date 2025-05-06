import React from 'react';
import Head from 'next/head';

import NRSavingsAccountContainer from '@/containers/NRSavingsAccountContainer';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import Colors from '@/Themes/Colors';

const NRE_NRO_SavingsAccountOpening = () => (
    <>
        <Head>
            <title>NRE & NRO Savings Account Opening Online</title>
            <meta name="description" content="Open NRE and NRO savings account with Fi Money; get benefits like zero balance account, tax exemption,International Debit card and many more. Open NRE Account Now!" />
        </Head>
        <div
            style={{
            backgroundColor: Colors.BLACK_3,
            }}
        >
            <div
                style={{
                backgroundColor: Colors.BLACK_3,
                }}
            >
                <AppHeader />
            </div>
            <NRSavingsAccountContainer />
            <AppFooter hideStickyFooter />
        </div>
    </>
);

export default NRE_NRO_SavingsAccountOpening;
