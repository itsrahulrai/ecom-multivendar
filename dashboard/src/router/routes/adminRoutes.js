import { lazy, createElement } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: createElement(AdminDashboard),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element: createElement(Orders),
        role: 'admin'
    },
    // ORDER DETAILS ROUTE
    {
        path: "admin/dashboard/orders/:id",
        element: createElement(OrderDetails),
        role: "admin",
    },
]