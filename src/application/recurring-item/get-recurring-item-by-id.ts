import { prisma } from "@/lib/db/prisma";

export async function getRecurringItemById(id: string) {
  return prisma.recurringItem.findUnique({
    where: { id },
  });
}
