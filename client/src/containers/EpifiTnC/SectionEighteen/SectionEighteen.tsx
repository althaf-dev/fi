/**
 * @file SectionEighteen
 * consists of the Epifi plans Tnc section
 */

import React from 'react';

import { FEDERAL_SERVICE_CHARGES_URL, PRIVACY_POLICY_URL, FEATURES_ACCOUNT_INFINITE } from '../../../constants/AppConstant';

import { Font, TableSection } from '../../../components';

import {
    BarHolder,
    BarOne,
    CardHolder,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    SectionContainerOne,
    TitleTextHolder,
    TitleTextOne,
    WidthHolderOne,
    ColoredSpan,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

import { EPIFI_PLANS_TABLE_DATA } from '../Constants';

const SectionEighteen = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Epifi Plans
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Epifi offers different plans to its customers which offer different
                    benefits, as amended from time to time. The plans shall be visible to
                    you on the website and the Platform.&nbsp;
                    <br />
                    <br />
                    The plans are offered to a User based on multiple factors, as decided
                    by Epifi from time to time. Such factors shall be communicated to you
                    via the website and/or the Platform or any other channel that Epifi
                    deems fit. Epifi reserves the right to change/terminate the benefits
                    offered and/or the eligibility criteria at its sole discretion and you
                    agree that Epifi’s decision on whether a benefit shall be applicable
                    to you or not shall be final and binding. You further agree that Epifi
                    and/or its partners shall not be responsible for any loss whether
                    actual or potential that you may incur as a result of any amendment to
                    benefits or eligibility criteria.&nbsp;
                    <br />
                    <br />
                    Different plans offer different rewards/benefits to Users. The
                    benefits would include but are not be limited to the following
                </CardInfo>
            </WidthHolderOne>

            <CardHolder marginBottom>
                <div>
                    <PrivacyCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            a. Higher rewards
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            c. Cashbacks
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            e. Lower fees and charges
                        </Font>
                    </PrivacyLastCard>
                </div>
                <div>
                    <PrivacyCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            b. Exclusive access to Platform features
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            d. Top-up health insurance (coming soon)
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            f. Lower forex markup rate, etc.
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    You agree that the plan that you may be currently availing on the
                    Platform would be liable to be downgraded, if you stop fulfilling the
                    eligibility criteria defined by Epifi for each plan from time to time.
                    Epifi and/or its partners will not be held liable for any loss or
                    damage suffered by you, as a result of the downgrade.&nbsp;
                    <br />
                    <br />
                    Epifi reserves the right to add, alter, modify, change or vary all or
                    any of the terms and conditions relating to the plans , or to replace,
                    wholly or in part, benefits by another benefit whether similar to
                    earlier benefits or not, or to withdraw it altogether at any point in
                    time with or without notice to you. Epifi shall however always
                    endeavour to give you enough notice of any amendment that we may make.
                    &nbsp;
                    <br />
                    <br />
                    The plans and its resultant benefits will be available only in respect
                    of the primary / first holder of the Savings Account for the purpose
                    of the upgrade or downgrade.&nbsp;
                    <br />
                    <br />
                    The terms and conditions governing the plans, shall be in addition to
                    and not in substitution / derogation to the primary terms and
                    conditions governing the Savings Account operated by Federal
                    Bank.&nbsp;
                    <br />
                    <br />
                    You understand and agree that these plans are in the nature of
                    benefits that Epifi offers pursuant to your usage of our Platform.
                    Epifi in no manner has any control over the Savings Account offered to
                    you by the Bank. The fees chargeable by the Bank for each Savings
                    Account variant set by the Bank have been mentioned on the Bank’s
                    website and the link can be found&nbsp;
                    <a
                        href={FEDERAL_SERVICE_CHARGES_URL}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ColoredSpan color='FOREST_GREEN'>here</ColoredSpan>
                    </a>
                    .
                    <br />
                    <br />
                    The different plans offered on the Platform are as follows
                </CardInfo>
            </WidthHolderOne>

            <CardHolder marginBottom>
                <div>
                    <PrivacyCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            Fi Standard
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            Fi Plus
                        </Font>
                    </PrivacyLastCard>
                </div>
                <div>
                    <PrivacyCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            Fi Infinite
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font tagType='text' font='pSmallVariantOne' color='TUNDORA_2'>
                            Fi Salary
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Please refer to the detailed features page for more information on the
                    different benefits/fees/charges associated with each plan. The mapping
                    of the plans to the different Savings Account variants provided by
                    Federal Bank is provided below.&nbsp;
                    <br />
                    <br />
                </CardInfo>
            </WidthHolderOne>

            <WidthHolderOne>
                <TableSection
                    tableData={EPIFI_PLANS_TABLE_DATA}
                />
            </WidthHolderOne>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    In case you use the Fi App without being a part of any of the above plans, you will be
                    able to access certain services such as connected accounts, credit score analyser,
                    MF analyser etc.
                    <br />
                    <br />
                    You agree and acknowledge that:
                    <br />
                    <br />
                    • Data accessed through these services will only be available for 90 days from the date on which
                    you opt to receive this data, unless you upgrade to a&nbsp;
                    <a
                        href={FEATURES_ACCOUNT_INFINITE}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ColoredSpan color='FOREST_GREEN'>Fi Plan.</ColoredSpan>
                    </a>
                    <br />
                    • In the event you don&apos;t upgrade to a Fi Plan, Fi and/or its affiliates will be unable to
                    refresh your data and the data available would not be updated.
                    <br />
                    • Any past data shall be processed in accordance with the&nbsp;
                    <a
                        href={PRIVACY_POLICY_URL}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ColoredSpan color='FOREST_GREEN'>Privacy Policy</ColoredSpan>
                    </a>
                    <br />
                    • In the event you wish to have this data deleted, you may raise a request with our customer care team
                </CardInfo>
            </WidthHolderOne>

            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default SectionEighteen;
