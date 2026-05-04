import { lazy,createElement  } from "react";
const Home = lazy(() => import("../../views/Home"));

export const sellerRoutes = [
    {
        path: '/',
        element: createElement(Home), 
        ability : ['admin','seller']
    }
]