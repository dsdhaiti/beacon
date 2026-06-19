import React, { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { getRoadmap } from "@/lib/api/github.functions";
import { voteFeature, getVotes } from "@/lib/api/votes.functions";
import { ThumbsUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { addToWaitlist } from "@/lib/api/waitlist.functions";
/*
  Construction page
  - Shows public roadmap (Planned / In Progress / Completed)
  - Displays a separate Feature Requests list (filtered by labels)
  - Provides a simple voting UI (optimistic update + persisted counts)
*/

export const Route = createFileRoute("/construction")({
  head: () => ({ meta: [{ title: "FeedbackFlow" }] }),
  component: Construction,
});

function Construction() {
  // Raw list of GitHub issues used as roadmap items
  const [roadmapItems, setRoadmapItems] = useState<any[]>([]);

  // Vote counts fetched from the server (persisted in data/feature_votes.json)
  const [votes, setVotes] = useState<Record<string, number>>({});

  // Local client-side map to prevent duplicate votes from the same browser
  // Stored in `localStorage` under `voted_features`.
  const [votedLocal, setVotedLocal] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem("voted_features");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });

    // async function handleJoin(e: React.FormEvent) {
    //   e.preventDefault();
    //   setStatusMsg(null);
    //   setLoading(true);
    //   try {
    //     const res = await addToWaitlist({ data: { email, name: name || undefined, company: company || undefined } });
    //     if (res?.ok) {
    //       if (res.existing) setStatusMsg("You're already on the waitlist — thanks!");
    //       else setStatusMsg("Thanks for joining! We'll keep you updated.");
    //       setEmail("");
    //       setName("");
    //       setCompany("");
    //     } else {
    //       setStatusMsg("Could not join waitlist. Please try again later.");
    //     }
    //   } catch (err) {
    //     setStatusMsg("Submission failed. Try again later.");
    //   } finally {
    //     setLoading(false);
    //   }
    // }

  useEffect(() => {
    let mounted = true;
    (async () => {
      // Fetch public GitHub issues for the roadmap and vote counts
      try {
        const res = await getRoadmap({});
        if (mounted && res?.ok) setRoadmapItems(res.items || []);

        // Fetch persisted vote counts (separate API call)
        try {
          const vres = await getVotes({});
          if (mounted && vres?.ok) setVotes(vres.votes || {});
        } catch (e) {
          // Swallow vote fetch errors — voting UI will still work optimistically
        }
      } catch (e) {
        // Swallow roadmap fetch errors for now
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Group roadmap items by state for the Planned / In Progress / Completed columns
  const grouped = roadmapItems.reduce((acc: Record<string, any[]>, it: any) => {
    acc[it.state] = acc[it.state] || [];
    acc[it.state].push(it);
    return acc;
  }, {} as Record<string, any[]>);

  const totalIssues = roadmapItems.length;
  const completedCount = (grouped["Completed"] || []).length;
  const progressPercent = totalIssues > 0 ? Math.round((completedCount / totalIssues) * 100) : 20;

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">FeedbackFlow</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/signup"><Button size="sm">Get started</Button></Link>
        </nav>
      </header>

        {/* <form onSubmit={handleJoin} className="flex w-full max-w-xl items-center gap-2">
              <Input
                required
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" size="lg" className="gap-2" disabled={loading}>
                Join the Waitlist
              </Button>
            </form> */}

      {/* <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">Currently Under Construction</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">We're actively building Feedback App</h2>
            <p className="mt-3 text-sm text-muted-foreground">Inviting early adopters to help shape the product.</p>
          </div>
          <div className="mt-6 max-w-2xl">
            <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full rounded-full bg-border h-3">
              <div className="rounded-full bg-primary h-3" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold">Current Sprint</h4>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Landing Page</li>
                  <li>Authentication</li>
                  <li>Machine Registration</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Next Sprint</h4>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>QR Generation</li>
                  <li>Customer Feedback Collection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold text-primary">Roadmap</p>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight md:text-6xl text-foreground">Construction / Coming Soon</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Public Roadmap</h2>
          <p className="mt-3 text-sm text-muted-foreground">Visible items are sourced from our public GitHub repository.</p>
        </div>

        <div className="mx-auto max-w-6xl px-6 mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { key: "Planned", title: "Planned" },
              { key: "In Progress", title: "In Progress" },
              { key: "Completed", title: "Completed" },
            ].map((col) => (
              <div key={col.key} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{col.title}</h3>
                <div className="mt-4 space-y-3">
                  {(grouped[col.key] || []).slice(0, 6).map((it: any) => (
                    <a key={it.number} href={it.url} className="block rounded-md p-2 hover:bg-muted">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-foreground">{it.title}</div>
                        <div className="text-xs text-muted-foreground">#{it.number}</div>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{(it.labels || []).join(", ")} • {it.updated_at?.split("T")?.[0]}</div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Requests (separate) */}
      <section className="py-14 border-t border-border bg-muted/10">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-center text-2xl font-semibold">Feature Requests</h3>
          <p className="text-center mt-2 text-sm text-muted-foreground">Like features you want to see — your votes help prioritize work.</p>

          <div className="mt-6 grid gap-4">
            {roadmapItems
              .filter((it: any) => {
                const names = (it.labels || []).map((l: string) => l.toLowerCase());
                return names.includes("feature") || names.includes("enhancement") || names.includes("proposal") || names.includes("request") || names.includes("feature-request");
              })
              .slice(0, 40)
              .map((it: any) => {
                const key = String(it.number);
                const count = votes[key] || 0;
                const hasVoted = !!votedLocal[key];
                return (
                  <div key={it.number} className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                    <div>
                      <a href={it.url} className="text-sm font-medium text-foreground hover:underline">{it.title}</a>
                      <div className="mt-1 text-xs text-muted-foreground">{(it.labels || []).join(", ")} • {it.updated_at?.split("T")?.[0]}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-muted-foreground">{count}</div>
                      <Button
                        size="sm"
                        variant={hasVoted ? "secondary" : "outline"}
                        onClick={async () => {
                          if (hasVoted) return;
                          setVotes((s) => ({ ...s, [key]: (s[key] || 0) + 1 }));
                          const newVoted = { ...votedLocal, [key]: true };
                          setVotedLocal(newVoted);
                          try {
                            localStorage.setItem("voted_features", JSON.stringify(newVoted));
                          } catch (e) {}
                          try {
                            await voteFeature({ data: { number: it.number } });
                          } catch (e) {
                            // ignore server error
                          }
                        }}
                        aria-label={`Like ${it.title}`}
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

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
