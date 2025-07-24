import { Header } from '@shared/ui/Header/Header';
import './index.css';

import { Outlet } from 'react-router-dom';
import { Box} from '@chakra-ui/react';
import { layoutContainerStyles } from './app.styles';
import { LeftSidebar } from '@shared/ui/Sidebar/LeftSidebar';
import { contentAppStyles } from "./app.styles"
import { Footer } from "./../widgets/Footer/Footer"
import { TabletFooter } from '@shared/ui/TabletFooter/TabletFooter';


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
            <Box mx="auto">
            <Footer/>
            </Box>
            <TabletFooter/>
        </>
    );
}

export default App;
