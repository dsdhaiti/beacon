import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { business } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings — FeedbackFlow" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <>
      <AppHeader title="Settings" />
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-3xl space-y-6"
        >
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="text-base font-semibold">Business Information</h2>
            <p className="mt-1 text-sm text-muted-foreground">Shown to customers on the feedback page.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="business-name">Business name</Label>
                <Input id="business-name" defaultValue={business.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-email">Email</Label>
                <Input id="business-email" type="email" defaultValue={business.email} />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="text-base font-semibold">User Profile</h2>
            <p className="mt-1 text-sm text-muted-foreground">Update your personal account details.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full name</Label>
                <Input id="full-name" defaultValue={business.ownerName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">New password</Label>
                <Input id="password" type="password" placeholder="Leave blank to keep current" />
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </main>
    </>
  );
}
