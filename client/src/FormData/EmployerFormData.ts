/**
 * @file Employee form data validation
 */

import { FormField } from './FormField';
import { REGEX_EMAIL } from '../utils/RegexPattern';

const EmployerFormData: FormField = {
    fieldName: 'email',
    type: 'email',
    required: true,
    label: 'company email id',
    errorMessage: 'Enter valid email id',
    pattern: REGEX_EMAIL,
};

export default EmployerFormData;
