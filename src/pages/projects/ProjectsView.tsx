import { Container, Typography } from '@mui/material';
import { customID } from '../home/custom-id';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        <Container
            maxWidth="lg"
            sx={styles.container}
            id={customID.projectView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                Projects
            </Typography>
        </Container>
    );
};

export default ProjectsView;
