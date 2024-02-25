import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';

function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Home />
        </>
    );
}

export default App;
