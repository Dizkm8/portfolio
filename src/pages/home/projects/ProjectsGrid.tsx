import { Grid } from '@mui/material';
import ProjectCard from '../../../components/ProjectCard';
import { Project } from '../../../models/project';

interface Props {
    projects: Project[];
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const ProjectsGrid = (props: Props) => {
    const { projects } = props;

    return (
        <Grid container>
            {projects.map((project) => (
                <Grid key={project.title} item md={6} xs={12} lg={4} sx={styles.container}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectsGrid;
