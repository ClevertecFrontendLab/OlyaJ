import { createBrowserRouter } from 'react-router-dom';
import App from './App';

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                lazy: () => import('@features/main/main.page'),
            },
        ],
    },
]);
