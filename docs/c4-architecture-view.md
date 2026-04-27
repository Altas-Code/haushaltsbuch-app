# C4 Architecture View

Dieses Dokument beschreibt die Haushaltsbuch App in einer kompakten C4-artigen Sicht.

Ziel ist nicht formale Perfektion, sondern ein klares gemeinsames Architekturverständnis über:
- Kontext
- Container
- Komponenten

---

# 1. System Context

## System
**Haushaltsbuch App**

Eine private self-hosted Web-Anwendung zur Verwaltung wiederkehrender finanzieller Verpflichtungen wie Abos, Versicherungen, Kredite und andere Fixkosten.

## Primärer Nutzer
**Privatnutzer / kleiner Haushalt**

Nutzen:
- wiederkehrende Kosten erfassen
- monatliche und jährliche Belastungen verstehen
- nächste Fälligkeiten sehen
- Verträge und Fristen besser im Griff behalten

## Externe Systeme und Abhängigkeiten im MVP

### Web Browser
- Zugriff auf die Anwendung
- Darstellung von Dashboard, Listen und Formularen

### Docker Runtime
- Start und Betrieb der Anwendung im Self-Hosting-Szenario

### Dateisystem / Persistenzverzeichnis
- Speicherung der SQLite-Datenbankdatei

### GitHub
- Quellcodeverwaltung
- Issues, PRs und Projektsteuerung
- CI/CD über GitHub Actions

## Nicht Teil des MVP-Kontexts
- Bankenschnittstellen
- Zahlungsanbieter
- E-Mail-Systeme
- Push-Notification-Systeme
- externe Identity-Provider als Pflichtbestandteil

---

# 2. Container View

Auch wenn die App als modularer Monolith gebaut wird, hilft eine Container-Sicht für Betrieb und Struktur.

## Container 1: Web Application
**Technologie:** Next.js, React, TypeScript  
**Verantwortung:**
- UI rendern
- Eingaben entgegennehmen
- Serverlogik ausführen
- Dashboard-Daten liefern
- wiederkehrende Einträge verwalten

Enthält intern:
- Presentation Layer
- Application Layer
- Domain Layer
- Teile der Infrastructure Layer

## Container 2: SQLite Database
**Technologie:** SQLite  
**Verantwortung:**
- persistente Speicherung der Anwendungsdaten
- Speicherung der recurring items und später weiterer Konfigurationsdaten

## Container 3: CI/CD Pipeline
**Technologie:** GitHub Actions  
**Verantwortung:**
- Linting
- Typechecking
- Tests
- Build
- Docker Build
- Qualitäts-Gate vor Merge und Release

## Beziehungen
- Browser -> Web Application
- Web Application -> SQLite Database
- GitHub Actions -> Repository / Build / Test / Docker Build
- Docker Runtime -> Web Application
- Dateisystem -> SQLite Database

---

# 3. Component View, Container: Web Application

Die Web Application besteht aus mehreren logischen Komponenten bzw. Modulen.

## 3.1 UI / Presentation Components
**Verantwortung:**
- Seitenstruktur
- Layout
- Formulare
- Karten
- Listen
- Nutzerfeedback

**Beispiele:**
- Dashboard Page
- Recurring Item List
- Recurring Item Form
- Empty State Module
- Validation / Error Display

## 3.2 Application Services
**Verantwortung:**
- Use Cases orchestrieren
- Validierung, Berechnung und Persistenz zusammenführen
- nutzbare Antworten für UI oder API liefern

**Beispiele:**
- CreateRecurringItem
- UpdateRecurringItem
- ListRecurringItems
- GetDashboardSummary

## 3.3 Domain Model and Rules
**Verantwortung:**
- fachliche Modellierung wiederkehrender Einträge
- Monatswert-Berechnung
- Jahreswert-Berechnung
- Statusregeln
- Datumslogik

**Beispiele:**
- RecurringItem Model
- Calculation Rules
- Validation Rules

## 3.4 Persistence / Infrastructure
**Verantwortung:**
- Prisma-Anbindung
- SQLite-Zugriff
- Konfiguration und Umgebungswerte
- Migrationsnahe Implementierungen

**Beispiele:**
- Prisma Client Wrapper
- RecurringItem Persistence Access
- Config Loader

---

# 4. Component Interactions

## Use Case: Dashboard anzeigen
1. Dashboard Page fordert Daten an
2. GetDashboardSummary lädt aktive Einträge
3. Domain Rules berechnen Monats- und Jahreswerte sowie Fälligkeiten
4. UI rendert KPI-Karten und Fälligkeitsliste

## Use Case: Recurring Item anlegen
1. Recurring Item Form sendet Eingaben
2. CreateRecurringItem validiert Input
3. Domain Rules prüfen fachliche Gültigkeit
4. Persistence speichert Datensatz in SQLite über Prisma
5. UI zeigt Erfolg oder Fehler

## Use Case: Recurring Item bearbeiten
1. Bearbeitungsformular lädt bestehenden Zustand
2. UpdateRecurringItem verarbeitet Änderungen
3. Domain Rules prüfen Daten erneut
4. Persistence aktualisiert Datensatz
5. UI aktualisiert Liste oder Dashboard

---

# 5. Architekturregeln in C4-Form

## Presentation
- spricht nicht direkt mit der Datenbank
- enthält keine verstreute Geschäftslogik

## Application
- koordiniert Use Cases
- kennt Domain und Persistenz

## Domain
- kennt keine UI
- kennt kein Next.js
- kennt Prisma nicht direkt

## Infrastructure
- implementiert technische Anbindung
- darf nicht die fachliche Hoheit übernehmen

---

# 6. Deployment-Sicht, kompakt

## MVP-Deployment
- ein App-Container
- ein persistentes Datenverzeichnis
- docker-compose als Startmechanismus

## Ergebnis
- einfache private Selbsthostbarkeit
- geringe Betriebs- und Einstiegshürde
- saubere Basis für spätere Erweiterung

---

# 7. Nutzen dieser Sicht

Diese C4-Sicht hilft dabei:
- Architektur schnell neuen Beteiligten zu erklären
- Modulgrenzen klar zu halten
- technische Entscheidungen gegen das Zielbild zu prüfen
- neue Features sauber einzuordnen
