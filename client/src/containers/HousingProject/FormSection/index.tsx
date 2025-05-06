/**
* @file Housing Page Form Section
*/

import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { validatePhoneNumber } from '../../../utils/validateInputtedNumber';
import { Device } from '../../../Themes/Device';

import { PrimaryButton, Font } from '../../../components';

import { setHousingDataOnGoogleSheet } from '../actions';

const Wrapper = styled.div<{ isDataSubmitted: boolean }>`
    padding: ${(props) => (props.isDataSubmitted ? '152px 20px' : '20px')};

    @media ${Device.tab} {
        padding: ${(props) => (props.isDataSubmitted ? '120px' : '30px')};
    }

    @media ${Device.desktop} {
        padding: 40px;
    }
`;

const Input = styled.input<{ addBottomMargin?: boolean }>`
    outline: 0;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.color.SILVER_2};
    cursor: pointer;
    color: ${(props) => props.theme.color.MINE_SHAFT};
    caret-color: ${(props) => props.theme.color.DARK_GREEN};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
    padding-bottom: 8px;
    width: 100%;

    &:focus {
        border-bottom: 2px solid ${(props) => props.theme.color.FOREST_GREEN};
    }

    &::placeholder {
        color: ${(props) => props.theme.color.SUVA_GREY};
    }

    @media ${Device.tab} {
        margin-bottom: ${(props) => (props.addBottomMargin ? '40' : '0')}px;
        padding-bottom: 12px;
    }

    @media ${Device.desktop} {
        font-size: 24px;
        margin-bottom: ${(props) => (props.addBottomMargin ? '68' : '0')}px;
    }
`;

const ButtonHolder = styled.div`
    width: 280px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 240px;
    }
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    jusitfy-content: center;
`;

const Title = styled(Font)`
    margin-bottom: 8px;

    @media ${Device.tab} {
        margin-bottom: 12px;
    }

    @media ${Device.desktop} {
        margin-bottom: 24px;
    }
`;

const Description = styled(Font)``;

const FormSection = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        number: '',
        emailId: '',
    });

    const [isDataSubmitted, setIsDataSubmitted] = useState(false);

    const dispatch = useDispatch();

    const {
        name, number, emailId,
    } = formValues;

    const onChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const checkValidation = () => {
        if (name && emailId && (number.length === 10)) {
            return false;
        }
        return true;
    };

    const onSubmit = () => {
        const formData = { ...formValues };
        dispatch(setHousingDataOnGoogleSheet({ data: formData }));
        setIsDataSubmitted(true);
        setFormValues({
            name: '',
            number: '',
            emailId: '',
        });
    };

    return (
        <Wrapper isDataSubmitted={isDataSubmitted}>
            {isDataSubmitted ? (
                <MessageContainer>
                    <Title font='h4VariantSeven' tagType='h4' color='MINE_SHAFT'>Thank you for providing this information!</Title>
                    <Description font='p5VariantOne' tagType='p' color='GREY_3'>We will get in touch once we&apos;re ready for you.</Description>
                </MessageContainer>
            ) : (
                <>
                    <>
                        <Input placeholder='Your name' type='text' name='name' value={name} onChange={onChange} addBottomMargin autoComplete='off' />
                        <Input placeholder='Your mobile number' type='text' name='number' value={number} onChange={onChange} addBottomMargin onKeyDown={validatePhoneNumber} maxLength={10} autoComplete='off' />
                        <Input placeholder='Your email ID' type='email' name='emailId' value={emailId} onChange={onChange} addBottomMargin autoComplete='off' />
                    </>
                    <ButtonHolder>
                        <PrimaryButton
                            label='SUBMIT'
                            onClick={onSubmit}
                            disabled={checkValidation()}
                            fontVariant='buttonVariantTwo'
                        />
                    </ButtonHolder>
                </>
            )}
        </Wrapper>
    );
};

export default memo(FormSection);
