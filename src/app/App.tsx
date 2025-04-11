import './App.css';
import './../index.css';

import { useRoutes } from 'react-router-dom';

import { ScrollToTop } from '~/components/ScrollToTop/ScrollToTop';
import { routes } from '~/routes/Router';

function App() {
    const routing = useRoutes(routes);

    return (
        <>
            <ScrollToTop />
            {routing}
        </>
    );
}

export default App;
