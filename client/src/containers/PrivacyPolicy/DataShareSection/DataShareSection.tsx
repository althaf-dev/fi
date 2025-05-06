import React from 'react';

import { Font } from '../../../components/Abstract';
import { PRIVACY_FIMONEY_MAIL } from '../../../constants/AppConstant';
import {
    // Bar,
    CardInfo,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    CardHolder,
    PrivacyCard,
    CardFooterInfo,
    ColoredSpan,
    WidthHolderOne,
    BarOne,
} from '../PrivacyStyled/PrivacyStyled';
import TableSection from '../../WealthTnC/TableSection';

const ThirdPartiesData = {
    title: '',
    headData: [
        {
            name: 'Sr. No.',
        },
        {
            name: 'Entity Name',
        },
        {
            name: 'Services Provided',
        },
    ],
    rowData: [
        [
            {
                value: '1',
            },
            {
                value: 'Federal Bank Limited',
            },
            {
                value: 'Lending Partner',
            },
        ],
        [
            {
                value: '2',
            },
            {
                value: 'IDFC FIRST Bank Limited ',
            },
            {
                value: 'Lending Partner',
            },
        ],
        [
            {
                value: '3',
            },
            {
                value: 'Aditya Birla Finance Limited (ABFL) ',
            },
            {
                value: 'Lending Partner',
            },
        ],
        [
            {
                value: '4',
            },
            {
                value: 'Moneyview Pvt Limited',
            },
            {
                value: 'Referral Partner',
            },
        ],
        [
            {
                value: '5',
            },
            {
                value: 'LiquiLoans (NDX P2P Private Limited)',
            },
            {
                value: 'Lending Partner',
            },
        ],
        [
            {
                value: '6',
            },
            {
                value: 'Moengage India Private Limited',
            },
            {
                value: 'Communication Services',
            },
        ],
        [
            {
                value: '7',
            },
            {
                value: 'Appsflyer Limited',
            },
            {
                value: 'Marketing Support',
            },
        ],
        [
            {
                value: '8',
            },
            {
                value: 'Goldstone Technologies Limited ',
            },
            {
                value: '(Tableau) Analytics',
            },
        ],
        [
            {
                value: '9',
            },
            {
                value: 'Snowflake Inc',
            },
            {
                value: 'Analytics',
            },
        ],
        [
            {
                value: '10',
            },
            {
                value: 'Amazon Web Services Inc',
            },
            {
                value: 'Cloud Platform',
            },
        ],
        [
            {
                value: '11',
            },
            {
                value: 'Scienaptic Systems Inc.',
            },
            {
                value: 'Business Rule Enginer',
            },
        ],
        [
            {
                value: '12',
            },
            {
                value: 'Credgenics Private Limited ',
            },
            {
                value: 'Collections Services for customers of NDX P2P Pvt. Ltd.',
            },
        ],
        [
            {
                value: '13',
            },
            {
                value: 'Freshworks Technologies Private Limited (Freshdesk)',
            },
            {
                value: 'Customer support',
            },
        ],
        [],
    ],
};

const DataShareSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Who do we share your data with? 🔑
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Your Personal Data is only accessible to those with a legitimate need-to-know clearance.
                    All such information remains safeguarded as per the Data Protection Rules, and applicable
                    International Standard Organisation norms. If you would like to know more details regarding
                    who we share your Personal Data with, please feel free to email us at
                    <a href={PRIVACY_FIMONEY_MAIL}>
                        <ColoredSpan color='FOREST_GREEN'>
                            &nbsp;privacy@fi.money.&nbsp;
                        </ColoredSpan>
                    </a>
                    <br />
                    <br />
                    For further insight, we will be sharing your information
                    with the following
                </CardInfo>
            </WidthHolderOne>

            <CardHolder>
                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            a. Members of epiFi (including our
                            affiliates/subsidiaries and business partners)
                            for services such as providing content,
                            products, customer support etc.;
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            c. Credit bureaus (which helps us to support
                            responsible lending and assist consumers in
                            understanding where they stand with their
                            credit) and collection agencies;
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            e. Where necessary to exercise, establish or
                            defend legal rights, including to enforce our
                            agreements and policies;
                        </Font>
                    </PrivacyLastCard>
                </div>

                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            b. Financial institutions and partner banks;
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            d. Law enforcement, government officials, or
                            other third parties pursuant to a subpoena/
                            summon, court order, or other legal process or
                            requirement applicable to the Company or one of
                            its affiliates/subsidiaries; when we need to do
                            so to comply with law;
                        </Font>
                    </PrivacyCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    We take care to allow your Personal Data to be accessed only by those who really need it in order to
                    perform their tasks and duties and to third parties who have a legitimate purpose
                    for accessing it and with your consent.
                    <br />
                    <br />
                    As a lending service provider (LSP), we may share your information we receive in the capacity of
                    an LSP with below third parties, only to the extent required to discharge our functions as an LSP
                    <br />
                    <TableSection tableData={ThirdPartiesData} removeBorder />
                    <br />
                    Personal Data will be transferred only to a third party that ensures the same level of data protection
                    that is mandated under the Information Technology Act 2000 (“IT Act”) and the
                    Information Technology (Reasonable security practices and procedures and
                    Sensitive Personal Data or information) Rules, 2011 (“Data Protection Rules”).
                    <br />
                    <br />
                    If we go through a corporate sale, merger, reorganization, dissolution or similar event, Personal Data we gather
                    from you may get transferred in connection with such an event. Any acquirer or successor of the Company may continue
                    to use the information described in this Privacy Policy.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default DataShareSection;
