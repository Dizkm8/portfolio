import { Container, Typography } from '@mui/material';
import { customID } from '../custom-id';
import useProjects from '../../../hooks/useProjects';
import ProjectsGrid from './ProjectsGrid';
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
};

const ProjectsView = () => {
    const projects = useProjects();
    const { t } = useTranslation();

    return (
        <Container
            maxWidth="xl"
            sx={styles.container}
            id={customID.projectsView}
        >
            <Typography variant="h3" component="h2" sx={styles.title}>
                {t('projectsTitle')}
            </Typography>
            <ProjectsGrid projects={projects} />
        </Container>
    );
};

export default ProjectsView;
