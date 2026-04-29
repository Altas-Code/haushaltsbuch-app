import { prisma } from "@/lib/db/prisma";

export async function deleteRecurringItem(id: string) {
  return prisma.recurringItem.delete({
    where: { id },
  });
}
