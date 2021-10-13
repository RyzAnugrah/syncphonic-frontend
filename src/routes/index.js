import { lazy } from "react";

const AppRoutes = [
  {
    name: "homepage",
    path: "/syncphonic-frontend/",
    component: lazy(() => import("../pages/HomePage")),
    exact: true,
  },
  {
    name: "login",
    path: "/syncphonic-frontend/login",
    component: lazy(() => import("../pages/Login")),
    exact: true,
  },
  {
    name: "signup",
    path: "/syncphonic-frontend/signup",
    component: lazy(() => import("../pages/SignUp")),
    exact: true,
  },
];

export { AppRoutes };
