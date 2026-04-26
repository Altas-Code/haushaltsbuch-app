# Docker-Betrieb

## Ziel

Die App soll lokal oder auf einem Server mit Docker Compose betrieben werden können.

## MVP-Annahme

Für den Anfang reicht ein einzelner Container mit:
- Web-App
- API
- SQLite-Datei auf persistentem Volume

## Vorteile dieser Architektur

- wenig Betriebsaufwand
- kein separater Datenbankserver nötig
- leicht zu sichern
- gut für private Self-Hosting-Setups

## Persistenz

Wichtig ist, dass die SQLite-Datei nicht im Container verloren geht.

Dafür wird ein persistentes Volume oder Bind-Mount genutzt, zum Beispiel:
- Host-Verzeichnis `./data`
- Container-Verzeichnis `/app/data`

## Ziel-Dateien

### `Dockerfile`
- baut die Anwendung
- startet die App im Production-Modus

### `docker-compose.yml`
- mappt Port 3000
- mountet Datenverzeichnis
- setzt Produktionsumgebung
- kann später um Reverse Proxy oder Healthcheck erweitert werden

## Minimalbeispiel

```yaml
services:
  haushaltsbuch-app:
    build: .
    container_name: haushaltsbuch-app
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      DATABASE_URL: file:/app/data/haushaltsbuch.db
    volumes:
      - ./data:/app/data
    restart: unless-stopped
```

## Spätere Erweiterungen

- Traefik oder Nginx Proxy Manager
- HTTPS
- Backup-Job für SQLite-Datei
- Multi-stage Build
- Healthcheck
- Secret-Handling für Auth-Funktionen
