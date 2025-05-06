import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../components/Abstract';
import {
    SectionContainer,
    TitleText,
    TitleTextHolder,
    WidthHolder,
} from '../TnCStyled/TnCStyled';

const InfoOne = styled(Font)`
    text-align: center;
`;

const InfoTwo = styled(InfoOne)`
    text-align: center;

    &:not(:last-child) {
        margin-bottom: 32px;
    }
`;

const FooterSectionContainer = styled(SectionContainer)`
    margin-bottom: 60px;
`;

const FooterInfoTwo = () => {
    return (
        <FooterSectionContainer>
            <TitleTextHolder>
                <TitleText tagType='text' font='h1'>
                    What rights do I have over my data? 📜
                </TitleText>
            </TitleTextHolder>
            <WidthHolder>
                <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                    A user can request us to delete his/her information if
                    he/she is not interested in going ahead with the waitlist
                    for opening a Fi account.
                </InfoTwo>
                <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                    In addition to this, a user’s data would be dealt with as
                    per the terms of our privacy policy available at
                    [hyperlink].
                </InfoTwo>
                <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                    In addition if you have any further questions about our
                    waitlist, please feel free to go through our FAQ’s listed at
                    [hyperlink].
                </InfoTwo>
            </WidthHolder>
        </FooterSectionContainer>
    );
};

export default FooterInfoTwo;
