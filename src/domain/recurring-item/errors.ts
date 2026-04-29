export type RecurringItemFieldErrorMap = Partial<
  Record<"name" | "amount" | "interval" | "nextDueDate" | "category" | "notes" | "status", string>
>;

export class RecurringItemValidationError extends Error {
  constructor(
    message: string,
    public readonly fieldErrors: RecurringItemFieldErrorMap = {},
  ) {
    super(message);
    this.name = "RecurringItemValidationError";
  }
}
