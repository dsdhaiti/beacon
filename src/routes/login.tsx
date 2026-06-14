import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — FeedbackFlow" }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  return (
    <div className="grid min-h-screen place-items-center bg-muted/40 px-4 py-10">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-6 flex items-center justify-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">FeedbackFlow</span>
        </Link>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-elevated">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to your dashboard.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); navigate({ to: "/dashboard" }); }}
            className="mt-6 space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs font-medium text-primary hover:underline">Forgot password?</a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" size="lg">Sign in</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to FeedbackFlow?{" "}
            <Link to="/signup" className="font-medium text-primary hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
