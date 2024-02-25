import { Container, Typography, Grid, Chip } from '@mui/material';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        textAlign: 'center',
        paddingTop: 6,
    },
    title: {
        marginBottom: 3,
    },
    skillGrid: {
        marginTop: '2rem',
        justifyContent: 'center',
    },
    skillChip: {
        margin: '0.5rem',
    },
};

const codingSkills = [
    '.NET Core',
    'NestJs',
    'React',
    'Django Rest Framework',
    'mySQL',
    'PostgreSQL',
    'Firebase',
    'MongoDB',
    'RESTful APIs',
    'GraphQL',
    'MVC',
    'Swagger',
];

const devOpsSkills = ['Docker', 'Azure', 'GitHub Actions'];

const testingSkills = ['Postman', 'JMeter', 'Jest'];

const designSkills = ['Figma', 'MarvelApp', 'Uizard'];

const projectManagementSkills = ['Scrum', 'Jira', 'Confluence', 'Trello'];

const versionControlSkills = ['Git', 'Bitbucket', 'GitHub'];

const productivityTools = ['Microsoft Office', 'Google Workspace'];

const softSkills = [
    'Communication',
    'Teamwork',
    'Problem-solving',
    'Adaptability',
    'Time Management',
    'Leadership',
];

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
