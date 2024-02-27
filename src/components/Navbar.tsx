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

interface Props {
    changeTheme: () => void;
}

const drawerWidth = 240;
const devName = 'David Araya';
const navItems = ['About me', 'Projects', 'Skills', 'Contact'];

const Navbar = (props: Props) => {
    const { changeTheme } = props;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleDarkModeClick = () => {
        setDarkMode((prevState) => !prevState);
        changeTheme();
    };

    const darkModeButton = () => {
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
                        color: '#fff',
                    }}
                />
            </IconButton>
        );
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {devName}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        {devName}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: '#fff',
                                    paddingX: 2,
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                        {darkModeButton()}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
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
