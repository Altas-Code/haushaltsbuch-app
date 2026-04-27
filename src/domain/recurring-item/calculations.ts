export type RecurringInterval = "monthly" | "quarterly" | "semiannual" | "yearly";

export function calculateMonthlyAmount(amountCents: number, interval: RecurringInterval): number {
  switch (interval) {
    case "monthly":
      return amountCents;
    case "quarterly":
      return Math.round(amountCents / 3);
    case "semiannual":
      return Math.round(amountCents / 6);
    case "yearly":
      return Math.round(amountCents / 12);
  }
}

export function calculateYearlyAmount(amountCents: number, interval: RecurringInterval): number {
  switch (interval) {
    case "monthly":
      return amountCents * 12;
    case "quarterly":
      return amountCents * 4;
    case "semiannual":
      return amountCents * 2;
    case "yearly":
      return amountCents;
  }
}
