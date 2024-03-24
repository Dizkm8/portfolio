import { Container, Typography } from '@mui/material';
import { customID } from '../custom-id';
import SectionButton from '../../../components/SectionButton';
import { useTranslation } from 'react-i18next';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    },
    image: {
        marginTop: 50,
        maxWidth: '55%',
        height: 'auto',
        borderRadius: '50%',
        marginBottom: '1rem',
    },
    h1: {
        fontWeight: 700,
        marginBottom: '1rem',
    },
    h2: {
        fontWeight: 300,
        color: '#808080',
        marginBottom: '2rem',
    },
};

const AboutMeView = () => {
    const { t } = useTranslation();

    return (
        <Container
            maxWidth="sm"
            sx={styles.container}
            id={customID.aboutMeView}
        >
            <img
                src="david-araya-cadiz.webp"
                alt="David Araya Cádiz"
                style={styles.image}
            />
            <Typography component="h1" variant="h2" sx={styles.h1}>
                David Araya Cádiz
            </Typography>
            <Typography component="p" variant="h5" sx={styles.h2}>
                {t('AboutMe')}
            </Typography>
            <SectionButton targetID={customID.projectsView} />
        </Container>
    );
};

export default AboutMeView;
