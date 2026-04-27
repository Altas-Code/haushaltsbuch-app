# Domain Model und Field Definitions

Dieses Dokument konkretisiert das fachliche Datenmodell des MVP.

## Ziel

Vor Entwicklungsstart sollen die wichtigsten Fachobjekte, Felder und Regeln klar feststehen, damit Produktentscheidungen nicht erst im Code improvisiert werden.

---

# 1. Kernobjekt des MVP

Das zentrale Fachobjekt ist der **wiederkehrende Eintrag**.

Ein wiederkehrender Eintrag steht für eine regelmäßige finanzielle Verpflichtung wie:
- Abo
- Versicherung
- Kreditrate
- Mitgliedschaft
- sonstige feste wiederkehrende Kosten

---

# 2. Fachliche Definition von recurring item

Ein recurring item beschreibt:
- wofür gezahlt wird
- wie viel gezahlt wird
- in welchem Rhythmus gezahlt wird
- wann die nächste Zahlung ansteht
- ob der Eintrag aktuell aktiv ist
- welche optionalen Vertragsinformationen zusätzlich wichtig sind

---

# 3. Felddefinitionen

## Pflichtfelder

### `name`
- Typ: String
- Beispiel: `Netflix`, `Haftpflichtversicherung`, `Autokredit`
- Regel: darf nicht leer sein

### `amountCents`
- Typ: Integer
- Beispiel: `1799` für 17,99 Euro
- Regel: größer als 0
- Begründung: Geldbeträge sollen intern nicht als Float gespeichert werden

### `currency`
- Typ: String
- Standard im MVP: `EUR`
- Regel: zunächst auf EUR beschränkt oder EUR als Default

### `interval`
- Typ: Enum
- Werte:
  - `monthly`
  - `quarterly`
  - `semiannual`
  - `yearly`
- Regel: nur diese Werte sind im MVP erlaubt

### `nextDueDate`
- Typ: Date
- Regel: muss ein gültiges Datum sein

## Optionale Felder

### `category`
- Typ: Enum oder String-Enum
- Werte im MVP:
  - `subscription`
  - `insurance`
  - `loan`
  - `housing`
  - `mobility`
  - `health`
  - `other`
- Regel: optional, aber empfohlen

### `notes`
- Typ: String nullable
- Regel: frei, kurze Zusatzinformationen

### `startDate`
- Typ: Date nullable
- Regel: optional

### `endDate`
- Typ: Date nullable
- Regel: optional
- Hinweis: eher für befristete oder bereits beendete Einträge

### `cancelByDate`
- Typ: Date nullable
- Regel: optional
- Hinweis: konkrete Frist, bis wann gekündigt werden sollte

### `status`
- Typ: Enum
- Werte:
  - `active`
  - `paused`
  - `ended`
- Default: `active`

---

# 4. Zusätzliche Systemfelder

Diese Felder sind technisch nötig:
- `id`
- `createdAt`
- `updatedAt`

Optional später:
- `archivedAt`
- `deletedAt` bei Soft Delete

---

# 5. Fachregeln

## 5.1 Monatswert-Berechnung
Zur Vergleichbarkeit wird jeder Eintrag auf Monatswert umgerechnet.

### Regeln
- `monthly` -> Betrag / 1
- `quarterly` -> Betrag / 3
- `semiannual` -> Betrag / 6
- `yearly` -> Betrag / 12

### Ergebnis
Der Monatswert dient:
- Dashboard-Summen
- Vergleich von Einträgen
- Sortierung nach realer Belastung

## 5.2 Jahreswert-Berechnung
- `monthly` -> Betrag * 12
- `quarterly` -> Betrag * 4
- `semiannual` -> Betrag * 2
- `yearly` -> Betrag * 1

## 5.3 Statuslogik
### `active`
- Eintrag zählt in Dashboard und Standardlisten mit

### `paused`
- Eintrag ist sichtbar, aber standardmäßig nicht Teil der aktiven Hauptsicht
- sollte in Summen standardmäßig nicht berücksichtigt werden

### `ended`
- Eintrag ist beendet
- nicht Teil der aktiven Summen
- über Filter noch sichtbar

## 5.4 Datumsregeln
- `nextDueDate` muss valide sein
- `cancelByDate` kann vor oder nach `nextDueDate` liegen, je nach Vertragssituation
- `endDate` sollte nicht vor `startDate` liegen, wenn beide gesetzt sind

---

# 6. Standardannahmen im MVP

## Währung
- primär EUR
- Multi-Currency ist nicht Teil des MVP

## Rhythmus
- nur vier Intervalle im MVP
- keine frei definierbaren Wiederholungen

## Haushaltstyp
- Single User oder kleiner privater Haushalt

## Abgrenzung
- keine echten Kontobewegungen
- keine Einnahmenlogik
- keine Kategorie-Budgets

---

# 7. Datenbanksicht, erste Zielstruktur

## Tabelle `recurring_items`
- `id` string oder uuid
- `name`
- `amount_cents`
- `currency`
- `interval`
- `next_due_date`
- `category` nullable
- `notes` nullable
- `start_date` nullable
- `end_date` nullable
- `cancel_by_date` nullable
- `status`
- `created_at`
- `updated_at`

---

# 8. Validierungsregeln für Formulare und API

## Pflichtvalidierung
- Name vorhanden
- Betrag vorhanden und > 0
- Intervall gültig
- nächstes Fälligkeitsdatum gültig

## Erweiterte Validierung
- Datumskombinationen dürfen nicht widersprüchlich sein
- Status muss erlaubter Enum-Wert sein
- Kategorie muss erlaubter Enum-Wert sein, wenn gesetzt

---

# 9. Testrelevante Fachfälle

Es sollten mindestens diese fachlichen Fälle getestet werden:
- Monatswert-Berechnung für alle Intervalle
- Jahreswert-Berechnung für alle Intervalle
- aktive Einträge zählen korrekt
- pausierte und beendete Einträge werden korrekt behandelt
- ungültige Beträge werden abgewiesen
- ungültige Datumswerte werden abgewiesen
- widersprüchliche Datumsfelder werden erkannt

---

# 10. Erfolgsmaßstab

Das Datenmodell ist gut, wenn:
- der MVP damit vollständig gebaut werden kann
- häufige reale Verträge damit sauber abbildbar sind
- Summen und Fälligkeiten fachlich korrekt berechnet werden
- spätere Erweiterungen möglich bleiben, ohne das Kernmodell neu zu erfinden
