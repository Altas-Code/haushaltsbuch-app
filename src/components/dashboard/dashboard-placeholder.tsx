import React from "react";
import styles from "./dashboard-placeholder.module.css";

const cards = [
  { label: "Monatliche Belastung", value: "0,00 €" },
  { label: "Jährliche Belastung", value: "0,00 €" },
  { label: "Aktive Einträge", value: "0" },
];

export function DashboardPlaceholder() {
  return (
    <section className={styles.wrapper} aria-labelledby="dashboard-heading">
      <div className={styles.hero}>
        <div>
          <h2 id="dashboard-heading">Grundarchitektur steht, Dashboard folgt</h2>
          <p>
            Das Projektgerüst ist vorbereitet. Als Nächstes kommen Datenmodell, Docker,
            Persistenz und die ersten echten Einträge.
          </p>
        </div>
        <a className={styles.cta} href="/docs">
          Projektstruktur ansehen
        </a>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <article className={styles.card} key={card.label}>
            <p className={styles.label}>{card.label}</p>
            <strong className={styles.value}>{card.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
