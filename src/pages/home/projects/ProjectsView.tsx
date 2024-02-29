import { Container, Typography } from '@mui/material';
import { customID } from '../custom-id';
import useProjects from '../../../hooks/useProjects';
import ProjectsGrid from './ProjectsGrid';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: 10,
    },
    title: {
        marginBottom: 3,
    },
};

const ProjectsView = () => {
    const projects = useProjects();

    return (
        <Container
            maxWidth="xl"
            sx={styles.container}
            id={customID.projectView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                Projects
            </Typography>
            <ProjectsGrid projects={projects} />
        </Container>
    );
};

export default ProjectsView;
