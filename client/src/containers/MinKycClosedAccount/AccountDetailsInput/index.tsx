/**
 * @file Min KYC closed account details input
 */

import React, { useEffect, useState } from 'react';

import WebformLayout from '../../WebForm/Layout';
import { Input, PrimaryButton } from '../../../components';
import {
    ButtonHolder, ErrorDescription, ErrorWrapper, TextAboveButton,
} from '../styled';
import { ContentWrapper, InputWrapper } from './styled';
import { BANK_ACCOUNT_FORM_FIELD } from '../constants';

export interface FormError {
    message: string,
    field: string,
}
interface AccountDetailsInputProps {
    theme?: any;
    onSubmit: (ifsc: string, accNo: string, accHolder: string) => void;
    errorMessage?: string;
    formErrors?: Array<FormError>,
}

const AccountDetailsInput = (props: AccountDetailsInputProps) => {
    const {
        theme, onSubmit, errorMessage, formErrors,
    } = props;

    const [belowTitleError, setBelowTitleError] = useState('');

    const [ifscCode, setIfscCode] = useState('');
    const [ifscInputError, setIfscInputError] = useState('');

    const [accountNumber, setAccountNumber] = useState('');
    const [accountInputError, setAccountInputError] = useState('');

    const [reEnterAccountNumber, setReEnterAccountNumber] = useState('');
    const [reEnterAccountInputError, setReEnterAccountInputError] = useState('');

    const [accountHolder, setAccountHolder] = useState('');
    const [accountHolderInputError, setAccountHolderInputError] = useState('');

    const title = 'Add your account details';
    const description = 'This bank account must belong to you for us to transfer money';

    const resetAllErrors = () => {
        setIfscInputError('');
        setAccountInputError('');
        setReEnterAccountInputError('');
        setAccountHolderInputError('');
        setBelowTitleError('');
    };

    useEffect(() => {
        resetAllErrors();
        formErrors.forEach((formError) => {
            switch (formError.field) {
                case BANK_ACCOUNT_FORM_FIELD.BANK_ACCOUNT_FORM_FIELD_ACCOUNT_NUMBER:
                    setAccountInputError(formError.message);
                    break;
                case BANK_ACCOUNT_FORM_FIELD.BANK_ACCOUNT_FORM_FIELD_ACC_HOLDER_NAME:
                    setAccountHolderInputError(formError.message);
                    break;
                case BANK_ACCOUNT_FORM_FIELD.BANK_ACCOUNT_FORM_FIELD_IFSC:
                    setIfscInputError(formError.message);
                    break;
                default: setBelowTitleError(formError.message);
            }
        });
    }, [formErrors]);

    const inputFields = [
        {
            label: 'IFSC CODE',
            placeholder: 'e.g. ICICI9122K',
            value: ifscCode,
            error: ifscInputError,
            onChange: (field, val) => setIfscCode(val),
            pattern: '*',
            fieldName: 'ifsc',
            type: 'text',
        },
        {
            label: 'ACCOUNT NUMBER',
            placeholder: 'e.g. 9780015456',
            value: accountNumber,
            error: accountInputError,
            onChange: (field, val) => setAccountNumber(val),
            pattern: '*',
            fieldName: 'account_number',
            type: 'password',
        },
        {
            label: 'RE-ENTER THE ACCOUNT NUMBER',
            placeholder: 'e.g. 9780015456',
            value: reEnterAccountNumber,
            error: reEnterAccountInputError,
            onChange: (field, val) => setReEnterAccountNumber(val),
            pattern: '*',
            fieldName: 're_account_number',
            type: 'number',
        },
        {
            label: 'ACCOUNT HOLDER NAME',
            placeholder: 'e.g. Vivek Kumar',
            value: accountHolder,
            error: accountHolderInputError,
            onChange: (field, val) => setAccountHolder(val),
            pattern: '*',
            fieldName: 'account_holder',
            type: 'text',
        },
    ];

    const Content = (
        <ContentWrapper>
            {inputFields && inputFields.length > 0
                && inputFields.map((inputField, index) => (
                    <InputWrapper>
                        <Input
                            fieldName={inputField.fieldName}
                            font='inputVariantThree'
                            labelFont='labelVariantFourteen'
                            caretColor={theme?.color?.FOREST_GREEN}
                            label={inputField.label}
                            value={inputField.value}
                            autoFocus={index === 0}
                            placeholder={inputField.placeholder}
                            clicked={false}
                            onChange={inputField.onChange}
                            onEnterClick={() => {}}
                            extra={{
                                showLabelAlways: true,
                                showError: inputField.error ?? undefined,
                            }}
                            errorMessage=''
                            type={inputField.type}
                        />
                        {inputField.error ? (
                            <ErrorWrapper>
                                <ErrorDescription
                                    font='labelVariantOne'
                                    color='ERROR_RED'
                                    tagType='label'
                                >
                                    {inputField.error}
                                </ErrorDescription>
                            </ErrorWrapper>
                        ) : null}
                    </InputWrapper>
                ))}
            {errorMessage || belowTitleError ? (
                <ErrorWrapper>
                    <ErrorDescription
                        font='labelVariantOne'
                        color='ERROR_RED'
                        tagType='label'
                    >
                        {errorMessage}
                        {belowTitleError}
                    </ErrorDescription>
                </ErrorWrapper>
            ) : null}
        </ContentWrapper>
    );

    const onSubmitAccountDetails = () => {
        resetAllErrors();

        // Check if account number and re enter account number are same
        if (accountNumber !== reEnterAccountNumber) {
            setReEnterAccountInputError('Account numbers are not same');
            return;
        }

        onSubmit(ifscCode, accountNumber, accountHolder);
    };

    const Footer = (
        <div>
            <TextAboveButton color='GREY_3' tagType='text' font='pSmallVariantThirteen'>
                When you submit, we’ll initiate a transaction of ₹1 to this account
                to verify your account details.
            </TextAboveButton>
            <ButtonHolder>
                <PrimaryButton
                    fontVariant='buttonVariantFive'
                    label='Submit'
                    onClick={onSubmitAccountDetails}
                    disabled={false}
                    enableBoxShadow // isloading
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

AccountDetailsInput.defaultProps = {
    theme: null,
    errorMessage: '',
    formErrors: [],
};

export default AccountDetailsInput;
