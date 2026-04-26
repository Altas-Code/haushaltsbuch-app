# Haushaltsbuch App

Mini-Konzept für eine kleine self-hosted Web-App zur Verwaltung von wiederkehrenden Haushaltskosten wie Abos, Versicherungen und Krediten.

## Ziel

Eine schlanke Web-App, die sich auf wiederkehrende finanzielle Verpflichtungen konzentriert, statt auf vollständige Ausgabenerfassung.

Die Vision ist ein ruhiges, klares Finanz-Dashboard für Abos, Versicherungen, Kredite und andere Fixkosten, das mit wenig Pflegeaufwand echte Übersicht schafft.

Die App soll:
- auf Handy und Laptop gut nutzbar sein
- self-hosted laufen
- per Docker startbar sein
- wenig Pflegeaufwand verursachen
- später erweiterbar bleiben

## Kernidee

Nicht jede einzelne Ausgabe tracken, sondern nur planbare, wiederkehrende Kosten:
- Abos
- Versicherungen
- Kredite
- Mitgliedschaften
- wiederkehrende Haushaltskosten

Dadurch bleibt der manuelle Aufwand niedrig, und du bekommst trotzdem einen guten Überblick über fixe Belastungen.

## MVP-Funktionsumfang

### 1. Einträge verwalten
Jeder Eintrag enthält mindestens:
- Name
- Kategorie
- Betrag
- Intervall (monatlich, vierteljährlich, halbjährlich, jährlich)
- nächstes Fälligkeitsdatum
- optionaler Hinweis
- optional Kündigungsdatum / Kündigungsfrist
- Status (aktiv, pausiert, beendet)

### 2. Übersicht
- Summe der monatlichen Fixkosten
- Summe der jährlichen Fixkosten
- Umrechnung aller Intervalle auf Monatswert
- Liste der nächsten fälligen Zahlungen
- Hervorhebung bald fälliger Einträge

### 3. Geräteübergreifende Nutzung
- responsive Weboberfläche
- Nutzung im Browser auf Laptop und Handy
- optional später als PWA installierbar

### 4. Datenhaltung
- lokale Datenbank, zunächst SQLite
- einfacher Backup-Pfad über Datenverzeichnis

## Nicht im MVP

Bewusst weggelassen, um die App klein zu halten:
- Bankanbindung
- automatische Kontoumsatzanalyse
- Haushaltsbudget pro Kategorie
- OCR für Rechnungen
- Multi-User / Rollenmodell
- komplexe Benachrichtigungslogik

## Empfohlener Tech-Stack

### Variante A, pragmatisch empfohlen
- **Frontend + Backend:** Next.js
- **UI:** einfache Komponenten mit sauberem Mobile-First-Layout
- **Datenbank:** SQLite
- **ORM:** Prisma oder Drizzle
- **Deployment:** Docker Compose

Warum diese Variante:
- schnell umsetzbar
- ein Codebase für UI und Serverlogik
- gut für kleine self-hosted Tools
- später leicht erweiterbar

### Alternative, noch schlanker
- Express oder Fastify Backend
- simples Server-rendered Frontend oder kleines React-Frontend
- SQLite

Das wäre etwas technischer im Aufbau, aber nicht unbedingt angenehmer in der Pflege.

## Datenmodell, erster Entwurf

### Tabelle `recurring_items`
- `id`
- `name`
- `category`
- `amount_cents`
- `currency`
- `interval`
- `next_due_date`
- `start_date`
- `end_date` nullable
- `cancel_by_date` nullable
- `notes` nullable
- `status`
- `created_at`
- `updated_at`

### Mögliche Kategorien
- Abo
- Versicherung
- Kredit
- Wohnen
- Mobilität
- Gesundheit
- Sonstiges

### Intervalle
- monthly
- quarterly
- semiannual
- yearly

## Wichtige Berechnungen

### Monatswert
Zur Vergleichbarkeit wird jeder Eintrag auf einen Monatswert umgerechnet:
- monatlich = Betrag
- vierteljährlich = Betrag / 3
- halbjährlich = Betrag / 6
- jährlich = Betrag / 12

### Dashboard-Werte
- monatliche Gesamtbelastung
- jährliche Gesamtbelastung
- nächste 30 Tage fällig
- kündigungsrelevante Einträge

## UI-Idee

## Startseite / Dashboard
- Monatsgesamtwert als große Kennzahl
- Anzahl aktiver Verträge
- nächste Fälligkeiten
- eventuell Hinweis auf bald kündbare oder bald abbuchende Einträge

## Listenansicht
- alle wiederkehrenden Kosten in einer Tabelle oder Kartenliste
- Filter nach Kategorie und Status
- Sortierung nach nächster Fälligkeit oder Betrag

## Detail / Bearbeitung
- Formular zum Anlegen und Bearbeiten
- Fokus auf sehr wenige Pflichtfelder

## Mobile UX
- Karten statt breiter Tabellen
- schnelle Erfassung mit kompaktem Formular
- große Touch-Ziele

## Docker-Konzept

Die App soll per Docker Compose laufen.

### Geplante Services
Für das MVP reicht zunächst **ein App-Container** plus persistentes Datenverzeichnis:
- `app`
- Volume für SQLite-Datei

### Beispielstruktur
- App läuft auf Port 3000
- Datenbankdatei liegt in `/app/data`
- Volume bindet lokales Verzeichnis für Persistenz

### Beispiel `docker-compose.yml`
```yaml
services:
  haushaltsbuch-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data
    environment:
      - NODE_ENV=production
```

### Optional später
- Reverse Proxy davor
- Authentifizierung
- automatische Backups
- Healthcheck
- Watchtower / Updatestrategie

## Verzeichnisvorschlag

```text
haushaltsbuch-app/
├─ README.md
├─ docs/
│  ├─ concept.md
│  ├─ roadmap.md
│  ├─ docker.md
│  ├─ tech-stack.md
│  ├─ vision.md
│  ├─ personas.md
│  ├─ user-journey.md
│  └─ design-principles.md
├─ app/
│  ├─ frontend/
│  └─ backend/
├─ data/
└─ docker-compose.yml
```

Für den Start reicht aber erst einmal die Dokumentation und danach der eigentliche App-Bau.

## Roadmap

### Phase 1, Konzept
- Anforderungen festziehen
- Datenmodell definieren
- UI grob skizzieren
- Docker-Zielbild festhalten

### Phase 2, MVP bauen
- Grundgerüst erstellen
- SQLite anbinden
- CRUD für Einträge
- Dashboard mit Summen und Fälligkeiten
- responsive UI
- Dockerfile + Compose

### Phase 3, Komfortfunktionen
- Erinnerungen
- PWA
- CSV-Export
- Anhänge / Vertragsnotizen
- einfache Auth

## Meine Empfehlung

Für deinen Fall lohnt sich eine eigene kleine App dann, wenn du:
- die Daten bewusst einfach halten willst
- keine Bankanbindung brauchst
- selbst hosten möchtest
- lieber ein passendes kleines Tool als eine überladene Budget-App hast

Wenn wir das wirklich bauen, würde ich mit einem **sehr kleinen MVP** starten und erst danach Extras ergänzen.
