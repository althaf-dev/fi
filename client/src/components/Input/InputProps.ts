import { TextProps } from '../Abstract/Font/Font';

interface InputProps {
    fieldType?: string;
    fieldName?: string;
    value?: any;
    type?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    autoFocus?: boolean;
    pattern?: RegExp;
    extra?: any;
    clicked?: boolean;
    onChange?: (fieldName: string, value: any) => void;
    isValid?: (fieldName: string, value: any, valid: boolean) => void;
    onEnterClick?: (event: any) => void;
    setButtonClick?: () => void;
    testId?: string;
    onKeyDown?: (event: any) => void;
    placeholder?: string;
    onPaste?: (event: any) => void;
    caretColor?: string;
    font?: TextProps['font'];
    labelFont?: TextProps['font'];
    className?: string;
}

export default InputProps;
