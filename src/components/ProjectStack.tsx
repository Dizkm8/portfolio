import { Box, Grid, Typography } from '@mui/material';

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
    stackTitle: {
        marginBottom: '1rem',
    },
};

const stack = [
    {
        title: 'Frontend',
        image: './../react-icon.webp',
    },
    {
        title: 'Backend',
        image: './../nodejs-icon.webp',
    },
    {
        title: 'Base de Datos',
        image: './../mongodb-icon.webp',
    },
];

const items = stack.map((item) => {
    return (
        <Grid item md={4} xs={12}>
            <Box sx={styles.box}>
                <Typography sx={styles.stackTitle}>{item.title}</Typography>
                <img src={item.image} style={styles.image} />
            </Box>
        </Grid>
    );
});

const ProjectStack = () => {
    return (
        <Grid container sx={styles.container} maxWidth="md">
            {items}
        </Grid>
    );
};

export default ProjectStack;
