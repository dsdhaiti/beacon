import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { machines, feedback } from "@/lib/mock-data";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export const Route = createFileRoute("/_app/feedback")({
  head: () => ({ meta: [{ title: "Feedback — FeedbackFlow" }] }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const [machineId, setMachineId] = useState<string>("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filtered = feedback.filter((f) => {
    if (machineId !== "all" && f.machineId !== machineId) return false;
    const d = new Date(f.date).getTime();
    if (from && d < new Date(from).getTime()) return false;
    if (to && d > new Date(to).getTime() + 86400000) return false;
    return true;
  });

  return (
    <>
      <AppHeader title="Feedback" />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Machine</label>
              <Select value={machineId} onValueChange={setMachineId}>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="All machines" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All machines</SelectItem>
                  {machines.map((m) => (
                    <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">From</label>
              <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1.5" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">To</label>
              <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="mt-1.5" />
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {/* Desktop table */}
          <table className="hidden w-full text-sm md:table">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Machine</th>
                <th className="px-5 py-3 font-medium">Rating</th>
                <th className="px-5 py-3 font-medium">Comment</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f) => (
                <tr key={f.id} className="border-b border-border last:border-0">
                  <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">{new Date(f.date).toLocaleDateString()}</td>
                  <td className="px-5 py-4 font-medium">{f.machineName}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                      {f.rating === "positive" ? <ThumbsUp className="h-3 w-3" /> : <ThumbsDown className="h-3 w-3" />}
                      {f.rating}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-foreground">{f.comment}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={4} className="px-5 py-10 text-center text-sm text-muted-foreground">No feedback matches your filters.</td></tr>
              )}
            </tbody>
          </table>

          {/* Mobile cards */}
          <ul className="divide-y divide-border md:hidden">
            {filtered.map((f) => (
              <li key={f.id} className="p-4">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.rating === "positive" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                    {f.rating === "positive" ? <ThumbsUp className="h-3 w-3" /> : <ThumbsDown className="h-3 w-3" />}
                    {f.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">{new Date(f.date).toLocaleDateString()}</span>
                </div>
                <p className="mt-2 text-sm">{f.comment}</p>
                <p className="mt-1 text-xs text-muted-foreground">{f.machineName}</p>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="p-8 text-center text-sm text-muted-foreground">No feedback matches your filters.</li>
            )}
          </ul>
        </div>
      </main>
    </>
  );
}
