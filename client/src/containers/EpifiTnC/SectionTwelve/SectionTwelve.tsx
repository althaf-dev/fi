import React from 'react';
import { Font } from '../../../components';

import {
    BarHolder,
    // Bar,
    BarOne,
    CardHolder,
    CardInfo,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextHolder,
    TitleTextOne,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionTwelve = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Third Party Services and Links 💼
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    We don&apos;t have control over third-party websites.
                    Epifi shares third-party links on our platform for
                    the user&apos;s convenience – but we cannot vouch for their
                    reliability or the content within.
                    <br />
                    Practice caution if you&apos;re clicking on a third-party
                    link; Even those found in our Services.
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
                            Our Services contain or may contain, links to
                            third-party websites, applications, content, products,
                            services and resources that are not under the control
                            and do not form a part of the Services offered by the
                            Company. We provide these links only for your convenience
                            and the Company makes no representation or warranty of any
                            kind regarding its accuracy, reliability, effectiveness,
                            or correctness and shall not be responsible or liable for
                            any aspect of any such third-party services.
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
                            The user acknowledges sole responsibility for reading and
                            understanding the terms and conditions and privacy policy
                            and assumes all risk that applies to their use of any
                            third-party services.
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

export default SectionTwelve;
