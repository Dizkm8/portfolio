import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProjectDetail from '../../hooks/useProjectDetail';
import NotFoundPage from '../errors/NotFound';
import { Project } from '../../models/project';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: 10,
    },
    h1: {
        fontWeight: 500,
        marginBottom: '1rem',
    },
};

export const ProjectPage = () => {
    let project: Project | undefined;
    const { projectSlug } = useParams();

    if (!projectSlug) {
        return <NotFoundPage />;
    }
    try {
        project = useProjectDetail({
            projectSlug,
        });
    } catch {
        return <NotFoundPage />;
    }

    return (
        <Container maxWidth="sm" sx={styles.container}>
            <Typography component="h1" variant="h2" sx={styles.h1}>
                {project.title}
            </Typography>
        </Container>
    );
};

export default ProjectPage;
