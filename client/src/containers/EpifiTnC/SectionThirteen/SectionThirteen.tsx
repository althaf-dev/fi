import React from 'react';
import { Font } from '../../../components';

import {
    // Bar,
    BarOne,
    CardHolder,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    TitleTextOne,
    // TitleText,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    BarHolder,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionThirteen = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Communication from Epifi 📞
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Occasionally, we will contact you to convey critical information.
                    No, we promise not to blitzkrieg your device with notifications.
                    We’ll reach out only when essential. This section is regarding that.
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
                            The user agrees to receive alerts, notifications, offers,
                            discounts and other such general communication messages via
                            text messages, push notifications, or by emails, as a part
                            of the user’s use of the Services.
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The user shall not hold the Company liable for any loss,
                            damages, claim, expense, including legal cost that may be
                            incurred or suffered by the user on account of such facility.
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
                            The user shall immediately inform the Company if the user
                            observes any error in the information provided in the alert,
                            and we will make best possible efforts to rectify the error
                            as early as possible.
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

export default SectionThirteen;
