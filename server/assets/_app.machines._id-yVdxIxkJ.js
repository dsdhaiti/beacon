import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { a as Route, f as feedback, g as getRequestsForMachine } from "./router-JZ1UEtgA.js";
import { Q as QRPlaceholder } from "./qr-placeholder-CcFKze4f.js";
import { ArrowLeft, MapPin, Download, Printer, ThumbsUp, ThumbsDown, Package } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
function formatDateUTC(iso) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "medium",
    timeStyle: "short"
  });
}
function MachineDetail() {
  const {
    machine
  } = Route.useLoaderData();
  const machineFeedback = feedback.filter((f) => f.machineId === machine.id);
  const requests = getRequestsForMachine(machine.id);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: machine.name }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/machines", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to machines"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight", children: machine.name }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 flex items-center gap-1 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
            " ",
            machine.location,
            " · ",
            machine.address
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${machine.qrStatus === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`, children: machine.qrStatus })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: "QR Code" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center rounded-xl border border-border bg-white p-4", children: /* @__PURE__ */ jsx(QRPlaceholder, { value: machine.id, size: 180, className: "text-foreground" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "gap-1.5", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }),
              " Download"
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "sm", className: "gap-1.5", children: [
              /* @__PURE__ */ jsx(Printer, { className: "h-3.5 w-3.5" }),
              " Print"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Positive" }),
              /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-success/10 text-success", children: /* @__PURE__ */ jsx(ThumbsUp, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-bold tracking-tight", children: machine.positive })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Negative" }),
              /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-destructive/10 text-destructive", children: /* @__PURE__ */ jsx(ThumbsDown, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-bold tracking-tight", children: machine.negative })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft sm:col-span-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Positive rate" }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 h-3 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-success", style: {
              width: `${Math.round(machine.positive / Math.max(1, machine.positive + machine.negative) * 100)}%`
            } }) }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
              Math.round(machine.positive / Math.max(1, machine.positive + machine.negative) * 100),
              "% of customers had a good experience."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: "Requested Items" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Products customers want added to this machine." })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Package, { className: "h-4 w-4" }) })
        ] }),
        requests.length === 0 ? /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "No product requests yet for this machine." }) : /* @__PURE__ */ jsx("ul", { className: "mt-4 divide-y divide-border", children: requests.map((r, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between gap-3 py-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted text-xs font-semibold text-muted-foreground", children: i + 1 }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-medium", children: r.itemName }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Last requested ",
                formatDateUTC(r.updatedAt)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary", children: [
            r.requestCount,
            " ",
            r.requestCount === 1 ? "Request" : "Requests"
          ] })
        ] }, r.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: "Recent feedback" }),
        machineFeedback.length === 0 ? /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "No feedback yet for this machine." }) : /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: machineFeedback.map((f) => /* @__PURE__ */ jsxs("li", { className: "rounded-lg border border-border p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: [
              f.rating === "positive" ? /* @__PURE__ */ jsx(ThumbsUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(ThumbsDown, { className: "h-3 w-3" }),
              f.rating
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: formatDateUTC(f.date) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: f.comment })
        ] }, f.id)) })
      ] })
    ] })
  ] });
}
export {
  MachineDetail as component
};
