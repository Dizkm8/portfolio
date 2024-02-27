import { Container, Typography } from '@mui/material';
import { customID } from '../custom-id';
import ProjectCard from '../../../components/ProjectCard';
import useProjects from '../../../hooks/useProjects';

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
    const projects = useProjects();

    const projectsCards = projects.map((project) => (
        <ProjectCard project={project} />
    ));

    return (
        <Container
            maxWidth="lg"
            sx={styles.container}
            id={customID.projectView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                Projects
            </Typography>
            {projectsCards}
        </Container>
    );
};

export default ProjectsView;
