import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Zap, QrCode, BarChart3, Sparkles, ArrowRight, Check, ThumbsUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FeedbackFlow — Customer feedback for vending machines" },
      { name: "description", content: "QR-code feedback for vending operators. Add a machine, print a QR, hear from your customers." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">FeedbackFlow</span>
        </Link>
        <nav className="flex items-center gap-2">
          {/* <Link to="/login"><Button variant="ghost" size="sm">Sign in</Button></Link> */}
          <Link to="/signup"><Button size="sm">Get started</Button></Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Now in early access
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Hear from every customer at every machine.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            A QR code on the vending machine. A tap on the phone. Real feedback you can act on — without any apps to download.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/signup"><Button size="lg" className="gap-2">Start free <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/feedback/$machineId" params={{ machineId: "m1" }}>
              <Button size="lg" variant="outline">See customer view</Button>
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">No credit card required. 5 machines free.</p>
        </div>

        {/* Hero preview */}
        {/* <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute inset-x-10 -top-6 h-32 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative rounded-2xl border border-border bg-card p-2 shadow-elevated">
            <div className="rounded-xl bg-gradient-to-br from-secondary via-card to-accent p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Total feedback", value: "1,284", tint: "text-primary" },
                  { label: "Positive", value: "87%", tint: "text-success" },
                  { label: "Active machines", value: "12", tint: "text-foreground" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-card p-4 shadow-soft">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className={`mt-1 text-2xl font-bold ${s.tint}`}>{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">Why FeedbackFlow</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Everything you need, nothing you don't.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: ThumbsUp, title: "Collect Customer Feedback", body: "A one-tap thumbs up or down — plus an optional comment. Zero friction for your customers." },
              { icon: BarChart3, title: "Track Customer Sentiment", body: "See how every machine is performing, where to restock, and where to investigate." },
              { icon: Sparkles, title: "Improve Customer Experience", body: "Spot empty machines, payment issues, and product wins — and act before customers walk away." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary">How it works</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Live in under five minutes.</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", icon: Zap, title: "Add Machine", body: "Name it, set its location, and you're done." },
              { n: "02", icon: QrCode, title: "Generate QR Code", body: "Download or print the unique QR sticker for that machine." },
              { n: "03", icon: Check, title: "Collect Feedback", body: "Customers tap good or bad. You watch results roll in." },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-muted-foreground">{s.n}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                {i < 2 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link to="/signup"><Button size="lg" className="gap-2">Create your account <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-3 w-3" />
            </div>
            <span>© 2026 FeedbackFlow</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
