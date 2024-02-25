import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { styles } from './styles';

const AboutMe = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Container maxWidth="sm" sx={styles.container}>
            <img
                src="david-araya-cadiz.webp"
                alt="David Araya Cádiz"
                style={styles.image}
            />
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
