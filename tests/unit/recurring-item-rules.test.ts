import { describe, expect, it } from "vitest";
import { RecurringItemValidationError } from "@/domain/recurring-item/errors";
import { validateRecurringItemInput } from "@/domain/recurring-item/rules";

describe("validateRecurringItemInput", () => {
  it("accepts valid recurring item input", () => {
    const result = validateRecurringItemInput({
      name: "Netflix",
      amountCents: 1799,
      interval: "monthly",
      nextDueDate: "2026-05-01",
      category: "subscription",
      notes: "Streaming",
    });

    expect(result.name).toBe("Netflix");
    expect(result.amountCents).toBe(1799);
    expect(result.category).toBe("subscription");
  });

  it("returns structured field errors for invalid input", () => {
    try {
      validateRecurringItemInput({
        name: "   ",
        amountCents: 0,
        interval: "monthly",
        nextDueDate: "not-a-date",
        notes: "x".repeat(501),
      });
      throw new Error("Expected validation to fail");
    } catch (error) {
      expect(error).toBeInstanceOf(RecurringItemValidationError);
      if (error instanceof RecurringItemValidationError) {
        expect(error.message).toMatch(/markierten felder/i);
        expect(error.fieldErrors.name).toMatch(/namen/i);
        expect(error.fieldErrors.amount).toMatch(/betrag/i);
        expect(error.fieldErrors.nextDueDate).toMatch(/fälligkeit/i);
        expect(error.fieldErrors.notes).toMatch(/500 zeichen/i);
      }
    }
  });
});
