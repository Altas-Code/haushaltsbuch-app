import React from "react";
import { AppShell } from "@/components/layout/app-shell";
import { CreateRecurringItemForm } from "@/components/recurring-items/create-recurring-item-form";

export default function NewRecurringItemPage() {
  return (
    <AppShell>
      <section>
        <h2>Neuen wiederkehrenden Eintrag anlegen</h2>
        <p>Starte mit Name, Betrag, Intervall und nächster Fälligkeit.</p>
      </section>
      <CreateRecurringItemForm />
    </AppShell>
  );
}
