import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts";
import { ROUTE_PATH } from "../shared";
import { detailAdLoader } from "./loaders/detail-ad.loader";
import { GlobalSpinner } from "../components/global-spinner";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ADS,
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () =>
          import("../pages/home-page").then((module) => ({
            Component: module.HomePage,
          })),
        HydrateFallback: GlobalSpinner,
      },
      {
        path: ROUTE_PATH.DETAIL_AD,
        lazy: () =>
          import("../pages/ad-page").then((module) => ({
            Component: module.AdPage,
          })),
        loader: detailAdLoader,
        HydrateFallback: GlobalSpinner,
      },
      {
        path: ROUTE_PATH.EDIT_AD,
        lazy: () =>
          import("../pages/edit-ad-page").then((module) => ({
            Component: module.EditAdPage,
          })),
        loader: detailAdLoader,
        HydrateFallback: GlobalSpinner,
      },
    ],
  },
]);
