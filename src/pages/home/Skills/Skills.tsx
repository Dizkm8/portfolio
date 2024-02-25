import { Container, Typography, Grid, Chip } from '@mui/material';
import { styles } from './styles';
import { userSkills } from './user-skills';

const {
    codingSkills,
    devOpsSkills,
    testingSkills,
    designSkills,
    projectManagementSkills,
    versionControlSkills,
    productivityTools,
    softSkills,
} = userSkills;

const skillSection = (skills: string[]) =>
    skills.map((skill) => (
        <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={styles.skillChip}
        />
    ));

const gridSection = (sectionTitle: string, skills: string[]) => (
    <Grid item xs={12} md={4} mb={3}>
        <Typography variant="h5" gutterBottom>
            {sectionTitle}
        </Typography>
        {skillSection(skills)}
    </Grid>
);

const Skills = () => {
    return (
        <Container maxWidth="lg" sx={styles.container}>
            <Typography variant="h3" component="h2" sx={styles.title}>
                Skills
            </Typography>
            <Grid container spacing={2} sx={styles.skillGrid}>
                {gridSection('Coding', codingSkills)}
                {gridSection('Testing', testingSkills)}
                {gridSection('DevOps', devOpsSkills)}
                {gridSection('Design', designSkills)}
                {gridSection('Project Management', projectManagementSkills)}
                {gridSection('Version Control', versionControlSkills)}
                {gridSection('Productivity Tools', productivityTools)}
                {gridSection('Soft Skills', softSkills)}
            </Grid>
        </Container>
    );
};

export default Skills;
