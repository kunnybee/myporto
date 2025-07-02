import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
      <>
        <Outlet />
      </>
    );
  },
});