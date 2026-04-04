import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import "./global.css";
import { queryClient } from "./shared";
import { router } from "./router/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "rgba(246, 255, 237, 1)",
              border: "1px solid rgba(183, 235, 143, 1)",
              color: "rgba(0, 0, 0, 0.85)",
              fontSize: "0.875rem",
            },
          },
          error: {
            style: {
              alignItems: "start",
              background: "rgba(255, 241, 240, 1)",
              border: "1px solid rgba(255, 204, 199, 1)",
              color: "rgba(0, 0, 0, 0.85)",
              fontSize: "0.875rem",
            },
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>,
);
