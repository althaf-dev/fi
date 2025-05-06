import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components/Abstract';
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
    WidthHolderOne,
    CardHolder,
    BarHolder,
    BarOne,
    ColoredSpan,
} from '../PrivacyStyled/PrivacyStyled';

const Note = styled(TitleTextHolder)`
    margin: 20px auto;
    margin-bottom: 60px;

    @media ${Device.tab} {
        margin-bottom: 80px;
    }

    @media ${Device.desktop} {
        margin-bottom: 100px;
    }
`;

const SecureDataSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    How do we secure your data? 🔐
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    We are dedicated to guarding the security of your information. We use several industry-standard
                    security technologies and procedures devised to help protect your data from unauthorized
                    access, use, or disclosure. For specifics, please read below –
                </CardInfo>
            </WidthHolderOne>

            <CardHolder marginBottom>
                <div>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            We use all reasonable and appropriate technical and organizational security measures to
                            protect the security of your Personal Data both online and offline including the
                            implementation of access controls, implementation of firewalls, network intrusion
                            detection and use of anti-virus software.
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
                            Please note that no system is completely secure. So, while we strive to protect your data,
                            we cannot guarantee that unauthorized access, hacking, data loss or a data breach will
                            never occur.
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>
            <Note>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Please refer to our
                    <a href='/Fi-Secure'>
                        {' '}
                        <ColoredSpan color='FOREST_GREEN'>Security Policy</ColoredSpan>
                        {' '}
                    </a>
                    for more information
                </CardInfo>
            </Note>
            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default SecureDataSection;
