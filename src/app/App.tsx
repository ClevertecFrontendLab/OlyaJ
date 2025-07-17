import { Header } from '@shared/ui/Header/Header';
import './index.css';

import { Outlet } from 'react-router-dom';
import { Box} from '@chakra-ui/react';
import { layoutContainerStyles } from './app.styles';
import { LeftSidebar } from '@shared/ui/Sidebar/LeftSidebar';
import { contentAppStyles } from "./app.styles"


function App() {
    return (
        <>
            <Header />
            <Box {...layoutContainerStyles}>
                <LeftSidebar />
                <Box {...contentAppStyles}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}

export default App;
