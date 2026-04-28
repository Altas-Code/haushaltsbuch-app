import type { getDashboardSummary } from "@/application/recurring-item/get-dashboard-summary";

export type AwaitedDashboardSummary = Awaited<ReturnType<typeof getDashboardSummary>>;
