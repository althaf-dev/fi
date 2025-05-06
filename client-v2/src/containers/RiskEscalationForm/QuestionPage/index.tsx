'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import QuestionUi from './QuestionUi';
import { fireEvent, submitEscaltionForm, updateAllResponses } from '@/rtk/components/riskForm/reducer';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import PrimaryButton from '@/Abstract/PrimaryButton/PrimaryButton';
import { Font } from '@/Abstract';
import { Device } from '@/Themes/Device';
import { riskFormEvents } from '@/events/EventName';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    overflow-y: hidden;

    .questions-container {
        height: calc(100% - 88px);
        overflow-y: auto;
    }

    @media ${Device.tab} {
        margin-top: 0px;
        height: 100%;

        .questions-container {
            height: calc(100% - 70px);
        }
    }

    @media ${Device.desktop} {
        margin-top: 0px;
        height: 100%;

        .questions-container {
            height: calc(100% - 140px);
        }
    }
`;

const QuestionTitle = styled.div`
    margin-top: 20px;
    .title {
        font-family: Gilroy;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.4px;
        text-align: left;
        color: #878A8D;
        margin-bottom: 5px;
        margin-left: 12px;
    }

    .subtitle-container {
        margin: 4px 0 4px 0;
        margin-left: 12px;
    }

    .validation-text {
        font-size: 10px;
        font-family: Gilroy;
        color: red;
    }

    .tip-text {
        font-family: Gilroy;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        text-align: left;
        color: #84878a;
    }

    @media ${Device.desktop} {
        margin-top: 20px;
    }
`;

const ButtonHolder = styled.div`  
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 10px;
    z-index: 2;
    bottom: 0px;

    .sub-title {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        color: #878A8D;
    }

    .button_container {
        height: 52px;
        width: 312px;
        margin-bottom: 5px;
        display: inline-block;
    }

    @media ${Device.tab} {
        bottom: 0px;
    }

    @media ${Device.desktop} {
        bottom: 20px;
    }
`;

const ToolTipWrapper = styled.div`
    .tooltip {
        position: relative;
    }
    
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #886363;;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -60px;
    }
    
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
    
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
`;

const ErrorDescription = styled(Font)`
`;

const ErrorWrapper = styled.div<{ textAlignment?: string, noPadding?: boolean }>`
    padding-top: ${({ noPadding }) => (noPadding ? '0px' : '10px')};
    text-align: ${({ textAlignment }) => (textAlignment || 'center')};
`;

const ToolTip = (props: any) => {
    const { children, text } = props;
    return (
        <ToolTipWrapper>
            {
                text
                    ? (
                        <div className='tooltip'>
                            {children}
                            <span className='tooltiptext'>{text}</span>
                        </div>
                    )
                    : (
                        <div className='tooltip'>
                            {children}
                        </div>
                    )
            }
        </ToolTipWrapper>
    );
};

function QuestionPage() {
    const dispatch = useAppDispatch();

    const riskFormState = useAppSelector((state: any) => state.riskForm);

    const {
        questions: questionResponse,
        token: { authToken },
        screens,
        isFormValid,
        formId,
        errorMessage,
    } = riskFormState;

    const { questionnaireScreen = { form_fields: [] } } = screens || { questionnaireScreen: {} };

    const sentisedQuestionResponse = () => {
        const questionResponseCopy: any = {};

        Object.entries<any>(questionResponse as any).forEach(([key, value]) => {
            const { dependencyQuestion, is_multi_select: isMultiSelect, response } = value;

            if (dependencyQuestion) {
                const { relatedQuestionKey, relatedSelectedValue } = dependencyQuestion;
                if (questionResponse[relatedQuestionKey]) {
                    if (isMultiSelect && Array.isArray(response) && response.length > 0 && response[0]) {
                        questionResponseCopy[key] = value;
                    } else if (questionResponse[relatedQuestionKey].response === relatedSelectedValue) {
                        questionResponseCopy[key] = value;
                    }
                }
            } else {
                questionResponseCopy[key] = value;
            }
        });
        return questionResponseCopy;
    };

    const onSubmit = () => {
        dispatch(submitEscaltionForm({
            form_id: formId,
            questionResponse: sentisedQuestionResponse(),
            accessToken: authToken
        }));
        dispatch(fireEvent(riskFormEvents.RISK_FORM_CLICKED_ON_SUBMIT_BUTTON_QUESTIONER_PAGE));
    };

    useEffect(() => {
        dispatch(updateAllResponses({}));
        dispatch(fireEvent(riskFormEvents.RISK_FORM_LANDED_ON_QUESTIONER_PAGE));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <div className='questions-container'>
                {
                    questionnaireScreen && Array.isArray(questionnaireScreen.form_fields) && questionnaireScreen.form_fields
                        .map((item: any) => {
                            const {
                                key, tip, label, is_mandatory: isMandatory, field_type: fieldType, placeholder,
                                field_options: fieldOptions
                            } = item;
                            return (
                                <QuestionTitle>
                                    <div className='title'>
                                        {label}
                                        { isMandatory && ' *'}
                                    </div>
                                    <QuestionUi
                                        questionKey={key}
                                        tip={tip}
                                        label={label}
                                        isMandatory={isMandatory}
                                        fieldType={fieldType}
                                        placeholder={placeholder}
                                        fieldOptions={fieldOptions}
                                    />
                                </QuestionTitle>
                            );
                        })
                }
            </div>
            <ButtonHolder>
                {errorMessage ? (
                    <ErrorWrapper textAlignment='center' noPadding>
                        <ErrorDescription
                            font='labelVariantOne'
                            color='ERROR_RED'
                            tagType='label'
                        >
                            {errorMessage}
                        </ErrorDescription>
                    </ErrorWrapper>
                ) : null}

                <div className='sub-title'>We’ll take this forward when you submit</div>
                <div className='button_container'>
                    <ToolTip text={!isFormValid ? 'Please fill all the required field' : ''}>
                        <PrimaryButton
                            fontVariant='buttonVariantFive'
                            label='Submit'
                            disabled={!isFormValid}
                            borderRadius='19px'
                            disableTransForm
                            disableBgColor='GREEN_PEA'
                            disableFontColor='BOMBAY'
                            testId='cc-waitlist-mobile-number-btn'
                            onClick={onSubmit}
                        />
                    </ToolTip>

                </div>
            </ButtonHolder>
        </Wrapper>
    );
}

export default QuestionPage;
