import { REGEX_EMAIL, REGEX_MOBILE } from '../utils/RegexPattern';
import { FormField } from './FormField';

const FastTrackUserFrom: Array<FormField> = [
    {
        fieldName: 'name',
        type: 'text',
        value: '',
        required: true,
        label: 'Your name',
        info: 'As written your PAN Card',
        pattern: /^[A-Za-z]+$/,
    },
    {
        fieldName: 'email',
        type: 'email',
        required: true,
        label: 'Your email id',
        errorMessage: 'Enter valid email id',
        pattern: REGEX_EMAIL,
    },
    {
        fieldName: 'mobile',
        type: 'text',
        required: true,
        label: 'Your phone number',
        info: 'Will be verified with an OTP',
        pattern: REGEX_MOBILE,
    },
];

export default FastTrackUserFrom;
