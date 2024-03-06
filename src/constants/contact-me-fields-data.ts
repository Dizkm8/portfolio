import { ContactMeInformation } from '../interfaces/contact-me-information.interface';

const nameField: ContactMeInformation = {
    name: 'name',
    rules: {
        required: 'requiredField',
        minLength: {
            value: 3,
            message: 'minLengthField',
        },
        maxLength: {
            value: 100,
            message: 'maxLengthField',
        },
    },
    label: 'nameLabel',
    placeholder: 'nameExample',
    multiline: false,
    rows: 1,
};

const emailField: ContactMeInformation = {
    name: 'email',
    rules: {
        required: 'requiredField',
        maxLength: {
            value: 100,
            message: 'maxLengthField',
        },
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'invalidEmail',
        },
    },
    label: 'emailLabel',
    placeholder: 'emailExample',
    multiline: false,
    rows: 1,
};

const reasonField: ContactMeInformation = {
    name: 'reason',
    rules: {
        required: 'requiredField',
        minLength: {
            value: 3,
            message: 'minLengthField',
        },
        maxLength: {
            value: 500,
            message: 'maxLengthField',
        },
    },
    label: 'reasonLabel',
    placeholder: 'reasonExample',
    multiline: true,
    rows: 4,
};

const contactMeFieldsData = [nameField, emailField, reasonField];

export default contactMeFieldsData;
