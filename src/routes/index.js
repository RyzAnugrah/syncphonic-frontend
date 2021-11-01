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
    name: "instrument",
    path: "/syncphonic-frontend/instrument",
    component: lazy(() => import("../pages/Instrument")),
    exact: true,
  },
  {
    name: "instrument-detail",
    path: "/syncphonic-frontend/instrument/:id",
    component: lazy(() => import("../pages/Instrument/Detail")),
    exact: true,
  },
  {
    name: "instrument-checkout",
    path: "/syncphonic-frontend/instrument/checkout/:id",
    component: lazy(() => import("../pages/Instrument/Checkout")),
    exact: true,
  },
  {
    name: "blog",
    path: "/syncphonic-frontend/blog",
    component: lazy(() => import("../pages/Blog")),
    exact: true,
  },
  {
    name: "blog-detail",
    path: "/syncphonic-frontend/blog/:id",
    component: lazy(() => import("../pages/Blog/Detail")),
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
    name: "dashboard-user",
    path: "/syncphonic-frontend/dashboard",
    component: lazy(() => import("../pages/Dashboard/User")),
    exact: true,
  },
  {
    name: "dashboard-admin",
    path: "/syncphonic-frontend/dashboard/admin",
    component: lazy(() => import("../pages/Dashboard/Admin")),
    exact: true,
  },
  {
    name: "edit-studio-admin",
    path: "/syncphonic-frontend/dashboard/admin/studio",
    component: lazy(() => import("../pages/Dashboard/Admin/Studio")),
    exact: true,
  },
  {
    name: "edit-instrument-admin",
    path: "/syncphonic-frontend/dashboard/admin/instrument",
    component: lazy(() => import("../pages/Dashboard/Admin/Instrument")),
    exact: true,
  },
  {
    name: "edit-blog-admin",
    path: "/syncphonic-frontend/dashboard/admin/blog",
    component: lazy(() => import("../pages/Dashboard/Admin/Blog")),
    exact: true,
  },
  {
    name: "edit-user-admin",
    path: "/syncphonic-frontend/dashboard/admin/user",
    component: lazy(() => import("../pages/Dashboard/Admin/User")),
    exact: true,
  },
  {
    name: "edit-profil-admin",
    path: "/syncphonic-frontend/dashboard/admin/profil",
    component: lazy(() => import("../pages/Dashboard/Admin/Profil")),
    exact: true,
  },
];

export { AppRoutes };
