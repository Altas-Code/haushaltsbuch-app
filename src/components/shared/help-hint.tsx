import React from "react";
import styles from "./help-hint.module.css";

export function HelpHint({ label = "Hilfe", children }: { label?: string; children: React.ReactNode }) {
  return (
    <details className={styles.hint}>
      <summary className={styles.summary}>{label}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
