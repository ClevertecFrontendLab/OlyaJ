import './App.css';
import './../index.css';

import { Outlet } from 'react-router-dom';

import { ScrollToTop } from '~/components/ScrollToTop/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
}

export default App;
