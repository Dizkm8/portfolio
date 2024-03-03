import { RegisterOptions } from 'react-hook-form';
import { ContactMeFormValues } from '../pages/home/contact-me/ContactMeForm';

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
