export interface FormField {
    fieldName: string;
    type: string;
    label: string;
    required: boolean;
    value?: any;
    errorMessage?: string;
    info?: string;
    pattern?: RegExp;
}
