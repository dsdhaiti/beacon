import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./button-BC9oXVxV.js";
import { Zap, ArrowRight, ThumbsUp, BarChart3, Sparkles, QrCode, Check } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
function Landing() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs("header", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-5", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-tight", children: "FeedbackFlow" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: "Sign in" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Get started" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-24 md:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
        " Now in early access"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl", children: "Hear from every customer at every machine." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg", children: "A QR code on the vending machine. A tap on the phone. Real feedback you can act on — without any apps to download." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "gap-2", children: [
          "Start free ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsx(Link, { to: "/feedback/$machineId", params: {
          machineId: "m1"
        }, children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: "See customer view" }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "No credit card required. 5 machines free." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-muted/40 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary", children: "Why FeedbackFlow" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight md:text-4xl", children: "Everything you need, nothing you don't." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [{
        icon: ThumbsUp,
        title: "Collect Customer Feedback",
        body: "A one-tap thumbs up or down — plus an optional comment. Zero friction for your customers."
      }, {
        icon: BarChart3,
        title: "Track Customer Sentiment",
        body: "See how every machine is performing, where to restock, and where to investigate."
      }, {
        icon: Sparkles,
        title: "Improve Customer Experience",
        body: "Spot empty machines, payment issues, and product wins — and act before customers walk away."
      }].map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.body })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary", children: "How it works" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight md:text-4xl", children: "Live in under five minutes." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-3", children: [{
        n: "01",
        icon: Zap,
        title: "Add Machine",
        body: "Name it, set its location, and you're done."
      }, {
        n: "02",
        icon: QrCode,
        title: "Generate QR Code",
        body: "Download or print the unique QR sticker for that machine."
      }, {
        n: "03",
        icon: Check,
        title: "Collect Feedback",
        body: "Customers tap good or bad. You watch results roll in."
      }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-sm text-muted-foreground", children: s.n }),
          /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.body }),
        i < 2 && /* @__PURE__ */ jsx("div", { className: "hidden md:block" })
      ] }, s.n)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "gap-2", children: [
        "Create your account ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ jsx("span", { children: "© 2026 FeedbackFlow" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Contact" })
      ] })
    ] }) })
  ] });
}
export {
  Landing as component
};
