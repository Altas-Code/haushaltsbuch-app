import React from "react";
import { AppShell } from "@/components/layout/app-shell";
import { DashboardPlaceholder } from "@/components/dashboard/dashboard-placeholder";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardPlaceholder />
    </AppShell>
  );
}
