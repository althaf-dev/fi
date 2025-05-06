import React from 'react';
import { Font } from '../../../components';

import {
    BarHolder,
    // Bar,
    BarOne,
    CardHolder,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextHolder,
    TitleTextOne,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionFifteen = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Fees 💸
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    We believe in complete transparency. There are no
                    hidden fees on our Platform. Our nominal charges,
                    wherever specified, are for the Services. Nevertheless,
                    we do have specific terms regarding them.
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
                            As a user of our Platform and our Services, you may
                            incur access or data fees from the Payment Systems
                            Provider or third-party service providers for certain
                            payment transactions. In such a scenario, you would be
                            liable and required to pay the applicable fees.
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The Company may, if required by law, change any fee or charge
                            or institute new fees. The user agrees to pay all charges so
                            levied – provided there is an intimation of the prices before
                            the change.
                        </Font>
                    </PrivacyLastCard>
                </div>
                <div>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The Company would determine the fee, to be paid by a user
                            in its sole discretion, and any fees charged will be
                            inclusive of all applicable taxes, which the user will be
                            liable to pay.
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>
            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default SectionFifteen;
