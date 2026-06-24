import { createElement } from 'react';
import { privateRoutes } from './privateRoutes.js';
import MainLayout from '../../layout/MainLayout.jsx';
import ProtectRoute from './ProtectRoute.jsx';

privateRoutes.forEach(r => {
    // console.log(r)
    r.element = createElement(
        ProtectRoute,
        { route: r },
        r.element
    );
});

export const getRoutes = () => {
    return {
        path: '/',
        element: createElement(MainLayout),
        children: privateRoutes
    };
};