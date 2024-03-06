import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import smoothScrollToTarget from './utils/scroll-to-target';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { useThemeMode } from './hooks/useThemeMode';

const App = () => {
    const { muiTheme } = useThemeMode();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            smoothScrollToTarget(targetId);
        }
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <Navbar/>
                <Home />
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default App;
