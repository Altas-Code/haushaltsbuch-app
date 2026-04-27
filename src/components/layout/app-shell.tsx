import React, { type ReactNode } from "react";
import styles from "./app-shell.module.css";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Haushaltsbuch App</p>
          <h1 className={styles.title}>Wiederkehrende Kosten im Griff</h1>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
