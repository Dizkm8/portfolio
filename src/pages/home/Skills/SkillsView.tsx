import { Container, Typography } from '@mui/material';
import { userSkills } from './user-skills';
import Skills from './Skills';
import { customID } from '../custom-id';
import SectionButton from '../../../components/SectionButton';

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

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        paddingTop: 10,
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

const SkillsView = () => {
    return (
        <Container maxWidth="lg" sx={styles.container} id={customID.skillsView}>
            <Typography variant="h3" component="h2" sx={styles.title}>
                Skills
            </Typography>
            <Skills
                codingSkills={codingSkills}
                devOpsSkills={devOpsSkills}
                testingSkills={testingSkills}
                designSkills={designSkills}
                projectManagementSkills={projectManagementSkills}
                versionControlSkills={versionControlSkills}
                productivityTools={productivityTools}
                softSkills={softSkills}
                gridStyle={styles.skillGrid}
                chipStyle={styles.skillChip}
            />
            <SectionButton targetID={customID.projectView} />
        </Container>
    );
};

export default SkillsView;
