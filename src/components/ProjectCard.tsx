import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Project } from '../models/project';

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
};

interface Props {
    project: Project;
}

const ProjectCard = (props: Props) => {
    const { project } = props;
    const { title, image, description } = project;

    return (
        <Card sx={styles.card}>
            <CardMedia sx={styles.media} image={image} title="Dvd" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={styles.description}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                >
                    Frontend
                </Button>
                <Button variant="outlined" startIcon={<GitHubIcon />}>
                    Backend
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
