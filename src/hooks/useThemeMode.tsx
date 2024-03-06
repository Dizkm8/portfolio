import { create } from 'zustand';
import { customTheme } from '../theme/custom-theme';
import { Theme } from '@emotion/react';

interface ThemeMode {
    theme: string;
    muiTheme: Theme;
    setTheme: (newTheme: string) => void;
    invertTheme: () => void;
}

const selectMuiTheme = (theme: string) => {
    switch (theme) {
        case 'light':
            return customTheme.lightTheme;
        case 'dark':
            return customTheme.darkTheme;
        default:
            return customTheme.lightTheme;
    }
};

export const useThemeMode = create<ThemeMode>()((set) => ({
    theme: 'light',
    muiTheme: customTheme.lightTheme,
    setTheme: (newTheme: string) => set({ theme: newTheme }),
    invertTheme: () =>
        set((state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            return {
                theme: newTheme,
                muiTheme: selectMuiTheme(newTheme),
            };
        }),
}));
