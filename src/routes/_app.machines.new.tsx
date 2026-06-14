import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/_app/machines/new")({
  head: () => ({ meta: [{ title: "Add Machine — FeedbackFlow" }] }),
  component: NewMachine,
});

function NewMachine() {
  const navigate = useNavigate();
  return (
    <>
      <AppHeader title="Add Machine" />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-2xl">
          <Link to="/machines" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to machines
          </Link>

          <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="text-lg font-semibold tracking-tight">Machine details</h2>
            <p className="mt-1 text-sm text-muted-foreground">A QR code will be generated automatically once saved.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); navigate({ to: "/machines" }); }}
              className="mt-6 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Machine name</Label>
                <Input id="name" placeholder="e.g. Break Room Machine" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location name</Label>
                <Input id="location" placeholder="e.g. HQ - 2nd Floor" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Street, City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Optional notes about the machine" rows={4} />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Link to="/machines"><Button type="button" variant="ghost">Cancel</Button></Link>
                <Button type="submit">Save Machine</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
