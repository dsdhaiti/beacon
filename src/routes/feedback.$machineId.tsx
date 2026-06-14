import { createFileRoute, useNavigate, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { findMachine, business, submitItemRequest } from "@/lib/mock-data";
import { ThumbsUp, ThumbsDown, Zap, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/feedback/$machineId")({
  head: () => ({ meta: [{ title: "Share your feedback" }] }),
  loader: ({ params }) => {
    const machine = findMachine(params.machineId);
    if (!machine) throw notFound();
    return { machine };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-muted/40 px-6 text-center text-sm text-muted-foreground">
      This QR code isn't linked to a machine yet.
    </div>
  ),
  component: CustomerFeedback,
});

function CustomerFeedback() {
  const { machine } = Route.useLoaderData();
  const navigate = useNavigate();
  const [rating, setRating] = useState<"positive" | "negative" | null>(null);
  const [comment, setComment] = useState("");
  const [requestItem, setRequestItem] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const submit = () => {
    if (!rating) return;
    navigate({ to: "/feedback/$machineId/thanks", params: { machineId: machine.id } });
  };

  const submitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestItem.trim()) return;
    submitItemRequest(machine.id, requestItem);
    setRequestItem("");
    setRequestSubmitted(true);
    setTimeout(() => setRequestSubmitted(false), 2500);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/60 via-background to-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-10">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Zap className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{business.name}</span>
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">{machine.location}</p>
        <h1 className="mt-1 text-xl font-semibold tracking-tight">{machine.name}</h1>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-elevated">
          <h2 className="text-center text-2xl font-bold tracking-tight">How was your experience?</h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRating("positive")}
              className={cn(
                "group flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition active:scale-[0.98]",
                rating === "positive"
                  ? "border-success bg-success/10"
                  : "border-border bg-background hover:border-success/50",
              )}
            >
              <span className={cn(
                "grid h-16 w-16 place-items-center rounded-full text-3xl transition",
                rating === "positive" ? "bg-success text-success-foreground" : "bg-muted",
              )}>
                <ThumbsUp className="h-8 w-8" />
              </span>
              <span className="text-sm font-semibold">Good</span>
            </button>
            <button
              type="button"
              onClick={() => setRating("negative")}
              className={cn(
                "group flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition active:scale-[0.98]",
                rating === "negative"
                  ? "border-destructive bg-destructive/10"
                  : "border-border bg-background hover:border-destructive/50",
              )}
            >
              <span className={cn(
                "grid h-16 w-16 place-items-center rounded-full text-3xl transition",
                rating === "negative" ? "bg-destructive text-destructive-foreground" : "bg-muted",
              )}>
                <ThumbsDown className="h-8 w-8" />
              </span>
              <span className="text-sm font-semibold">Bad</span>
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <label htmlFor="comment" className="text-sm font-medium">Add a comment (optional)</label>
            <Textarea
              id="comment"
              rows={4}
              placeholder="Tell us more..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="resize-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button
            type="button"
            onClick={submit}
            disabled={!rating}
            size="lg"
            className="h-14 w-full text-base"
          >
            Submit Feedback
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Your feedback is anonymous.</p>
        </div>

        <form onSubmit={submitRequest} className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-base font-semibold">Request a Product</h2>
          <p className="mt-1 text-xs text-muted-foreground">Tell us what you'd like to see in this machine.</p>
          <div className="mt-4 space-y-3">
            <Input
              type="text"
              value={requestItem}
              onChange={(e) => setRequestItem(e.target.value)}
              placeholder="What product would you like us to add?"
              className="h-12 text-base"
              maxLength={100}
            />
            <Button
              type="submit"
              variant="outline"
              disabled={!requestItem.trim()}
              className="h-12 w-full text-base"
            >
              {requestSubmitted ? (
                <><Check className="mr-2 h-4 w-4" /> Request received</>
              ) : (
                "Request Item"
              )}
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}
