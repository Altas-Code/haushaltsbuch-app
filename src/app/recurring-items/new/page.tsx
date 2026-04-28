import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { CreateRecurringItemForm } from "@/components/recurring-items/create-recurring-item-form";
import styles from "./page.module.css";

export default function NewRecurringItemPage() {
  return (
    <AppShell>
      <section className={styles.intro}>
        <h2>Neuen wiederkehrenden Eintrag anlegen</h2>
        <p>Starte mit den Kernfeldern. Der Ablauf ist auf schnelle mobile Eingabe und ruhige Nachbearbeitung ausgelegt.</p>
      </section>
      <CreateRecurringItemForm />
      <div className={styles.actions}>
        <Link className={styles.backLink} href="/recurring-items">
          Zur Übersicht der Einträge
        </Link>
      </div>
    </AppShell>
  );
}
