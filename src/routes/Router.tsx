import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';

import Layout from '~/components/Layout/Layout';
import { Main } from '~/pages/Main/Main';
import { MostJuicy } from '~/pages/MostJuicy/MostJuicy';
import { NotFound } from '~/pages/NotFound/NotFound';
import { VeganSecondDishes } from '~/pages/Vegan/VeganSecondDishes';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'most-juicy',
                element: <MostJuicy />,
            },
            {
                path: 'vegan',
                element: <Outlet />,
                children: [
                    {
                        path: 'vtorye-blyuda',
                        element: <VeganSecondDishes />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
