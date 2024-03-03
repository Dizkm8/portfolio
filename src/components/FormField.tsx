import { SxProps, TextField, Theme } from '@mui/material';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FieldInformation } from '../interfaces/field-information.interface';
import { ContactMeFormValues } from '../types/contact-me-form-values';

interface Props {
    sx?: SxProps<Theme> | undefined;
    rules?: Omit<
        RegisterOptions<ContactMeFormValues, any>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >;
    control?: Control<ContactMeFormValues>;
    information: FieldInformation;
}

const FormField = (props: Props) => {
    const { sx, rules, control, information } = props;
    const { name, label, multiline, rows, placeholder, error, helperText } =
        information;
    return (
        <Controller
            key={name}
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                    label={label}
                    multiline={multiline}
                    rows={rows}
                    placeholder={placeholder}
                    fullWidth={true}
                    sx={sx}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={error}
                    helperText={helperText}
                />
            )}
        />
    );
};

export default FormField;
