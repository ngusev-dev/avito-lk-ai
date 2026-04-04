import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="min-h-svh max-w-480 mx-auto">
      <Outlet />
    </div>
  );
};
