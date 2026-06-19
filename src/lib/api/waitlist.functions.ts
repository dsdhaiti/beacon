import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "waitlist.json");

export const addToWaitlist = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email(),
      name: z.string().optional(),
      company: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    let list: Array<any> = [];
    try {
      const txt = await fs.readFile(filePath, "utf-8");
      list = JSON.parse(txt) as Array<any>;
    } catch (e) {
      list = [];
    }

    const email = data.email.toLowerCase();
    const exists = list.find((l) => l.email?.toLowerCase() === email);
    if (exists) {
      return { ok: true, existing: true, entry: exists };
    }

    const entry = {
      email,
      name: data.name ?? null,
      company: data.company ?? null,
      createdAt: new Date().toISOString(),
    };
    list.push(entry);

    await fs.writeFile(filePath, JSON.stringify(list, null, 2), "utf-8");

    return { ok: true, existing: false, entry };
  });

export const getWaitlist = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const txt = await fs.readFile(filePath, "utf-8");
    const list = JSON.parse(txt);
    return { ok: true, list };
  } catch (e) {
    return { ok: true, list: [] };
  }
});
