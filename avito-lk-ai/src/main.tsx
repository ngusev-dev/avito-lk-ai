import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import "./global.css";

import { queryClient } from "./shared";
import { router } from "./router/routes";
import { ToasterProvider } from "./components/toaster-provider";
import { FallbackComponent } from "./components/fallback-component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={FallbackComponent}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToasterProvider />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
