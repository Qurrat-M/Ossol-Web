import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "react-hot-toast";

const RootLayout = () => (
    <>
        <Outlet />

        <Toaster position="top-right" reverseOrder={false} />

        <TanStackRouterDevtools />
    </>
);

export const Route = createRootRoute({ component: RootLayout });
