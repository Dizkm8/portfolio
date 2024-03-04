import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useTheme } from '@mui/material/styles';
import customColors from '../constants/custom-colors';

const styles = {
    menu: {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
    },
};

const LanguageButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const iconColor =
        theme.palette.mode === 'light'
            ? customColors.gray
            : customColors.white;

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{
                    padding: 1,
                    color: iconColor,
                }}
            >
                <GTranslateIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="language-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{ paper: styles.menu }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar src="spain-flag.webp" />
                    Español
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar src="us-flag.webp" />
                    English
                </MenuItem>
            </Menu>
        </>
    );
};

export default LanguageButton;
