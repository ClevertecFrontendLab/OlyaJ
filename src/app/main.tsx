import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from '../store/configure-store';



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    </StrictMode>
);
