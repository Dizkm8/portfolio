import { Container, Typography } from '@mui/material';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        textAlign: 'center',
        paddingTop: 10,
    },
    title: {
        marginBottom: 3,
    },
};

const ProjectsView = () => {
    return (
        <Container maxWidth="lg" sx={styles.container}>
            <Typography variant="h3" component="h2" sx={styles.title}>
                Skills
            </Typography>
        </Container>
    );
};

export default ProjectsView;
