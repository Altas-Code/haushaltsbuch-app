import { describe, expect, it } from "vitest";
import { calculateMonthlyAmount, calculateYearlyAmount } from "@/domain/recurring-item/calculations";

describe("dashboard-related calculations", () => {
  it("calculates the monthly slice for quarterly values", () => {
    expect(calculateMonthlyAmount(9000, "quarterly")).toBe(3000);
  });

  it("calculates the yearly value for semiannual values", () => {
    expect(calculateYearlyAmount(4500, "semiannual")).toBe(9000);
  });
});
