import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { m as machines } from "./router-JZ1UEtgA.js";
import { Plus, MapPin, QrCode, MessageSquare, Eye, Pencil } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
function MachinesIndex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: "Machines", action: /* @__PURE__ */ jsx(Link, { to: "/machines/new", children: /* @__PURE__ */ jsxs(Button, { size: "sm", className: "gap-1.5", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Add Machine"
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", children: machines.map((m) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "truncate text-base font-semibold", children: m.name }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
            " ",
            m.location
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${m.qrStatus === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`, children: m.qrStatus })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-2 gap-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(QrCode, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "QR ready" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: m.positive + m.negative }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "replies" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/machines/$id", params: {
          id: m.id
        }, className: "flex-1", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full gap-1.5", children: [
          /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" }),
          " View"
        ] }) }),
        /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "gap-1.5", children: [
          /* @__PURE__ */ jsx(Pencil, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] })
      ] })
    ] }, m.id)) }) })
  ] });
}
export {
  MachinesIndex as component
};
