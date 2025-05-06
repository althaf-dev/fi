import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { Device } from '@/Themes/Device';

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;

    @media ${Device.desktop} {
        gap: 12px;
    }

    .container {
        border: 2px solid gray;
        border-radius: 50%;
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: white;
        input {
            width: 0px;
            line-height: 50px;
        }

        input::before {
            content: "";
            height: 12px;
            width: 12px;
            background: white;
            display: inline-block;
            border-radius: 50%;
            padding: 0px;
            position: absolute;
            left: 1px;
            bottom: 1px;
            cursor: pointer;
        }

        input:checked::before {
            background: gray;
        }
    }

    .option-text {
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #878A8D;
    }
`;

const CheckboxGroup = (props: any) => {
    const {
        fieldOptions, onChange, isMultiSelect, value = [],
    } = props;

    const options = useMemo((): Array<any> => {
        const selectedOption: Array<any> = fieldOptions.map((item: any) => ({
            label: item, checked: value.includes(item)
        }));

        return selectedOption;
    }, [value, fieldOptions]);

    const handleMultiSelect = (selectedValue: any) => {
        const tempValue = [...value];
        if (selectedValue.checked) {
            tempValue.splice(tempValue.findIndex((optionValue: string) => selectedValue.label === optionValue), 1);
        } else {
            tempValue.push(selectedValue.label);
        }
        onChange(tempValue);
    };
    const handleSingleSelect = (selectedValue: any, index: number) => {
        let tempValue = [...value];
        if (options[index].checked) {
            tempValue = [];
        } else {
            tempValue[0] = selectedValue.label;
        }

        onChange(tempValue);
    };

    return (
        <div>
            {
                Array.isArray(options) && options.map((item: any, index: number) => (
                    <CheckboxContainer onClick={(event) => {
                        event.stopPropagation();
                        if (isMultiSelect) { handleMultiSelect(item); } else handleSingleSelect(item, index);
                    }}
                    >
                        <div>
                            <span
                                className='container'
                            >
                                <input
                                    type='checkbox'
                                    checked={item.checked}
                                />
                            </span>
                        </div>
                        <div className='option-text'>
                            <span className='text'>
                                {item.label}
                            </span>
                        </div>
                    </CheckboxContainer>
                ))
            }
        </div>
    );
};

export default memo(CheckboxGroup);
