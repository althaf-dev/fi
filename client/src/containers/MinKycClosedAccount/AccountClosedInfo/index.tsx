import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import WebformLayout from '../../WebForm/Layout';
import { Image, PrimaryButton } from '../../../components';
import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';
import { ButtonHolder, CheckBoxText, CheckboxWrapper } from '../styled';
import {
    AccountShowingContainer, CheckboxContainer, FlexCol, InputText, LabelLight, LogoHolder,
} from './styled';
import { NAVIGATE_PAGE } from '../constants';
import { changePage } from '../actions';

interface AccountClosedInfoProps {
    accountLastFourDigits?: string,
    title?: string,
    description?: string,
    ctas?: Array<Object>,
}

const AccountClosedInfo = (props: AccountClosedInfoProps) => {
    const dispatch = useDispatch();

    const {
        accountLastFourDigits, title, description, ctas,
    } = props;
    const [confirmCheck, setConfirmCheck] = useState(false);

    const Content = (
        <>
            {accountLastFourDigits ? (
                <AccountShowingContainer>
                    <LogoHolder>
                        <Image icon={LOGOS_URL_MAP.FEDERAL_SHORT} alt='logo' />
                    </LogoHolder>
                    <FlexCol>
                        <LabelLight>Closed Federal Bank Savings Account</LabelLight>
                        <InputText>
                            •••• •••• ••••
                            {' '}
                            {accountLastFourDigits}
                        </InputText>
                    </FlexCol>
                </AccountShowingContainer>
            ) : null}
            <CheckboxContainer>
                <CheckboxWrapper
                    type='checkbox'
                    checked={confirmCheck}
                    onChange={() => { setConfirmCheck(!confirmCheck); }}
                    // eslint-disable-next-line no-octal-escape
                    checkMarkCssCode='"\2713"'
                />
                <CheckBoxText>
                    I confirm that the account above belongs to me
                    and it was closed due to incomplete KYC
                </CheckBoxText>
            </CheckboxContainer>
        </>
    );

    const Footer = (
        <div>
            <ButtonHolder>
                {ctas && ctas.map((cta: any) => (
                    <PrimaryButton
                        fontVariant='buttonVariantFive'
                        label={cta?.text || ''}
                        onClick={() => {
                            dispatch(changePage({
                                page: cta?.deeplink?.screen || NAVIGATE_PAGE.DETAILED_ERROR_VIEW_SCREEN,
                            }));
                        }}
                        disabled={!confirmCheck}
                        enableBoxShadow={confirmCheck} // isloading
                        borderRadius='19px'
                        disableTransForm
                        disableBgColor='WHITE_LILAC'
                        disableFontColor='BOMBAY'
                    />
                ))}
            </ButtonHolder>
        </div>
    );

    return (
        <WebformLayout title={title} description={description} Content={Content} Footer={Footer} />
    );
};

AccountClosedInfo.defaultProps = {
    accountLastFourDigits: '',
    title: '',
    description: '',
    ctas: [],
};

export default AccountClosedInfo;
