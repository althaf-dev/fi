import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import {
    TitleText,
    SectionContainer,
    TitleTextHolder,
    Bar,
    WidthHolder,
    InfoOne,
} from '../TnCStyled/TnCStyled';

const NewTitleText = styled(TitleText)`
    text-align: center;
    padding: 0 30px;

    @media ${Device.tab} {
        padding: 0;
    }
`;

const InfoSection = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <NewTitleText tagType='text' font='h1'>
                        What all information would be collected? 📁
                    </NewTitleText>
                </TitleTextHolder>

                <WidthHolder>
                    <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                        A user on the waitlist would be required to provide her/his :
                    </InfoOne>
                    <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                        • Name, age, address etc. (biographical information);
                    </InfoOne>
                    <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                        • Mobile number;
                    </InfoOne>
                    <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                        • Provident fund account number (Universal Account Number);
                    </InfoOne>
                    <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                        • Official email account (email id provided by the employer).
                    </InfoOne>
                </WidthHolder>
            </SectionContainer>
            <Bar />
        </>
    );
};

export default InfoSection;
