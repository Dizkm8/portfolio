import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProjectTech } from '../models/project-tech';

const styles = {
    container: {
        margin: '2rem 0 3rem',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '40%',
        height: 'auto',
    },
    stackCategory: {
        marginBottom: '1rem',
        fontWeight: 500,
    },
    stackTitle: {
        margin: '1rem 0',
    },
};

const urlPathGenerator = (imageName: string) => {
    return `./../stack-icons/${imageName}`;
};

interface Props {
    techStack: ProjectTech[];
}

const ProjectStack = (props: Props) => {
    const { techStack } = props;
    const { t } = useTranslation();

    return (
        <Grid container sx={styles.container} maxWidth="md">
            {techStack.map(({ category, title, imageName }) => (
                <Grid item md={4} xs={12} key={title}>
                    <Box sx={styles.box}>
                        <Typography sx={styles.stackCategory} variant="h5">
                            {t(category)}
                        </Typography>
                        <img
                            src={urlPathGenerator(imageName)}
                            style={styles.image}
                        />
                        <Typography sx={styles.stackTitle} variant="subtitle1">
                            {t(title)}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectStack;
