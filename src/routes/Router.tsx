import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import { CategoryPage } from '~/components/CategoryPage/CategoryPage';

import Layout from '~/components/Layout/Layout';
import { Main } from '~/pages/Main/Main';
import { MostJuicy } from '~/pages/MostJuicy/MostJuicy';
import { NotFound } from '~/pages/NotFound/NotFound';
import { RecipePage } from '~/pages/RecipePage/RecipePage';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'the-juiciest',
                children: [
                    {
                        index: true,
                        element: <MostJuicy />,
                    },
                    {
                        path: ':id',
                        element: <RecipePage />,
                    },
                ],
            },
            {
                path: ':category',
                element: <Outlet />,
                children: [
                    {
                        path: ':subcategory',
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <CategoryPage />,
                            },
                            {
                                path: ':id',
                                element: <RecipePage />,
                            },
                        ],
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
