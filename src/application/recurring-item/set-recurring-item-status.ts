import { prisma } from "@/lib/db/prisma";
import type { RecurringItemStatus } from "@/domain/recurring-item/model";

const allowedStatuses: RecurringItemStatus[] = ["active", "paused", "ended"];

export async function setRecurringItemStatus(id: string, status: RecurringItemStatus) {
  if (!allowedStatuses.includes(status)) {
    throw new Error("Status ist ungültig.");
  }

  return prisma.recurringItem.update({
    where: { id },
    data: { status },
  });
}
