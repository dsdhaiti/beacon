import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { b as business } from "./router-JZ1UEtgA.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@tanstack/react-query";
import "@tanstack/react-router";
function SettingsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: "Settings" }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mx-auto max-w-3xl space-y-6", children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold", children: "Business Information" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Shown to customers on the feedback page." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "business-name", children: "Business name" }),
            /* @__PURE__ */ jsx(Input, { id: "business-name", defaultValue: business.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "business-email", children: "Email" }),
            /* @__PURE__ */ jsx(Input, { id: "business-email", type: "email", defaultValue: business.email })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold", children: "User Profile" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Update your personal account details." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "full-name", children: "Full name" }),
            /* @__PURE__ */ jsx(Input, { id: "full-name", defaultValue: business.ownerName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "New password" }),
            /* @__PURE__ */ jsx(Input, { id: "password", type: "password", placeholder: "Leave blank to keep current" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", children: "Save changes" }) })
    ] }) })
  ] });
}
export {
  SettingsPage as component
};
