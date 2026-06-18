import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { t as totals, r as recentActivity, f as feedback, m as machines } from "./router-JZ1UEtgA.js";
import { Plus, Boxes, MessageSquare, ThumbsUp, ThumbsDown, ArrowRight } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
function Dashboard() {
  const t = totals();
  const hasMachines = machines.length > 0;
  const stats = [{
    label: "Total Machines",
    value: t.machines,
    icon: Boxes,
    tint: "text-primary bg-primary/10"
  }, {
    label: "Total Feedback",
    value: t.total,
    icon: MessageSquare,
    tint: "text-foreground bg-muted"
  }, {
    label: "Positive",
    value: t.positive,
    icon: ThumbsUp,
    tint: "text-success bg-success/10"
  }, {
    label: "Negative",
    value: t.negative,
    icon: ThumbsDown,
    tint: "text-destructive bg-destructive/10"
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: "Dashboard", action: /* @__PURE__ */ jsx(Link, { to: "/machines/new", className: "hidden sm:block", children: /* @__PURE__ */ jsxs(Button, { size: "sm", className: "gap-1.5", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Add Machine"
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: !hasMachines ? /* @__PURE__ */ jsx(EmptyState, {}) : /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: s.label }),
          /* @__PURE__ */ jsx("div", { className: `grid h-9 w-9 place-items-center rounded-lg ${s.tint}`, children: /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-bold tracking-tight", children: s.value })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold", children: "Recent Activity" }),
            /* @__PURE__ */ jsx(Link, { to: "/feedback", className: "text-xs font-medium text-primary hover:underline", children: "View all" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 divide-y divide-border", children: recentActivity.map((a) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between py-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsx("p", { className: "truncate text-sm", children: a.text })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ml-3 shrink-0 text-xs text-muted-foreground", children: a.time })
          ] }, a.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold", children: "Latest feedback" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: feedback.slice(0, 4).map((f) => /* @__PURE__ */ jsxs("li", { className: "rounded-lg border border-border p-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: [
                f.rating === "positive" ? /* @__PURE__ */ jsx(ThumbsUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(ThumbsDown, { className: "h-3 w-3" }),
                f.rating
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: new Date(f.date).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-2 text-sm", children: f.comment }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: f.machineName })
          ] }, f.id)) })
        ] })
      ] })
    ] }) })
  ] });
}
function EmptyState() {
  return /* @__PURE__ */ jsx("div", { className: "grid min-h-[60vh] place-items-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Boxes, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-lg font-semibold", children: "Add your first machine" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Create a machine, print its QR code, and start collecting feedback today." }),
    /* @__PURE__ */ jsx(Link, { to: "/machines/new", className: "mt-6 inline-block", children: /* @__PURE__ */ jsxs(Button, { className: "gap-2", children: [
      "Add Machine ",
      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
export {
  Dashboard as component
};
