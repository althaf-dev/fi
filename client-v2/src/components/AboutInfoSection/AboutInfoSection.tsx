'use client'

import React, { ReactNode } from 'react';
import AboutInfoRow from './AboutInfoRow';
import { WEBP_URL, PNGS_URL } from '../../constants/AssetConstants';

const InfoCardDetailArray: Array<{
    id: number;
    cardType?: 'leftImage' | 'rightImage';
    titleText: ReactNode;
    descriptionText: ReactNode;
    imageIcon: any;
    fallBackImage: any;
}> = [
    {
        id: 1,
        cardType: 'rightImage',
        titleText: 'Is Fi a bank?',
        descriptionText: (
            <span>
                No, we aren&apos;t. Here&apos;s what we do – build on the
                existing infrastructure of our banking partner & take it to a
                whole new level. Think of it as banking 2.0 for a generation of
                digital natives.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-1.webp`,
        fallBackImage: `${PNGS_URL}about-section-1.png`,
    },
    {
        id: 2,
        cardType: 'leftImage',
        titleText: 'So, what is Fi?',
        descriptionText: (
            <span>
                Fi is a money management app emboldened by cutting-edge tech. Fi
                helps you know your money, grow your money and organise your
                funds.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-2.webp`,
        fallBackImage: `${PNGS_URL}about-section-2.png`,
    },
    {
        id: 3,
        cardType: 'rightImage',
        titleText: (
            <>
                <span>Built from </span>
                <span>the ground up</span>
            </>
        ),
        descriptionText: (
            <span>
                It&apos;s hard to secure anything if you don&apos;t know how it
                works. That&apos;s why we&apos;ve built Fi from its core without
                any short-cuts.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-3.webp`,
        fallBackImage: `${PNGS_URL}about-section-3.png`,
    },
    {
        id: 4,
        cardType: 'leftImage',
        titleText: 'In partnership with a licensed bank',
        descriptionText: (
            <span>
                You access a Savings Account via our partnership with Federal
                Bank.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-4.webp`,
        fallBackImage: `${PNGS_URL}about-section-4.png`,
    },
    {
        id: 5,
        cardType: 'rightImage',
        titleText: 'With tomorrow’s security, today',
        descriptionText: (
            <span>
                To safeguard all of your financial activities and have zero
                compromises on your privacy.
            </span>
        ),
        imageIcon: `${WEBP_URL}about-section-5.webp`,
        fallBackImage: `${PNGS_URL}about-section-5.png`,
    },
];

function AboutInfoSection() {
    return (
        <>
            {InfoCardDetailArray.map((value, index: number) => (
                <AboutInfoRow
                    key={value.id}
                    isThirdCard={index === 2}
                    cardType={value.cardType}
                    titleText={value.titleText}
                    descriptionText={value.descriptionText}
                    imageIcon={value.imageIcon}
                    fallBackImage={value.fallBackImage}
                />
            ))}
        </>
    );
}

export default AboutInfoSection;
