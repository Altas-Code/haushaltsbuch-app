import { prisma } from "@/lib/db/prisma";

export async function listRecurringItems() {
  return prisma.recurringItem.findMany({
    orderBy: { nextDueDate: "asc" },
  });
}
