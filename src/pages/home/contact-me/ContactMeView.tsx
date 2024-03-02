import { Container, TextField, Typography } from '@mui/material';
import { customID } from '../custom-id';

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

const ContactMeView = () => {
    return (
        <Container
            maxWidth="sm"
            sx={styles.container}
            id={customID.contactMeView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                Contact me
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="Your name"
                placeholder="Ex: John Doe"
                fullWidth={true}
                sx={styles.input}
            />
            <TextField
                required
                id="outlined-required"
                label="Your email"
                placeholder="Ex: contoso@email.com"
                fullWidth={true}
                sx={styles.input}
            />
            <TextField
                id="outlined-multiline-static"
                label="How can I help you?"
                multiline
                rows={4}
                placeholder="Ex: I want a website for my business."
                fullWidth={true}
                sx={styles.input}
            />
        </Container>
    );
};

export default ContactMeView;
