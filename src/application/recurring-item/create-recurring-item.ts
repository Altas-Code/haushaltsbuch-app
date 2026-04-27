import { prisma } from "@/lib/db/prisma";
import { validateRecurringItemInput } from "@/domain/recurring-item/rules";
import type { CreateRecurringItemInput } from "@/domain/recurring-item/model";

export async function createRecurringItem(input: CreateRecurringItemInput) {
  const validated = validateRecurringItemInput(input);

  return prisma.recurringItem.create({
    data: {
      name: validated.name,
      amountCents: validated.amountCents,
      currency: "EUR",
      interval: validated.interval,
      nextDueDate: validated.nextDueDate,
      category: validated.category,
      notes: validated.notes,
      status: validated.status,
    },
  });
}
