/**
 * @file Checkbox Component
 */
import React, { memo } from 'react';

import { CheckboxWrapper } from './styled';

export interface ICheckbox {
    isChecked: boolean,
    checkedValue: number;
    uncheckedValue: number;
}

interface ICheckboxProps {
    item: ICheckbox;
    setNewInputValue: (newValue) => void;
    setOutputValue: (newValue) => void;
}

const Checkbox = (props: ICheckboxProps) => {
    const { item, setNewInputValue, setOutputValue } = props;

    const { isChecked, checkedValue, uncheckedValue } = item;

    const handleChange = () => {
        if (isChecked) {
            setNewInputValue({ is_checked: !isChecked, value: uncheckedValue });

            setOutputValue({ is_checked: !isChecked, value: uncheckedValue });
        } else {
            setNewInputValue({ is_checked: !isChecked, value: checkedValue });

            setOutputValue({ is_checked: !isChecked, value: checkedValue });
        }
    };

    return (
        <CheckboxWrapper type='checkbox' checked={isChecked} onChange={handleChange} checkMarkCssCode='"\2713"' />
    );
};

export default memo(Checkbox);
