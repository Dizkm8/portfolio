import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import smoothScrollToTarget from './utils/scroll-to-target';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            smoothScrollToTarget(targetId);
        }
    }, []);

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Home />
        </>
    );
};

export default App;
