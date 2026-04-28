import React from "react";
import Link from "next/link";
import type { AwaitedDashboardSummary } from "./types";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";
import styles from "./dashboard-summary.module.css";

export function DashboardSummary({ summary }: { summary: AwaitedDashboardSummary }) {
  return (
    <section className={styles.wrapper} aria-labelledby="dashboard-heading">
      <div className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Fixkosten im Überblick</p>
          <h2 id="dashboard-heading">Dein Monatsschnitt auf einen Blick</h2>
          <p className={styles.copy}>
            Die wichtigste Kennzahl ist dein durchschnittlicher Monatswert über alle aktiven wiederkehrenden Einträge.
          </p>
        </div>
        <Link className={styles.cta} href="/recurring-items/new">
          Neuen Eintrag anlegen
        </Link>
      </div>

      <div className={styles.kpis}>
        <article className={styles.kpiCard}>
          <p className={styles.label}>Monatsschnitt gesamt</p>
          <strong className={styles.value}>{formatCurrency(summary.monthSliceTotalCents)}</strong>
        </article>
        <article className={styles.kpiCard}>
          <p className={styles.label}>Monatlich fällig</p>
          <strong className={styles.value}>{formatCurrency(summary.currentlyMonthlyDueCents)}</strong>
        </article>
        <article className={styles.kpiCard}>
          <p className={styles.label}>Jährliche Gesamtbelastung</p>
          <strong className={styles.value}>{formatCurrency(summary.yearlyTotalCents)}</strong>
        </article>
        <article className={styles.kpiCard}>
          <p className={styles.label}>Aktive Einträge</p>
          <strong className={styles.value}>{summary.activeItemsCount}</strong>
        </article>
      </div>

      <section className={styles.upcomingSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h3>Nächste Fälligkeiten</h3>
            <p>Die nächsten anstehenden Belastungen in chronologischer Reihenfolge.</p>
          </div>
          <Link className={styles.link} href="/recurring-items?status=active">
            Alle Einträge ansehen
          </Link>
        </div>

        {summary.upcomingDueItems.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyEyebrow}>Noch leer</p>
            <h4>Dein Dashboard füllt sich mit dem ersten Eintrag</h4>
            <p>
              Sobald du einen wiederkehrenden Fixkosten-Eintrag anlegst, erscheinen hier Monatsschnitt, Fälligkeiten und dein aktueller Überblick.
            </p>
            <Link className={styles.inlineCta} href="/recurring-items/new">
              Jetzt ersten Eintrag anlegen
            </Link>
          </div>
        ) : (
          <div className={styles.upcomingList}>
            {summary.upcomingDueItems.map((item) => (
              <article className={styles.upcomingCard} key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.category ?? "ohne Kategorie"}</p>
                </div>
                <div className={styles.upcomingMeta}>
                  <span>{formatCurrency(item.amountCents, item.currency)}</span>
                  <span>{item.interval}</span>
                  <span>{formatDate(item.nextDueDate)}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
