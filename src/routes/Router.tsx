import { ReactNode } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Layout from '~/components/Layout/Layout';
import { Main } from '~/pages/Main/Main';
import { MostJuicy } from '~/pages/MostJuicy/MostJuicy';
import { VeganSecondDishes } from '~/pages/Vegan/VeganSecondDishes';

export type CustomRouteObject = RouteObject & {
    handle?: {
        breadcrumb?: ReactNode;
    };
    children?: CustomRouteObject[];
};

export const routes: CustomRouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        handle: { breadcrumb: 'Главная' },
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'most-juicy',
                element: <MostJuicy />,
                handle: { breadcrumb: 'Самое сочное' },
            },
            {
                path: 'vegan',
                element: <VeganSecondDishes />,
                handle: { breadcrumb: 'Веганская кухня' },
                children: [
                    {
                        path: 'vtorye-blyuda',
                        element: <VeganSecondDishes />,
                        handle: { breadcrumb: 'Вторые блюда' },
                    },
                ],
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
