# Tech-Stack-Entscheidung

## Gewählter Stack

- **Next.js** für Web-App und Serverlogik
- **React** für die Benutzeroberfläche
- **TypeScript** für typsichere Entwicklung
- **SQLite** als lokale Datenbank
- **Prisma** als ORM und Migrationswerkzeug
- **Docker / Docker Compose** für Self-Hosting und Betrieb
- **PWA optional später** für bessere mobile Nutzung

## Warum dieser Stack

### Next.js
Next.js ist für dieses Projekt ein guter Mittelweg zwischen Einfachheit und Erweiterbarkeit.

Vorteile:
- Frontend und Backend in einem Projekt
- schnelle Entwicklung für Formulare, Listen und Dashboards
- serverseitige Logik ohne separates API-Projekt
- gut dokumentiert und weit verbreitet
- sauber per Docker deploybar

Für ein kleines privates Self-Hosted-Tool reduziert das den Pflegeaufwand deutlich.

### React
React passt gut zur Art der Oberfläche:
- Formulare zum Erfassen von Verträgen und Abos
- Listen und Karten für Fälligkeiten
- wiederverwendbare UI-Komponenten
- gute Basis für responsive Oberflächen

### TypeScript
TypeScript hilft besonders bei Daten, bei denen Fehler unangenehm sind:
- Geldbeträge
- Intervalle
- Datumslogik
- Statuswerte

Die zusätzliche Strenge lohnt sich, damit Berechnungen und Zustände konsistent bleiben.

### SQLite
SQLite ist für das erste Zielbild sehr passend:
- kein separater Datenbankserver
- wenig Ressourcenverbrauch
- einfache Backups
- ideal für Einzelperson oder kleinen privaten Haushalt

Für den erwarteten Datenumfang ist SQLite technisch völlig ausreichend.

### Prisma
Prisma vereinfacht die Entwicklung rund um Datenhaltung:
- klares Schema
- Migrationen versionierbar
- gute TypeScript-Integration
- schnelleres und sichereres Arbeiten als mit rohem SQL an vielen Stellen

### Docker / Docker Compose
Docker passt gut zum Self-Hosting-Ziel:
- reproduzierbares Setup
- einfache Bereitstellung
- saubere Trennung zwischen App und Hostsystem
- persistente Datenhaltung über Volumes
- später gut mit Reverse Proxy kombinierbar

## Bewusste Nicht-Entscheidungen

### Kein Postgres zum Start
Postgres wäre leistungsfähig, aber für dieses Projekt anfangs unnötig komplex. SQLite hält das Setup deutlich einfacher.

### Kein getrenntes Frontend- und Backend-Projekt
Zwei getrennte Anwendungen würden mehr Struktur und Schnittstellen erzeugen, ohne für den MVP einen echten Mehrwert zu bringen.

### Keine Bankanbindung im ersten Schritt
Bankintegration erhöht Komplexität, Datenschutzanforderungen und Fehlerquellen stark. Für den gewünschten Fokus auf wiederkehrende Verpflichtungen ist sie nicht nötig.

### Kein No-Code-Stack
No-Code- oder Low-Code-Lösungen können schnell starten, werden aber bei eigener Logik, Docker-Betrieb und späteren Erweiterungen oft unflexibel.

## Zielbild

Der Stack ist bewusst so gewählt, dass die App:
- klein starten kann
- auf Handy und Laptop angenehm nutzbar ist
- leicht self-hosted betrieben werden kann
- später Schritt für Schritt erweitert werden kann

## Spätere Erweiterungen

Falls die App wächst, sind diese Erweiterungen gut möglich:
- PWA-Funktionen
- Authentifizierung
- CSV-Import und Export
- Erinnerungen
- Wechsel von SQLite auf Postgres, falls irgendwann nötig
