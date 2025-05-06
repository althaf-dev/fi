import React from 'react';

import { PRIVACY_FIMONEY_MAIL } from '../../../constants/AppConstant';
import {
    CardInfoOne,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    ColoredSpan,
} from '../PrivacyStyled/PrivacyStyled';

const PolicyUpgradeSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Policy upgrades and changes ✍
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfoOne font='p' tagType='text' color='SUVA_GREY'>
                    Please note this Privacy Policy may change at any time
                    without prior notification. To make sure that you are
                    aware of any changes, kindly review the policy
                    periodically. The revised version will be effective as
                    of the published effective date. We welcome your
                    comments or questions regarding this Privacy Policy.
                    Please email us at&nbsp;
                    <a href={PRIVACY_FIMONEY_MAIL}>
                        <ColoredSpan color='FOREST_GREEN'>
                            &nbsp;privacy@fi.money.&nbsp;
                        </ColoredSpan>
                    </a>
                </CardInfoOne>
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default PolicyUpgradeSection;
