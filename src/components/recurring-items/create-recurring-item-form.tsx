"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RecurringItemFieldErrorMap } from "@/domain/recurring-item/errors";
import { HelpHint } from "@/components/shared/help-hint";
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

type FormErrorResponse = {
  error?: string;
  fieldErrors?: RecurringItemFieldErrorMap;
};

export function CreateRecurringItemForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<RecurringItemFieldErrorMap>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setFieldErrors({});
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
      const data = (await response.json()) as FormErrorResponse;
      setError(data.error ?? "Eintrag konnte nicht gespeichert werden.");
      setFieldErrors(data.fieldErrors ?? {});
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
        <HelpHint label="Welche Angaben brauche ich?">
          <p>Name, Betrag, Intervall und Fälligkeit reichen für den ersten nutzbaren Eintrag. Kategorie und Notiz kannst du bei Bedarf ergänzen.</p>
        </HelpHint>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>Kernangaben</h4>
          <HelpHint label="Wofür ist dieser Bereich?">
            <p>Hier stehen nur die Pflichtangaben, damit du einen Eintrag schnell erfassen kannst.</p>
          </HelpHint>
        </div>

        <div className={styles.grid}>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="z. B. Netflix" autoComplete="off" aria-invalid={Boolean(fieldErrors.name)} required />
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
              placeholder="17.99"
              aria-invalid={Boolean(fieldErrors.amount)}
              required
            />
            {fieldErrors.amount ? <small className={styles.fieldError}>{fieldErrors.amount}</small> : null}
          </label>

          <label>
            <span>Intervall</span>
            <select name="interval" defaultValue="monthly" aria-invalid={Boolean(fieldErrors.interval)}>
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
            <input name="nextDueDate" type="date" defaultValue={getTodayDateInput()} aria-invalid={Boolean(fieldErrors.nextDueDate)} required />
            {fieldErrors.nextDueDate ? <small className={styles.fieldError}>{fieldErrors.nextDueDate}</small> : null}
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>Einordnung</h4>
          <HelpHint label="Wann brauche ich das?">
            <p>Kategorie und Notiz helfen dir später beim Lesen und Gruppieren, sind aber nicht zwingend für den ersten Eintrag.</p>
          </HelpHint>
        </div>

        <div className={styles.grid}>
          <label>
            <span>Kategorie</span>
            <select name="category" defaultValue="" aria-invalid={Boolean(fieldErrors.category)}>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.category ? <small className={styles.fieldError}>{fieldErrors.category}</small> : null}
          </label>

          <label className={styles.notes}>
            <span>Notiz</span>
            <textarea name="notes" rows={4} placeholder="Optional" aria-invalid={Boolean(fieldErrors.notes)} />
            {fieldErrors.notes ? <small className={styles.fieldError}>{fieldErrors.notes}</small> : null}
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
