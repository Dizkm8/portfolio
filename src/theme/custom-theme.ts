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
        salmon: baseDark.palette.augmentColor({
            color: {
                main: '#FF5733',
            },
            name: 'salmon',
        }),
    },
});

const lightTheme = createTheme(baseLight, {
    palette: {
        salmon: baseLight.palette.augmentColor({
            color: {
                main: '#FF5733',
            },
            name: 'salmon',
        }),
    },
});

export const customTheme = {
    darkTheme,
    lightTheme,
};
