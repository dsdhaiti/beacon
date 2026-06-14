import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar, MobileTabBar } from "@/components/app-sidebar";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col pb-16 md:pb-0">
        <Outlet />
      </div>
      <MobileTabBar />
    </div>
  );
}
