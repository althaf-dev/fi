/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Dropdown from './dropdown';
import CheckboxGroup from './checkbox-group';
import FileBrowser from './file-upload';
import TextInput from './TextInput';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { FieldType } from '../constants';
import { updateQuestionSolutions, removeQuestionResponse, updateValidationField, updateAllResponses } from '@/rtk/components/riskForm/reducer';

const CheckBoxWrapper = styled.div`
    margin-top: 10px;
    margin-left: 20px;

    .title {
        font-family: Gilroy;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.44999998807907104px;
        text-align: left;
        color: #878A8D;
        margin-bottom: 20px;
    }
`;

const QuestionTitle = styled.div`
    margin-bottom: 20px;
    margin-top: 40px;
    .title {
        font-family: Gilroy;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.44999998807907104px;
        text-align: left;
        color: #878A8D;
        margin-bottom: 9px;
        margin-left: 12px;
    }
`;

/**
 *
 * @param updatedResponse
 * removeNotRequiredDependencyField
 * FieldType.FIELD_TYPE_DROPDOWN Questions are conditional, so as user changes the option it's corrsponding
 * fields from the response will be needed to removed
 *
 */

const removeNotRequiredDependencyField = (updatedResponse: any) => {
    const questionResponseCopy: any = { ...updatedResponse };
    Object.entries<any>(updatedResponse as any).forEach(([key, value]) => {
        const { dependencyQuestion } = value;
        if (dependencyQuestion) {
            const { relatedQuestionKey, relatedSelectedValue } = dependencyQuestion;
            if (updatedResponse[relatedQuestionKey].response !== relatedSelectedValue) {
                delete questionResponseCopy[key];
            }
        }
    });
    return questionResponseCopy;
};

