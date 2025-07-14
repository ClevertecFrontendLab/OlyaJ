import { Header } from '@shared/ui/Header/Header';
import './App.css';
import './index.css';

import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
