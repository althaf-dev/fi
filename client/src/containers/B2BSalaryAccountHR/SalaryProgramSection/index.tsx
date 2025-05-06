/**
 * @file Salary program Section
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';
import { InlineWidget } from 'react-calendly';
import { Device } from '../../../Themes/Device';
import { Image } from '../../../components';
import { CALANDER_LINK, SVGS_URL } from '../../../constants/AssetConstants';
import MIXINS from '../../../Themes/mixins';
import { SALARY_PROGRAM_MAIL } from '../../../constants/AppConstant';
import { useOnChangeReducerValue } from '../../../hooks';
import FormSection from '../FormSection';
import { CALENDLY_CONFIG, SALARY_ACCOUNT_FORM_ID, EVENT_LIST } from '../constant';
import { onChangeSalaryAccountHRValue } from '../actions';
import selectSalaryAccountHRReducer from '../selectors';
import VerifyOtpPage from '../VerifyOtpPage';

import { fireTrackingEvents } from '../utils';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 25px;
    margin: 0px auto;
    padding-top: 50px;
    max-width: 360px;


    @media ${Device.tab} {
        padding: 0px 40px;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        margin-top: 0px;
        padding: 0px;
        width: 602px;
    }
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'normal', align: 'normal' })};
    border-radius: 20px;
    overflow: hidden;
    padding-top: 20px;

    @media ${Device.tab} {
        width: 70%;
        margin: 0 auto;
        flex-direction: row;
        justify-content: center;
    }

    @media ${Device.desktop} {
        width: 100%;
    }
`;

const MessageContainer = styled.div`
    padding: 40px;
    margin: auto;
    width: 100%;
    ${MIXINS.FlexMixin({ dir: 'column' })};
    @media ${Device.tab} {
        padding: 50px 10px;
    }
    @media ${Device.desktop} {
        padding: 40px;
        max-width: 656px;
    }
`;

const MessageContainerExp = styled(MessageContainer)`
   @media ${Device.desktop} {
       height: 348px;
    }
`;

const ButtonContainer = styled.div`

    @media ${Device.phone} {
        padding: 20px 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
        color: ${(props) => props.theme.color.WHITE};
        border-radius: 10px;
    }   

    @media ${Device.tab} {
        padding: 20px 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
        color: ${(props) => props.theme.color.WHITE};
        border-radius: 10px;
    }

    @media ${Device.desktop} {
        padding: 20px 30px;
        margin-top: 10px;
        margin-bottom: 20px;
        ${MIXINS.FontMixin({ weight: 600, size: '26px', lineHeight: '24px' })};
        background-color: ${(props) => props.theme.color.FOREST_GREEN};
        color: ${(props) => props.theme.color.WHITE};
        border-radius: 20px;
    }
`;

export const LogoHolder = styled.div`
    margin-bottom: 30px;
    height: 50px;
    width: 50px;
`;

export const LinkText = styled.div`
    max-width: 100%;
    margin: 10px auto 0px;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.color.FOREST_GREEN};
    ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: 20px auto 0px;
        max-width: 684px;
        ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '24px' })};
    }

    &:hover {
        text-decoration: underline;
        text-underline-position: under;
    }
`;

const TextExp = styled(LinkText)`
   color: ${(props) => props.theme.color.SHARK1};
   ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '25px' })};

   @media ${Device.desktop} {
      ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '33px' })};
    }

   &:hover {
     text-decoration: none;
   }
`;

const LinkTextExp = styled(LinkText)`
   margin: 0px auto;
   ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '25px' })};

   @media ${Device.desktop} {
      ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '33px' })};
    }
`;

const SuccessTitle = styled.div`
    margin-bottom: 8px;
    color: ${(props) => props.theme.color.MINE_SHAFT};
    ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};

    @media ${Device.tab} {
        margin-bottom: 12px;
    }

    @media ${Device.desktop} {
        margin-bottom: 24px;
        ${MIXINS.FontMixin({ weight: 600, size: '28px', lineHeight: '30px' })};
    }
`;

const SuccessSubscript = styled.div`
    width: 65%;
    color: ${(props) => props.theme.color.MINE_SHAFT};
    ${MIXINS.FontMixin({ weight: 600, size: '12px', lineHeight: '24px' })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};
    }

`;

const CalendyContainer = styled.div`
    margin: auto;
    width: 100%;
    padding: 0 20px 20px 20px;

    @media ${Device.desktop} {
        padding: 30px;
        max-width: 656px;
    }
`;

const LinkTextCalender = styled.a`
    max-width: 100%;
    margin: 10px auto 0px;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.color.FOREST_GREEN};
    ${MIXINS.FontMixin({ weight: 600, size: '12px', lineHeight: '24px' })};

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: 20px auto 0px;
        max-width: 684px;
        ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};
    }

    &:hover {
        text-decoration: underline;
        text-underline-position: under;
    }
`;

const TextCalender = styled.div`
    color: ${(props) => props.theme.color.SHARK1};
    ${MIXINS.FontMixin({ weight: 600, size: '12px', lineHeight: '24px' })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '24px' })};
    }
`;

const TitleSection = styled.div`
    margin-bottom: 30px;
    text-align: center;
    color: ${(props) => props.theme.color.FOREST_GREEN};
    ${MIXINS.FontMixin({ weight: 600, size: '28px', lineHeight: '35px' })};

    @media ${Device.tab} {
        margin-bottom: 40px;
        ${MIXINS.FontMixin({ weight: 600, size: '32px', lineHeight: '36px' })};
    }

    @media ${Device.desktop} {
        display: none;
    }
`;

const SuccessFormSubmit = (props: {
    fireEvent: () => void;
}) => {
    const { fireEvent } = props;

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountHRValue,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onLinkTextClick = () => {
        onChangeReducerValue({ currentForm: 'FORM_CALENDLY' });
        if (typeof (fireEvent) === 'function') fireEvent();
    };

    const handleOnClick = () => {
        const pageUrl = window.location.href;
        const type = pageUrl.includes('corporate-salary-accounts') ? 'sme' : 'corporate';
        fireTrackingEvents(type, EVENT_LIST.CLICKED_DEMO_BUTTON, null);
    };

    return (
        <MessageContainer>
            <LogoHolder>
                <Image
                    icon={`${SVGS_URL}check-icon.svg`}
                    objectType='contain'
                />
            </LogoHolder>
            <SuccessTitle>
                Thank you for reaching out!
            </SuccessTitle>
            <ButtonContainer onClick={handleOnClick}>
                <a href={CALANDER_LINK} target='_blank' rel='noreferrer'>
                    Book demo now
                </a>
            </ButtonContainer>
            <SuccessSubscript>
                A Calendar link has also been sent to your Email ID for you to schedule a demo
            </SuccessSubscript>
        </MessageContainer>
    );
};

const CalendlySection = () => {
    const { leadDetails } = useSelector(selectSalaryAccountHRReducer, shallowEqual);
    const firstNameObject = leadDetails.find((item) => item.attribute === 'FirstName');
    const lastNameObject = leadDetails.find((item) => item.attribute === 'LastName');
    const emailAddressObject = leadDetails.find((item) => item.attribute === 'EmailAddress');
    const FirstName = firstNameObject ? firstNameObject.value : '';
    const LastName = lastNameObject ? lastNameObject.value : '';
    const EmailAddress = emailAddressObject ? emailAddressObject.value : '';

    const onLinkTextClick = () => {
        window.location.href = SALARY_PROGRAM_MAIL;
    };

    return (
        <CalendyContainer>
            <InlineWidget
                url={CALENDLY_CONFIG.url}
                prefill={{ name: `${FirstName} ${LastName}`, email: EmailAddress }}
                styles={CALENDLY_CONFIG.styles}
                pageSettings={CALENDLY_CONFIG.pageSettings}
            />
            <TextCalender>
                Or you can mail us at
            </TextCalender>
            <LinkTextCalender onClick={onLinkTextClick} href='mailto:salaryprogram@fi.money'>
                salaryprogram@fi.money
            </LinkTextCalender>
        </CalendyContainer>
    );
};

const ExpiredOtpSection = () => (
    <MessageContainerExp>
        <SuccessTitle>
            Want another way to verify?
        </SuccessTitle>

        <TextExp>Email us instead at</TextExp>
        <LinkTextExp>
            <a href='mailto:salaryprogram@fi.money'>
                salaryprogram@fi.money
            </a>
        </LinkTextExp>
    </MessageContainerExp>
);

interface IRenderMainSectionProps {
    type: 'FORM' | 'FORM_SUBMITTED' | 'FORM_CALENDLY'|'OTP_PAGE'|'EXPIRED_OTP_FORM';
}

interface ISalaryProgramSectionProps {
    data: {
        title: string;
    },
    // eslint-disable-next-line react/require-default-props
    type?: string | null;
}

const SalaryProgramSection = (props: ISalaryProgramSectionProps) => {
    const { data, type = null } = props;
    const { title } = data;

    const [otpToken, setOtpToken] = useState(null);
    const [otpRetryTime, setOtpRetrytime] = useState(null);

    const { currentForm } = useSelector(selectSalaryAccountHRReducer, shallowEqual);

    const retryTimer = (retryTime) => {
        setOtpRetrytime(retryTime);
    };

    const otpTokenCb = (otpTokenArgs) => {
        setOtpToken(otpTokenArgs);
    };

    const fireEvent = () => {
        fireTrackingEvents(type, EVENT_LIST.CLICK_CALENDLY_LINK, null);
    };

    const RenderMainSection = (config: IRenderMainSectionProps) => {
        switch (config.type) {
            case 'FORM': {
                return (
                    <FormSection
                        setOtpToken={otpTokenCb}
                        setOtpRetrytime={retryTimer}
                        otpToken={otpToken}
                        type={type}
                    />
                );
            }
            case 'FORM_SUBMITTED': {
                return <SuccessFormSubmit fireEvent={fireEvent} />;
            }
            case 'OTP_PAGE': {
                return <VerifyOtpPage otpToken={otpToken} otpRetryTime={otpRetryTime} type={type} />;
            }
            case 'EXPIRED_OTP_FORM': {
                return <ExpiredOtpSection />;
            }
            case 'FORM_CALENDLY': {
                return <CalendlySection />;
            }
            default: {
                return <FormSection setOtpToken='' setOtpRetrytime='' otpToken='' />;
            }
        }
    };

    return (
        <PosterSection>
            <TitleSection>{title}</TitleSection>
            <Container id={SALARY_ACCOUNT_FORM_ID}>
                <RenderMainSection type={currentForm} />
            </Container>
        </PosterSection>
    );
};

export default React.memo(SalaryProgramSection);
