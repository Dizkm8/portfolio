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
    },
});

export const customTheme = {
    darkTheme,
    lightTheme,
};
