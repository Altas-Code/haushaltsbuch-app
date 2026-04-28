import { prisma } from "@/lib/db/prisma";
import { calculateMonthlyAmount, calculateYearlyAmount } from "@/domain/recurring-item/calculations";

export async function getDashboardSummary() {
  const activeItems = await prisma.recurringItem.findMany({
    where: { status: "active" },
    orderBy: { nextDueDate: "asc" },
  });

  const monthSliceTotalCents = activeItems.reduce(
    (sum, item) => sum + calculateMonthlyAmount(item.amountCents, item.interval),
    0,
  );

  const currentlyMonthlyDueCents = activeItems
    .filter((item) => item.interval === "monthly")
    .reduce((sum, item) => sum + item.amountCents, 0);

  const yearlyTotalCents = activeItems.reduce(
    (sum, item) => sum + calculateYearlyAmount(item.amountCents, item.interval),
    0,
  );

  const upcomingDueItems = activeItems.slice(0, 5);

  return {
    activeItemsCount: activeItems.length,
    monthSliceTotalCents,
    currentlyMonthlyDueCents,
    yearlyTotalCents,
    upcomingDueItems,
  };
}
