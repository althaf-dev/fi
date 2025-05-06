/**
 * @file Salary Account SignUp index page
 */

import React, { useMemo, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { MainContainer } from '../../components/Waitlist/styled';
import GreyWhiteContainer from '../../components/GreyWhiteContainer';
import {
    trackGTMEvent,
    LANDEDON_DESKTOP_PAGE_WEB,
} from '../../events';

import MobileNumberPage from './MobileNumberPage';
import MobileNumberVerificaitonPage from './MobileNumberVerificaitonPage';
import EmailPage from './EmailPage';
import EmailVerificationPage from './EmailVerificationPage';
import WorkBenefitSection from './WorkBenefitSection';
import FinishSignupPage from './FinishSignupPage';
import WhatsappLinkPage from './WhatsappLinkPage';
import WorkBenefitPopUpModal from './WorkBenefitPopUpModal';
import selectSalaryAccountSignUpReducer from './selectors';
import { IstepModuleListItem, BuildWorkBenefitSectionProps } from './types';
import {
    emailWorkBenefitData,
    phoneNumberWorkBenefitData,
    NAVIGATE_PAGE,
} from './constants';

const SalaryAccountSignUp = () => {
    const { currentStep, showWorkBenefitSection } = useSelector(
        selectSalaryAccountSignUpReducer,
        shallowEqual,
    );

    const buildWorkBenefitSection = ({
        title,
        workBenefitList,
    }: BuildWorkBenefitSectionProps) => (
        <WorkBenefitSection workBenefitList={workBenefitList} title={title} />
    );

    const StepModuleList: IstepModuleListItem = useMemo(
        () => ({
            [NAVIGATE_PAGE.MOBILE_GENERATE_OTP_PAGE]: {
                Component: <MobileNumberPage />,
                RightChild: buildWorkBenefitSection({
                    workBenefitList:
                        phoneNumberWorkBenefitData?.workBenefitList,
                    title: phoneNumberWorkBenefitData?.title,
                }),
            },
            [NAVIGATE_PAGE.MOBILE_VERIFY_OTP_PAGE]: {
                Component: <MobileNumberVerificaitonPage />,
                RightChild: buildWorkBenefitSection({
                    workBenefitList:
                        phoneNumberWorkBenefitData?.workBenefitList,
                    title: phoneNumberWorkBenefitData?.title,
                }),
            },
            [NAVIGATE_PAGE.EMAIL_GENERATE_OTP_PAGE]: {
                Component: <EmailPage />,
                RightChild: buildWorkBenefitSection({
                    workBenefitList: emailWorkBenefitData?.workBenefitList,
                    title: emailWorkBenefitData?.title,
                }),
            },
            [NAVIGATE_PAGE.EMAIL_VERIFY_OTP_PAGE]: {
                Component: <EmailVerificationPage />,
                RightChild: buildWorkBenefitSection({
                    workBenefitList: emailWorkBenefitData?.workBenefitList,
                    title: emailWorkBenefitData?.title,
                }),
            },
            [NAVIGATE_PAGE.FINISH_SIGNUP_PAGE]: {
                Component: <FinishSignupPage />,
                RightChild: buildWorkBenefitSection({
                    workBenefitList: emailWorkBenefitData?.workBenefitList,
                    title: emailWorkBenefitData?.title,
                }),
            },
            [NAVIGATE_PAGE.WHATSAPP_LINK_PAGE]: {
                Component: <WhatsappLinkPage />,
                RightChild: buildWorkBenefitSection({
                    workBenefitList: emailWorkBenefitData?.workBenefitList,
                    title: emailWorkBenefitData?.title,
                }),
            },
        }),
        [],
    );

    useEffect(() => {
        trackGTMEvent(LANDEDON_DESKTOP_PAGE_WEB);
    }, []);

    return (
        <MainContainer>
            <GreyWhiteContainer
                rightChild={StepModuleList[currentStep]?.RightChild}
            >
                {StepModuleList[currentStep]?.Component}
            </GreyWhiteContainer>
            {showWorkBenefitSection && <WorkBenefitPopUpModal />}
        </MainContainer>
    );
};

export default SalaryAccountSignUp;
