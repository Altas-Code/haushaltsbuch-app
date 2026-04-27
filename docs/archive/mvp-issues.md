# Erste MVP-Issue-Liste

Diese Liste übersetzt den MVP in konkret anlegbare GitHub-Issues.

## Foundation / Release 0.1.0

### HB-001 Projektgerüst anlegen
- Typ: tech
- Bereich: foundation
- Prio: P0
- Release: 0.1.0

### HB-002 Docker-Betrieb ermöglichen
- Typ: tech
- Bereich: docker, infra
- Prio: P0
- Release: 0.1.0

### HB-003 Persistente Datenhaltung einrichten
- Typ: tech
- Bereich: data, docker
- Prio: P0
- Release: 0.1.0

### HB-004 Basis-Konfiguration dokumentieren
- Typ: docs
- Bereich: docs
- Prio: P1
- Release: 0.1.0

## Core Data Entry / Release 0.2.0

### HB-005 Wiederkehrenden Eintrag speichern
- Typ: feature
- Bereich: data
- Prio: P1
- Release: 0.2.0

### HB-006 Kategorien unterstützen
- Typ: feature
- Bereich: data
- Prio: P2
- Release: 0.2.0

### HB-007 Status pflegen
- Typ: feature
- Bereich: data, crud
- Prio: P1
- Release: 0.2.0

### HB-008 Optionale Zusatzfelder unterstützen
- Typ: feature
- Bereich: data, crud
- Prio: P2
- Release: 0.2.0

### HB-009 Eintrag anlegen
- Typ: feature
- Bereich: crud
- Prio: P1
- Release: 0.2.0

### HB-010 Eintrag bearbeiten
- Typ: feature
- Bereich: crud
- Prio: P1
- Release: 0.2.0

### HB-011 Eintrag archivieren oder deaktivieren
- Typ: feature
- Bereich: crud
- Prio: P1
- Release: 0.2.0

### HB-012 Eintrag löschen
- Typ: feature
- Bereich: crud
- Prio: P2
- Release: 0.2.0

### HB-013 Formular-UX optimieren
- Typ: ux
- Bereich: crud, mobile
- Prio: P1
- Release: 0.2.0

### HB-028 Leere Zustände gestalten
- Typ: ux
- Bereich: crud
- Prio: P2
- Release: 0.2.0

## First Useful Dashboard / Release 0.3.0

### HB-014 Monatliche Gesamtbelastung berechnen
- Typ: feature
- Bereich: dashboard, data
- Prio: P1
- Release: 0.3.0

### HB-015 Jährliche Gesamtbelastung berechnen
- Typ: feature
- Bereich: dashboard, data
- Prio: P1
- Release: 0.3.0

### HB-016 Nächste Fälligkeiten anzeigen
- Typ: feature
- Bereich: dashboard
- Prio: P1
- Release: 0.3.0

### HB-017 Aktive Verpflichtungen zählen
- Typ: feature
- Bereich: dashboard
- Prio: P2
- Release: 0.3.0

### HB-024 Responsive Dashboard-Ansicht
- Typ: ux
- Bereich: dashboard, mobile
- Prio: P1
- Release: 0.3.0

## MVP / Release 1.0.0

### HB-019 Listenansicht aller Einträge
- Typ: feature
- Bereich: list
- Prio: P1
- Release: 1.0.0

### HB-020 Nach Status filtern
- Typ: feature
- Bereich: list
- Prio: P1
- Release: 1.0.0

### HB-022 Nach Fälligkeit sortieren
- Typ: feature
- Bereich: list
- Prio: P1
- Release: 1.0.0

### HB-025 Mobile Listen- und Kartenansicht
- Typ: ux
- Bereich: list, mobile
- Prio: P1
- Release: 1.0.0

### HB-026 Touch-taugliche Formulare
- Typ: ux
- Bereich: mobile, crud
- Prio: P1
- Release: 1.0.0

### HB-027 Saubere Validierung
- Typ: tech
- Bereich: data, crud
- Prio: P1
- Release: 1.0.0

### HB-029 Fehlerzustände verständlich machen
- Typ: ux
- Bereich: crud, dashboard
- Prio: P2
- Release: 1.0.0

---

# Empfehlung zur operativen Umsetzung

## Zuerst anlegen
1. HB-001
2. HB-002
3. HB-003
4. HB-004

## Danach direkt
5. HB-005
6. HB-009
7. HB-010
8. HB-007

## Dann Mehrwert aufbauen
9. HB-014
10. HB-015
11. HB-016
12. HB-024

## Danach MVP abrunden
13. HB-019
14. HB-020
15. HB-022
16. HB-025
17. HB-026
18. HB-027
19. HB-029

---

# Hinweis

Die eigentlichen GitHub-Issues sollten diese Liste als Ausgangspunkt nutzen, dann aber jeweils noch mit:
- Beschreibung
- Akzeptanzkriterien
- Testhinweisen
- CI/CD-Auswirkungen
- Release-Zuordnung

vollständig angelegt werden.
