import { ContactMeInformation } from '../interfaces/contact-me-information.interface';

const nameField: ContactMeInformation = {
    name: 'name',
    rules: {
        required: 'This field is required.',
        minLength: {
            value: 3,
            message: 'Name must be at least 3 characters long.',
        },
        maxLength: {
            value: 100,
            message: 'Name must be at most 100 characters long.',
        },
    },
    label: 'Your name',
    placeholder: 'Ex: John Doe',
    multiline: false,
    rows: 1,
};

const emailField: ContactMeInformation = {
    name: 'email',
    rules: {
        required: 'This field is required.',
        maxLength: {
            value: 100,
            message: 'Email must be at most 100 characters long.',
        },
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email.',
        },
    },
    label: 'Your email',
    placeholder: 'Ex: contoso@your-email.com',
    multiline: false,
    rows: 1,
};

const reasonField: ContactMeInformation = {
    name: 'reason',
    rules: {
        required: 'This field is required.',
        minLength: {
            value: 3,
            message: 'Content must be at least 3 characters long.',
        },
        maxLength: {
            value: 500,
            message: 'Content must be at most 100 characters long.',
        },
    },
    label: 'How can I help you?',
    placeholder: 'Ex: I want a website for my business.',
    multiline: true,
    rows: 4,
};

const contactMeFieldsData = [nameField, emailField, reasonField];

export default contactMeFieldsData;
