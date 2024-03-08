import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/errors/NotFound';
import Home from '../pages/home/Home';

const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

export default Router;
