import { Button, Container, TextField, Typography } from '@mui/material';
import { customID } from '../custom-id';
import { Controller, useForm } from 'react-hook-form';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 3,
    },
    input: {
        marginBottom: 2,
    },
};

type FormValues = {
    name: string;
    email: string;
    reason: string;
};

const defaultValues: FormValues = {
    name: '',
    email: '',
    reason: '',
};

const ContactMeView = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({ defaultValues });

    const onSubmit = (data) => console.log(data);
    return (
        <Container
            maxWidth="sm"
            sx={styles.container}
            id={customID.contactMeView}
        >
            <form>
                <Typography variant="h3" component="h2" sx={styles.title}>
                    Contact me
                </Typography>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: 'This field is required.',
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters long.',
                        },
                        maxLength: {
                            value: 100,
                            message:
                                'Name must be at most 100 characters long.',
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                            id="outlined-required"
                            label="Your name"
                            placeholder="Ex: John Doe"
                            fullWidth={true}
                            sx={styles.input}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'This field is required.',
                        minLength: {
                            value: 3,
                            message:
                                'Email must be at least 3 characters long.',
                        },
                        maxLength: {
                            value: 100,
                            message:
                                'Email must be at most 100 characters long.',
                        },
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email.',
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                            id="outlined-required"
                            label="Your email"
                            placeholder="Ex: contoso@email.com"
                            fullWidth={true}
                            sx={styles.input}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="reason"
                    rules={{
                        required: 'This field is required.',
                        minLength: {
                            value: 3,
                            message:
                                'Content must be at least 3 characters long.',
                        },
                        maxLength: {
                            value: 500,
                            message:
                                'Content must be at most 100 characters long.',
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                            label="How can I help you?"
                            multiline
                            rows={4}
                            placeholder="Ex: I want a website for my business."
                            fullWidth={true}
                            sx={styles.input}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={Boolean(errors.reason)}
                            helperText={errors.reason?.message}
                        />
                    )}
                />
            </form>
            <Button
                fullWidth={true}
                variant="contained"
                onClick={handleSubmit(onSubmit)}
            >
                Enviar
            </Button>
        </Container>
    );
};

export default ContactMeView;
