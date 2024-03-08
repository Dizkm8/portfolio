import { createTheme } from '@mui/material';

const light = 'light';

const dark = 'dark';

const baseLight = createTheme({
    palette: {
        mode: light,
    },
});

const baseDark = createTheme({
    palette: {
        mode: dark,
    },
});

const darkTheme = createTheme(baseDark, {
    palette: {
        cBlack: baseDark.palette.augmentColor({
            color: {
                main: '#FFFFFF',
            },
            name: 'cBlack',
        }),
        cYellow: baseDark.palette.augmentColor({
            color: {
                main: '#CCA300',
            },
            name: 'cYellow',
        }),
        cOrange: baseDark.palette.augmentColor({
            color: {
                main: '#FFA500',
            },
            name: 'cOrange',
        }),
    },
});

const lightTheme = createTheme(baseLight, {
    palette: {
        cBlack: baseLight.palette.augmentColor({
            color: {
                main: '#000000',
            },
            name: 'cBlack',
        }),
        cYellow: baseLight.palette.augmentColor({
            color: {
                main: '#FFD700',
            },
            name: 'cYellow',
        }),
        cOrange: baseLight.palette.augmentColor({
            color: {
                main: '#FFA500',
            },
            name: 'cOrange',
        }),
    },
});

export const customTheme = {
    darkTheme,
    lightTheme,
};
