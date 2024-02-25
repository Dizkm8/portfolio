import { Container, Typography } from '@mui/material';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    h1: {
        fontWeight: 700,
        marginBottom: '1rem',
    },
    h2: {
        fontWeight: 300,
        color: '#808080'
    },
};

const AboutMe = () => {
    return (
        <Container maxWidth="lg" sx={styles.container}>
            <Typography component="h1" variant="h2" sx={styles.h1}>
                David Araya Cádiz
            </Typography>
            <Typography component="h2" variant="h5" sx={styles.h2}>
                Software Engineering & Fullstack Web Developer. Passionate about
                creating elegant solutions.
            </Typography>
        </Container>
    );
};

export default AboutMe;