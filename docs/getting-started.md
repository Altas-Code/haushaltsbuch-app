# Getting Started

Dieses Dokument beschreibt den aktuellen Start- und Betriebsweg für Release 0.1.0.

## Ziel von 0.1.0

Release `0.1.0` liefert die technische Foundation:
- Projektgerüst
- CI-Basis
- Docker-Betrieb
- persistente SQLite-Grundlage
- Prisma-Setup
- erste Health- und Strukturpfade

Es ist noch **kein produktives MVP**, aber ein belastbares Fundament für die nächsten Iterationen.

---

# 1. Voraussetzungen

Benötigt werden:
- Node.js 22
- npm
- Docker
- Docker Compose

Optional, aber empfohlen:
- GitHub CLI für Repo- und Issue-Management

---

# 2. Lokaler Start in Development

## Setup
```bash
cp .env.example .env
npm install
npm run prisma:generate
npm run dev
```

## Ergebnis
Die App ist danach lokal erreichbar unter:
- `http://localhost:3000`

---

# 3. Datenhaltung lokal

Die App verwendet aktuell SQLite.

## Datenpfad lokal
- `./data/haushaltsbuch.db`

## Konfiguration
Die Verbindung wird über `DATABASE_URL` gesteuert.

Standard in `.env.example`:
```env
DATABASE_URL="file:./data/haushaltsbuch.db"
```

---

# 4. Prisma

## Client generieren
```bash
npm run prisma:generate
```

## Migrationen lokal entwickeln
```bash
npm run prisma:migrate:dev
```

## Migrationen in produktionsnahen Umgebungen anwenden
```bash
npm run prisma:migrate:deploy
```

---

# 5. Qualitätschecks lokal

Vor Commit oder PR mindestens:

```bash
npm run prisma:generate
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run build
```

---

# 6. Docker-Betrieb

## Start
```bash
docker compose up --build
```

## Ergebnis
- App läuft unter `http://localhost:3000`
- SQLite-Datei liegt im gemounteten Datenverzeichnis

## Persistenz im Container
- Container-Pfad: `/app/data/haushaltsbuch.db`

## Migrationen im Container
Beim Containerstart wird ausgeführt:
```bash
prisma migrate deploy
```

---

# 7. Health Check

Der aktuelle technische Gesundheitsendpunkt ist:
- `/api/health`

Er dient aktuell dazu zu prüfen, ob:
- die App läuft
- die Konfiguration grundsätzlich geladen wird

---

# 8. Aktueller Scope von 0.1.0

Bereits enthalten:
- Projektstruktur
- CI-Workflow
- Dockerfile
- Compose-Setup
- Prisma-Schema
- SQLite-Persistenzgrundlage
- generierter Prisma-Client
- Basis-UI und Placeholder
- Testskelett

Noch nicht enthalten:
- echte CRUD-Flows
- Dashboard mit echten Daten
- Formulare für recurring items
- Listenansicht mit Persistenzdaten

---

# 9. Bekannte technische Hinweise

## Next.js und Linting
Die Next.js-Version wurde auf einen aktuellen 15.5.x-Stand gehoben, um die bekannte Warnung der frühen 15.3.x-Linie zu verlassen.

Hinweis:
`next lint` ist in Richtung Next.js 16 als veraltet markiert. Für eine spätere Iteration sollte die Pipeline auf die direkte ESLint-CLI umgestellt werden.

## Docker-Zugriff lokal
Für lokale Docker-Kommandos muss der ausführende Benutzer Zugriff auf den Docker-Socket haben.

---

# 10. Nächste Schritte nach 0.1.0

Nach Foundation `0.1.0` folgen:
- Core Data Entry
- wiederkehrende Einträge anlegen und bearbeiten
- Dashboard mit ersten echten Daten
- weitere CI- und E2E-Ausbaustufen
