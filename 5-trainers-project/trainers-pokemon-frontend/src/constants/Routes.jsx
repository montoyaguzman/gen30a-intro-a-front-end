import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home/';
import { FormTrainer } from '../pages/FormTrainer/';
import { DetailTrainer } from '../pages/DetailTrainer/';
import { About } from '../pages/About/';
import { NotFound } from '../pages/NotFound/';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'new-trainer',
            element: <FormTrainer />
        },
        {
            path: 'detail-trainer',
            element: <DetailTrainer />
        },
        {
            path: 'about',
            element: <About />
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]);
    return routes;
}

export { Routes };