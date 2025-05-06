const DefaultInputProps = {
    fieldType: '',
    fieldName: 'input',
    type: 'text',
    value: '',
    label: 'Enter your input',
    required: true,
    disabled: false,
    errorMessage: 'Invalid input',
    onChange: (name: string, value: any) => {},
    isValid: (name: string, value: boolean) => {},
    onEnterClick: (event) => {},
    placeholder: ' ',
    font: 'input',
    labelFont: 'label',
};

export default DefaultInputProps;
