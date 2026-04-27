import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { DashboardPlaceholder } from "@/components/dashboard/dashboard-placeholder";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardPlaceholder />
      <p>
        <Link href="/recurring-items/new">Zum ersten recurring item</Link>
      </p>
    </AppShell>
  );
}
