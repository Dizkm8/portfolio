import { IconButton, SxProps, Theme } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import smoothScrollToTarget from '../utils/scroll-to-target';

interface Props {
    targetID: string;
    sx?: SxProps<Theme>;
}

const styles = {
    icon: {
        margin: '0.5rem',
        transform: 'scale(2)',
    },
};
const SectionButton = (props: Props) => {
    const { targetID, sx } = props;

    const handleOnClick = (targetID: string) => {
        smoothScrollToTarget(targetID);
    };

    return (
        <IconButton
            aria-label="go-down"
            size="large"
            onClick={() => handleOnClick(targetID)}
            sx={sx}
        >
            <KeyboardDoubleArrowDownIcon fontSize="inherit" sx={styles.icon} />
        </IconButton>
    );
};

export default SectionButton;
