import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import smoothScrollToTarget from './utils/scroll-to-target';
import { useEffect, useState } from 'react';
import { customTheme } from './theme/custom-theme';

const App = () => {
    const [theme, setTheme] = useState(customTheme.lightTheme);

    const handleTheme = () => {
        setTheme(({ palette }) => {
            if (palette.mode === 'light') {
                return customTheme.darkTheme;
            }
            return customTheme.lightTheme;
        });
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            smoothScrollToTarget(targetId);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar changeTheme={handleTheme} />
            <Home />
        </ThemeProvider>
    );
};

export default App;
