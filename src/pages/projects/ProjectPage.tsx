import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProjectDetail from '../../hooks/useProjectDetail';
import NotFoundPage from '../errors/NotFound';
import { Project } from '../../models/project';
import { useTranslation } from 'react-i18next';
import ProjectStack from '../../components/ProjectStack';
import ImageCarousel from '../../components/ImageCarousel';

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
    h2: {
        fontWeight: 500,
        marginBottom: '1rem',
    },
    galleryTitle: {
        marginTop: '2rem',
        marginBottom: '1rem',
    },
    p: {
        fontWeight: 400,
    },
};

export const ProjectPage = () => {
    let project: Project | undefined;
    const { projectSlug } = useParams();
    const { t } = useTranslation();

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
        <Container maxWidth="lg" sx={styles.container}>
            <Typography component="h1" variant="h2" sx={styles.h1}>
                {project.title}
            </Typography>
            <Typography component="p" variant="h6" align="left" sx={styles.p}>
                {t(project.description)}
            </Typography>
            <Typography
                component="p"
                variant="h4"
                align="left"
                sx={styles.galleryTitle}
            >
                {t('imageGallery')}
            </Typography>
            <ImageCarousel carouselImages={project.carouselImages} />
            <Typography component="h2" variant="h3" align="left" sx={styles.h2}>
                {t('technologies')}
            </Typography>
            <ProjectStack techStack={project.techStack} />
        </Container>
    );
};

export default ProjectPage;
