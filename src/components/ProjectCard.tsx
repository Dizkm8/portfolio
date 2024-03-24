import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Project } from '../models/project';
import SourceCodeButton from './SourceCodeButton';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DemoButton from './DemoButton';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        maxWidth: 345,
        minHeight: 500,
        marginY: 3,
        boxShadow: 10,
    },
    media: {
        height: 240,
    },
    description: {
        textAlign: 'left',
    },
    title: {
        textAlign: 'center',
    },
    cardContent: {
        minHeight: 220,
    },
};

interface Props {
    project: Project;
}

const ProjectCard = (props: Props) => {
    const { project } = props;
    const {
        title,
        slug,
        image,
        description,
        frontendRepo,
        backendRepo,
        demoLink,
        fullstackRepo,
    } = project;
    const { t } = useTranslation();

    let buttons;

    if (fullstackRepo) {
        buttons = (
            <SourceCodeButton fullWidth href={fullstackRepo} target="_blank">
                Frontend + Backend
            </SourceCodeButton>
        );
    } else if (demoLink) {
        buttons = (
            <DemoButton fullWidth href={demoLink} target="_blank">
                Demo
            </DemoButton>
        );
    } else {
        buttons = (
            <>
                <SourceCodeButton fullWidth href={frontendRepo} target="_blank">
                    Frontend
                </SourceCodeButton>
                <SourceCodeButton fullWidth href={backendRepo} target="_blank">
                    Backend
                </SourceCodeButton>
            </>
        );
    }

    return (
        <Card sx={styles.card}>
            <CardActionArea component={Link} to={`/projects/${slug}`}>
                <CardMedia sx={styles.media} image={image} title="Dvd" />
            </CardActionArea>
            <Divider />
            <CardContent sx={styles.cardContent}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.title}
                >
                    {t(title)}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={styles.description}
                >
                    {t(description)}
                </Typography>
            </CardContent>
            <CardActions>{buttons}</CardActions>
        </Card>
    );
};

export default ProjectCard;
