import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import { ArrowLeft } from "lucide-react";
import "./router-JZ1UEtgA.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
function NewMachine() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: "Add Machine" }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/machines", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to machines"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold tracking-tight", children: "Machine details" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "A QR code will be generated automatically once saved." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          navigate({
            to: "/machines"
          });
        }, className: "mt-6 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Machine name" }),
            /* @__PURE__ */ jsx(Input, { id: "name", placeholder: "e.g. Break Room Machine", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "location", children: "Location name" }),
            /* @__PURE__ */ jsx(Input, { id: "location", placeholder: "e.g. HQ - 2nd Floor", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "address", children: "Address" }),
            /* @__PURE__ */ jsx(Input, { id: "address", placeholder: "Street, City, State" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
            /* @__PURE__ */ jsx(Textarea, { id: "description", placeholder: "Optional notes about the machine", rows: 4 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsx(Link, { to: "/machines", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", children: "Cancel" }) }),
            /* @__PURE__ */ jsx(Button, { type: "submit", children: "Save Machine" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  NewMachine as component
};
