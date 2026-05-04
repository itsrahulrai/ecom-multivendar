import { lazy, createElement } from "react";

const AdminLogin = lazy(() => import("../../views/auth/AdminLogin.jsx"));
const Login = lazy(() => import("../../views/auth/Login.jsx"));
const Register = lazy(() => import("../../views/auth/Register.jsx"));

const publicRoutes = [
  {
    path: "/login",
    element: createElement(Login),
  },
  {
    path: "/register",
    element: createElement(Register),
  },
  {
    path: "/admin/login",
    element: createElement(AdminLogin),
  },
];

export default publicRoutes;