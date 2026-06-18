import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Zap } from "lucide-react";
import { b as business } from "./router-JZ1UEtgA.js";
import "@tanstack/react-query";
import "react";
function Thanks() {
  return /* @__PURE__ */ jsx("div", { className: "grid min-h-screen place-items-center bg-gradient-to-b from-accent/40 via-background to-background px-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-12 w-12" }) }),
    /* @__PURE__ */ jsx("h1", { className: "mt-6 text-3xl font-bold tracking-tight", children: "Thank you for your feedback." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "We appreciate your input." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-5 w-5 place-items-center rounded bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" }) }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Powered by FeedbackFlow · ",
        business.name
      ] })
    ] }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-block text-xs text-muted-foreground hover:text-foreground", children: "Close" })
  ] }) });
}
export {
  Thanks as component
};
