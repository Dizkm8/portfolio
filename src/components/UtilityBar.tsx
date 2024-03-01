import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavItem } from '../interfaces/nav-item.interface';
import { useTheme } from '@mui/material/styles';
import customColors from '../constants/custom-colors';
import { useMediaQuery } from '@mui/material';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { useState } from 'react';

interface Props {
    devName: string;
    handleDrawerToggle: () => void;
    textColor: string;
    handleOnButtonClick: (id: string) => void;
    handleOnDevNameClick: () => void;
    navItems: NavItem[];
    changeTheme: () => void;
}

const UtilityBar = (props: Props) => {
    const {
        devName,
        handleDrawerToggle,
        textColor,
        handleOnButtonClick,
        handleOnDevNameClick,
        navItems,
        changeTheme,
    } = props;
    const theme = useTheme();
    const [darkMode, setDarkMode] = useState(false);

    const burgerColor =
        theme.palette.mode === 'light'
            ? customColors.black
            : customColors.white;

    const isMobileView = useMediaQuery('(max-width:600px)');

    const handleDarkModeClick = () => {
        setDarkMode((prevState) => !prevState);
        changeTheme();
    };

    const themeChangerButton = () => {
        if (darkMode) {
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
                        color: customColors.black,
                    }}
                />
            </IconButton>
        );
    };

    const toolbar = (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                    mr: 2,
                    display: { sm: 'none' },
                    color: burgerColor,
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                    color: textColor,
                }}
                onClick={handleOnDevNameClick}
            >
                {devName}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map(({ name, id }: NavItem) => (
                    <Button
                        key={name}
                        sx={{
                            paddingX: 2,
                            color: textColor,
                        }}
                        onClick={() => handleOnButtonClick(id)}
                    >
                        {name}
                    </Button>
                ))}
                {themeChangerButton()}
            </Box>
        </Toolbar>
    );

    if (isMobileView) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    paddingRight: 1,
                }}
            >
                {toolbar}
                {themeChangerButton()}
            </Box>
        );
    }
    return toolbar;
};

export default UtilityBar;
