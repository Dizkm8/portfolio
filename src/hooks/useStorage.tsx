import { create } from 'zustand';
import { customTheme } from '../theme/custom-theme';
import { Theme } from '@emotion/react';
import { persist } from 'zustand/middleware';
import { SUPPORTED_LANGUAGES } from '../i18n/supported-languages';

interface Storage {
    language: SUPPORTED_LANGUAGES;
    setLanguage: (newLanguage: SUPPORTED_LANGUAGES) => void;
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

export const useStorage = create<Storage>()(
    persist(
        (set) => ({
            language: SUPPORTED_LANGUAGES.ENGLISH,
            setLanguage: (newLanguage: SUPPORTED_LANGUAGES) =>
                set({ language: newLanguage }),
            theme: 'light',
            muiTheme: customTheme.lightTheme,
            setTheme: (newTheme: string) =>
                set({
                    theme: newTheme,
                    muiTheme: selectMuiTheme(newTheme),
                }),
            invertTheme: () =>
                set((state) => {
                    const newTheme = state.theme === 'light' ? 'dark' : 'light';
                    return {
                        theme: newTheme,
                        muiTheme: selectMuiTheme(newTheme),
                    };
                }),
        }),
        {
            name: 'theme-mode',
            partialize: (state) => ({
                theme: state.theme,
                language: state.language,
            }),
        }
    )
);
