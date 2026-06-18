import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { B as Button } from "./button-BC9oXVxV.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import { I as Input } from "./input-C0QjszdI.js";
import { R as Route, b as business, s as submitItemRequest } from "./router-JZ1UEtgA.js";
import { Zap, ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-query";
import "clsx";
import "tailwind-merge";
function CustomerFeedback() {
  const {
    machine
  } = Route.useLoaderData();
  const navigate = useNavigate();
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [requestItem, setRequestItem] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const submit = () => {
    if (!rating) return;
    navigate({
      to: "/feedback/$machineId/thanks",
      params: {
        machineId: machine.id
      }
    });
  };
  const submitRequest = (e) => {
    e.preventDefault();
    if (!requestItem.trim()) return;
    submitItemRequest(machine.id, requestItem);
    setRequestItem("");
    setRequestSubmitted(true);
    setTimeout(() => setRequestSubmitted(false), 2500);
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-b from-secondary/60 via-background to-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Zap, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground", children: business.name })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs uppercase tracking-wide text-muted-foreground", children: machine.location }),
    /* @__PURE__ */ jsx("h1", { className: "mt-1 text-xl font-semibold tracking-tight", children: machine.name }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-6 shadow-elevated", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl font-bold tracking-tight", children: "How was your experience?" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setRating("positive"), className: cn("group flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition active:scale-[0.98]", rating === "positive" ? "border-success bg-success/10" : "border-border bg-background hover:border-success/50"), children: [
          /* @__PURE__ */ jsx("span", { className: cn("grid h-16 w-16 place-items-center rounded-full text-3xl transition", rating === "positive" ? "bg-success text-success-foreground" : "bg-muted"), children: /* @__PURE__ */ jsx(ThumbsUp, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Good" })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setRating("negative"), className: cn("group flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition active:scale-[0.98]", rating === "negative" ? "border-destructive bg-destructive/10" : "border-border bg-background hover:border-destructive/50"), children: [
          /* @__PURE__ */ jsx("span", { className: cn("grid h-16 w-16 place-items-center rounded-full text-3xl transition", rating === "negative" ? "bg-destructive text-destructive-foreground" : "bg-muted"), children: /* @__PURE__ */ jsx(ThumbsDown, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Bad" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "comment", className: "text-sm font-medium", children: "Add a comment (optional)" }),
        /* @__PURE__ */ jsx(Textarea, { id: "comment", rows: 4, placeholder: "Tell us more...", value: comment, onChange: (e) => setComment(e.target.value), className: "resize-none" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submitRequest, className: "mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold", children: "Request a Product" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Tell us what you'd like to see in this machine." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
        /* @__PURE__ */ jsx(Input, { type: "text", value: requestItem, onChange: (e) => setRequestItem(e.target.value), placeholder: "What product would you like us to add?", className: "h-12 text-base", maxLength: 100 }),
        /* @__PURE__ */ jsx(Button, { type: "submit", variant: "outline", disabled: !requestItem.trim(), className: "h-12 w-full text-base", children: requestSubmitted ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { className: "mr-2 h-4 w-4" }),
          " Request received"
        ] }) : "Request Item" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", onClick: submit, disabled: !rating, size: "lg", className: "h-14 w-full text-base", children: "Submit Feedback" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Your feedback is anonymous." })
    ] })
  ] }) });
}
export {
  CustomerFeedback as component
};
