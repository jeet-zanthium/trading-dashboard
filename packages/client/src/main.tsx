import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { FallingLines } from "react-loader-spinner";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("./pages/index")).default,
    }),
  },
  {
    path: "auth/",
    HydrateFallback: () => (
      <div className="h-full flex justify-center items-center">
        <div className="size-14 bg-secondary rounded-lg flex justify-center items-center rotate-45">
          <div className="-rotate-45">
            <FallingLines
              color="#f0b90b"
              width="44"
              visible={true}
              aria-label="falling-lines-loading"
            />
          </div>
        </div>
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
