import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background px-8 py-2">
      <Outlet />
    </div>
  );
};
