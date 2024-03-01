import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { useState } from 'react';
import smoothScrollToTarget from '../utils/scroll-to-target';
import useNavItems from '../hooks/useNavItems';
import { NavItem } from '../interfaces/nav-item.interface';
import { customID } from '../pages/home/custom-id';
import { useTheme } from '@mui/material/styles';
import customColors from '../constants/custom-colors';
import { useMediaQuery } from '@mui/material';

interface Props {
    changeTheme: () => void;
}

const drawerWidth = 240;
const devName = 'David Araya';

const Navbar = (props: Props) => {
    const { changeTheme } = props;
    const theme = useTheme();

    const textColor =
        theme.palette.mode === 'light'
            ? customColors.black
            : customColors.white;

    const navBarColor =
        theme.palette.mode === 'light'
            ? customColors.white
            : customColors.black;

    const burgerColor =
        theme.palette.mode === 'light'
            ? customColors.black
            : customColors.white;

    const navItems = useNavItems();

    const isMobileView = useMediaQuery('(max-width:600px)');

    const handleOnDevNameClick = () => {
        handleOnButtonClick(customID.aboutMeView);
    };

    const handleOnButtonClick = (targetID: string) => {
        smoothScrollToTarget(targetID);
    };

    const [mobileOpen, setMobileOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

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

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{ my: 2, color: textColor }}
                onClick={handleOnDevNameClick}
            >
                {devName}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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

    const getToolbar = () => {
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

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: navBarColor,
                }}
            >
                {getToolbar()}
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Navbar;
