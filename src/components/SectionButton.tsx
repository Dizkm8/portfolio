import { IconButton } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import smoothScrollToTarget from '../utils/scroll-to-target';

interface Props {
    targetID: string;
}

const styles = {
    icon: {
        margin: '0.5rem',
        transform: 'scale(2)',
    },
};
const SectionButton = (props: Props) => {
    const { targetID } = props;

    const handleOnClick = (targetID: string) => {
        smoothScrollToTarget(targetID);
    };

    return (
        <IconButton
            aria-label="delete"
            size="large"
            onClick={() => handleOnClick(targetID)}
        >
            <KeyboardDoubleArrowDownIcon fontSize="inherit" sx={styles.icon} />
        </IconButton>
    );
};

export default SectionButton;
