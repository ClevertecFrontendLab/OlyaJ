import { Header } from '@shared/ui/Header/Header';
import './index.css';

import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { layoutContainerStyles } from './app.styles';
import { LeftSidebar } from '@shared/ui/Sidebar/LeftSidebar';


function App() {
    return (
        <>
            <Header />
            <Box {...layoutContainerStyles}>
                <LeftSidebar />
                <Box  px = {{ base: '16px', md: '20px', lg:'20px' }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}

export default App;
