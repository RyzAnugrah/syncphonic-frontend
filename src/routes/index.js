import { lazy } from "react";

const AppRoutes = [
  {
    name: "home",
    path: "/syncphonic-frontend",
    component: lazy(() => import("../pages/Home")),
    exact: true,
  },
  {
    name: "login",
    path: "/syncphonic-frontend/masuk",
    component: lazy(() => import("../pages/Auth/Masuk")),
    exact: true,
  },
  {
    name: "daftar",
    path: "/syncphonic-frontend/daftar",
    component: lazy(() => import("../pages/Auth/Daftar")),
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
    component: lazy(() => import("../pages/FAQ")),
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
];

export { AppRoutes };
