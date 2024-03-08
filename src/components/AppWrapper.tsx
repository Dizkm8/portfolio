import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import { useStorage } from '../hooks/useStorage';
import i18n from '../i18n/i18n';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const AppWrapper = ({ children }: Props) => {
    const { theme, muiTheme, setTheme } = useStorage();

    React.useEffect(() => {
        setTheme(theme);
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default AppWrapper;
