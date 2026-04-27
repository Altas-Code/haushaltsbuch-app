# Haushaltsbuch App

Eine kleine self-hosted Web-App für wiederkehrende Haushaltskosten wie Abos, Versicherungen, Kredite und andere feste Verpflichtungen.

Die App ist bewusst **kein vollständiges Haushaltsbuch für jede Ausgabe**, sondern ein ruhiges, klares Finanz-Dashboard für wiederkehrende Belastungen mit wenig Pflegeaufwand.

## Ziel

Die App soll helfen:
- wiederkehrende Kosten zentral zu erfassen
- monatliche und jährliche Belastungen transparent zu machen
- nächste Fälligkeiten früh zu sehen
- Kündigungs- und Vertragsinformationen nicht zu verlieren
- das Ganze auf Handy und Laptop angenehm nutzbar zu halten
- alles einfach selbst zu hosten

## Produktidee in einem Satz

**Weniger Buchhaltung, mehr Klarheit über wiederkehrende Verpflichtungen.**

## Status

Aktuell befindet sich das Projekt in der **Produkt- und Architekturvorbereitung vor dem eigentlichen Entwicklungsstart**.

Bereits vorhanden:
- Vision und Scope
- Personas und User Journey
- Design-Prinzipien
- funktionaler Backlog, MVP und Roadmap
- Definition of Ready und Definition of Done
- Projektmanagement- und Traceability-Struktur
- Branching Strategy
- GitHub Templates, Labels und erste MVP-Issues
- Architektur-, Screen-, Domain- und CI/CD-Artefakte

## MVP auf einen Blick

Das MVP soll können:
- wiederkehrende Einträge anlegen, bearbeiten, pausieren und beenden
- monatliche und jährliche Gesamtbelastung berechnen
- nächste Fälligkeiten anzeigen
- aktive Verpflichtungen übersichtlich listen
- mobil und auf Desktop gut funktionieren
- per Docker betrieben werden

## Tech-Stack

Geplant ist:
- **Next.js** für App und Serverlogik
- **React** für die UI
- **TypeScript** für typsichere Entwicklung
- **SQLite** als lokale Datenbank
- **Prisma** für Schema und Migrationen
- **Docker / Docker Compose** für Self-Hosting
- **GitHub Actions** für CI/CD

Mehr dazu in `docs/tech-stack.md` und `docs/architecture-overview.md`.

## Projektstruktur

Die Struktur ist aktuell stark dokumentationsgetrieben, damit Produkt, Architektur und Delivery vor dem Bau sauber definiert sind.

```text
haushaltsbuch-app/
├─ README.md
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug.yml
│  │  ├─ config.yml
│  │  ├─ feature.yml
│  │  └─ tech-task.yml
│  └─ pull_request_template.md
├─ docs/
│  ├─ concept.md
│  ├─ vision.md
│  ├─ personas.md
│  ├─ user-journey.md
│  ├─ design-principles.md
│  ├─ tech-stack.md
│  ├─ architecture-overview.md
│  ├─ screen-inventory.md
│  ├─ domain-model.md
│  ├─ docker.md
│  ├─ cicd-blueprint.md
│  ├─ roadmap.md
│  ├─ backlog-and-roadmap.md
│  ├─ mvp-issues.md
│  ├─ definition-of-ready.md
│  ├─ definition-of-done.md
│  ├─ project-management-and-traceability.md
│  ├─ traceability-matrix.md
│  ├─ branching-strategy.md
│  └─ github-labels.md
├─ docker-compose.yml
└─ .gitignore
```

## Wo finde ich was?

### Produkt und Richtung
- `docs/vision.md` -> Produktvision und Leitidee
- `docs/concept.md` -> Grundkonzept und Produktziel
- `docs/personas.md` -> Zielnutzer und ihre Bedürfnisse
- `docs/user-journey.md` -> User Journey und Use Cases
- `docs/design-principles.md` -> Look, Feeling und UX-Grundsätze

### Architektur und technische Grundlage
- `docs/tech-stack.md` -> Stack-Entscheidungen und Begründung
- `docs/architecture-overview.md` -> Zielarchitektur und Schichten
- `docs/domain-model.md` -> Fachobjekte, Felder und Regeln
- `docs/screen-inventory.md` -> Screen-Übersicht und Informationsarchitektur
- `docs/docker.md` -> Docker-Zielbild und Betrieb
- `docs/cicd-blueprint.md` -> CI/CD-Zielbild und Pipeline-Anforderungen

### Planung und Delivery
- `docs/backlog-and-roadmap.md` -> Epics, MVP und Release-Plan
- `docs/mvp-issues.md` -> erste operative MVP-Issue-Liste
- `docs/roadmap.md` -> kompakte Roadmap
- `docs/definition-of-ready.md` -> wann ein Item startklar ist
- `docs/definition-of-done.md` -> wann ein Item wirklich fertig ist

### Projektmanagement und Nachvollziehbarkeit
- `docs/project-management-and-traceability.md` -> Statusmodell und PM-Struktur
- `docs/traceability-matrix.md` -> Verknüpfung von Backlog, Use Cases und Releases
- `docs/branching-strategy.md` -> Branch-Modell und Merge-Regeln
- `docs/github-labels.md` -> Label-System für GitHub

### GitHub-Workflow
- `.github/ISSUE_TEMPLATE/` -> Templates für Features, Bugs und Tech Tasks
- `.github/pull_request_template.md` -> PR-Checkliste mit DoD-/CI-Fokus

## Geplante Entwicklungsreihenfolge

Die ersten Arbeitspakete sind:
1. `HB-001` Projektgerüst anlegen
2. `HB-002` Docker-Betrieb ermöglichen
3. `HB-003` Persistente Datenhaltung einrichten
4. `HB-004` Basis-Konfiguration dokumentieren

Danach folgen die ersten funktionalen Features rund um wiederkehrende Einträge und das Dashboard.

## Geplante Releases

- `0.1.0` Foundation
- `0.2.0` Core Data Entry
- `0.3.0` First Useful Dashboard
- `1.0.0` MVP
- danach schrittweise Komfortfunktionen

Mehr Details in `docs/backlog-and-roadmap.md`.

## Qualitätsanspruch

Für dieses Projekt gilt ausdrücklich:
- kein "done" ohne Architektur, Tests, Integration und Doku
- CI/CD ist Pflicht und kein Nachgedanke
- `main` bleibt releasefähig
- Docker-Betrieb ist Teil des Produktziels
- Änderungen müssen rückverfolgbar und sauber reviewbar sein

## Nächster Schritt

Der nächste praktische Schritt ist der Start der eigentlichen Implementierung mit:
- Projektgerüst
- Docker-Setup
- Datenhaltung
- CI-Grundpipeline
