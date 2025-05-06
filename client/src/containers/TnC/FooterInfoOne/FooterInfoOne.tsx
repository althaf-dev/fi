import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../components/Abstract';
import { Device } from '../../../Themes/Device';
import {
    Bar,
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

const MyTitleText = styled(TitleText)`
    text-align: center;
    padding: 0 30px;

    @media ${Device.tab} {
        padding: 0;
    }
`;

const ColoredSpan = styled.span<{ color: 'FOREST_GREEN' }>`
    color: ${(props) => props.theme.color[props.color]};
`;

const FooterInfoOne = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <MyTitleText tagType='text' font='h1'>
                        What happens to my data? 💾
                    </MyTitleText>
                </TitleTextHolder>
                <WidthHolder>
                    <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                        As explained earlier, we collect your data to curate a secure, smooth, and personalised experience on the Fi app. This data shall be stored and used to provide you with Fi's services. All data-related activities occur within the guidelines specified in our Privacy Policy available at&nbsp;
                        <a href='/' target='_blank'>
                            <ColoredSpan color='FOREST_GREEN'>
                                https://fi.money.
                            </ColoredSpan>
                        </a>
                    </InfoTwo>
                    <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                        For a deeper look at the terms defined in our easy-to-read Privacy Policy, check out &nbsp;
                        <a href='/privacy' target='_blank'>
                            <ColoredSpan color='FOREST_GREEN'>
                                https://fi.money/privacy
                            </ColoredSpan>
                        </a>
                    </InfoTwo>
                    <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                        If you have any further questions about our waitlist, please feel free to go through our FAQ's listed at
                        <a href='/FAQs' target='_blank'>
                            <ColoredSpan color='FOREST_GREEN'>
                                https://fi.money/FAQs.
                            </ColoredSpan>
                        </a>
                        .
                    </InfoTwo>
                </WidthHolder>
            </SectionContainer>
        </>
    );
};

export default FooterInfoOne;