import { useForm } from 'react-hook-form';
import { ContactMeInformation } from '../../../interfaces/contact-me-information.interface';
import FormField from '../../../components/FormField';
import { Button, SxProps, Theme } from '@mui/material';
import { ContactMeFormValues } from '../../../types/contact-me-form-values';
import { useTranslation } from 'react-i18next';

interface Props {
    fieldsData: ContactMeInformation[];
    fieldSx?: SxProps<Theme>;
}

const defaultValues: ContactMeFormValues = {
    name: '',
    email: '',
    reason: '',
};

const ContactMeForm = (props: Props) => {
    const { fieldsData, fieldSx } = props;

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ContactMeFormValues>({ defaultValues });

    const { t } = useTranslation();

    const onSubmit = (data: ContactMeFormValues) => {
        console.log(data);
    };

    const fieldInputs = fieldsData.map((field) => {
        const information = {
            name: field.name,
            label: t(field.label),
            multiline: field.multiline,
            rows: field.rows,
            placeholder: t(field.placeholder),
            error: Boolean(errors[field.name]),
            helperText: t(errors[field.name]?.message),
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
                {t('send')}
            </Button>
        </form>
    );
};

export default ContactMeForm;
