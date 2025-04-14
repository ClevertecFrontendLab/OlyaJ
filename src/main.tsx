import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '~/store/configure-store.ts';

import { router } from './routes/Router';
import { BreadcrumbProvider } from './utils/BreadcrumbsContext';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <BreadcrumbProvider>
                <RouterProvider router={router} />
                </BreadcrumbProvider>
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
