import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import smoothScrollToTarget from './utils/scroll-to-target';
import { useEffect, useState } from 'react';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const [theme, setTheme] = useState(lightTheme);

    const handleTheme = () => {
        setTheme((prevState) => {
            if (prevState.palette.mode === 'light') {
                return darkTheme;
            }
            return lightTheme;
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
