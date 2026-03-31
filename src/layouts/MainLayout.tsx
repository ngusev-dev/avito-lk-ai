import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F8]">
      <Outlet />
    </div>
  );
};
