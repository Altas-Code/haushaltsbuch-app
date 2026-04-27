import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { StatusActionForm } from "@/components/recurring-items/status-action-form";
import { listRecurringItems } from "@/application/recurring-item/list-recurring-items";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";
import styles from "./page.module.css";

export default async function RecurringItemsPage({
  searchParams,
}: {
  searchParams?: Promise<{ created?: string; updated?: string; status?: "active" | "paused" | "ended" | "all" }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const selectedStatus = params?.status ?? "active";
  const items = await listRecurringItems(selectedStatus);

  return (
    <AppShell>
      <section className={styles.header}>
        <div>
          <h2>Wiederkehrende Einträge</h2>
          <p>Deine bisher erfassten laufenden Verpflichtungen.</p>
        </div>
        <Link className={styles.cta} href="/recurring-items/new">
          Neuen Eintrag anlegen
        </Link>
      </section>

      {params?.created === "1" ? <p className={styles.notice}>Eintrag erfolgreich angelegt.</p> : null}
      {params?.updated === "1" ? <p className={styles.notice}>Eintrag erfolgreich aktualisiert.</p> : null}

      <nav className={styles.filters}>
        <Link className={selectedStatus === "active" ? styles.filterActive : styles.filter} href="/recurring-items?status=active">
          Aktiv
        </Link>
        <Link className={selectedStatus === "paused" ? styles.filterActive : styles.filter} href="/recurring-items?status=paused">
          Pausiert
        </Link>
        <Link className={selectedStatus === "ended" ? styles.filterActive : styles.filter} href="/recurring-items?status=ended">
          Beendet
        </Link>
        <Link className={selectedStatus === "all" ? styles.filterActive : styles.filter} href="/recurring-items?status=all">
          Alle
        </Link>
      </nav>

      {items.length === 0 ? (
        <section className={styles.emptyState}>
          <h3>Noch keine Einträge</h3>
          <p>Lege deinen ersten wiederkehrenden Eintrag an, um die App mit echten Daten zu füllen.</p>
        </section>
      ) : (
        <section className={styles.list}>
          {items.map((item) => (
            <article className={styles.card} key={item.id}>
              <div className={styles.cardHeader}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.category ?? "ohne Kategorie"}</p>
                </div>
                <Link className={styles.editLink} href={`/recurring-items/${item.id}/edit`}>
                  Bearbeiten
                </Link>
              </div>
              <dl>
                <div>
                  <dt>Betrag</dt>
                  <dd>{formatCurrency(item.amountCents, item.currency)}</dd>
                </div>
                <div>
                  <dt>Intervall</dt>
                  <dd>{item.interval}</dd>
                </div>
                <div>
                  <dt>Nächste Fälligkeit</dt>
                  <dd>{formatDate(item.nextDueDate)}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd><span className={styles.statusBadge}>{item.status}</span></dd>
                </div>
              </dl>

              <div className={styles.actionsRow}>
                <StatusActionForm id={item.id} currentStatus={item.status} nextStatus="active" />
                <StatusActionForm id={item.id} currentStatus={item.status} nextStatus="paused" />
                <StatusActionForm id={item.id} currentStatus={item.status} nextStatus="ended" />
              </div>
            </article>
          ))}
        </section>
      )}
    </AppShell>
  );
}
