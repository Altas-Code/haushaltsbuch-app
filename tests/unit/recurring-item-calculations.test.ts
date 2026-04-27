import { describe, expect, it } from "vitest";
import { calculateMonthlyAmount, calculateYearlyAmount } from "@/domain/recurring-item/calculations";

describe("recurring item calculations", () => {
  it("calculates monthly amount for yearly entries", () => {
    expect(calculateMonthlyAmount(12000, "yearly")).toBe(1000);
  });

  it("calculates yearly amount for monthly entries", () => {
    expect(calculateYearlyAmount(2500, "monthly")).toBe(30000);
  });
});
