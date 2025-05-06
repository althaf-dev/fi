import React from 'react';
import {
    BarOne,
    CardFooterInfo,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionFour = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Incident and Change Management ✍️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    We have deployed mature processes around change
                    management, enabling us to release thoroughly tested
                    features for you both reliably and securely.
                    <br />
                    <br />
                    We have a very aggressive stance on Incident Management
                    on both Systems downtime and Security and Network
                    Operations Center. We have an Information Security
                    Management System that quickly reacts, remediates or
                    escalates any incidents arising out of planned or
                    unplanned changes.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionFour;
