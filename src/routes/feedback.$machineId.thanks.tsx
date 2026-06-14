import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Zap } from "lucide-react";
import { business } from "@/lib/mock-data";

export const Route = createFileRoute("/feedback/$machineId/thanks")({
  head: () => ({ meta: [{ title: "Thank you" }] }),
  component: Thanks,
});

function Thanks() {
  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-b from-accent/40 via-background to-background px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Thank you for your feedback.</h1>
        <p className="mt-3 text-base text-muted-foreground">We appreciate your input.</p>
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="grid h-5 w-5 place-items-center rounded bg-primary text-primary-foreground">
            <Zap className="h-3 w-3" />
          </div>
          <span>Powered by FeedbackFlow · {business.name}</span>
        </div>
        <Link to="/" className="mt-6 inline-block text-xs text-muted-foreground hover:text-foreground">Close</Link>
      </div>
    </div>
  );
}
