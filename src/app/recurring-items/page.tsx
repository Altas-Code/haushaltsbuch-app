import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { DeleteRecurringItemForm } from "@/components/recurring-items/delete-recurring-item-form";
import { StatusActionForm } from "@/components/recurring-items/status-action-form";
import {
  listRecurringItems,
  type RecurringItemCategoryFilter,
  type RecurringItemSort,
} from "@/application/recurring-item/list-recurring-items";
import { calculateMonthlyAmount } from "@/domain/recurring-item/calculations";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";
import styles from "./page.module.css";

function getEmptyStateContent(status: string, category: RecurringItemCategoryFilter) {
  if (status === "paused") {
    return {
      title: "Keine pausierten Einträge gefunden",
      copy: "Zurzeit gibt es in dieser Auswahl keine pausierten Fixkosten. Wechsle den Status oder lege neue Einträge an.",
    };
  }

  if (status === "ended") {
    return {
      title: "Keine beendeten Einträge gefunden",
      copy: "In dieser Auswahl gibt es noch keine beendeten Einträge. Über den Statuswechsel tauchen sie später hier wieder auf.",
    };
  }

  if (category !== "all") {
    return {
      title: "Keine Einträge für diese Kategorie",
      copy: "In der aktuellen Kombination aus Status, Sortierung und Kategorie wurde nichts gefunden. Passe die Filter an oder lege einen passenden Eintrag an.",
    };
  }

  return {
    title: "Noch keine Einträge",
    copy: "Lege deinen ersten wiederkehrenden Eintrag an, um die App mit echten Daten zu füllen.",
  };
}

const categoryFilters: { value: RecurringItemCategoryFilter; label: string }[] = [
  { value: "all", label: "Alle Kategorien" },
  { value: "subscription", label: "Abo" },
  { value: "insurance", label: "Versicherung" },
  { value: "loan", label: "Kredit" },
  { value: "housing", label: "Wohnen" },
  { value: "mobility", label: "Mobilität" },
  { value: "health", label: "Gesundheit" },
  { value: "other", label: "Sonstiges" },
  { value: "uncategorized", label: "Ohne Kategorie" },
];

function getCategoryLabel(category: RecurringItemCategoryFilter) {
  return categoryFilters.find((entry) => entry.value === category)?.label ?? "Ohne Kategorie";
}

export default async function RecurringItemsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    created?: string;
    updated?: string;
    deleted?: string;
    status?: "active" | "paused" | "ended" | "all";
    sort?: RecurringItemSort;
    category?: RecurringItemCategoryFilter;
  }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const selectedStatus = params?.status ?? "active";
  const selectedSort = params?.sort ?? "dueDateAsc";
  const selectedCategory = params?.category ?? "all";
  const items = await listRecurringItems(selectedStatus, selectedSort, selectedCategory);
  const emptyState = getEmptyStateContent(selectedStatus, selectedCategory);

  const groupedItems = items.reduce<
    Array<{
      category: RecurringItemCategoryFilter;
      label: string;
      totalMonthlyAmountCents: number;
      items: typeof items;
    }>
  >((groups, item) => {
    const category = (item.category ?? "uncategorized") as RecurringItemCategoryFilter;
    const existingGroup = groups.find((group) => group.category === category);
    const monthlyAmount = calculateMonthlyAmount(item.amountCents, item.interval);

    if (existingGroup) {
      existingGroup.items.push(item);
      existingGroup.totalMonthlyAmountCents += monthlyAmount;
      return groups;
    }

    groups.push({
      category,
      label: getCategoryLabel(category),
      totalMonthlyAmountCents: monthlyAmount,
      items: [item],
    });

    return groups;
  }, []);

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
      {params?.deleted === "1" ? <p className={styles.notice}>Eintrag erfolgreich gelöscht.</p> : null}

      <div className={styles.toolbar}>
        <nav className={styles.filters}>
          <Link
            className={selectedStatus === "active" ? styles.filterActive : styles.filter}
            href={`/recurring-items?status=active&sort=${selectedSort}&category=${selectedCategory}`}
          >
            Aktiv
          </Link>
          <Link
            className={selectedStatus === "paused" ? styles.filterActive : styles.filter}
            href={`/recurring-items?status=paused&sort=${selectedSort}&category=${selectedCategory}`}
          >
            Pausiert
          </Link>
          <Link
            className={selectedStatus === "ended" ? styles.filterActive : styles.filter}
            href={`/recurring-items?status=ended&sort=${selectedSort}&category=${selectedCategory}`}
          >
            Beendet
          </Link>
          <Link
            className={selectedStatus === "all" ? styles.filterActive : styles.filter}
            href={`/recurring-items?status=all&sort=${selectedSort}&category=${selectedCategory}`}
          >
            Alle
          </Link>
        </nav>

        <nav className={styles.filters} aria-label="Sortierung nach Fälligkeit">
          <Link
            className={selectedSort === "dueDateAsc" ? styles.filterActive : styles.filter}
            href={`/recurring-items?status=${selectedStatus}&sort=dueDateAsc&category=${selectedCategory}`}
          >
            Fällig zuerst
          </Link>
          <Link
            className={selectedSort === "dueDateDesc" ? styles.filterActive : styles.filter}
            href={`/recurring-items?status=${selectedStatus}&sort=dueDateDesc&category=${selectedCategory}`}
          >
            Später zuerst
          </Link>
        </nav>

        <nav className={styles.filters} aria-label="Filter nach Kategorie">
          {categoryFilters.map((category) => (
            <Link
              key={category.value}
              className={selectedCategory === category.value ? styles.filterActive : styles.filter}
              href={`/recurring-items?status=${selectedStatus}&sort=${selectedSort}&category=${category.value}`}
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </div>

      {items.length === 0 ? (
        <section className={styles.emptyState}>
          <p className={styles.emptyEyebrow}>Nichts in dieser Auswahl</p>
          <h3>{emptyState.title}</h3>
          <p>{emptyState.copy}</p>
          <div className={styles.emptyActions}>
            <Link className={styles.ctaSecondary} href="/recurring-items/new">
              Neuen Eintrag anlegen
            </Link>
            <Link className={styles.secondaryLink} href="/recurring-items?status=active&sort=dueDateAsc&category=all">
              Filter zurücksetzen
            </Link>
          </div>
        </section>
      ) : (
        <section className={styles.list}>
          {groupedItems.map((group) => (
            <section className={styles.groupSection} key={group.category}>
              <div className={styles.groupHeader}>
                <div>
                  <h3>{group.label}</h3>
                  <p>{group.items.length} Eintrag{group.items.length === 1 ? "" : "e"}</p>
                </div>
                <div className={styles.groupSummary}>
                  <span>Monatsschnitt der Gruppe</span>
                  <strong>{formatCurrency(group.totalMonthlyAmountCents)}</strong>
                </div>
              </div>

              <div className={styles.groupCards}>
                {group.items.map((item) => (
                  <article className={styles.card} key={item.id}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3>{item.name}</h3>
                        <p>{group.label}</p>
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
                        <dt>Monatsschnitt</dt>
                        <dd>{formatCurrency(calculateMonthlyAmount(item.amountCents, item.interval), item.currency)}</dd>
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
                      <DeleteRecurringItemForm id={item.id} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>
      )}
    </AppShell>
  );
}
