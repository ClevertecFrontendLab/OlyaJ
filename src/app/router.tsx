import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ROUTES } from '@shared/model/routes';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.MAIN,
        lazy: () => import('@features/main/main.page'),
      },
      {
        path: ROUTES.AUTH,
        lazy: ()=> import('@features/auth/login.page'),
      },
      {
        path: ROUTES.SIGNUP,
        lazy: ()=> import('@features/auth/signup.page')
      },
      {
        path: ROUTES.SUBCATEGORY,
        lazy: () => import('@features/subcategory/subcategory.page'),
      },
      {
        path: ROUTES.MOST_JUICY,
        lazy: () => import('@features/most-juicy/mostJuicy.page'),
      },
      {
        path: ROUTES.RECIPE,
        lazy: () => import('@features/recipe/recipe.page'),
      }
    ],
  },
]);
