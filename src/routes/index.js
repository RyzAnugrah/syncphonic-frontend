import { lazy } from "react";

const AppRoutes = [
  {
    name: "home",
    path: "/syncphonic-frontend",
    component: lazy(() => import("../pages/Home")),
    exact: true,
  },
  {
    name: "masuk",
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
    name: "studio-detail",
    path: "/syncphonic-frontend/studio/:id",
    component: lazy(() => import("../pages/Studio/Detail")),
    exact: true,
  },
  {
    name: "studio-checkout",
    path: "/syncphonic-frontend/studio/checkout/:id",
    component: lazy(() => import("../pages/Studio/Checkout")),
    exact: true,
  },
  {
    name: "FAQ",
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
  {
    name: "pengembang",
    path: "/syncphonic-frontend/pengembang",
    component: lazy(() => import("../pages/Pengembang")),
    exact: true,
  },
  {
    name: "dashboard",
    path: "/syncphonic-frontend/dashboard",
    component: lazy(() => import("../pages/Dashboard")),
    exact: true,
  },
  {
    name: "edit-studio",
    path: "/syncphonic-frontend/dashboard/studio",
    component: lazy(() => import("../pages/Dashboard/Studio")),
    exact: true,
  },
  {
    name: "edit-instrument",
    path: "/syncphonic-frontend/dashboard/instrument",
    component: lazy(() => import("../pages/Dashboard/Instrument")),
    exact: true,
  },
  {
    name: "edit-blog",
    path: "/syncphonic-frontend/dashboard/blog",
    component: lazy(() => import("../pages/Dashboard/Blog")),
    exact: true,
  },
  {
    name: "edit-user",
    path: "/syncphonic-frontend/dashboard/user",
    component: lazy(() => import("../pages/Dashboard/User")),
    exact: true,
  },
  {
    name: "edit-profil",
    path: "/syncphonic-frontend/dashboard/profil",
    component: lazy(() => import("../pages/Dashboard/Profil")),
    exact: true,
  },
];

export { AppRoutes };
