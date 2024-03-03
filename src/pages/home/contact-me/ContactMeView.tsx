import { Container, Typography } from '@mui/material';
import { customID } from '../custom-id';
import useFieldsData from '../../../hooks/useFieldsData';
import ContactMeForm from './ContactMeForm';

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

    return (
        <Container
            maxWidth="sm"
            sx={styles.container}
            id={customID.contactMeView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                Contact me
            </Typography>
            <ContactMeForm fieldsData={fieldsData} fieldSx={styles.input} />
        </Container>
    );
};

export default ContactMeView;
