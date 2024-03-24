import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProjectDetail from '../../hooks/useProjectDetail';
import NotFoundPage from '../errors/NotFound';

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
    const { projectId } = useParams();

    if (!projectId) {
        return <NotFoundPage />;
    }
    const { projectDetail } = useProjectDetail({ projectId });

    return (
        <Container maxWidth="sm" sx={styles.container}>
            <Typography component="h1" variant="h2" sx={styles.h1}>
                {projectDetail.name}
            </Typography>
        </Container>
    );
};

export default ProjectPage;
