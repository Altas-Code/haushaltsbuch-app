import type { CreateRecurringItemInput, RecurringItemCategory, RecurringInterval, RecurringItemStatus } from "./model";

const intervals: RecurringInterval[] = ["monthly", "quarterly", "semiannual", "yearly"];
const statuses: RecurringItemStatus[] = ["active", "paused", "ended"];
const categories: RecurringItemCategory[] = [
  "subscription",
  "insurance",
  "loan",
  "housing",
  "mobility",
  "health",
  "other",
];

export type ValidatedRecurringItemInput = {
  name: string;
  amountCents: number;
  interval: RecurringInterval;
  nextDueDate: Date;
  category: RecurringItemCategory | null;
  notes: string | null;
  status: RecurringItemStatus;
};

export function validateRecurringItemInput(input: CreateRecurringItemInput): ValidatedRecurringItemInput {
  const name = input.name.trim();
  if (!name) {
    throw new Error("Name ist erforderlich.");
  }

  if (!Number.isInteger(input.amountCents) || input.amountCents <= 0) {
    throw new Error("Betrag muss größer als 0 sein.");
  }

  if (!intervals.includes(input.interval)) {
    throw new Error("Intervall ist ungültig.");
  }

  const nextDueDate = new Date(input.nextDueDate);
  if (Number.isNaN(nextDueDate.getTime())) {
    throw new Error("Nächstes Fälligkeitsdatum ist ungültig.");
  }

  const status = input.status ?? "active";
  if (!statuses.includes(status)) {
    throw new Error("Status ist ungültig.");
  }

  const category = input.category?.trim() ? (input.category as RecurringItemCategory) : null;
  if (category && !categories.includes(category)) {
    throw new Error("Kategorie ist ungültig.");
  }

  const notes = input.notes?.trim() ? input.notes.trim() : null;

  return {
    name,
    amountCents: input.amountCents,
    interval: input.interval,
    nextDueDate,
    category,
    notes,
    status,
  };
}
