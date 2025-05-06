/**
 * @file US Stocks Individual Alphabet Directory
 */
import React from 'react';
import { Metadata } from 'next';
import IndividualStockDirectory from './index';
import { GenerateMetaInfoStockDirectory } from '@/MetaConfig/metaUs';

export async function generateMetadata({
    params: { alphabet },
}: {
    params: { alphabet: string }
  }): Promise<Metadata> {
    const { metaTitle, metaDescription, canonicalUrl, } = GenerateMetaInfoStockDirectory(alphabet as string);

    return {
        title: metaTitle,
        description: metaDescription,
        alternates: {
            canonical: canonicalUrl,

        }
    };
}

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
        <>
            <meta property='og:type' content='product' />
            <IndividualStockDirectory />
        </>
    );
}
