import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { machines, feedback, totals, recentActivity } from "@/lib/mock-data";
import { Boxes, MessageSquare, ThumbsUp, ThumbsDown, Plus, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — FeedbackFlow" }] }),
  component: Dashboard,
});

function Dashboard() {
  const t = totals();
  const hasMachines = machines.length > 0;
  const stats = [
    { label: "Total Machines", value: t.machines, icon: Boxes, tint: "text-primary bg-primary/10" },
    { label: "Total Feedback", value: t.total, icon: MessageSquare, tint: "text-foreground bg-muted" },
    { label: "Positive", value: t.positive, icon: ThumbsUp, tint: "text-success bg-success/10" },
    { label: "Negative", value: t.negative, icon: ThumbsDown, tint: "text-destructive bg-destructive/10" },
  ];

  return (
    <>
      <AppHeader
        title="Dashboard"
        action={
          <Link to="/machines/new" className="hidden sm:block">
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Add Machine</Button>
          </Link>
        }
      />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        {!hasMachines ? (
          <EmptyState />
        ) : (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <div className={`grid h-9 w-9 place-items-center rounded-lg ${s.tint}`}>
                      <s.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mt-3 text-3xl font-bold tracking-tight">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">Recent Activity</h2>
                  <Link to="/feedback" className="text-xs font-medium text-primary hover:underline">View all</Link>
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {recentActivity.map((a) => (
                    <li key={a.id} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                        </span>
                        <p className="truncate text-sm">{a.text}</p>
                      </div>
                      <span className="ml-3 shrink-0 text-xs text-muted-foreground">{a.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-base font-semibold">Latest feedback</h2>
                <ul className="mt-4 space-y-3">
                  {feedback.slice(0, 4).map((f) => (
                    <li key={f.id} className="rounded-lg border border-border p-3">
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                          {f.rating === "positive" ? <ThumbsUp className="h-3 w-3" /> : <ThumbsDown className="h-3 w-3" />}
                          {f.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">{new Date(f.date).toLocaleDateString()}</span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm">{f.comment}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{f.machineName}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function EmptyState() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
          <Boxes className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-lg font-semibold">Add your first machine</h2>
        <p className="mt-2 text-sm text-muted-foreground">Create a machine, print its QR code, and start collecting feedback today.</p>
        <Link to="/machines/new" className="mt-6 inline-block">
          <Button className="gap-2">Add Machine <ArrowRight className="h-4 w-4" /></Button>
        </Link>
      </div>
    </div>
  );
}
