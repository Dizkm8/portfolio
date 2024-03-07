import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavItem } from '../interfaces/nav-item.interface';
import customColors from '../constants/custom-colors';
import { useMediaQuery } from '@mui/material';
import ThemeChangerButton from './ThemeChangerButton';
import LanguageButton from './LanguageButton';
import { useTranslation } from 'react-i18next';
import { useThemeMode } from '../hooks/useThemeMode';

interface Props {
    devName: string;
    handleDrawerToggle: () => void;
    textColor: string;
    handleOnButtonClick: (id: string) => void;
    handleOnDevNameClick: () => void;
    navItems: NavItem[];
}

const UtilityBar = (props: Props) => {
    const {
        devName,
        handleDrawerToggle,
        textColor,
        handleOnButtonClick,
        handleOnDevNameClick,
        navItems,
    } = props;
    const { t } = useTranslation();
    const { theme } = useThemeMode();

    const burgerColor =
        theme === 'light' ? customColors.black : customColors.white;

    const isMobileView = useMediaQuery('(max-width:600px)');

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
                        {t(name)}
                    </Button>
                ))}
                <LanguageButton />
                <ThemeChangerButton />
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
                <Box>
                    <LanguageButton />
                    <ThemeChangerButton />
                </Box>
            </Box>
        );
    }
    return toolbar;
};

export default UtilityBar;
