import { prisma } from "@/lib/db/prisma";
import type { RecurringItemCategory, RecurringItemStatus } from "@/domain/recurring-item/model";

export type RecurringItemSort = "dueDateAsc" | "dueDateDesc";
export type RecurringItemCategoryFilter = RecurringItemCategory | "uncategorized" | "all";

export async function listRecurringItems(
  status?: RecurringItemStatus | "all",
  sort: RecurringItemSort = "dueDateAsc",
  category: RecurringItemCategoryFilter = "all",
) {
  return prisma.recurringItem.findMany({
    where: {
      ...(status && status !== "all" ? { status } : {}),
      ...(category === "uncategorized"
        ? { category: null }
        : category !== "all"
          ? { category }
          : {}),
    },
    orderBy: { nextDueDate: sort === "dueDateDesc" ? "desc" : "asc" },
  });
}
