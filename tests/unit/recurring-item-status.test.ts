import { describe, expect, it } from "vitest";
import type { RecurringItemStatus } from "@/domain/recurring-item/model";

const allowed: RecurringItemStatus[] = ["active", "paused", "ended"];

describe("recurring item status set", () => {
  it("contains the expected statuses", () => {
    expect(allowed).toEqual(["active", "paused", "ended"]);
  });
});
