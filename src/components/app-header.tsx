import { business } from "@/lib/mock-data";

export function AppHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  const initials = business.ownerName.split(" ").map(n => n[0]).join("");
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{business.name}</p>
        <h1 className="truncate text-base font-semibold tracking-tight md:text-lg">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        {action}
        <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {initials}
        </div>
      </div>
    </header>
  );
}
