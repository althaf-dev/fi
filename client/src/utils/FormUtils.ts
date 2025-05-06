import { FormField } from '../FormData/FormField';

const getFormErrorObj = (formData: Array<FormField>) => {
    let errorObj = {};
    formData.forEach((field: FormField) => {
        errorObj[field.fieldName] = !field.required;
    });

    return errorObj;
};

export { getFormErrorObj };
