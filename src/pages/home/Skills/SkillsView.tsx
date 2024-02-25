import { Container, Typography } from '@mui/material';
import { styles } from './styles';
import { userSkills } from './user-skills';
import Skills from './Skills';

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

const SkillsView = () => {
    return (
        <Container maxWidth="lg" sx={styles.container}>
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
        </Container>
    );
};

export default SkillsView;
