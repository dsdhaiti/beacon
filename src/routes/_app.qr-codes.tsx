import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { machines } from "@/lib/mock-data";
import { QRPlaceholder } from "@/components/qr-placeholder";
import { Download, Printer } from "lucide-react";

export const Route = createFileRoute("/_app/qr-codes")({
  head: () => ({ meta: [{ title: "QR Codes — FeedbackFlow" }] }),
  component: QRCodesPage,
});

function QRCodesPage() {
  return (
    <>
      <AppHeader title="QR Codes" />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <p className="text-sm text-muted-foreground">Print, download, or hand out the QR sticker for each machine.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((m) => (
            <div key={m.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="truncate text-sm font-semibold">{m.name}</h3>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">{m.location}</p>
              <div className="mt-4 flex justify-center rounded-xl border border-border bg-white p-4">
                <QRPlaceholder value={m.id} size={150} className="text-foreground" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Download</Button>
                <Button size="sm" className="gap-1.5"><Printer className="h-3.5 w-3.5" /> Print</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
