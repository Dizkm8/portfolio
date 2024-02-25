import { Chip, SxProps, Theme } from '@mui/material';

interface Props {
    skills: string[];
    style: SxProps<Theme>;
}

const SkillChip = (props: Props) => {
    const { skills, style } = props;

    return skills.map((skill) => (
        <Chip key={skill} label={skill} variant="outlined" sx={style} />
    ));
};

export default SkillChip;
