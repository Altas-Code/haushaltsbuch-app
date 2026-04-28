"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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

function getTodayDateInput() {
  return new Date().toISOString().slice(0, 10);
}

export function CreateRecurringItemForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    const payload = {
      name: String(formData.get("name") ?? ""),
      amountCents: Math.round(Number(formData.get("amount") ?? 0) * 100),
      interval: String(formData.get("interval") ?? "monthly"),
      nextDueDate: String(formData.get("nextDueDate") ?? ""),
      category: String(formData.get("category") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };

    const response = await fetch("/api/recurring-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Eintrag konnte nicht gespeichert werden.");
      setIsSubmitting(false);
      return;
    }

    setSuccess("Eintrag gespeichert.");
    setIsSubmitting(false);
    router.push("/recurring-items?created=1");
    router.refresh();
  }

  return (
    <form
      className={styles.form}
      action={async (formData) => {
        await handleSubmit(formData);
      }}
    >
      <div className={styles.formIntro}>
        <p className={styles.kicker}>Schnell erfassen</p>
        <h3>Die wichtigsten Felder zuerst</h3>
        <p>
          Name, Betrag, Intervall und Fälligkeit reichen für den ersten nutzbaren Eintrag. Kategorie und Notiz kannst du direkt ergänzen.
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>Kernangaben</h4>
          <p>Alles, was für den Eintrag wirklich nötig ist.</p>
        </div>

        <div className={styles.grid}>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="z. B. Netflix" autoComplete="off" required />
          </label>

          <label>
            <span>Betrag in Euro</span>
            <input
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              inputMode="decimal"
              placeholder="17.99"
              required
            />
          </label>

          <label>
            <span>Intervall</span>
            <select name="interval" defaultValue="monthly">
              {intervalOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Nächste Fälligkeit</span>
            <input name="nextDueDate" type="date" defaultValue={getTodayDateInput()} required />
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>Einordnung</h4>
          <p>Hilft später beim Lesen, ist aber leichtgewichtig gehalten.</p>
        </div>

        <div className={styles.grid}>
          <label>
            <span>Kategorie</span>
            <select name="category" defaultValue="">
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.notes}>
            <span>Notiz</span>
            <textarea name="notes" rows={4} placeholder="Optional" />
          </label>
        </div>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}
      {success ? <p className={styles.success}>{success}</p> : null}

      <div className={styles.submitRow}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Speichert..." : "Wiederkehrenden Eintrag anlegen"}
        </button>
      </div>
    </form>
  );
}
