import { Grid, SxProps, Theme } from '@mui/material';
import SkillSection from '../../../components/SkillSection';

interface Props {
    codingSkills: string[];
    devOpsSkills: string[];
    testingSkills: string[];
    designSkills: string[];
    projectManagementSkills: string[];
    versionControlSkills: string[];
    productivityTools: string[];
    softSkills: string[];
    gridStyle: SxProps<Theme>;
    chipStyle: SxProps<Theme>;
}

const Skills = (props: Props) => {
    const {
        codingSkills,
        devOpsSkills,
        testingSkills,
        designSkills,
        projectManagementSkills,
        versionControlSkills,
        productivityTools,
        softSkills,
        chipStyle,
        gridStyle,
    } = props;

    return (
        <Grid container spacing={2} sx={gridStyle}>
            <SkillSection
                sectionTitle="Coding"
                skills={codingSkills}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="Testing"
                skills={testingSkills}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="DevOps"
                skills={devOpsSkills}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="Design"
                skills={designSkills}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="Project Management"
                skills={projectManagementSkills}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="Version Control"
                skills={versionControlSkills}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="Productivity Tools"
                skills={productivityTools}
                skillChipStyle={chipStyle}
            />
            <SkillSection
                sectionTitle="Soft Skills"
                skills={softSkills}
                skillChipStyle={chipStyle}
            />
        </Grid>
    );
};

export default Skills;
