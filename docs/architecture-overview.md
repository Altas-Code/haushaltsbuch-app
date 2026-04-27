# Architecture Overview

Dieses Dokument beschreibt die konkrete Zielarchitektur für das MVP der Haushaltsbuch App.

## Ziel

Die Architektur soll:
- für das MVP klein und direkt bleiben
- klare Verantwortlichkeiten schaffen
- gute Testbarkeit ermöglichen
- Docker- und CI/CD-freundlich sein
- spätere Erweiterungen erlauben, ohne früh zu überkomplizieren

---

# 1. Architekturprinzip

Für das MVP wird eine **modulare Monolith-Architektur** gewählt.

Das bedeutet:
- eine Anwendung
- ein Repository
- ein Deployment-Artefakt
- aber intern klar getrennte Verantwortlichkeiten

Warum das passt:
- geringerer Betriebsaufwand
- schnellere Entwicklung
- keine künstliche Trennung in Frontend und Backend
- gute Erweiterbarkeit bei kleinem Scope

---

# 2. Technische Hauptbausteine

## Frontend
- Next.js App Router
- React
- TypeScript

## Backend / Serverlogik
- Next.js Server Components, Route Handlers und Server Actions, wo passend
- TypeScript

## Datenhaltung
- SQLite
- Prisma als ORM und Migrationswerkzeug

## Betrieb
- Docker
- Docker Compose

## Qualitätssicherung
- ESLint
- TypeScript Typecheck
- Testframework für Unit- und Integrationstests
- E2E-Tests für Kernflüsse
- GitHub Actions für CI/CD

---

# 3. Architektur-Schichten

Auch wenn alles in einer App läuft, soll intern sauber getrennt werden.

## 3.1 UI-Schicht
Zuständig für:
- Seiten
- Layouts
- Formulare
- Karten, Listen, Statusanzeigen
- nutzernahe Interaktionen

Keine Verantwortung für:
- direkte Datenbankzugriffe
- komplexe Geschäftslogik

## 3.2 Application-Schicht
Zuständig für:
- Use-Case-orientierte Abläufe
- Orchestrierung von Validierung, Berechnung und Persistenz
- Fehlerbehandlung auf Anwendungsebene

Beispiele:
- wiederkehrenden Eintrag anlegen
- Monatswerte berechnen
- nächste Fälligkeiten zusammenstellen

## 3.3 Domain-Schicht
Zuständig für:
- fachliche Regeln
- Intervalllogik
- Monatswert-Berechnung
- Statusregeln
- Datumslogik

Diese Schicht soll so weit wie möglich unabhängig von UI und Framework bleiben.

## 3.4 Infrastructure-Schicht
Zuständig für:
- Prisma-Zugriff
- SQLite-Anbindung
- Konfigurationszugriff
- Laufzeitumgebung
- Docker und Deployment-nahe Integration

---

# 4. Zielstruktur im Projekt

## Vorschlag für Verzeichnisstruktur

```text
src/
├─ app/
│  ├─ page.tsx
│  ├─ recurring-items/
│  └─ api/
├─ components/
│  ├─ dashboard/
│  ├─ forms/
│  ├─ layout/
│  └─ recurring-items/
├─ lib/
│  ├─ config/
│  ├─ db/
│  ├─ validation/
│  └─ utils/
├─ domain/
│  ├─ recurring-item/
│  │  ├─ model.ts
│  │  ├─ calculations.ts
│  │  └─ rules.ts
├─ application/
│  ├─ recurring-item/
│  │  ├─ create-recurring-item.ts
│  │  ├─ update-recurring-item.ts
│  │  ├─ list-recurring-items.ts
│  │  └─ get-dashboard-summary.ts
└─ test/
   ├─ unit/
   ├─ integration/
   └─ e2e/
```

Die Struktur darf anfangs klein starten, aber diese Richtung sollte erkennbar bleiben.

---

# 5. Datenfluss

## Beispiel: Eintrag anlegen
1. Nutzer füllt Formular aus
2. UI sendet Daten an Server Action oder Route Handler
3. Validierung wird ausgeführt
4. Application-Layer ruft Domain-Regeln und Persistenz auf
5. Prisma speichert den Datensatz
6. UI erhält Erfolg oder Fehler und reagiert entsprechend

## Beispiel: Dashboard laden
1. Seite lädt Server-seitig oder über passende Datenabfrage
2. Application-Layer holt relevante Einträge
3. Domain-Layer berechnet Monatswerte und Fälligkeiten
4. UI rendert Kennzahlen und Listen

---

# 6. API-Strategie

Für das MVP gilt:
- bevorzugt servernahe Logik im Next.js-Kontext
- Route Handlers für klar abgegrenzte API-Endpunkte
- Server Actions dort, wo Form-Workflows davon profitieren

Wichtig ist nicht maximale Modernität, sondern Klarheit und Testbarkeit.

---

# 7. Validierungsstrategie

Validierung soll auf mehreren Ebenen sauber greifen:

## UI-Ebene
- nutzerfreundliche Sofortrückmeldung
- Pflichtfelder sichtbar machen

## Server-Ebene
- verbindliche Prüfung aller Eingaben
- Schutz vor ungültigen Zuständen

## Domain-Ebene
- fachliche Regeln absichern
- zum Beispiel erlaubte Intervalle oder sinnvolle Datumszustände

---

# 8. Teststrategie in der Architektur

## Unit-Tests
Für:
- Berechnungen
- Validierungslogik
- Hilfsfunktionen
- Domänenregeln

## Integrationstests
Für:
- Datenfluss zwischen Application-Layer und Datenhaltung
- Server Actions oder Route Handlers
- Prisma-Integration

## E2E-Tests
Für:
- Eintrag anlegen
- Dashboard sehen
- Eintrag bearbeiten
- wichtige Kernflüsse im Browser

---

# 9. CI/CD-Integration auf Architekturebene

Die Architektur muss so geschnitten sein, dass CI/CD einfach prüfen kann:
- lint
- typecheck
- unit tests
- integration tests
- build
- docker build
- optional e2e

Das ist ein Architekturziel, nicht nur ein Tooling-Thema.

---

# 10. Architekturregeln

Für das Projekt gelten diese Regeln:

1. UI greift nicht direkt auf Prisma zu.
2. Fachlogik landet nicht verstreut in Komponenten.
3. Berechnungen für Geld und Intervalle werden zentral gehalten.
4. Validierung wird nicht nur im Frontend implementiert.
5. Datenzugriff wird konsistent über definierte Pfade organisiert.
6. Jede neue Funktion muss testbar und CI-fähig integrierbar sein.

---

# 11. MVP-Architekturentscheidungen

## Bewusst gewählt
- monolithisch statt Microservices
- SQLite statt Postgres
- Next.js Fullstack statt getrennte Frontend- und Backend-Apps
- klare interne Schichtung trotz eines Deployments

## Bewusst nicht gewählt
- Event-getriebene Architektur
- komplexes Repository-Pattern ohne echten Nutzen
- separates API-Gateway
- übergroßer Infrastruktur-Stack

---

# 12. Erfolgsmaßstab

Die Architektur ist gut, wenn:
- neue Features ohne chaotische Seiteneffekte ergänzt werden können
- Kernlogik sauber testbar bleibt
- Docker- und CI/CD-Betrieb einfach bleibt
- die App als kleines Produkt schnell vorankommt, ohne technisch schlampig zu werden
