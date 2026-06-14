import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { findMachine, feedback, getRequestsForMachine } from "@/lib/mock-data";
import { QRPlaceholder } from "@/components/qr-placeholder";
import { ArrowLeft, Download, Printer, MapPin, ThumbsUp, ThumbsDown, Package } from "lucide-react";

export const Route = createFileRoute("/_app/machines/$id")({
  head: () => ({ meta: [{ title: "Machine — FeedbackFlow" }] }),
  loader: ({ params }) => {
    const machine = findMachine(params.id);
    if (!machine) throw notFound();
    return { machine };
  },
  component: MachineDetail,
  notFoundComponent: () => (
    <div className="p-10 text-center text-sm text-muted-foreground">Machine not found.</div>
  ),
});

function MachineDetail() {
  const { machine } = Route.useLoaderData();
  const machineFeedback = feedback.filter((f) => f.machineId === machine.id);
  const requests = getRequestsForMachine(machine.id);

  return (
    <>
      <AppHeader title={machine.name} />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <Link to="/machines" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to machines
        </Link>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight">{machine.name}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {machine.location} · {machine.address}
            </p>
          </div>
          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${machine.qrStatus === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
            {machine.qrStatus}
          </span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* QR */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-sm font-semibold">QR Code</h3>
            <div className="mt-4 flex justify-center rounded-xl border border-border bg-white p-4">
              <QRPlaceholder value={machine.id} size={180} className="text-foreground" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Download</Button>
              <Button size="sm" className="gap-1.5"><Printer className="h-3.5 w-3.5" /> Print</Button>
            </div>
          </div>

          {/* Summary */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Positive</p>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-success/10 text-success"><ThumbsUp className="h-4 w-4" /></span>
              </div>
              <p className="mt-3 text-3xl font-bold tracking-tight">{machine.positive}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Negative</p>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-destructive/10 text-destructive"><ThumbsDown className="h-4 w-4" /></span>
              </div>
              <p className="mt-3 text-3xl font-bold tracking-tight">{machine.negative}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:col-span-2">
              <p className="text-sm text-muted-foreground">Positive rate</p>
              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-success"
                  style={{ width: `${Math.round((machine.positive / Math.max(1, machine.positive + machine.negative)) * 100)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{Math.round((machine.positive / Math.max(1, machine.positive + machine.negative)) * 100)}% of customers had a good experience.</p>
            </div>
          </div>
        </div>

        {/* Recent feedback */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="text-sm font-semibold">Recent feedback</h3>
          {machineFeedback.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No feedback yet for this machine.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {machineFeedback.map((f) => (
                <li key={f.id} className="rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                      {f.rating === "positive" ? <ThumbsUp className="h-3 w-3" /> : <ThumbsDown className="h-3 w-3" />}
                      {f.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">{formatDateUTC(f.date)}</span>
                  </div>
                  <p className="mt-2 text-sm">{f.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
