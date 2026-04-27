import { describe, expect, it } from "vitest";
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

  it("rejects missing name", () => {
    expect(() =>
      validateRecurringItemInput({
        name: "   ",
        amountCents: 1000,
        interval: "monthly",
        nextDueDate: "2026-05-01",
      }),
    ).toThrow(/name ist erforderlich/i);
  });
});
