import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "./../node_modules/@tanstack/query-core/src/queryClient";
import AuthProvider from "./AuthProvider/AuthProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
