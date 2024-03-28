import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProjectDetail from '../../hooks/useProjectDetail';
import NotFoundPage from '../errors/NotFound';
import { Project } from '../../models/project';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel';
import ProjectStack from '../../components/ProjectStack';

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
    p: {
        fontWeight: 400,
    },
    carousel: {
        margin: '2rem 0 3rem',
        width: '100%',
        height: '60vh',
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
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
    const imageUrl = `./../${project.image}`;

    const items = [
        // @ts-ignore
        <img key={imageUrl} src={imageUrl} style={styles.image} />,
    ];

    return (
        <Container maxWidth="lg" sx={styles.container}>
            <Typography component="h1" variant="h2" sx={styles.h1}>
                {project.title}
            </Typography>
            <Typography component="p" variant="h6" align="left" sx={styles.p}>
                {t(project.description)}
            </Typography>
            <Carousel sx={styles.carousel} height={styles.carousel.height}>
                {items}
            </Carousel>
            <Typography component="h2" variant="h3" align="left" sx={styles.h2}>
                {t('technologies')}
            </Typography>
            <ProjectStack />
        </Container>
    );
};

export default ProjectPage;
