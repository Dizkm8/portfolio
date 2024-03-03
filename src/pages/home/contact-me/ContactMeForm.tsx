import { useForm } from 'react-hook-form';
import { ContactMeInformation } from '../../../interfaces/contact-me-information.interface';
import FormField from '../../../components/FormField';
import { Button, SxProps, Theme } from '@mui/material';

interface Props {
    fieldsData: ContactMeInformation[];
    fieldSx?: SxProps<Theme>;
}

export type ContactMeFormValues = {
    name: string;
    email: string;
    reason: string;
};

const defaultValues: ContactMeFormValues = {
    name: '',
    email: '',
    reason: '',
};

const ContactMeForm = (props: Props) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ContactMeFormValues>({ defaultValues });

    const { fieldsData, fieldSx } = props;

    const onSubmit = (data: ContactMeFormValues) => {
        console.table(data);
    };

    const fieldInputs = fieldsData.map((field) => {
        const information = {
            name: field.name,
            label: field.name,
            multiline: field.multiline,
            rows: field.rows,
            placeholder: field.placeholder,
            error: Boolean(errors[field.name]),
            helperText: errors[field.name]?.message,
        };

        return (
            <FormField
                key={field.name}
                information={information}
                sx={fieldSx}
                control={control}
                rules={field.rules}
            />
        );
    });

    return (
        <form>
            {fieldInputs}{' '}
            <Button
                fullWidth={true}
                variant="contained"
                onClick={handleSubmit(onSubmit)}
            >
                Enviar
            </Button>
        </form>
    );
};

export default ContactMeForm;
