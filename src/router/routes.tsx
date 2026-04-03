import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts";
import { HomePage, ProductPage } from "../pages";
import { ROUTE_PATH } from "../shared";
import { detailAdLoader } from "./loaders/detail-ad.loader";
import { GlobalSpinner } from "../components";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ADS,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATH.DETAIL_AD,
        element: <ProductPage />,
        loader: detailAdLoader,
        HydrateFallback: GlobalSpinner,
      },
    ],
  },
]);
