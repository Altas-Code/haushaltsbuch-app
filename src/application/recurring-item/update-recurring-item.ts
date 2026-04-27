import { prisma } from "@/lib/db/prisma";
import { validateRecurringItemInput } from "@/domain/recurring-item/rules";
import type { CreateRecurringItemInput } from "@/domain/recurring-item/model";

export async function updateRecurringItem(id: string, input: CreateRecurringItemInput) {
  const validated = validateRecurringItemInput(input);

  return prisma.recurringItem.update({
    where: { id },
    data: {
      name: validated.name,
      amountCents: validated.amountCents,
      interval: validated.interval,
      nextDueDate: validated.nextDueDate,
      category: validated.category,
      notes: validated.notes,
      status: validated.status,
    },
  });
}
