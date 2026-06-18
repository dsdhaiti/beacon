import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { m as machines } from "./router-JZ1UEtgA.js";
import { Q as QRPlaceholder } from "./qr-placeholder-CcFKze4f.js";
import { Download, Printer } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "@tanstack/react-router";
function QRCodesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: "QR Codes" }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Print, download, or hand out the QR sticker for each machine." }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: machines.map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
        /* @__PURE__ */ jsx("h3", { className: "truncate text-sm font-semibold", children: m.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-0.5 truncate text-xs text-muted-foreground", children: m.location }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center rounded-xl border border-border bg-white p-4", children: /* @__PURE__ */ jsx(QRPlaceholder, { value: m.id, size: 150, className: "text-foreground" }) }),
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
      ] }, m.id)) })
    ] })
  ] });
}
export {
  QRCodesPage as component
};
