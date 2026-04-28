import { prisma } from "@/lib/db/prisma";
import type { RecurringItemStatus } from "@/domain/recurring-item/model";

export type RecurringItemSort = "dueDateAsc" | "dueDateDesc";

export async function listRecurringItems(status?: RecurringItemStatus | "all", sort: RecurringItemSort = "dueDateAsc") {
  return prisma.recurringItem.findMany({
    where: status && status !== "all" ? { status } : undefined,
    orderBy: { nextDueDate: sort === "dueDateDesc" ? "desc" : "asc" },
  });
}
