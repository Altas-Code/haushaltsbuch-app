import { prisma } from "@/lib/db/prisma";
import type { RecurringItemStatus } from "@/domain/recurring-item/model";

export async function listRecurringItems(status?: RecurringItemStatus | "all") {
  return prisma.recurringItem.findMany({
    where: status && status !== "all" ? { status } : undefined,
    orderBy: { nextDueDate: "asc" },
  });
}
