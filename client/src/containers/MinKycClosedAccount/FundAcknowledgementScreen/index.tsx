import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../../../components';
import { htmlSanitization } from '../../../utils';

import WebformLayout from '../../WebForm/Layout';

import { ButtonHolder } from '../styled';
import {
    AccountShowingContainer, SubText,
} from './styled';

interface FundAcknowledgementScreenProps {
    title?: string;
    description?: string;
    accountInfo?: string;
}

const FundAcknowledgementScreen = (props: FundAcknowledgementScreenProps) => {
    const {
        title, description, accountInfo,
    } = props;
    const navigate = useNavigate();

    const Content = (
        <>
            {accountInfo ? (
                <AccountShowingContainer>
                    <SubText
                        font='h6VariantOne'
                        tagType='text'
                        color='GREY_3'
                    >
                        Bank Account
                    </SubText>
                    <SubText
                        font='pSmallVariantSix'
                        tagType='text'
                        color='GREY_3'
                    >
                        {typeof accountInfo === 'string' ? <div dangerouslySetInnerHTML={{ __html: htmlSanitization(accountInfo) }} /> : accountInfo}
                    </SubText>
                </AccountShowingContainer>
            )
                : <></> }
        </>
    );

    const Footer = (
        <div>
            <ButtonHolder>
                <PrimaryButton
                    fontVariant='buttonVariantFive'
                    label='Close'
                    onClick={() => {
                        navigate('/');
                    }}
                    disabled={false}
                    enableBoxShadow={false}
                    borderRadius='19px'
                    disableTransForm
                    disableBgColor='WHITE_LILAC'
                    disableFontColor='BOMBAY'
                />
            </ButtonHolder>
        </div>
    );

    return (
        <WebformLayout title={title} description={description} Content={Content} Footer={Footer} />
    );
};

FundAcknowledgementScreen.defaultProps = {
    title: '',
    description: '',
    accountInfo: '',
};

export default FundAcknowledgementScreen;
