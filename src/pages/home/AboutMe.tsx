import { Button, Container, Typography } from '@mui/material';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    h1: {
        fontWeight: 700,
        marginBottom: '1rem',
    },
    h2: {
        fontWeight: 300,
        color: '#808080',
    },
    button: {
        marginTop: 3,
        width: '50%',
    },
};

const AboutMe = () => {
    return (
        <Container maxWidth="sm" sx={styles.container}>
            <Typography component="h1" variant="h2" sx={styles.h1}>
                David Araya Cádiz
            </Typography>
            <Typography component="p" variant="h5" sx={styles.h2}>
                Software Engineering & Fullstack Web Developer. Passionate about
                creating elegant solutions.
            </Typography>
            <Button variant="contained" sx={styles.button}>
                Download Resume
            </Button>
        </Container>
    );
};

export default AboutMe;
