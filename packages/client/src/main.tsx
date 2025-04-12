import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // lazy: async () => {
    //   // load component and loader in parallel before rendering
    //   const [{ default: Component }] = await Promise.all([
    //     import("./pages/index"),
    //     // import("./pages/index-loader"),
    //   ]);
    //   return { Component };
    // },
    lazy: async () => ({
      Component: (await import("./pages/index")).default,
    }),
  },
  {
    path: "auth/",
    HydrateFallback: () => (
      <div className="h-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    ),
    children: [
      {
        path: "sign-up",
        lazy: async () => ({
          Component: (await import("./pages/auth/sign-up")).default,
        }),
      },
      {
        path: "sign-in",
        lazy: async () => ({
          Component: (await import("./pages/auth/sign-in")).default,
        }),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
