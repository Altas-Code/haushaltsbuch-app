# Branching Strategy

Diese Branching-Strategie ist auf ein kleines Produkt mit hohem Qualitätsanspruch und starker CI/CD-Ausrichtung zugeschnitten.

## Ziele

Die Strategie soll:
- parallele Arbeit ermöglichen
- Änderungen klar isolieren
- Traceability unterstützen
- Releases kontrollierbar machen
- CI/CD als Gate konsequent verankern

---

# 1. Grundmodell

## Hauptbranch
- **`main`** ist immer der führende, produktionsnahe Branch.
- `main` muss jederzeit in einem grundsätzlich releasefähigen Zustand sein.
- Direktes Arbeiten auf `main` ist zu vermeiden.

## Arbeitsweise
- Jede Änderung erfolgt über einen eigenen Branch.
- Jede Änderung läuft über Commit, Push, CI und Pull Request.
- Merge in `main` nur bei grüner CI und erfüllter Definition of Done.

---

# 2. Branch-Typen

## Feature Branches
Für neue Features oder funktionale Erweiterungen.

### Namensschema
- `feature/HB-012-entry-editing`
- `feature/HB-016-upcoming-dues`

## Bugfix Branches
Für Fehlerbehebungen.

### Namensschema
- `bugfix/HB-041-date-validation`
- `bugfix/HB-052-mobile-layout-overflow`

## Tech Branches
Für Infrastruktur, Refactoring, Architektur, CI/CD oder technische Verbesserungen.

### Namensschema
- `tech/HB-001-project-setup`
- `tech/HB-002-docker-runtime`
- `tech/HB-090-ci-pipeline`

## Hotfix Branches
Nur für dringende Korrekturen nach einem Release.

### Namensschema
- `hotfix/HB-120-critical-build-fix`
- `hotfix/HB-121-auth-regression`

---

# 3. Branch-Regeln

## 3.1 Ein Branch pro Arbeitspaket
- Ein Branch soll genau ein zusammenhängendes Arbeitspaket enthalten.
- Keine Vermischung fachfremder Änderungen.
- Wenn ein Branch zu groß wird, muss er geschnitten werden.

## 3.2 Branches referenzieren Backlog IDs
- Jeder Branchname beginnt mit Typ und Backlog ID.
- So bleibt die Verknüpfung zu Issues, Traceability-Matrix und Release Notes klar.

## 3.3 Kurze Lebensdauer
- Branches sollen möglichst kurzlebig sein.
- Lange laufende Branches erhöhen Merge-Risiko und CI-Unsicherheit.

---

# 4. Merge-Strategie

## Pull Requests sind Pflicht
Jede Änderung an `main` läuft über Pull Request.

## Voraussetzungen für Merge
Ein PR darf erst gemerged werden, wenn:
- Scope klar ist
- Akzeptanzkriterien erfüllt sind
- relevante Tests vorhanden sind
- CI grün ist
- Build erfolgreich ist
- Docker-Auswirkungen geprüft sind
- Dokumentation aktualisiert ist
- Definition of Done erfüllt ist

## Merge-Methode
Empfohlen:
- **Squash Merge** für kleine bis mittlere Änderungen

Warum:
- klare Historie auf `main`
- ein PR entspricht meist einem zusammenhängenden Arbeitspaket
- bessere Nachvollziehbarkeit in Releases

Ausnahme:
- bei bewusst strukturierter Commit-Historie kann normaler Merge sinnvoll sein

---

# 5. Commit-Strategie

## Grundsatz
Commits sollen klein, verständlich und reviewbar sein.

## Empfehlung
Commit Messages sollten die Backlog ID enthalten.

### Beispiele
- `HB-001 Set up Next.js project skeleton`
- `HB-016 Add upcoming dues widget`
- `HB-027 Add recurring item validation`

Das verbessert Traceability zusätzlich.

---

# 6. CI/CD-Gates

## CI muss auf jedem relevanten Branch laufen
Mindestens auf:
- Feature Branches
- Bugfix Branches
- Tech Branches
- Pull Requests gegen `main`

## Pflichtprüfungen vor Merge
Sobald vorhanden, sollten diese Checks verpflichtend sein:
- Lint
- Typecheck
- Unit Tests
- Integration Tests
- E2E Tests, wenn betroffen
- Build
- Docker Build

## Branch Protection für `main`
Empfohlen:
- kein direkter Push
- PR Pflicht
- Status Checks Pflicht
- Up-to-date Branch vor Merge
- optional mindestens ein Review

---

# 7. Release-Strategie

## Standardfall
- Arbeit läuft auf Branches
- Merge nach `main`
- `main` sammelt releasefähige Änderungen
- Release wird per Tag und Release Notes markiert

## Releases
Empfohlenes Schema:
- `v0.1.0`
- `v0.2.0`
- `v1.0.0`

## Release-Referenzen
Release Notes sollten referenzieren:
- Release-ID
- enthaltene Backlog IDs
- wichtige Features und technische Änderungen

---

# 8. Hotfix-Regel

Wenn ein kritischer Fehler nach Release auftritt:
- Branch von `main` abzweigen
- als `hotfix/...` benennen
- minimalen Fix umsetzen
- volle CI durchlaufen lassen
- nach Merge neues Patch-Release erzeugen

---

# 9. Praktischer Workflow

## Für jedes Item
1. Issue oder Backlog Item referenzieren
2. Branch aus `main` erstellen
3. Änderung umsetzen
4. lokal prüfen
5. pushen
6. CI laufen lassen
7. PR öffnen
8. Review und grüne Checks abwarten
9. mergen
10. Branch löschen

---

# 10. Empfehlung für GitHub-Einstellungen

Für dieses Projekt empfehle ich auf GitHub:
- Branch Protection auf `main`
- Require pull request before merging
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Dismiss stale approvals when new commits are pushed
- Automatically delete head branches

---

# 11. Entscheidender Grundsatz

**`main` ist kein Entwicklungsablageplatz, sondern der stets saubere Integrations- und Release-Branch.**

Das ist die wichtigste Regel, wenn CI/CD und Release-Fähigkeit wirklich ernst genommen werden.