export default function QuestionUi(props: any): ReactNode {
    const {
        fieldType, questionKey, fieldOptions, dependencyQuestion,
    } = props;

    const dispatch = useAppDispatch();

    const {
        questions, screens, isFormValid, questionValidationState
    } = useAppSelector((state) => state.riskForm);

    const stateValue = questions[questionKey] && questions[questionKey]?.response;

    /**
     * webform field validation
     * @param fields : all the available field that are needed to validated
     * @param updatedResponse : updated response object after user interact with any given field.
     * @param questionValidationMap : it is used to display validation error on ui.
     * @returns { validationState, isValid } : isValid field used to enable submit button. validationState keep state error shown along the field
     */

    const validate = (fields: any, updatedResponse: any, questionValidationMap: any) => {
        const conditionalFields = [FieldType.FIELD_TYPE_DROPDOWN, FieldType.FIELD_TYPE_CHECK_BOX, FieldType.FIELD_TYPE_RADIO_BUTTON];

        let isValid = true;
        let updatedValidationOptions = { ...questionValidationMap };

        fields.forEach((item: any) => {
            const {
                key,
                is_mandatory: isMandatory,
                field_options: validationFieldOptions,
                field_type: validationFieldType
            } = item;

            const responseKey = updatedResponse[key];
            const isResponseArray = Array.isArray(responseKey?.response) && responseKey.response.length > 0;
            const selectedValue = isResponseArray ? responseKey.response[0] : responseKey?.response;

            if (isMandatory && !selectedValue) {
                updatedValidationOptions[key] = { message: 'required Field' };
                isValid = false;
            }

            if (selectedValue && conditionalFields.includes(validationFieldType)) {
                const {
                    multi_choice_field_options: {
                        choice_conditional_fields_map: choiceConditionalFieldsMap
                    }
                } = validationFieldOptions;

                /**
                 *  fields are shown to user based on their choices and fields
                 *  kept in nested way , this is the reason why we need to check
                 *  in recursive manner.
                 *
                 */

                if (choiceConditionalFieldsMap[selectedValue]?.form_fields) {
                    const {
                        validationState: validationStateObj,
                        isValid: isValidFlag
                    } = validate(choiceConditionalFieldsMap[selectedValue].form_fields, updatedResponse, questionValidationMap);

                    isValid = isValid && isValidFlag;
                    updatedValidationOptions = { ...updatedValidationOptions, ...validationStateObj };
                }
            }
        });

        return { validationState: updatedValidationOptions, isValid };
    };

    const handleValidation = (updatedRespnse: any) => {
        const { questionnaireScreen: { form_fields: validationFormFields = [] } } = screens || { questionnaireScreen: { form_fields: [] } };
        const { isValid, validationState } = validate(validationFormFields, updatedRespnse, {});
        dispatch(updateValidationField({ isFormValid: isValid, validatedField: validationState }));
    };

    const handleInputChanges = (value: any, limit?: number) => {
        const payload: any = {
            key: questionKey,
            fieldType,
            response: value,
            dependencyQuestion,
            limit,
        };

        const updatedQuestionObject: any = { ...questions, [questionKey]: payload };
        handleValidation(updatedQuestionObject);

        switch (fieldType) {
            case FieldType.FIELD_TYPE_DROPDOWN: {
                const sanitisedResponse = removeNotRequiredDependencyField(updatedQuestionObject);
                dispatch(updateAllResponses(sanitisedResponse));
                break;
            }
            case FieldType.FIELD_TYPE_TEXT_BOX:
            case FieldType.FIELD_TYPE_FILE: {
                dispatch(updateQuestionSolutions(payload));
                break;
            }
            case FieldType.FIELD_TYPE_CHECK_BOX: {
                const { multi_choice_field_options: { is_multi_select: isMultiSelect } } = fieldOptions;
                payload['is_multi_select'] = isMultiSelect;
                dispatch(updateQuestionSolutions(payload));
            }
                break;
            default:
                break;
        }
    };

    const renderConditonalQuestion = (choiceConditionalFieldsMap: any, selectedValue: any) => {
        if (!selectedValue) return null;

        const optionalQuestionMap: any = {};

        Object.entries(choiceConditionalFieldsMap).forEach(([key, value]) => {
            optionalQuestionMap[key] = value;
        });

        if (selectedValue && optionalQuestionMap && optionalQuestionMap[selectedValue]) {
            const questionList = optionalQuestionMap[selectedValue]?.form_fields || [];

            return (
                <>
                    {
                        questionList.map((item: any) => {
                            const {
                                key, tip, label, is_mandatory: isMandatory, field_type: QuestionfieldType, placeholder,
                                field_options: QuestionfieldOptions
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
                                        fieldType={QuestionfieldType}
                                        placeholder={placeholder}
                                        fieldOptions={QuestionfieldOptions}
                                        dependencyQuestion={{
                                            relatedQuestionKey: questionKey,
                                            relatedSelectedValue: selectedValue
                                        }}
                                    />
                                </QuestionTitle>
                            );
                        })
                    }
                </>
            );
        }
        return null;
    };

    const removeReponse = () => {
        const questionsResponse = { ...questions };
        if (delete questionsResponse[questionKey]) {
            dispatch(removeQuestionResponse({ updatedQuestionState: questionsResponse }));
            handleValidation(questionsResponse);
        }
    };

    const updateValidationState = (questionUpdate: any) => {
        dispatch(updateValidationField({ isFormValid, validatedField: { ...questionValidationState, ...questionUpdate } }));
    };

    const validationErrorUi = (tip: any) => (
        <div className='subtitle-container'>
            <div className='tip-text'>
                <span>
                    {tip || ''}
                </span>
            </div>
            {
                questionValidationState && questionValidationState[questionKey] && questionValidationState[questionKey].visible && (
                    <div className='validation-text'>
                        <span>{questionValidationState[questionKey].message}</span>
                    </div>
                )
            }
        </div>
    );

    switch (fieldType) {
        case FieldType.FIELD_TYPE_TEXT_BOX: {
            const { placeholder, tip, label } = props;
            const { text_box_field_options: textBoxFieldOptions } = fieldOptions;
            return (
                <>
                    <TextInput
                        label={label}
                        tip={tip}
                        placeholder={placeholder}
                        onChange={handleInputChanges}
                        updateValidationState={updateValidationState}
                        textBoxFieldOptions={textBoxFieldOptions}
                        value={stateValue}
                        questionKey={questionKey}
                    />
                    {validationErrorUi(tip)}
                </>
            );
        }
        case FieldType.FIELD_TYPE_DROPDOWN: {
            const { label, placeholder, tip } = props;
            const internalId = crypto.randomUUID();
            const {
                multi_choice_field_options: { choice_conditional_fields_map: choiceConditionalFieldsMap, choices }
            } = fieldOptions;

            return (
                <div>
                    <Dropdown
                        options={choices}
                        internalId={internalId}
                        onChange={handleInputChanges}
                        fieldOptions={fieldOptions}
                        label={label}
                        placeholder={placeholder}
                    />
                    {validationErrorUi(tip)}
                    { stateValue && renderConditonalQuestion(choiceConditionalFieldsMap, stateValue)}
                </div>
            );
        }
        case FieldType.FIELD_TYPE_FILE: {
            const {
                label, placeholder, tip, ...rest
            } = props;
            return (
                <>
                    <FileBrowser
                        label={label}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...rest}
                        onChange={handleInputChanges}
                        fieldOptions={fieldOptions}
                        value={stateValue}
                        removeQuestionResponse={removeReponse}
                        updateValidationState={updateValidationState}
                        questionKey={questionKey}
                        placeholder={placeholder}
                    />
                    {validationErrorUi(tip)}
                </>
            );
        }
        case FieldType.FIELD_TYPE_CHECK_BOX: {
            const {
                multi_choice_field_options: {
                    choice_conditional_fields_map: choiceConditionalFieldsMap,
                    is_multi_select: isMultiSelect,
                    choices
                }
            } = fieldOptions;
            const { tip } = props;

            return (
                <div>
                    <CheckBoxWrapper>
                        <CheckboxGroup
                            fieldOptions={choices}
                            onChange={handleInputChanges}
                            value={stateValue}
                            isMultiSelect={isMultiSelect}
                        />
                    </CheckBoxWrapper>
                    {validationErrorUi(tip)}
                    {stateValue && renderConditonalQuestion(choiceConditionalFieldsMap, stateValue)}
                </div>
            );
        }

        case FieldType.FIELD_TYPE_RADIO_BUTTON: {
            const {
                multi_choice_field_options: {
                    choice_conditional_fields_map: choiceConditionalFieldsMap,
                    is_multi_select: isMultiSelect,
                    choices
                }
            } = fieldOptions;

            const { tip } = props;

            return (
                <div>
                    <CheckBoxWrapper>
                        <CheckboxGroup
                            fieldOptions={choices}
                            onChange={handleInputChanges}
                            value={stateValue}
                            isMultiSelect={isMultiSelect}
                        />
                    </CheckBoxWrapper>
                    {validationErrorUi(tip)}
                    { stateValue && renderConditonalQuestion(choiceConditionalFieldsMap, stateValue)}
                </div>
            );
        }

        default:
            return <div>Not implemented</div>;
    }
}
