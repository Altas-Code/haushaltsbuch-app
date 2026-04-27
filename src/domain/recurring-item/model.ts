export type RecurringInterval = "monthly" | "quarterly" | "semiannual" | "yearly";
export type RecurringItemStatus = "active" | "paused" | "ended";
export type RecurringItemCategory =
  | "subscription"
  | "insurance"
  | "loan"
  | "housing"
  | "mobility"
  | "health"
  | "other";

export type RecurringItem = {
  id: string;
  name: string;
  amountCents: number;
  currency: string;
  interval: RecurringInterval;
  nextDueDate: Date;
  category: RecurringItemCategory | null;
  notes: string | null;
  startDate: Date | null;
  endDate: Date | null;
  cancelByDate: Date | null;
  status: RecurringItemStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateRecurringItemInput = {
  name: string;
  amountCents: number;
  interval: RecurringInterval;
  nextDueDate: string;
  category?: RecurringItemCategory | "";
  notes?: string;
  status?: RecurringItemStatus;
};
