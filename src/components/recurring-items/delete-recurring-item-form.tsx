"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./status-action-form.module.css";

export function DeleteRecurringItemForm({ id }: { id: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    const confirmed = window.confirm("Willst du diesen Eintrag wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.");
    if (!confirmed) {
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const response = await fetch(`/api/recurring-items/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Eintrag konnte nicht gelöscht werden.");
      setIsSubmitting(false);
      return;
    }

    router.push("/recurring-items?deleted=1");
    router.refresh();
    setIsSubmitting(false);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.dangerButton} disabled={isSubmitting} onClick={handleDelete} type="button">
        {isSubmitting ? "Löscht..." : "Löschen"}
      </button>
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
