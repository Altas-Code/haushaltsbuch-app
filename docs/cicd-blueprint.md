# CI/CD Blueprint

Dieses Dokument konkretisiert die CI/CD-Anforderungen für das Projekt.

## Ziel

CI/CD ist für dieses Projekt kein optionales Zusatzthema, sondern Teil der Produktqualität und Definition of Done.

Die Pipeline soll sicherstellen, dass jede Änderung:
- technisch sauber integrierbar ist
- automatisch geprüft wird
- buildbar bleibt
- dockerfähig bleibt
- releasefähig bleibt

---

# 1. Grundprinzipien

## 1.1 CI auf jeder relevanten Änderung
CI soll laufen für:
- Pushes auf Arbeitsbranches
- Pull Requests gegen `main`
- optional Tags oder Releases

## 1.2 `main` bleibt grün
`main` soll nur Änderungen aufnehmen, die durch die definierten Checks gelaufen sind.

## 1.3 Automatisierung vor manueller Hoffnung
Wichtige Qualitätsprüfungen müssen automatisiert sein. Manuelle Prüfung ergänzt, ersetzt aber keine Pipeline.

---

# 2. Mindestpipeline für das MVP

## Stufe 1: Setup
- Repository auschecken
- Node installieren
- Dependencies installieren
- Caching sinnvoll nutzen

## Stufe 2: Statische Qualität
- Lint ausführen
- Typecheck ausführen

## Stufe 3: Tests
- Unit-Tests ausführen
- Integrationstests ausführen

## Stufe 4: Build
- Anwendungsbuild ausführen

## Stufe 5: Docker
- Docker Image Build ausführen

## Stufe 6: Optional E2E
- E2E für Kernflüsse, sobald das MVP genügend UI hat

---

# 3. Zielbild als GitHub Actions Workflows

## Workflow 1: `ci.yml`
Läuft bei Push und Pull Request.

### Enthaltene Jobs
- `lint`
- `typecheck`
- `test-unit`
- `test-integration`
- `build`
- `docker-build`

## Workflow 2: `e2e.yml`
Läuft zunächst optional oder auf Pull Requests gegen `main`, sobald UI-Flows bereitstehen.

### Enthaltene Jobs
- App starten
- Testdatenbank vorbereiten
- E2E-Tests ausführen

## Workflow 3: `release.yml`
Später für versionierte Releases.

### Spätere Aufgaben
- Build-Artefakte prüfen
- Docker Image bauen und optional veröffentlichen
- Release Notes referenzieren

---

# 4. Branch Protection Bezug

Die Pipeline soll mit den Branch-Regeln zusammenspielen.

## Für `main` empfohlen
- PR Pflicht
- Required status checks
- Branch up to date before merge
- keine direkten Pushes

## Required Checks, sobald vorhanden
- lint
- typecheck
- test-unit
- test-integration
- build
- docker-build
- optional e2e

---

# 5. Testarten in CI

## Unit-Tests
Ziel:
- fachliche Berechnungen
- Validierungslogik
- Hilfsfunktionen

## Integrationstests
Ziel:
- Zusammenspiel von Application-Layer, Datenzugriff und Schnittstellen
- Serverlogik
- Prisma-Integration

## E2E-Tests
Ziel:
- Kernnutzerflüsse im Browser absichern

### Erste E2E-Kandidaten
- App startet
- erster Eintrag anlegen
- Dashboard zeigt Eintrag an
- Eintrag bearbeiten

---

# 6. Docker in CI/CD

Docker ist Teil des Produktziels und muss deshalb fester Bestandteil der Pipeline sein.

## Anforderungen
- Dockerfile muss automatisiert baubar sein
- Containerstart oder Basisvalidierung sollte später testbar sein
- Compose-nahe Nutzung muss mitgedacht werden

## Mindestziel im MVP
- erfolgreicher Docker Build als Pflichtcheck

---

# 7. Qualitätsregeln für Merge und Release

## Merge nach `main`
Nur erlaubt, wenn:
- alle Pflichtchecks grün sind
- relevante Tests aktualisiert wurden
- Build erfolgreich war
- Docker Build erfolgreich war

## Release-Fähigkeit
Ein Release ist nur gültig, wenn:
- `main` grün ist
- Release Notes vorhanden sind
- enthaltene Items nachvollziehbar sind
- kein bekannter kritischer CI- oder Build-Fehler offen ist

---

# 8. Secrets und Umgebungen

## Im MVP möglichst wenig Secrets
Da lokal mit SQLite gearbeitet wird, bleibt der Bedarf gering.

## Trotzdem vorbereiten
- GitHub Secrets sauber nutzen, wenn später nötig
- keine Secrets im Repository
- `.env.example` statt echte `.env`-Werte committen

---

# 9. Caching und Performance

Die Pipeline soll stabil sein, aber unnötig langsam werden bringt auch nichts.

## Empfohlen
- Dependency-Caching
- Jobs sauber schneiden
- E2E nur dort erzwingen, wo sinnvoll

---

# 10. Artefakte und Logs

Für Fehleranalyse und Nachvollziehbarkeit soll CI brauchbare Signale liefern.

## Empfohlen später
- Testreports
- Artefakte bei E2E-Fehlern, zum Beispiel Screenshots
- klare Jobnamen

---

# 11. Reihenfolge für die Umsetzung

## Sofort für den Entwicklungsstart
1. `ci.yml` mit lint, typecheck, build
2. Unit- und Integrationstest-Einbindung vorbereiten
3. Docker Build in CI ergänzen

## Kurz danach
4. echte Unit-Tests aktiv nutzen
5. Integrationstests aktiv nutzen
6. E2E-Workflow ergänzen

## Vor 1.0.0 verpflichtend
7. stabile Pflichtchecks auf `main`
8. E2E für Kernflüsse
9. Release-Mechanik vorbereiten

---

# 12. Erfolgsmaßstab

Die CI/CD-Strategie ist gut, wenn:
- Fehler früh entdeckt werden
- Merges nach `main` belastbar abgesichert sind
- Docker-Betrieb nicht vom Entwicklungspfad entkoppelt ist
- Releases nicht auf Hoffnung, sondern auf verifizierter Qualität basieren
