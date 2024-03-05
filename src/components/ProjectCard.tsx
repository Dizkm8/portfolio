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

const styles = {
    card: {
        maxWidth: 345,
        height: 500,
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
};

interface Props {
    project: Project;
}

const ProjectCard = (props: Props) => {
    const { project } = props;
    const { title, image, description, frontendRepo, backendRepo } = project;
    const { t } = useTranslation();

    return (
        <Card sx={styles.card}>
            <CardActionArea>
                <CardMedia sx={styles.media} image={image} title="Dvd" />
            </CardActionArea>
            <Divider />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.title}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={styles.description}
                >
                    {t(description)}
                </Typography>
            </CardContent>
            <CardActions>
                <SourceCodeButton
                    fullWidth={true}
                    href={frontendRepo}
                    target="_blank"
                >
                    Frontend
                </SourceCodeButton>
                <SourceCodeButton
                    fullWidth={true}
                    href={backendRepo}
                    target="_blank"
                >
                    Backend
                </SourceCodeButton>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
