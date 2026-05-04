import { createElement } from 'react';
import { privateRoutes } from './privateRoutes.js';
import MainLayout from '../../layout/MainLayout.jsx';

export const getRoutes = () => {
    return {
        path: '/',
        element: createElement(MainLayout),
        children: privateRoutes
    };
};