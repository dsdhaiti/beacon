import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

type RoadmapItem = {
  title: string;
  url: string;
  labels: string[];
  updated_at: string;
  number: number;
  state: "Planned" | "In Progress" | "Completed";
};

const cache: { ts: number; data: Record<string, RoadmapItem[]> } = { ts: 0, data: {} };
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

function mapStatus(labels: string[], state: string): "Planned" | "In Progress" | "Completed" {
  const names = labels.map((l) => l.toLowerCase());
  if (state === "closed" || names.includes("done") || names.includes("completed") || names.includes("complete")) return "Completed";
  if (names.includes("in-progress") || names.includes("in progress") || names.includes("in-progress")) return "In Progress";
  if (names.includes("planned") || names.includes("backlog") || names.includes("proposal")) return "Planned";
  return "Planned";
}

export const getRoadmap = createServerFn({ method: "GET" })
  .inputValidator(
    z.object({ owner: z.string().optional(), repo: z.string().optional() }).optional(),
  )
  .handler(async ({ data }) => {
    const owner = data?.owner ?? "dsdhaiti";
    const repo = data?.repo ?? "beacon";
    const key = `${owner}/${repo}`;

    if (Date.now() - cache.ts < CACHE_TTL && cache.data[key]) {
      return { ok: true, items: cache.data[key] };
    }

    const url = `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=100`;
    const res = await fetch(url, { headers: { Accept: "application/vnd.github.v3+json" } });
    if (!res.ok) {
      return { ok: false, error: `GitHub responded ${res.status}` };
    }
    const issues = await res.json();
    const items: RoadmapItem[] = (issues || [])
      .filter((i: any) => !i.pull_request)
      .map((i: any) => {
        const labels = (i.labels || []).map((l: any) => (typeof l === "string" ? l : l.name || ""));
        return {
          title: i.title,
          url: i.html_url,
          labels,
          updated_at: i.updated_at,
          number: i.number,
          state: mapStatus(labels, i.state),
        };
      });

    cache.ts = Date.now();
    cache.data[key] = items;

    return { ok: true, items };
  });
