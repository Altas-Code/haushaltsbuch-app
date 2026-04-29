import { RecurringItemValidationError } from "./errors";
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
  const fieldErrors: Record<string, string> = {};

  const name = input.name.trim();
  if (!name) {
    fieldErrors.name = "Bitte gib einen Namen für den Eintrag an.";
  }

  if (!Number.isInteger(input.amountCents) || input.amountCents <= 0) {
    fieldErrors.amount = "Bitte gib einen Betrag größer als 0 Euro an.";
  }

  if (!intervals.includes(input.interval)) {
    fieldErrors.interval = "Bitte wähle ein gültiges Intervall aus.";
  }

  const nextDueDate = new Date(input.nextDueDate);
  if (Number.isNaN(nextDueDate.getTime())) {
    fieldErrors.nextDueDate = "Bitte gib eine gültige nächste Fälligkeit an.";
  }

  const status = input.status ?? "active";
  if (!statuses.includes(status)) {
    fieldErrors.status = "Bitte wähle einen gültigen Status aus.";
  }

  const category = input.category?.trim() ? (input.category as RecurringItemCategory) : null;
  if (category && !categories.includes(category)) {
    fieldErrors.category = "Bitte wähle eine gültige Kategorie aus.";
  }

  const notes = input.notes?.trim() ? input.notes.trim() : null;

  if (notes && notes.length > 500) {
    fieldErrors.notes = "Die Notiz darf höchstens 500 Zeichen lang sein.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw new RecurringItemValidationError("Bitte prüfe die markierten Felder.", fieldErrors);
  }

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
