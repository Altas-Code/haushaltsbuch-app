# Architecture Diagrams

Dieses Dokument ergänzt die Architektur um Mermaid-Diagramme, damit die Systemstruktur direkt im Repository visuell lesbar ist.

---

# 1. System Context

```mermaid
flowchart LR
    user[Privatnutzer oder kleiner Haushalt]
    browser[Web Browser]
    app[Haushaltsbuch App]
    docker[Docker Runtime]
    fs[Persistentes Dateisystem]
    github[GitHub und GitHub Actions]

    user --> browser
    browser --> app
    docker --> app
    app --> fs
    github --> app
```

## Lesart
- Der Nutzer greift über den Browser auf die App zu.
- Die App läuft self-hosted, typischerweise in Docker.
- Persistente Daten liegen im Dateisystem, zunächst als SQLite-Datei.
- GitHub und GitHub Actions unterstützen Entwicklung, Qualität und Delivery.

---

# 2. Container View

```mermaid
flowchart LR
    browser[Browser]
    webapp[Web Application\nNext.js + React + TypeScript]
    db[SQLite Database]
    volume[Persistentes Datenverzeichnis]
    ci[CI/CD Pipeline\nGitHub Actions]

    browser --> webapp
    webapp --> db
    db --> volume
    ci --> webapp
```

## Lesart
- Die Web Application ist der zentrale Container des Systems.
- Die SQLite-Datenbank speichert die App-Daten.
- Das persistente Datenverzeichnis stellt sicher, dass Daten Container-Neustarts überleben.
- Die CI/CD-Pipeline prüft und sichert die Anwendung vor Merge und Release.

---

# 3. Component View, Web Application

```mermaid
flowchart TD
    ui[Presentation Layer\nPages, Layouts, Forms, Lists]
    appsvc[Application Layer\nUse Cases und Orchestrierung]
    domain[Domain Layer\nRegeln, Berechnungen, Fachlogik]
    infra[Infrastructure Layer\nPrisma, Config, DB Access]
    sqlite[SQLite]

    ui --> appsvc
    appsvc --> domain
    appsvc --> infra
    infra --> sqlite
```

## Lesart
- Die UI spricht nicht direkt mit der Datenbank.
- Die Application-Schicht steuert Use Cases.
- Die Domain-Schicht kapselt die Fachlogik.
- Die Infrastructure-Schicht verbindet die Anwendung mit Persistenz und Laufzeitdetails.

---

# 4. Use Case: Recurring Item anlegen

```mermaid
sequenceDiagram
    participant U as Nutzer
    participant UI as Formular / UI
    participant APP as Application Layer
    participant DOM as Domain Rules
    participant INF as Persistence Layer
    participant DB as SQLite

    U->>UI: Formular ausfüllen und absenden
    UI->>APP: Eingabedaten senden
    APP->>DOM: fachliche Regeln prüfen
    DOM-->>APP: validiert / abgelehnt
    APP->>INF: speichern
    INF->>DB: Datensatz persistieren
    DB-->>INF: gespeichert
    INF-->>APP: Ergebnis
    APP-->>UI: Erfolg oder Fehler
    UI-->>U: Rückmeldung anzeigen
```

---

# 5. Use Case: Dashboard laden

```mermaid
sequenceDiagram
    participant U as Nutzer
    participant UI as Dashboard UI
    participant APP as Application Layer
    participant INF as Persistence Layer
    participant DB as SQLite
    participant DOM as Domain Rules

    U->>UI: Dashboard öffnen
    UI->>APP: Dashboard-Daten anfordern
    APP->>INF: aktive Einträge laden
    INF->>DB: Daten lesen
    DB-->>INF: Datensätze
    INF-->>APP: Einträge
    APP->>DOM: Summen und Fälligkeiten berechnen
    DOM-->>APP: Dashboard-Modell
    APP-->>UI: aufbereitete Daten
    UI-->>U: Kennzahlen und Liste anzeigen
```

---

# 6. Entwicklungs- und Qualitätsfluss

```mermaid
flowchart LR
    branch[Feature, Bugfix oder Tech Branch]
    pr[Pull Request]
    ci[CI Pipeline\nLint, Typecheck, Tests, Build]
    main[main]
    release[Release]

    branch --> pr
    pr --> ci
    ci --> main
    main --> release
```

## Lesart
- Änderungen entstehen in dedizierten Branches.
- Merge läuft über Pull Request.
- CI ist das Qualitäts-Gate.
- `main` bleibt releasefähig.
- Releases bauen auf verifizierten Änderungen auf.

---

# 7. Architekturhinweis

Die Diagramme sind bewusst kompakt gehalten. Sie sollen:
- Orientierung geben
- die Schichtenregeln verankern
- neue Features leichter einordnen
- Architektur und Delivery zusammendenken
