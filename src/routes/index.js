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
  {
    name: "studio",
    path: "/syncphonic-frontend/studio",
    component: lazy(() => import("../pages/Studio")),
    exact: true,
  },
  {
    name: "detail-studio",
    path: "/syncphonic-frontend/studio/:id",
    component: lazy(() => import("../pages/Studio/Detail")),
    exact: true,
  },
  {
    name: "faq",
    path: "/syncphonic-frontend/faq",
    component: lazy(() => import("../pages/Faq")),
    exact: true,
  },
];

export { AppRoutes };
