import React from 'react';
import { Font } from '../../../components';

import {
    // Bar,
    CardHolder,
    CardInfo,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    BarOne,
    BarHolder,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionEleven = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Confidentiality 🔒
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    What happens in Fi, stays in… we’re kidding. But,
                    you get the idea, right? Non-public info that users
                    may learn on the Platform is not shareable. Also, in
                    this section you’ll learn how the Company & its users
                    should deal with court-mandated information requests.
                </CardInfo>
            </WidthHolderOne>

            <CardHolder>
                <div>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The user agrees not to disclose or attempt to
                            use or personally benefit from any non-public
                            information that they may learn on the
                            Platform or through use of the Services. This
                            obligation shall continue until – the non-public
                            information becomes publicly known. If a user is
                            compelled by an order of a court or any other
                            legal/statutory authority to divulge any
                            confidential information of the Company (or the
                            Services), the user agrees to notify and cooperate
                            with the Company promptly and diligently, in protecting
                            such data to the extent possible under applicable.
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
                            The Company would access, preserve, and disclose the user’s
                            information if required to do so by law, or if the Company
                            believes (in good faith) that it is reasonably necessary in
                            terms of:
                            <br />
                            respond to claims asserted against the
                            Company or to comply with legal process;
                            preventing fraud, risk assessment,
                            investigation, user and Platform support,
                            product development, debugging purposes
                            and protecting the rights, property, or safety
                            of the Company (and its affiliates), its users,
                            or members of the public.
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

export default SectionEleven;
