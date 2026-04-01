import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts";
import { HomePage } from "../pages";
import { ProductPage } from "../pages/product-page";
import { ROUTE_PATH } from "../shared/constants/route.constans";

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
