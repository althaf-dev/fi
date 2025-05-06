import React from 'react';
import { Metadata } from 'next';
import CreditCardEligibility from '@/containers/CreditCardEligibility';
import { CREDIT_CARD_TYPE } from '@/constants/AppConstant';
import { Title } from '@/app/(routes)/us-stocks/[symbol]/styles';
import { getMetaTags, pageMetaMap } from '@/MetaConfig/meta';
import { ScriptTags } from '@/MetaConfig/siteScriptTag';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = getMetaTags(pageMetaMap['credit-cards/amplifi/eligibility']);
    return metaData;
}

export default function CreditCardHome() {
    return (
        <>
            <meta property='og:type' content='product' />
            <CreditCardEligibility type={CREDIT_CARD_TYPE.AMPLIFI} />
            <Title>Check Your Amplifi Card Eligibility Now</Title>
            <ScriptTags
            // eslint-disable-next-line react/jsx-props-no-spreading
                {...pageMetaMap['credit-cards/amplifi/eligibility']}
            />

        </>
    );
}
