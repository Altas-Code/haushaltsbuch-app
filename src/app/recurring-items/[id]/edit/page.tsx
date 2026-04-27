import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { EditRecurringItemForm } from "@/components/recurring-items/edit-recurring-item-form";
import { getRecurringItemById } from "@/application/recurring-item/get-recurring-item-by-id";
import styles from "../../new/page.module.css";

export default async function EditRecurringItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getRecurringItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <AppShell>
      <section className={styles.intro}>
        <h2>Wiederkehrenden Eintrag bearbeiten</h2>
        <p>Hier kannst du Betrag, Intervall, Fälligkeit, Kategorie und Status anpassen.</p>
      </section>
      <EditRecurringItemForm item={item} />
      <div className={styles.actions}>
        <Link className={styles.backLink} href="/recurring-items">
          Zur Übersicht der Einträge
        </Link>
      </div>
    </AppShell>
  );
}
