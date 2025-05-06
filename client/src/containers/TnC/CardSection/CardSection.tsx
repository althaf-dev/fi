import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../components/Abstract';
import { Device } from '../../../Themes/Device';
import {
    Bar,
    Card,
    SectionContainer,
    TitleText,
    TitleTextHolder,
    WidthHolder,
} from '../TnCStyled/TnCStyled';

const InfoOne = styled(Font)`
    text-align: center;
    margin-bottom: 30px;

    @media ${Device.tab} {
        margin-bottom: 54px;
    }

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

const CardHolder = styled(TitleTextHolder)`
    display: grid;
    grid-gap: 16px;
    text-align: center;

    .middle {
            display:grid;
            grid-gap:16px;
        }

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 17px;
        grid-gap: 16px;

        .middle {
            grid-row: span 3;
            display:grid;
            grid-gap:16px;
        }
    }

    @media ${Device.desktop} {
        text-align: left;
        grid-column-gap: 30px;
        grid-gap: 20px;
        max-width: 1070px;
        .middle {
            grid-gap:20px;
        }
    }
`;

const CardSection = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <TitleText tagType='text' font='h1'>
                        Why do we need this information?
                    </TitleText>
                </TitleTextHolder>

                <WidthHolder>
                    <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                        It helps create a hyper-personalised experience for users on the Fi app.
                    </InfoOne>
                </WidthHolder>

                <CardHolder>
                    <Card>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Official email address: In a scenario, where we cannot obtain
                            information regarding your Provident Fund account, we will
                            authenticate your employment status via your official email id.
                        </Font>
                    </Card>
                    <div className='middle'>
                        <Card>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                Provident Fund details: This Universal Account Number assists us
                                by confirming your employment status. And later on, we utilise 
                                this info to provide unique experiences. For example: We can
                                (eventually) provide you with investment options that suit your
                                investment appetite. To do this, we extract details from your
                                Provident Fund account regarding your current employer. However,
                                rest assured that we will not contact your employer in any way
                                whatsoever!
                            </Font>
                        </Card>
                        <Card>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                General biographical information: Collected to get to know you
                                better.
                            </Font>
                        </Card>
                    </div>

                    <Card>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Mobile number: Helps our authentication process – which begins by
                            sending an OTP on your number. It also allows us to verify your
                            Provident Fund account.
                        </Font>
                    </Card>
                </CardHolder>
            </SectionContainer>
            <Bar />
        </>
    );
};

export default CardSection;
