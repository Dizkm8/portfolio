import { Grid, SxProps, Theme, Typography } from '@mui/material';
import SkillChip from './SkillChip';

interface Props {
    sectionTitle: string;
    skills: string[];
    skillChipStyle: SxProps<Theme>;
}

const SkillSection = (props: Props) => {
    const { sectionTitle, skills, skillChipStyle } = props;

    return (
        <Grid item xs={12} md={4} mb={3}>
            <Typography variant="h5" gutterBottom>
                {sectionTitle}
            </Typography>
            <SkillChip skills={skills} style={skillChipStyle} />
        </Grid>
    );
};

export default SkillSection;
