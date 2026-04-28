import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/application/recurring-item/get-dashboard-summary", () => ({
  getDashboardSummary: vi.fn(async () => ({
    activeItemsCount: 2,
    monthSliceTotalCents: 3600,
    currentlyMonthlyDueCents: 2400,
    yearlyTotalCents: 43200,
    upcomingDueItems: [],
  })),
}));

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the real dashboard summary", async () => {
    const page = await HomePage();
    render(page);
    expect(screen.getByRole("heading", { name: /dein monatsschnitt auf einen blick/i })).toBeInTheDocument();
    expect(screen.getByText(/monatsschnitt gesamt/i)).toBeInTheDocument();
  });
});
