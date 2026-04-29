"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RecurringItemFieldErrorMap } from "@/domain/recurring-item/errors";
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

type FormErrorResponse = {
  error?: string;
  fieldErrors?: RecurringItemFieldErrorMap;
};

export function EditRecurringItemForm({ item }: { item: RecurringItem }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<RecurringItemFieldErrorMap>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setFieldErrors({});
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
      const data = (await response.json()) as FormErrorResponse;
      setError(data.error ?? "Eintrag konnte nicht aktualisiert werden.");
      setFieldErrors(data.fieldErrors ?? {});
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
      <div className={styles.formIntro}>
        <p className={styles.kicker}>Schnell anpassen</p>
        <h3>Wichtige Änderungen ohne Umwege</h3>
        <p>Die Kernangaben stehen oben, Status und Notizen folgen danach.</p>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>Kernangaben</h4>
          <p>Name, Betrag, Intervall und nächste Fälligkeit zuerst.</p>
        </div>

        <div className={styles.grid}>
          <label>
            <span>Name</span>
            <input name="name" type="text" defaultValue={item.name} autoComplete="off" aria-invalid={Boolean(fieldErrors.name)} required />
            {fieldErrors.name ? <small className={styles.fieldError}>{fieldErrors.name}</small> : null}
          </label>

          <label>
            <span>Betrag in Euro</span>
            <input
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              inputMode="decimal"
              defaultValue={(item.amountCents / 100).toFixed(2)}
              aria-invalid={Boolean(fieldErrors.amount)}
              required
            />
            {fieldErrors.amount ? <small className={styles.fieldError}>{fieldErrors.amount}</small> : null}
          </label>

          <label>
            <span>Intervall</span>
            <select name="interval" defaultValue={item.interval} aria-invalid={Boolean(fieldErrors.interval)}>
              {intervalOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.interval ? <small className={styles.fieldError}>{fieldErrors.interval}</small> : null}
          </label>

          <label>
            <span>Nächste Fälligkeit</span>
            <input name="nextDueDate" type="date" defaultValue={formatDateInput(item.nextDueDate)} aria-invalid={Boolean(fieldErrors.nextDueDate)} required />
            {fieldErrors.nextDueDate ? <small className={styles.fieldError}>{fieldErrors.nextDueDate}</small> : null}
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>Einordnung und Status</h4>
          <p>Kategorie, Status und Notiz bleiben erreichbar, aber nicht im Weg.</p>
        </div>

        <div className={styles.grid}>
          <label>
            <span>Kategorie</span>
            <select name="category" defaultValue={item.category ?? ""} aria-invalid={Boolean(fieldErrors.category)}>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.category ? <small className={styles.fieldError}>{fieldErrors.category}</small> : null}
          </label>

          <label>
            <span>Status</span>
            <select name="status" defaultValue={item.status} aria-invalid={Boolean(fieldErrors.status)}>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.status ? <small className={styles.fieldError}>{fieldErrors.status}</small> : null}
          </label>

          <label className={styles.notes}>
            <span>Notiz</span>
            <textarea name="notes" rows={4} defaultValue={item.notes ?? ""} aria-invalid={Boolean(fieldErrors.notes)} />
            {fieldErrors.notes ? <small className={styles.fieldError}>{fieldErrors.notes}</small> : null}
          </label>
        </div>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <div className={styles.submitRow}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Speichert..." : "Eintrag aktualisieren"}
        </button>
      </div>
    </form>
  );
}
