import React from "react";
import { AppShell } from "@/components/layout/app-shell";
import { DashboardSummary } from "@/components/dashboard/dashboard-summary";
import { getDashboardSummary } from "@/application/recurring-item/get-dashboard-summary";

export default async function HomePage() {
  const summary = await getDashboardSummary();

  return (
    <AppShell>
      <DashboardSummary summary={summary} />
    </AppShell>
  );
}
