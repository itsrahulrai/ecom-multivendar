import { lazy, createElement } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const Products = lazy(() => import("../../views/seller/Products"));
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const ChatCustomer = lazy(() => import("../../views/seller/ChatCustomer"));
const ChatSupport = lazy(() => import("../../views/seller/ChatSupport"));
const Profile = lazy(() => import("../../views/seller/Profile"));

export const sellerRoutes = [
  {
    path: "/",
    element: createElement(Home),
    ability: ["admin", "seller"],
  },

  {
    path: "/seller/dashboard",
    element: createElement(SellerDashboard),
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/products",
    element: createElement(Products),
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/orders",
    element: createElement(Orders),
    role: "seller",
    ability: ["active", "deactive"],
  },

  {
    path: "/seller/dashboard/payments",
    element: createElement(Payments),
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/chat-customer",
    element: createElement(ChatCustomer),
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/chat-support",
    element: createElement(ChatSupport),
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: createElement(Profile),
    role: "seller",
    status: "active",
  },
];