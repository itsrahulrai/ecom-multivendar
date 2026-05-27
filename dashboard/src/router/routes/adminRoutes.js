import { lazy, createElement } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequests = lazy(() => import("../../views/admin/PaymentRequest"));
const Products = lazy(() => import("../../views/admin/Products"));
const AddProduct = lazy(() => import("../../views/admin/AddProduct"));
const LiveChat = lazy(() => import("../../views/admin/LiveChat"));

 

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: createElement(AdminDashboard),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/category',
        element: createElement(Category),
        role: 'admin'
    },
     {
        path: 'admin/dashboard/sellers',
        element: createElement(Sellers),
        role: 'admin'
    },
    {
        path: "admin/dashboard/orders/:id",
        element: createElement(OrderDetails),
        role: "admin",
    },
     {
        path: 'admin/dashboard/products',
        element: createElement(Products),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/create/product',
        element: createElement(AddProduct),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/payment-request',
        element: createElement(PaymentRequests),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/live-chat',
        element: createElement(LiveChat),
        role: 'admin'
    },
]