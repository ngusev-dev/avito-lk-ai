import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts";
import { HomePage } from "../pages";
import { ProductPage } from "../pages/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        index: true,
        path: "/product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);
