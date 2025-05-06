/* eslint-disable camelcase */
/* eslint-disable no-undef */
/**
 * @file B2BSalaryAccountHR Form Section
 */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { REGEX_BLOCK_GMAIL } from '../../../utils/RegexPattern';
import { Device } from '../../../Themes/Device';
import { PrimaryButton } from '../../../components';
import { useOnChangeReducerValue } from '../../../hooks';
import { onChangeSalaryAccountHRValue, setLeadDetails } from '../actions';
import FormInput from '../FormInput';
import { getErrorMessage, fireTrackingEvents } from '../utils';
import { clientApiWrapper } from '../../../utils';
import { queryParams } from '../../../utils/queryParams';
import { B2B_CREATE_LEAD_URL, DOMAIN_RECORD_URL } from '../../../Api/ApiRoutes';
import { EVENT_LIST, PAGE_TYPE } from '../constant';
import { trackGTMEvent } from '../../../events';

const Wrapper = styled.div`
    padding: 20px 30px;
    margin: auto;
    width: 100%;

    @media ${Device.desktop} {
        padding: 30px 50px;
        max-width: 656px;
    }
`;

const Container = styled.form`
    display: grid;

    @media ${Device.tab} {
        grid-gap: 20px;
    }

    @media ${Device.desktop} {
        grid-gap: 25px;
    }
`;

const ButtonHolder = styled.div`
    width: 150px;
    margin: 0px auto;
   
    @media ${Device.tab} {
        width: 240px;
    }

    @media ${Device.desktop} {
        width: 240px;
        margin-top: 20px;
    }
`;

interface IFormSectionProps {
    setOtpToken: any;
    setOtpRetrytime: any;
    otpToken: string;
    type?: string | null;
}

//* Uncomment this code to get the domain name.
// const getDomainFromEmail = (email) => {
//     const parts = email.split('@');
//     if (parts.length === 2) {
//         return parts[1];
//     }
//     return null;
// };
const recordedDomains = new Set();
interface QueryParams {
    // eslint-disable-next-line camelcase
    utm_source?: string;
    // eslint-disable-next-line camelcase
    utm_channel?: string;
    // eslint-disable-next-line camelcase
    utm_campaign?: string;
}

const formFieldMap = {
    [PAGE_TYPE.corporate.label]: {
        fields: [
            { attribute: 'FirstName', value: '' },
            { attribute: 'Phone', value: '' },
            { attribute: 'mx_Company_Name', value: '' },
            { attribute: 'EmailAddress', value: '' },
            { attribute: 'Source', value: 'b2b web page' },
        ],
        events: {
            FirstName: EVENT_LIST.ENTERED_FULL_NAME,
            mx_Company_Name: EVENT_LIST.ENTERED_COMPANY_NAME,
            EmailAddress: EVENT_LIST.ENTERED_EMAIL,
            Phone: EVENT_LIST.ENTERED_PHONE_NUMBER,
        },
        fieldList: ['FirstName', 'Phone', 'mx_Company_Name', 'EmailAddress', 'Source'],
    },
    [PAGE_TYPE.sme.label]: {
        fields: [
            { attribute: 'Phone', value: '' },
            { attribute: 'EmailAddress', value: '' },
        ],
        events: {
            EmailAddress: EVENT_LIST.ENTERED_EMAIL,
            Phone: EVENT_LIST.ENTERED_PHONE_NUMBER,
        },
        fieldList: ['Phone', 'EmailAddress'],
    },
};

const debounce = (func, delay) => {
    let debounceTimer;
    return function (domain) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func(domain), delay);
    };
};

