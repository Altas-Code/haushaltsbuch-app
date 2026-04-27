"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RecurringItem } from "@/domain/recurring-item/model";
import styles from "./create-recurring-item-form.module.css";

const intervalOptions = [
  { value: "monthly", label: "Monatlich" },
  { value: "quarterly", label: "Vierteljährlich" },
  { value: "semiannual", label: "Halbjährlich" },
  { value: "yearly", label: "Jährlich" },
] as const;

const categoryOptions = [
  { value: "", label: "Keine Kategorie" },
  { value: "subscription", label: "Abo" },
  { value: "insurance", label: "Versicherung" },
  { value: "loan", label: "Kredit" },
  { value: "housing", label: "Wohnen" },
  { value: "mobility", label: "Mobilität" },
  { value: "health", label: "Gesundheit" },
  { value: "other", label: "Sonstiges" },
] as const;

const statusOptions = [
  { value: "active", label: "Aktiv" },
  { value: "paused", label: "Pausiert" },
  { value: "ended", label: "Beendet" },
] as const;

function formatDateInput(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function EditRecurringItemForm({ item }: { item: RecurringItem }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setIsSubmitting(true);

    const payload = {
      name: String(formData.get("name") ?? ""),
      amountCents: Math.round(Number(formData.get("amount") ?? 0) * 100),
      interval: String(formData.get("interval") ?? "monthly"),
      nextDueDate: String(formData.get("nextDueDate") ?? ""),
      category: String(formData.get("category") ?? ""),
      notes: String(formData.get("notes") ?? ""),
      status: String(formData.get("status") ?? "active"),
    };

    const response = await fetch(`/api/recurring-items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Eintrag konnte nicht aktualisiert werden.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    router.push("/recurring-items?updated=1");
    router.refresh();
  }

  return (
    <form
      className={styles.form}
      action={async (formData) => {
        await handleSubmit(formData);
      }}
    >
      <div className={styles.grid}>
        <label>
          <span>Name</span>
          <input name="name" type="text" defaultValue={item.name} required />
        </label>

        <label>
          <span>Betrag in Euro</span>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            defaultValue={(item.amountCents / 100).toFixed(2)}
            required
          />
        </label>

        <label>
          <span>Intervall</span>
          <select name="interval" defaultValue={item.interval}>
            {intervalOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Nächste Fälligkeit</span>
          <input name="nextDueDate" type="date" defaultValue={formatDateInput(item.nextDueDate)} required />
        </label>

        <label>
          <span>Kategorie</span>
          <select name="category" defaultValue={item.category ?? ""}>
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Status</span>
          <select name="status" defaultValue={item.status}>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.notes}>
          <span>Notiz</span>
          <textarea name="notes" rows={4} defaultValue={item.notes ?? ""} />
        </label>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Speichert..." : "Eintrag aktualisieren"}
      </button>
    </form>
  );
}
