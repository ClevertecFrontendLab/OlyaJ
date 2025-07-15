import { Header } from '@shared/ui/Header/Header';
import './index.css';

import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { layoutContainerStyles } from './app.styles';

function App() {
    return (
        <>
            <Header />
            <Box {...layoutContainerStyles}>
                <Outlet />
            </Box>
        </>
    );
}

export default App;
