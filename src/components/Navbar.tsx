import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import smoothScrollToTarget from '../utils/scroll-to-target';
import useNavItems from '../hooks/useNavItems';
import { customID } from '../pages/home/custom-id';
import { useTheme } from '@mui/material/styles';
import customColors from '../constants/custom-colors';
import UtilityBar from './UtilityBar';
import { NavItem } from '../interfaces/nav-item.interface';

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

    const navItems = useNavItems();

    const handleOnDevNameClick = () => {
        handleOnButtonClick(customID.aboutMeView);
    };

    const handleOnButtonClick = (targetID: string) => {
        smoothScrollToTarget(targetID);
    };

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
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
                {navItems.map(({ id, name }: NavItem) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => handleOnButtonClick(id)}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: navBarColor,
                }}
            >
                <UtilityBar
                    devName={devName}
                    handleDrawerToggle={handleDrawerToggle}
                    textColor={textColor}
                    handleOnButtonClick={handleOnButtonClick}
                    handleOnDevNameClick={handleOnDevNameClick}
                    navItems={navItems}
                    changeTheme={changeTheme}
                />
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
