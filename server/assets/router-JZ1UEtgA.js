import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-8yWSvG4B.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FeedbackFlow — QR feedback for vending operators" },
      { name: "description", content: "Collect customer feedback from your vending machines with a simple QR scan." },
      { name: "author", content: "FeedbackFlow" },
      { property: "og:title", content: "FeedbackFlow" },
      { property: "og:description", content: "Collect customer feedback from your vending machines with a simple QR scan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./signup-BNmumBkf.js");
const Route$c = createFileRoute("/signup")({
  head: () => ({
    meta: [{
      title: "Sign up — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./login-COQ4f0ZQ.js");
const Route$b = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./_app-BUiinnc2.js");
const Route$a = createFileRoute("/_app")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index-BwqBQHwl.js");
const Route$9 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "FeedbackFlow — Customer feedback for vending machines"
    }, {
      name: "description",
      content: "QR-code feedback for vending operators. Add a machine, print a QR, hear from your customers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const business = {
  name: "Acme Vending Co.",
  email: "owner@acmevending.com",
  ownerName: "Jordan Rivera"
};
const machines = [
  { id: "m1", name: "Break Room Machine", location: "HQ - 2nd Floor", address: "100 Market St, San Francisco, CA", description: "Snacks and beverages", qrStatus: "active", positive: 42, negative: 6 },
  { id: "m2", name: "Warehouse Machine", location: "Distribution Center", address: "455 Industrial Way, Oakland, CA", qrStatus: "active", positive: 28, negative: 11 },
  { id: "m3", name: "Lobby Machine", location: "Main Entrance", address: "100 Market St, San Francisco, CA", qrStatus: "active", positive: 67, negative: 3 },
  { id: "m4", name: "Gym Machine", location: "Fitness Center", address: "22 Howard St, San Francisco, CA", qrStatus: "inactive", positive: 14, negative: 9 },
  { id: "m5", name: "Office Snack Station", location: "Engineering Floor", address: "100 Market St, San Francisco, CA", qrStatus: "active", positive: 51, negative: 4 },
  { id: "m6", name: "Cafeteria Machine", location: "Building B", address: "200 Townsend St, San Francisco, CA", qrStatus: "active", positive: 33, negative: 7 }
];
const feedback = [
  { id: "f1", machineId: "m1", machineName: "Break Room Machine", rating: "positive", comment: "Great selection!", date: "2026-06-13T10:24:00Z" },
  { id: "f2", machineId: "m2", machineName: "Warehouse Machine", rating: "negative", comment: "Machine was empty.", date: "2026-06-13T09:11:00Z" },
  { id: "f3", machineId: "m3", machineName: "Lobby Machine", rating: "positive", comment: "Loved the new drinks.", date: "2026-06-12T16:45:00Z" },
  { id: "f4", machineId: "m1", machineName: "Break Room Machine", rating: "negative", comment: "Payment system was confusing.", date: "2026-06-12T14:02:00Z" },
  { id: "f5", machineId: "m5", machineName: "Office Snack Station", rating: "positive", comment: "Everything worked perfectly.", date: "2026-06-12T11:38:00Z" },
  { id: "f6", machineId: "m6", machineName: "Cafeteria Machine", rating: "positive", comment: "Fast and easy.", date: "2026-06-11T19:12:00Z" },
  { id: "f7", machineId: "m4", machineName: "Gym Machine", rating: "negative", comment: "Took my money, no drink.", date: "2026-06-11T08:55:00Z" },
  { id: "f8", machineId: "m3", machineName: "Lobby Machine", rating: "positive", comment: "Always stocked. Thanks!", date: "2026-06-10T13:21:00Z" }
];
const totals = () => {
  const positive = feedback.filter((f) => f.rating === "positive").length;
  const negative = feedback.filter((f) => f.rating === "negative").length;
  return { machines: machines.length, total: feedback.length, positive, negative };
};
const recentActivity = [
  { id: "a1", type: "feedback", text: "New positive feedback on Lobby Machine", time: "2m ago" },
  { id: "a2", type: "feedback", text: "New negative feedback on Warehouse Machine", time: "1h ago" },
  { id: "a3", type: "machine", text: "Cafeteria Machine added", time: "Yesterday" },
  { id: "a4", type: "feedback", text: "Feedback submitted on Break Room Machine", time: "Yesterday" },
  { id: "a5", type: "qr", text: "QR code regenerated for Gym Machine", time: "2 days ago" }
];
const findMachine = (id) => machines.find((m) => m.id === id);
const itemRequests = [
  { id: "r1", machineId: "m1", itemName: "Celsius Energy Drink", requestCount: 15, createdAt: "2026-05-20T10:00:00Z", updatedAt: "2026-06-13T14:22:00Z" },
  { id: "r2", machineId: "m1", itemName: "Prime Hydration", requestCount: 8, createdAt: "2026-05-22T10:00:00Z", updatedAt: "2026-06-12T09:10:00Z" },
  { id: "r3", machineId: "m1", itemName: "Snickers Peanut Butter", requestCount: 4, createdAt: "2026-06-01T10:00:00Z", updatedAt: "2026-06-10T16:42:00Z" },
  { id: "r4", machineId: "m3", itemName: "Celsius Energy Drink", requestCount: 3, createdAt: "2026-06-02T10:00:00Z", updatedAt: "2026-06-11T11:11:00Z" },
  { id: "r5", machineId: "m5", itemName: "Liquid Death", requestCount: 6, createdAt: "2026-06-03T10:00:00Z", updatedAt: "2026-06-13T08:30:00Z" }
];
const normalize = (s) => s.trim().toLowerCase();
const submitItemRequest = (machineId, itemName) => {
  const name = itemName.trim();
  if (!name) return;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const existing = itemRequests.find(
    (r) => r.machineId === machineId && normalize(r.itemName) === normalize(name)
  );
  if (existing) {
    existing.requestCount += 1;
    existing.updatedAt = now;
  } else {
    itemRequests.push({
      id: `r${itemRequests.length + 1}-${Date.now()}`,
      machineId,
      itemName: name,
      requestCount: 1,
      createdAt: now,
      updatedAt: now
    });
  }
};
const getRequestsForMachine = (machineId) => itemRequests.filter((r) => r.machineId === machineId).sort((a, b) => b.requestCount - a.requestCount);
const $$splitComponentImporter$8 = () => import("./feedback._machineId-B7aovdgB.js");
const $$splitNotFoundComponentImporter$1 = () => import("./feedback._machineId-Cj5lSMhP.js");
const Route$8 = createFileRoute("/feedback/$machineId")({
  head: () => ({
    meta: [{
      title: "Share your feedback"
    }]
  }),
  loader: ({
    params
  }) => {
    const machine = findMachine(params.machineId);
    if (!machine) throw notFound();
    return {
      machine
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./_app.settings-CSUtwKs4.js");
const Route$7 = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [{
      title: "Settings — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./_app.qr-codes-BOOP_cse.js");
const Route$6 = createFileRoute("/_app/qr-codes")({
  head: () => ({
    meta: [{
      title: "QR Codes — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./_app.feedback-zL5kt4b9.js");
const Route$5 = createFileRoute("/_app/feedback")({
  head: () => ({
    meta: [{
      title: "Feedback — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./_app.dashboard-D00PNQfm.js");
const Route$4 = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./_app.machines.index-DVYGPfNk.js");
const Route$3 = createFileRoute("/_app/machines/")({
  head: () => ({
    meta: [{
      title: "Machines — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./feedback._machineId.thanks-D5kyHFwF.js");
const Route$2 = createFileRoute("/feedback/$machineId/thanks")({
  head: () => ({
    meta: [{
      title: "Thank you"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./_app.machines.new-DjAGRbfa.js");
const Route$1 = createFileRoute("/_app/machines/new")({
  head: () => ({
    meta: [{
      title: "Add Machine — FeedbackFlow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./_app.machines._id-C-onFqQs.js");
const $$splitComponentImporter = () => import("./_app.machines._id-yVdxIxkJ.js");
const Route = createFileRoute("/_app/machines/$id")({
  head: () => ({
    meta: [{
      title: "Machine — FeedbackFlow"
    }]
  }),
  loader: ({
    params
  }) => {
    const machine = findMachine(params.id);
    if (!machine) throw notFound();
    return {
      machine
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const SignupRoute = Route$c.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$d
});
const LoginRoute = Route$b.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$d
});
const AppRoute = Route$a.update({
  id: "/_app",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const FeedbackMachineIdRoute = Route$8.update({
  id: "/feedback/$machineId",
  path: "/feedback/$machineId",
  getParentRoute: () => Route$d
});
const AppSettingsRoute = Route$7.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppQrCodesRoute = Route$6.update({
  id: "/qr-codes",
  path: "/qr-codes",
  getParentRoute: () => AppRoute
});
const AppFeedbackRoute = Route$5.update({
  id: "/feedback",
  path: "/feedback",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$4.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppMachinesIndexRoute = Route$3.update({
  id: "/machines/",
  path: "/machines/",
  getParentRoute: () => AppRoute
});
const FeedbackMachineIdThanksRoute = Route$2.update({
  id: "/thanks",
  path: "/thanks",
  getParentRoute: () => FeedbackMachineIdRoute
});
const AppMachinesNewRoute = Route$1.update({
  id: "/machines/new",
  path: "/machines/new",
  getParentRoute: () => AppRoute
});
const AppMachinesIdRoute = Route.update({
  id: "/machines/$id",
  path: "/machines/$id",
  getParentRoute: () => AppRoute
});
const AppRouteChildren = {
  AppDashboardRoute,
  AppFeedbackRoute,
  AppQrCodesRoute,
  AppSettingsRoute,
  AppMachinesIdRoute,
  AppMachinesNewRoute,
  AppMachinesIndexRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const FeedbackMachineIdRouteChildren = {
  FeedbackMachineIdThanksRoute
};
const FeedbackMachineIdRouteWithChildren = FeedbackMachineIdRoute._addFileChildren(FeedbackMachineIdRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  LoginRoute,
  SignupRoute,
  FeedbackMachineIdRoute: FeedbackMachineIdRouteWithChildren
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$8 as R,
  Route as a,
  business as b,
  router as c,
  feedback as f,
  getRequestsForMachine as g,
  machines as m,
  recentActivity as r,
  submitItemRequest as s,
  totals as t
};
