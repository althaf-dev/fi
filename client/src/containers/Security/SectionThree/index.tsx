import React from 'react';

import { Font } from '../../../components/Abstract';
import {
    BarOne,
    CardHolder,
    BarHolder,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionThree = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Data Security 💾
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    The user log-in is based on two-factor authentication on the Fi website and mobile application.
                    All user data and internally stored data is encrypted at rest and in transit.
                    Sensitive data is encrypted at the application level in addition to Transport Layer Security (TLS).
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
                            We employ separation of environments, network segregation, segregation of duties,
                            and strict role-based access control on a documented, authorised & need-to-use basis.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            We use key management services to limit access to information, except for the data team.
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
                            We only use anonymised and aggregated data for internal analytics
                            and business intelligence purposes.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            We use data replication for data resiliency and disaster recovery;
                            snapshotting for data durability, and backup/restore testing for data reliability.
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

export default SectionThree;
