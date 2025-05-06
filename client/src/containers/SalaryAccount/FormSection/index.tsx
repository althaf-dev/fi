import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { validatePhoneNumber } from '../../../utils/validateInputtedNumber';

import { Device } from '../../../Themes/Device';
import { PrimaryButton, Image, Font } from '../../../components';
import { useClickOutside } from '../../../hooks';
import { SVGS_URL } from '../../../constants/AssetConstants';

import { setEmployerDataOnGoogleSheet } from '../actions';
import { departmentData } from '../constant';

const Wrapper = styled.div<{ isDataSubmitted: boolean }>`
    padding: ${(props) => (props.isDataSubmitted ? '152px 20px' : '20px')};
    margin: auto;
    width: 100%;

    @media ${Device.tab} {
        padding: ${(props) => (props.isDataSubmitted ? '120px' : '30px')};
    }

    @media ${Device.desktop} {
        padding: 40px;
        width: 868px;
    }
`;

const Container = styled.form`
    display: grid;
    margin-bottom: 6px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 68px;
        margin-bottom: 60px;
    }

    @media ${Device.desktop} {
        grid-gap: 60px;
        margin-bottom: 64px;
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
    margin: 0px auto;

    @media ${Device.tab} {
        width: 240px;
    }
`;

const DropDownWrapper = styled.div`
    position: relative;

    @media ${Device.tab} {
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        margin-bottom: 68px;
    }
`;

const ImageHolder = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 0px;
`;

const DropDownContainer = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.15), 0px 19px 30px rgba(0, 0, 0, 0.1), 0px 7px 30px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    position: absolute;
    top: 35px;
    width: 100%;
    max-height: 188px;
    overflow-y: auto;

    @media ${Device.tab} {
        top: 40px;
    }

    @media ${Device.desktop} {
        top: 50px;
        width: 364px;
        max-height: 228px;
    }
`;

const DropDownList = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    cursor: pointer;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.45px;
    text-align: left;
    padding: 20px 20px 12px;

    &:hover {
        background-color: ${(props) => props.theme.color.CHALK_GREY};
    }

    @media ${Device.desktop} {
        font-size: 24px;
        line-height: 29px;
        padding: 20px 30px 12px;
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
        company: '',
        workEmailId: '',
        number: '',
        employeeStrength: '',
    });

    const [showDropDown, setShowDropDown] = useState(false);
    const [department, setDepartmentValue] = useState('');
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);

    const dropdownRef = useRef(null);

    const dispatch = useDispatch();

    const {
        name, company, workEmailId, number, employeeStrength,
    } = formValues;

    // close the dropdown when click outside
    useClickOutside(dropdownRef, () => {
        setShowDropDown(false);
    }, 'click');

    const onChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const checkValidation = () => {
        if (name && company && workEmailId && (number.length === 10)) {
            return false;
        }
        return true;
    };

    const onSubmit = () => {
        const formData = { ...formValues, department };
        dispatch(setEmployerDataOnGoogleSheet({ data: formData }));
        setIsDataSubmitted(true);
        setFormValues({
            name: '',
            company: '',
            workEmailId: '',
            number: '',
            employeeStrength: '',
        });
        setDepartmentValue('');
    };

    const onDropDownClick = () => {
        setShowDropDown(true);
    };

    const getDropDownValue = (value) => () => {
        setDepartmentValue(value);
        setShowDropDown(false);
    };

    /*
    useEffect(() => {
        if (isDataSubmitted) {
            setTimeout(() => {
                setIsDataSubmitted(false);
            }, 5000);
        }
    }, [isDataSubmitted]);
    */

    return (
        <Wrapper isDataSubmitted={isDataSubmitted}>
            {isDataSubmitted
                ? (
                    <MessageContainer>
                        <Title font='h4VariantSeven' tagType='h4' color='MINE_SHAFT'>Thank you for providing this information!</Title>
                        <Description font='p5VariantOne' tagType='p' color='GREY_3'>We will get in touch once we&apos;re ready for you.</Description>
                    </MessageContainer>
                ) : (
                    <div>
                        <Container>
                            <div>
                                <Input placeholder='Name' type='text' name='name' value={name} onChange={onChange} addBottomMargin autoComplete='off' />
                                <DropDownWrapper ref={dropdownRef}>
                                    <Input placeholder='Department (optional)' type='text' name='department' value={department} onClick={onDropDownClick} autoComplete='off' />
                                    <ImageHolder>
                                        <Image
                                            icon={`${SVGS_URL}bottom-arrow_grey.svg`}
                                            alt='down-arrow'
                                            loadingType='lazy'
                                        />
                                    </ImageHolder>
                                    {showDropDown ? (
                                        <DropDownContainer>
                                            {departmentData.map((item) => (
                                                <DropDownList onClick={getDropDownValue(item.name)}>
                                                    {item.name}
                                                </DropDownList>
                                            ))}
                                        </DropDownContainer>
                                    ) : null}
                                </DropDownWrapper>
                                <Input placeholder='Company' type='text' name='company' value={company} onChange={onChange} />
                            </div>
                            <div>
                                <Input placeholder='Work Email ID' type='email' name='workEmailId' value={workEmailId} onChange={onChange} addBottomMargin autoComplete='off' />
                                <Input placeholder='Phone Number' type='text' name='number' value={number} onChange={onChange} addBottomMargin onKeyDown={validatePhoneNumber} maxLength={10} autoComplete='off' />
                                <Input placeholder='Employee Strength (optional)' type='text' name='employeeStrength' value={employeeStrength} onChange={onChange} autoComplete='off' />
                            </div>
                        </Container>
                        <ButtonHolder>
                            <PrimaryButton
                                label='SUBMIT'
                                onClick={onSubmit}
                                disabled={checkValidation()}
                                fontVariant='buttonVariantTwo'
                            />
                        </ButtonHolder>
                    </div>
                )}
        </Wrapper>
    );
};

export default FormSection;
