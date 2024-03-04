import { IconButton } from '@mui/material';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import customColors from '../constants/custom-colors';

interface Props {
    isDarkMode: boolean;
    handleDarkModeClick: () => void;
}

const ThemeChangerButton = (props: Props) => {
    const { isDarkMode, handleDarkModeClick } = props;
    if (isDarkMode) {
        return (
            <IconButton
                aria-label="enable-dark-mode"
                size="large"
                onClick={handleDarkModeClick}
            >
                <Brightness6RoundedIcon fontSize="inherit" />
            </IconButton>
        );
    }
    return (
        <IconButton
            aria-label="enable-dark-mode"
            size="large"
            onClick={handleDarkModeClick}
        >
            <NightlightRoundedIcon
                fontSize="inherit"
                sx={{
                    color: customColors.gray,
                }}
            />
        </IconButton>
    );
};

export default ThemeChangerButton;
