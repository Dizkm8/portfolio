import { IconButton } from '@mui/material';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import customColors from '../constants/custom-colors';
import { useStorage } from '../hooks/useStorage';

const ThemeChangerButton = () => {
    const { theme, invertTheme } = useStorage();

    const handleDarkModeClick = () => {
        invertTheme();
    };

    if (theme !== 'light') {
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
