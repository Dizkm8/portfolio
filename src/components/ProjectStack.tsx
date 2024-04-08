import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
    },
    stackTitle: {
        margin: '1rem 0',
    },
};

const stackItems = [
    {
        category: 'frontend',
        title: 'React 18',
        image: './../stack-icons/react.webp',
    },
    {
        category: 'backend',
        title: '.NET 7.0',
        image: './../stack-icons/dotnet.webp',
    },
    {
        category: 'db',
        title: 'MS SQL Server',
        image: './../stack-icons/mssqlserver.webp',
    },
];

const ProjectStack = () => {
    const { t } = useTranslation();

    return (
        <Grid container sx={styles.container} maxWidth="md">
            {stackItems.map(({ category, title, image }) => (
                <Grid item md={4} xs={12}>
                    <Box sx={styles.box}>
                        <Typography sx={styles.stackCategory} variant="h6">
                            {t(category)}
                        </Typography>
                        <img src={image} style={styles.image} />
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
