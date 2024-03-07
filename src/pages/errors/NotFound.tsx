import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
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

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <Container maxWidth="sm" sx={styles.container}>
            <Typography component="p" variant="h5" sx={styles.h2}>
                {t('notFound')}
            </Typography>
        </Container>
    );
};

export default NotFoundPage;
