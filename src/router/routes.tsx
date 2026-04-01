import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts";
import { HomePage, ProductPage } from "../pages";
import { ROUTE_PATH } from "../shared";

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
      },
    ],
  },
]);
