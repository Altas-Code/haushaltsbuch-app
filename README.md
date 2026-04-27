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

Das Projekt wird **operativ über GitHub Issues gesteuert**.

Das bedeutet:
- GitHub Issues sind der Backlog und der Arbeitsstand
- GitHub Labels tragen Status, Priorität, Bereich und Release-Zuordnung
- GitHub Releases bilden veröffentlichte Stände ab
- GitHub Projects sind höchstens optionaler Zusatz, aber nicht führend

Die Markdown-Dokumentation im Repository beschreibt weiterhin Produkt, Architektur, Qualitätsregeln und Setup, ist aber **nicht mehr die führende Quelle für den laufenden Umsetzungsstand**.

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

```text
haushaltsbuch-app/
├─ README.md
├─ .github/
│  ├─ workflows/
│  │  └─ ci.yml
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
│  ├─ architecture-index.md
│  ├─ architecture-overview.md
│  ├─ software-architecture.md
│  ├─ c4-architecture-view.md
│  ├─ architecture-diagrams.md
│  ├─ screen-inventory.md
│  ├─ domain-model.md
│  ├─ docker.md
│  ├─ cicd-blueprint.md
│  ├─ getting-started.md
│  ├─ github-as-source-of-truth.md
│  ├─ planning-archive.md
│  ├─ definition-of-ready.md
│  ├─ definition-of-done.md
│  └─ branching-strategy.md
├─ src/
│  ├─ app/
│  ├─ application/
│  ├─ components/
│  ├─ domain/
│  ├─ generated/
│  └─ lib/
├─ prisma/
├─ tests/
│  ├─ unit/
│  └─ integration/
├─ package.json
├─ tsconfig.json
├─ next.config.ts
├─ vitest.config.ts
├─ docker-compose.yml
├─ Dockerfile
├─ .dockerignore
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
- `docs/architecture-index.md` -> Einstiegspunkt und Konsolidierung der Architektur-Doku
- `docs/tech-stack.md` -> Stack-Entscheidungen und Begründung
- `docs/architecture-overview.md` -> Zielarchitektur und Schichten
- `docs/software-architecture.md` -> führendes Hauptdokument der Softwarearchitektur
- `docs/c4-architecture-view.md` -> kompakte C4-Sicht mit Context, Container und Component View
- `docs/architecture-diagrams.md` -> Mermaid-Diagramme für System, Container, Komponenten und Use Cases
- `docs/domain-model.md` -> Fachobjekte, Felder und Regeln
- `docs/screen-inventory.md` -> Screen-Übersicht und Informationsarchitektur
- `docs/docker.md` -> Docker-Zielbild und Betrieb
- `docs/cicd-blueprint.md` -> CI/CD-Zielbild und Pipeline-Anforderungen
- `src/app/` -> Next.js App Router und Routen
- `src/application/` -> Use Cases und Anwendungslogik
- `src/components/` -> UI-Bausteine und Formulare
- `src/domain/` -> fachliche Regeln und Modelle
- `src/lib/` -> DB, Config und Utilities
- `tests/` -> Unit- und Integrationstests

### Operative Steuerung
- GitHub Issues -> Backlog und Arbeitsstand
- GitHub Labels -> Status, Priorität, Bereich und Release-Zuordnung
- GitHub Releases -> veröffentlichte Stände und Release Notes
- GitHub Projects -> optional, nicht führend
- `docs/github-as-source-of-truth.md` -> erklärt das Steuerungsmodell
- `docs/planning-archive.md` -> markiert ältere PM-/Backlog-Dokumente als historisch
- `docs/branching-strategy.md` -> Branch-Modell und Merge-Regeln
- `docs/definition-of-ready.md` -> wann ein Item startklar ist
- `docs/definition-of-done.md` -> wann ein Item wirklich fertig ist

### GitHub-Workflow
- `.github/ISSUE_TEMPLATE/` -> Templates für Features, Bugs und Tech Tasks
- `.github/pull_request_template.md` -> PR-Checkliste mit DoD-/CI-Fokus

## Lokaler Start

### Entwicklung
```bash
cp .env.example .env
npm install
npm run prisma:generate
npm run dev
```

### Qualitätschecks
```bash
npm run prisma:generate
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run build
```

### Docker
```bash
docker compose up --build
```

Die App läuft dann unter `http://localhost:3000`.

Die persistente SQLite-Datei liegt lokal unter `./data/haushaltsbuch.db` und im Container unter `/app/data/haushaltsbuch.db`.

Migrationen liegen unter `prisma/migrations/` und werden im Container beim Start mit `prisma migrate deploy` angewendet.

## Planung und Releases

Die operative Planung liegt in GitHub Issues:
- Issues für Backlog und Fortschritt
- Labels für Status und Priorität
- Releases für veröffentlichte Stände

GitHub Projects sind optional und nicht Teil der verbindlichen Pflege.

Ältere Markdown-Planungsdateien bleiben nur als historische Referenz erhalten und sind nicht mehr die führende Quelle.

## Qualitätsanspruch

Für dieses Projekt gilt ausdrücklich:
- kein "done" ohne Architektur, Tests, Integration und Doku
- CI/CD ist Pflicht und kein Nachgedanke
- `main` bleibt releasefähig
- Docker-Betrieb ist Teil des Produktziels
- Änderungen müssen rückverfolgbar und sauber reviewbar sein

## Nächster Schritt

Der nächste operative Schritt wird in GitHub geplant und dort weitergeführt. Die technische und fachliche Grundlage dafür liegt im Repository bereits bereit.
