/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */

'use client';

import React from 'react';
import Script from 'next/script';

export const pageMetaMap = {
    'features/mutual-funds': {
        metaTitle: 'Best Mutual Funds in India to Invest in 2023 with High Returns | Fi.Money',
        metaDescription: 'Mutual Fund Platform in India — Showcasing the Trending Mutual Funds to consider investing in 2023. Start investing online & free at Fi.Money',
        canonicalUrl: '/features/mutual-funds',
        ogTitle: 'Best Mutual Funds in India to Invest in 2023 with High Returns | Fi.Money',
        ogSiteName: 'Fi.Money',
        ogUrl: 'https://fi.money/features/mutual-funds',
        ogDescription: 'Mutual Fund Platform in India — Showcasing the Trending Mutual Funds to consider investing in 2023. Start investing online & free at Fi.Money',
        ogType: 'product',
        ogImage: 'https://dza2kd7rioahk.cloudfront.net/assets/logos/fi-logo.svg',
        twitterCard: 'summary',
        twitterSite: '@Bank_on_Fi',
        twitterTitle: 'Best Mutual Funds in India to Invest in 2023 with High Returns | Fi.Money',
        twitterDescription: 'Best Mutual Funds in India 2022 - Top Mutual Funds to Consider Investing in 2022 with Fi.Money. Start investing online free at Fi.Money',
        twitterImage: 'https://dza2kd7rioahk.cloudfront.net/assets/logos/fi-logo.svg',
        breadcrumbSchema: {
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://fi.money'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'grow your money',
                    item: 'https://fi.money/features'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'mutual-funds',
                    item: 'https://fi.money/features/mutual-funds'
                }
            ]
        },
        productSchema: {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: 'Best Mutual Funds in India to Invest in 2023 with High Returns | Fi.Money',
            image: 'https://dza2kd7rioahk.cloudfront.net/assets/logos/fi-logo.svg',
            description: 'Mutual Fund Platform in India — Showcasing the Trending Mutual Funds to consider investing in 2023. Start investing online & free at Fi.Money',
            brand: {
                '@type': 'Brand',
                name: 'Fi.Money'
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '3000'
            }
        }
    }
};

export const ScriptTags = (params: any) => {
    const {
        breadcrumbSchema, orgSchema, productSchema, faqsSchema,
    } = params;

    const tagConig = [];

    if (orgSchema) {
        tagConig.push(orgSchema);
    }

    if (breadcrumbSchema) {
        tagConig.push(breadcrumbSchema);
    }

    if (productSchema) {
        tagConig.push(productSchema);
    }

    if (faqsSchema) {
        tagConig.push(faqsSchema);
    }

    return (
        <>
            {
                tagConig.map((item: any, index: number) => <Script id={`page-tag-${index}`} type='application/ld+json'>{JSON.stringify(item)}</Script>)
            }
        </>
    );
};
