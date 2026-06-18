import { jsxs, jsx } from "react/jsx-runtime";
import { useRouterState, Link, Outlet } from "@tanstack/react-router";
import { Zap, LayoutDashboard, Boxes, MessageSquare, QrCode, Settings } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Machines", url: "/machines", icon: Boxes },
  { title: "Feedback", url: "/feedback", icon: MessageSquare },
  { title: "QR Codes", url: "/qr-codes", icon: QrCode },
  { title: "Settings", url: "/settings", icon: Settings }
];
function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  return /* @__PURE__ */ jsxs("aside", { className: "hidden md:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center gap-2 px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-tight", children: "FeedbackFlow" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "flex-1 px-3 py-2", children: /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: items.map((item) => {
      const active = pathname === item.url || pathname.startsWith(item.url + "/");
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: item.url,
          className: cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
            item.title
          ]
        }
      ) }, item.url);
    }) }) }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-sidebar-border p-4", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-sidebar-accent p-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium", children: "Free plan" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Up to 5 machines included." })
    ] }) })
  ] });
}
function MobileTabBar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  return /* @__PURE__ */ jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-border bg-card md:hidden", children: items.map((item) => {
    const active = pathname === item.url || pathname.startsWith(item.url + "/");
    return /* @__PURE__ */ jsxs(
      Link,
      {
        to: item.url,
        className: cn(
          "flex flex-col items-center gap-1 py-2 text-[10px] font-medium",
          active ? "text-primary" : "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5" }),
          item.title
        ]
      },
      item.url
    );
  }) });
}
function AppLayout() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsx("div", { className: "flex min-w-0 flex-1 flex-col pb-16 md:pb-0", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(MobileTabBar, {})
  ] });
}
export {
  AppLayout as component
};
