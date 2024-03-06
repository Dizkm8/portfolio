import { Container, Typography } from '@mui/material';
import { customID } from '../custom-id';
import useFieldsData from '../../../hooks/useFieldsData';
import ContactMeForm from './ContactMeForm';
import { useTranslation } from 'react-i18next';

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
    const fieldsData = useFieldsData();
    const { t } = useTranslation();

    return (
        <Container
            maxWidth="sm"
            sx={styles.container}
            id={customID.contactMeView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                {t('contactMeTitle')}
            </Typography>
            <ContactMeForm fieldsData={fieldsData} fieldSx={styles.input} />
        </Container>
    );
};

export default ContactMeView;
