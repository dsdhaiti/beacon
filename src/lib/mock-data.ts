export type Machine = {
  id: string;
  name: string;
  location: string;
  address: string;
  description?: string;
  qrStatus: "active" | "inactive";
  positive: number;
  negative: number;
};

export type Feedback = {
  id: string;
  machineId: string;
  machineName: string;
  rating: "positive" | "negative";
  comment: string;
  date: string;
};

export const business = {
  name: "Acme Vending Co.",
  email: "owner@acmevending.com",
  ownerName: "Jordan Rivera",
};

export const machines: Machine[] = [
  { id: "m1", name: "Break Room Machine", location: "HQ - 2nd Floor", address: "100 Market St, San Francisco, CA", description: "Snacks and beverages", qrStatus: "active", positive: 42, negative: 6 },
  { id: "m2", name: "Warehouse Machine", location: "Distribution Center", address: "455 Industrial Way, Oakland, CA", qrStatus: "active", positive: 28, negative: 11 },
  { id: "m3", name: "Lobby Machine", location: "Main Entrance", address: "100 Market St, San Francisco, CA", qrStatus: "active", positive: 67, negative: 3 },
  { id: "m4", name: "Gym Machine", location: "Fitness Center", address: "22 Howard St, San Francisco, CA", qrStatus: "inactive", positive: 14, negative: 9 },
  { id: "m5", name: "Office Snack Station", location: "Engineering Floor", address: "100 Market St, San Francisco, CA", qrStatus: "active", positive: 51, negative: 4 },
  { id: "m6", name: "Cafeteria Machine", location: "Building B", address: "200 Townsend St, San Francisco, CA", qrStatus: "active", positive: 33, negative: 7 },
];

export const feedback: Feedback[] = [
  { id: "f1", machineId: "m1", machineName: "Break Room Machine", rating: "positive", comment: "Great selection!", date: "2026-06-13T10:24:00Z" },
  { id: "f2", machineId: "m2", machineName: "Warehouse Machine", rating: "negative", comment: "Machine was empty.", date: "2026-06-13T09:11:00Z" },
  { id: "f3", machineId: "m3", machineName: "Lobby Machine", rating: "positive", comment: "Loved the new drinks.", date: "2026-06-12T16:45:00Z" },
  { id: "f4", machineId: "m1", machineName: "Break Room Machine", rating: "negative", comment: "Payment system was confusing.", date: "2026-06-12T14:02:00Z" },
  { id: "f5", machineId: "m5", machineName: "Office Snack Station", rating: "positive", comment: "Everything worked perfectly.", date: "2026-06-12T11:38:00Z" },
  { id: "f6", machineId: "m6", machineName: "Cafeteria Machine", rating: "positive", comment: "Fast and easy.", date: "2026-06-11T19:12:00Z" },
  { id: "f7", machineId: "m4", machineName: "Gym Machine", rating: "negative", comment: "Took my money, no drink.", date: "2026-06-11T08:55:00Z" },
  { id: "f8", machineId: "m3", machineName: "Lobby Machine", rating: "positive", comment: "Always stocked. Thanks!", date: "2026-06-10T13:21:00Z" },
];

export const totals = () => {
  const positive = feedback.filter(f => f.rating === "positive").length;
  const negative = feedback.filter(f => f.rating === "negative").length;
  return { machines: machines.length, total: feedback.length, positive, negative };
};

export const recentActivity = [
  { id: "a1", type: "feedback", text: "New positive feedback on Lobby Machine", time: "2m ago" },
  { id: "a2", type: "feedback", text: "New negative feedback on Warehouse Machine", time: "1h ago" },
  { id: "a3", type: "machine", text: "Cafeteria Machine added", time: "Yesterday" },
  { id: "a4", type: "feedback", text: "Feedback submitted on Break Room Machine", time: "Yesterday" },
  { id: "a5", type: "qr", text: "QR code regenerated for Gym Machine", time: "2 days ago" },
];

export const findMachine = (id: string) => machines.find(m => m.id === id);

export type ItemRequest = {
  id: string;
  machineId: string;
  itemName: string;
  requestCount: number;
  createdAt: string;
  updatedAt: string;
};

export const itemRequests: ItemRequest[] = [
  { id: "r1", machineId: "m1", itemName: "Celsius Energy Drink", requestCount: 15, createdAt: "2026-05-20T10:00:00Z", updatedAt: "2026-06-13T14:22:00Z" },
  { id: "r2", machineId: "m1", itemName: "Prime Hydration", requestCount: 8, createdAt: "2026-05-22T10:00:00Z", updatedAt: "2026-06-12T09:10:00Z" },
  { id: "r3", machineId: "m1", itemName: "Snickers Peanut Butter", requestCount: 4, createdAt: "2026-06-01T10:00:00Z", updatedAt: "2026-06-10T16:42:00Z" },
  { id: "r4", machineId: "m3", itemName: "Celsius Energy Drink", requestCount: 3, createdAt: "2026-06-02T10:00:00Z", updatedAt: "2026-06-11T11:11:00Z" },
  { id: "r5", machineId: "m5", itemName: "Liquid Death", requestCount: 6, createdAt: "2026-06-03T10:00:00Z", updatedAt: "2026-06-13T08:30:00Z" },
];

const normalize = (s: string) => s.trim().toLowerCase();

export const submitItemRequest = (machineId: string, itemName: string) => {
  const name = itemName.trim();
  if (!name) return;
  const now = new Date().toISOString();
  const existing = itemRequests.find(
    r => r.machineId === machineId && normalize(r.itemName) === normalize(name),
  );
  if (existing) {
    existing.requestCount += 1;
    existing.updatedAt = now;
  } else {
    itemRequests.push({
      id: `r${itemRequests.length + 1}-${Date.now()}`,
      machineId,
      itemName: name,
      requestCount: 1,
      createdAt: now,
      updatedAt: now,
    });
  }
};

export const getRequestsForMachine = (machineId: string) =>
  itemRequests
    .filter(r => r.machineId === machineId)
    .sort((a, b) => b.requestCount - a.requestCount);

