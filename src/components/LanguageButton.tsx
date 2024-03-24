import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import customColors from '../constants/custom-colors';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ALL_LANGUAGES,
    SUPPORTED_LANGUAGES,
} from '../i18n/supported-languages';
import { useStorage } from '../hooks/useStorage';

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
    const { i18n } = useTranslation();
    const { theme, setLanguage } = useStorage();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const changeLanguageHandler = (lang: SUPPORTED_LANGUAGES) => {
        if (ALL_LANGUAGES.includes(lang)) {
            i18n.changeLanguage(lang);
            setLanguage(lang);
            return;
        }
        console.error(`Language not supported: ${lang}`);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageButtonClick = (lang: string) => {
        handleClose();
        changeLanguageHandler(lang as SUPPORTED_LANGUAGES);
    };

    const iconColor =
        theme === 'light' ? customColors.gray : customColors.white;

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
                <LanguageIcon />
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
                <MenuItem
                    onClick={() =>
                        handleLanguageButtonClick(SUPPORTED_LANGUAGES.SPANISH)
                    }
                >
                    <Avatar src="spain-flag.webp" />
                    Español
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        handleLanguageButtonClick(SUPPORTED_LANGUAGES.ENGLISH)
                    }
                >
                    <Avatar src="us-flag.webp" />
                    English
                </MenuItem>
            </Menu>
        </>
    );
};

export default LanguageButton;
