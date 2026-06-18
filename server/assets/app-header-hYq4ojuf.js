import { jsxs, jsx } from "react/jsx-runtime";
import { b as business } from "./router-JZ1UEtgA.js";
function AppHeader({ title, action }) {
  const initials = business.ownerName.split(" ").map((n) => n[0]).join("");
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: business.name }),
      /* @__PURE__ */ jsx("h1", { className: "truncate text-base font-semibold tracking-tight md:text-lg", children: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      action,
      /* @__PURE__ */ jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary", children: initials })
    ] })
  ] });
}
export {
  AppHeader as A
};
