import { FormField } from './FormField';

const UserForm: Array<FormField> = [
    {
        fieldName: 'name',
        value: '',
        type: 'text',
        required: true,
        label: 'Your name',
        info: 'As written your PAN Card',
    },
    {
        fieldName: 'mobile',
        type: 'text',
        required: true,
        label: 'Your phone number',
        info: 'Will be verified with an OTP',
    },
];

export default UserForm;
