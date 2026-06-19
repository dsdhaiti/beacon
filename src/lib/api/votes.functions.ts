import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "feature_votes.json");

async function readVotes(): Promise<Record<string, number>> {
  try {
    const txt = await fs.readFile(filePath, "utf-8");
    return JSON.parse(txt || "{}");
  } catch (e) {
    return {};
  }
}

async function writeVotes(v: Record<string, number>) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(v, null, 2), "utf-8");
}

export const voteFeature = createServerFn({ method: "POST" })
  .inputValidator(z.object({ number: z.number() }))
  .handler(async ({ data }) => {
    const votes = await readVotes();
    const key = String(data.number);
    votes[key] = (votes[key] || 0) + 1;
    await writeVotes(votes);
    return { ok: true, votes };
  });

export const getVotes = createServerFn({ method: "GET" }).handler(async () => {
  const votes = await readVotes();
  return { ok: true, votes };
});
