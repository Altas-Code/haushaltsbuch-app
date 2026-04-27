"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RecurringItemStatus } from "@/domain/recurring-item/model";
import styles from "./status-action-form.module.css";

const labels: Record<RecurringItemStatus, string> = {
  active: "Aktiv setzen",
  paused: "Pausieren",
  ended: "Beenden",
};

export function StatusActionForm({
  id,
  currentStatus,
  nextStatus,
}: {
  id: string;
  currentStatus: RecurringItemStatus;
  nextStatus: RecurringItemStatus;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (currentStatus === nextStatus) {
    return null;
  }

  async function handleSubmit() {
    setError(null);
    setIsSubmitting(true);

    const response = await fetch(`/api/recurring-items/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Status konnte nicht geändert werden.");
      setIsSubmitting(false);
      return;
    }

    router.refresh();
    setIsSubmitting(false);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} disabled={isSubmitting} onClick={handleSubmit} type="button">
        {isSubmitting ? "Speichert..." : labels[nextStatus]}
      </button>
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
