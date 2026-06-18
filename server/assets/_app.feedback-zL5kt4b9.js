import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { A as AppHeader } from "./app-header-hYq4ojuf.js";
import { I as Input } from "./input-C0QjszdI.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, ThumbsUp, ThumbsDown } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
import { f as feedback, m as machines } from "./router-JZ1UEtgA.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "@tanstack/react-router";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
function FeedbackPage() {
  const [machineId, setMachineId] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const filtered = feedback.filter((f) => {
    if (machineId !== "all" && f.machineId !== machineId) return false;
    const d = new Date(f.date).getTime();
    if (from && d < new Date(from).getTime()) return false;
    if (to && d > new Date(to).getTime() + 864e5) return false;
    return true;
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AppHeader, { title: "Feedback" }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 px-4 py-6 md:px-8 md:py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Machine" }),
          /* @__PURE__ */ jsxs(Select, { value: machineId, onValueChange: setMachineId, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All machines" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All machines" }),
              machines.map((m) => /* @__PURE__ */ jsx(SelectItem, { value: m.id, children: m.name }, m.id))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "From" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: from, onChange: (e) => setFrom(e.target.value), className: "mt-1.5" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "To" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: to, onChange: (e) => setTo(e.target.value), className: "mt-1.5" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft", children: [
        /* @__PURE__ */ jsxs("table", { className: "hidden w-full text-sm md:table", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground", children: [
            /* @__PURE__ */ jsx("th", { className: "px-5 py-3 font-medium", children: "Date" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-3 font-medium", children: "Machine" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-3 font-medium", children: "Rating" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-3 font-medium", children: "Comment" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            filtered.map((f) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-border last:border-0", children: [
              /* @__PURE__ */ jsx("td", { className: "whitespace-nowrap px-5 py-4 text-muted-foreground", children: new Date(f.date).toLocaleDateString() }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium", children: f.machineName }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: [
                f.rating === "positive" ? /* @__PURE__ */ jsx(ThumbsUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(ThumbsDown, { className: "h-3 w-3" }),
                f.rating
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-foreground", children: f.comment })
            ] }, f.id)),
            filtered.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 4, className: "px-5 py-10 text-center text-sm text-muted-foreground", children: "No feedback matches your filters." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "divide-y divide-border md:hidden", children: [
          filtered.map((f) => /* @__PURE__ */ jsxs("li", { className: "p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: [
                f.rating === "positive" ? /* @__PURE__ */ jsx(ThumbsUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(ThumbsDown, { className: "h-3 w-3" }),
                f.rating
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: new Date(f.date).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: f.comment }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: f.machineName })
          ] }, f.id)),
          filtered.length === 0 && /* @__PURE__ */ jsx("li", { className: "p-8 text-center text-sm text-muted-foreground", children: "No feedback matches your filters." })
        ] })
      ] })
    ] })
  ] });
}
export {
  FeedbackPage as component
};
