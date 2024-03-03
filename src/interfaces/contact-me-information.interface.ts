import { RegisterOptions } from 'react-hook-form';
import { ContactMeFormValues } from '../types/contact-me-form-values';

export interface ContactMeInformation {
    name: string;

    rules: Omit<
        RegisterOptions<ContactMeFormValues, any>,
        'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
    >;

    label: string;

    placeholder: string;

    multiline: boolean;

    rows: number;
}
