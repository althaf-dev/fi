import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';
import { Image, PrimaryButton } from '../../../components';
import { htmlSanitization } from '../../../utils';

import WebformLayout from '../../WebForm/Layout';

import { ButtonHolder, LogoHolder } from '../styled';

import {
    AccountShowingContainer, FlexCol, InputText, LabelLight, SubText,
} from './styled';

interface DetailedErrorViewProps {
    title?: string;
    description?: string;
    accountLastFourDigits?: string;
    faliureReason?: string;
    screenIdentifier?: string;
}

const ACTIVE_ACCOUNT_SCREEN_TITLE = 'Your bank account is active ';

const DetailedErrorView = (props: DetailedErrorViewProps) => {
    const {
        title, description, accountLastFourDigits, faliureReason, screenIdentifier,
    } = props;
    const navigate = useNavigate();

    let Content = (
        <>
            {faliureReason
                ? (
                    <SubText
                        font='h6VariantOne'
                        tagType='text'
                        color='GREY_3'
                        className='transition transition-start-final opacity-final'
                    >
                        {faliureReason}
                    </SubText>
                )
                : null}
            {accountLastFourDigits ? (
                <AccountShowingContainer>
                    <LogoHolder>
                        <Image icon={LOGOS_URL_MAP.FEDERAL_SHORT} alt='logo' />
                    </LogoHolder>
                    <FlexCol>
                        <LabelLight>
                            {title === ACTIVE_ACCOUNT_SCREEN_TITLE ? 'Active ' : 'Closed '}
                            Federal Bank Savings Account
                        </LabelLight>
                        <InputText>
                            •••• •••• ••••
                            {' '}
                            {accountLastFourDigits}
                        </InputText>
                    </FlexCol>
                </AccountShowingContainer>
            )
                : <></> }
        </>
    );

    if (screenIdentifier === 'MIN_KYC_BALANCE_TRANSFERRED') {
        Content = (
            <>
                {description
                    ? (
                        <SubText
                            font='pSmallVariantSix'
                            tagType='text'
                            color='GREY_3'
                            className='transition transition-start-final opacity-final'
                        >
                            {typeof description === 'string' ? <div dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }} /> : description}
                        </SubText>
                    )
                    : null}
            </>
        );
    }

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
        <WebformLayout title={title} description={screenIdentifier ? '' : description} Content={Content} Footer={Footer} />
    );
};

DetailedErrorView.defaultProps = {
    title: '',
    description: '',
    accountLastFourDigits: '',
    faliureReason: '',
    screenIdentifier: '',
};

export default DetailedErrorView;
