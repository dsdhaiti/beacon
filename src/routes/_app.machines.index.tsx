import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { machines } from "@/lib/mock-data";
import { Plus, MapPin, QrCode, MessageSquare, Eye, Pencil } from "lucide-react";

export const Route = createFileRoute("/_app/machines/")({
  head: () => ({ meta: [{ title: "Machines — FeedbackFlow" }] }),
  component: MachinesIndex,
});

function MachinesIndex() {
  return (
    <>
      <AppHeader
        title="Machines"
        action={
          <Link to="/machines/new">
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> Add Machine</Button>
          </Link>
        }
      />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {machines.map((m) => (
            <div key={m.id} className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:shadow-elevated">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">{m.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {m.location}
                  </p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${m.qrStatus === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                  {m.qrStatus}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">QR ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span><span className="font-medium">{m.positive + m.negative}</span> <span className="text-muted-foreground">replies</span></span>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <Link to="/machines/$id" params={{ id: m.id }} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-1.5"><Eye className="h-3.5 w-3.5" /> View</Button>
                </Link>
                <Button variant="ghost" size="sm" className="gap-1.5"><Pencil className="h-3.5 w-3.5" /> Edit</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