const debouncedRecordDomain = debounce(async (details:any) => {
    if (details.hrms_domain) {
        if (!recordedDomains.has(details.hrms_domain)) {
            try {
                const data = await clientApiWrapper.post(
                    DOMAIN_RECORD_URL, { hrms_domain: details.hrms_domain },
                );
                if (data.added) {
                    recordedDomains.add(details.hrms_domain);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
    if (details.hrms_phone && details.hrms_email) {
        if (recordedDomains.has(details.hrms_phone) && recordedDomains.has(details.hrms_email)) {
            return;
        }
        try {
            const data = await clientApiWrapper.post(
                DOMAIN_RECORD_URL, { hrms_phone_and_email: { hrms_email: details.hrms_email, hrms_phone: details.hrms_phone } },
            );
            if (data.added) {
                recordedDomains.add(details.hrms_phone);
            }
        } catch (error) {
            console.error(error);
        }
    }
}, 1000);

const B2BFormSection = (props: IFormSectionProps) => {
    const dispatch = useDispatch();

    const {
        setOtpToken, setOtpRetrytime, otpToken, type = PAGE_TYPE.corporate.label,
    } = props;

    const [formValues, setFormValues] = useState(formFieldMap[type].fields);

    const { fieldList } = formFieldMap[type];

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountHRValue,
    );

    let FirstName: string;
    let Phone: string;
    let mx_Company_Name: string;
    let EmailAddress: string;

    if (type === PAGE_TYPE.corporate.label) {
        FirstName = formValues[0].value;
        Phone = formValues[1].value;
        mx_Company_Name = formValues[2].value;
        EmailAddress = formValues[3].value;
    } else {
        Phone = formValues[0].value;
        EmailAddress = formValues[1].value;
    }

    const onChange = (event) => {
        const { name, value } = event.target;

        if (value.includes('@') && value.includes('.')) {
            const domain = value.split('@')[1];
            if (domain.split('.').length > 1 && domain.split('.')[1].length > 1) {
                debouncedRecordDomain({ hrms_domain: domain, hrms_email: value, hrms_phone: Phone || -1 });
            }
        } else if (name === 'Phone' && value.length === 10) {
            const data = {
                hrms_email: EmailAddress,
                hrms_phone: value,
            };
            debouncedRecordDomain({ ...data });
        }

        setFormValues((prevValues) => prevValues.map((item) => (item.attribute === name ? { ...item, value } : item)));
    };

    const GTM_EVENT_MAP = formFieldMap[type].events;
    const [errEmailMessage, setErrEmailMessage] = useState('');

    // Trims the space when user has entered first name, last name, company name, and a valid email address
    const OnBlur = (event, passedName) => {
        const { value, name } = event.target;

        if (passedName === 'workEmailId') {
            setErrEmailMessage(getErrorMessage(passedName, value));
        }

        const trimmedValue = value.trim();
        setFormValues((prevValues) => prevValues.map((item) => (item.attribute === name
            ? { ...item, value: trimmedValue } : item)));

        const gtmEvent = GTM_EVENT_MAP[name];
        fireTrackingEvents(type, gtmEvent, null);
    };

    // Validates if user has entered first name, last name, company name, and a valid email address
    const checkIncorrectValidationUserInput = () => {
        // eslint-disable-next-line camelcase
        if ((type === PAGE_TYPE.corporate.label && FirstName && mx_Company_Name && EmailAddress && REGEX_BLOCK_GMAIL.test(EmailAddress))
            || (type === PAGE_TYPE.sme.label && EmailAddress && REGEX_BLOCK_GMAIL.test(EmailAddress))) return false;
        return true;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errMessage, setErrMessage] = useState('');

    const onSubmit = async () => {
        // trackGTMEvent(CLICKED_BOOK_DEMO_BUTTON);
        if (checkIncorrectValidationUserInput()) {
            trackGTMEvent(EVENT_LIST.CLICKED_DEMO_BUTTON_ON_VALIDATION, null);
            setErrEmailMessage('Please enter valid details');
            return;
        }
        trackGTMEvent(EVENT_LIST.CLICKED_DEMO_BUTTON_2, null);
        try {
            const leadPayload = {
                lead_details: formValues && formValues.filter((field) => field.value !== ''),
                otp_token: otpToken || '',
            };

            const leadResponse = await clientApiWrapper.get(
                `${B2B_CREATE_LEAD_URL}?payload=${JSON.stringify(leadPayload)}`,
            );

            const { otpToken: otpValue, retryTimerInSeconds } = leadResponse.data || {};
            const { code: statusCode } = leadResponse.data.status || {};

            if (statusCode === 0) {
                fireTrackingEvents(type, EVENT_LIST.FORM_SUBMIT_BUTTON, null);
                dispatch(setLeadDetails(formValues));
                onChangeReducerValue({ currentForm: 'OTP_PAGE' });
                setOtpToken(otpValue);
                setOtpRetrytime(retryTimerInSeconds);
            }
        } catch (error) {
            // TODO: [Manjula] [https://monorail.pointz.in/p/fi-app/issues/detail?id=60804] Set an error message on the state and displayed in the UI.
            console.error(error);
        }

        /* Uncomment this code to call the API for domain verification.
        const domain = getDomainFromEmail(EmailAddress);

        if (domain) {
            const payload = {
                domain,
                domain_type: 'DOMAIN_TYPE_WORK_EMAIL',
            };

            try {
                const response = await clientApiWrapper.get(
                    `${DOMAIN_DETAILS__URL}?payload=${JSON.stringify(payload)}`,
                );

                const { status } = response.data.domain_details || {};

                if (status === 'DOMAIN_STATUS_DISALLOWED') {
                    setErrMessage('Unable to verify. Write to us: salaryprogram@fi.money');
                }

                if (status === 'DOMAIN_STATUS_ALLOWED') {
                    const leadPayload = {
                        lead_details: formValues,
                        otp_token: otpToken || '',
                    };

                    try {
                        const leadResponse = await clientApiWrapper.get(
                            `${B2B_CREATE_LEAD_URL}?payload=${JSON.stringify(leadPayload)}`,
                        );

                        const { otpToken: otpValue, retryTimerInSeconds } = leadResponse.data || {};
                        const { code: statusCode } = leadResponse.data.status || {};

                        if (statusCode === 0) {
                            trackGTMEvent(SALARY_B2B_PAGE_FORM_SUBMIT);
                            dispatch(setLeadDetails(formValues));
                            onChangeReducerValue({ currentForm: 'OTP_PAGE' });
                            setOtpToken(otpValue);
                            setOtpRetrytime(retryTimerInSeconds);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            } catch (error) {
                setErrMessage('Please enter a valid company email ID');
            }
        }
        */
    };

    const location = useLocation();
    // track loaded page event
    useEffect(() => {
        const params: QueryParams = queryParams(location.search);
        const { ...utmParams } = params;

        const utmFieldsToAdd = [
            { attribute: 'mx_UTM_Source', value: utmParams?.utm_source || '' },
            { attribute: 'mx_UTM_Channel', value: utmParams?.utm_channel || '' },
            { attribute: 'mx_UTM_Campaign', value: utmParams?.utm_campaign || '' },
        ];
        const filteredUtmFields = utmFieldsToAdd.filter((field) => field.value !== '');
        setFormValues([...formValues, ...filteredUtmFields]);
    }, []);

    return (
        <Wrapper>
            <Container>
                {
                    fieldList.includes('FirstName') && (
                        <FormInput
                            placeholder='Your name'
                            type='text'
                            name='FirstName'
                            value={FirstName}
                            onChange={onChange}
                            autoComplete='off'
                            caret-color='CATSKILL_WHITE'
                            onBlur={OnBlur}
                        />
                    )
                }
                {
                    fieldList.includes('mx_Company_Name') && (
                        <FormInput
                            placeholder='Company name'
                            type='text'
                            name='mx_Company_Name'
                            // eslint-disable-next-line camelcase
                            value={mx_Company_Name}
                            onChange={onChange}
                            onBlur={OnBlur}
                        />
                    )
                }
                {
                    fieldList.includes('EmailAddress') && (
                        <FormInput
                            placeholder='Work Email (e.g. yourname@companyname.com)'
                            type='email'
                            name='EmailAddress'
                            errorMessage={errEmailMessage}
                            value={EmailAddress}
                            onChange={onChange}
                            autoComplete='off'
                            onBlur={(e) => OnBlur(e, 'workEmailId')}
                        />
                    )
                }
                {
                    fieldList.includes('Phone') && (
                        <FormInput
                            placeholder='Phone number (optional)'
                            errorMessage={getErrorMessage('number', Phone) || errMessage}
                            type='number'
                            name='Phone'
                            value={Phone}
                            onChange={onChange}
                            autoComplete='off'
                            caret-color='CATSKILL_WHITE'
                            onBlur={OnBlur}
                        />
                    )
                }

            </Container>
            <ButtonHolder>
                <PrimaryButton
                    label='BOOK A DEMO'
                    onClick={onSubmit}
                    fontVariant='buttonVariantTwo'
                />
            </ButtonHolder>
        </Wrapper>
    );
};

B2BFormSection.defaultProps = {
    type: null,
};

export default React.memo(B2BFormSection);
