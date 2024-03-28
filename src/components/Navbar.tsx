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
import customColors from '../constants/custom-colors';
import UtilityBar from './UtilityBar';
import { NavItem } from '../interfaces/nav-item.interface';
import { useTranslation } from 'react-i18next';
import { useStorage } from '../hooks/useStorage';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const devName = 'David Araya';

const Navbar = () => {
    const { theme } = useStorage();
    const { t } = useTranslation();

    const textColor =
        theme === 'light' ? customColors.gray : customColors.white;

    const themeAwareColor =
        theme === 'light' ? customColors.white : customColors.black;

    const navItems = useNavItems();

    const handleOnButtonClick = (targetID: string) => {
        smoothScrollToTarget(targetID);
    };

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link
                to={'/aaa'}
                style={{ textDecoration: 'none', color: themeAwareColor }}
            >
                <Typography variant="h6" sx={{ my: 2, color: textColor }}>
                    {devName}
                </Typography>
            </Link>

            <Divider />
            <List>
                {navItems.map(({ id, name }: NavItem) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => handleOnButtonClick(id)}
                        >
                            <ListItemText primary={t(name)} />
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
                    backgroundColor: themeAwareColor,
                }}
            >
                <UtilityBar
                    devName={devName}
                    handleDrawerToggle={handleDrawerToggle}
                    textColor={textColor}
                    handleOnButtonClick={handleOnButtonClick}
                    navItems={navItems}
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
