import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useStorage } from './hooks/useStorage';
import { Outlet } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';

const App = () => {
    const { theme, setTheme } = useStorage();

    useEffect(() => {
        setTheme(theme);
    }, []);

    return (
        <AppWrapper>
            <Navbar />
            <Outlet />
        </AppWrapper>
    );
};

export default App;
