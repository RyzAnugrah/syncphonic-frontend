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
    name: "checkout",
    path: "/syncphonic-frontend/checkout/:id",
    component: lazy(() => import("../pages/Checkout")),
    exact: true,
  },
  {
    name: "faq",
    path: "/syncphonic-frontend/faq",
    component: lazy(() => import("../pages/Faq")),
    exact: true,
  },
  {
    name: "bantuan",
    path: "/syncphonic-frontend/bantuan",
    component: lazy(() => import("../pages/Bantuan")),
    exact: true,
  },
  {
    name: "kebijakan",
    path: "/syncphonic-frontend/kebijakan",
    component: lazy(() => import("../pages/Kebijakan")),
    exact: true,
  },
  {
    name: "pengembang",
    path: "/syncphonic-frontend/pengembang",
    component: lazy(() => import("../pages/Pengembang")),
    exact: true,
  },
];

export { AppRoutes };
