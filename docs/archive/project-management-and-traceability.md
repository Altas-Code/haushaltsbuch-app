# Projektmanagement, Statusmodell und Traceability

Dieses Dokument definiert eine leichte, aber belastbare Projektmanagement-Struktur für die Haushaltsbuch App.

Ziel ist, dass Anforderungen, Entscheidungen, Backlog, Implementierung, Tests und Releases sauber miteinander verbunden bleiben.

---

# 1. Ziele des Projektmanagements

Die Struktur soll sicherstellen, dass:
- der Produktfokus erhalten bleibt
- Arbeit sichtbar priorisiert ist
- Status jederzeit nachvollziehbar ist
- Anforderungen bis zur Umsetzung verfolgbar bleiben
- Releases klar begründet und dokumentiert sind
- CI/CD und Qualität nicht vom Delivery-Prozess getrennt werden

---

# 2. Grundprinzipien

## 2.1 Wenig Prozess, klare Verknüpfung
Es soll kein schwerfälliger Verwaltungsapparat entstehen. Stattdessen gilt:
- wenige Artefakte
- klare IDs
- eindeutige Zustände
- konsistente Verlinkung

## 2.2 Alles muss zurückverfolgbar sein
Jede umgesetzte Änderung sollte sich zurückverfolgen lassen zu:
- Vision
- Persona oder Nutzerbedürfnis
- User Journey oder Use Case
- Backlog Item
- Implementierung
- Test
- Release

## 2.3 Status muss ehrlich sein
Ein Punkt ist nur dann "done", wenn er die Definition of Done erfüllt. Status darf keinen Wunschzustand zeigen, sondern den echten Zustand.

---

# 3. Artefakte im Projekt

## 3.1 Strategische Artefakte
Diese beschreiben das Warum und Was:
- `docs/vision.md`
- `docs/personas.md`
- `docs/user-journey.md`
- `docs/design-principles.md`

## 3.2 Planungsartefakte
Diese beschreiben das Was, Wann und in welcher Reihenfolge:
- `docs/backlog-and-roadmap.md`
- `docs/definition-of-done.md`
- `docs/project-management-and-traceability.md`

## 3.3 Umsetzungsartefakte
Diese entstehen während der Lieferung:
- GitHub Issues
- Pull Requests
- Commits
- Tests
- CI-Runs
- Release Notes

---

# 4. Statusmodell

## 4.1 Backlog-Item-Status
Jedes Backlog Item oder Issue soll genau einen klaren Status haben.

### Statuswerte
- **Draft**  
  Idee oder Arbeitspunkt existiert, ist aber noch nicht ausreichend geklärt.

- **Ready**  
  Item ist ausreichend beschrieben, geschnitten und kann umgesetzt werden.

- **In Progress**  
  Aktive Umsetzung läuft.

- **In Review**  
  Umsetzung ist erfolgt und wartet auf Review, QA oder CI-Freigabe.

- **Blocked**  
  Umsetzung kann aktuell nicht sinnvoll fortgeführt werden.

- **Done**  
  Definition of Done ist vollständig erfüllt.

- **Released**  
  Änderung ist in einer veröffentlichten Version enthalten.

## 4.2 Release-Status
Für Releases kann zusätzlich ein einfacher Zustand genutzt werden:
- Planned
- In Build
- Released
- Superseded

---

# 5. Traceability-Modell

## 5.1 Ziel
Jedes relevante Arbeitsergebnis soll sich entlang einer Kette verfolgen lassen:

**Vision -> Persona -> Use Case -> Backlog Item -> Issue -> Commit/PR -> Test/CI -> Release**

## 5.2 Mindestanforderung für Traceability
Jedes umgesetzte Backlog Item sollte mindestens referenzieren:
- eine fachliche Herkunft, zum Beispiel Use Case oder Epic
- eine Arbeits-ID oder Issue-ID
- die zugehörige Implementierung
- die zugehörige Testabdeckung
- den Release-Bezug

---

# 6. ID-System

Ein einfaches ID-System verbessert Nachvollziehbarkeit deutlich.

## 6.1 Vorschlag für IDs

### Personas
- `PER-01` Christian, pragmatischer Self-Hoster
- `PER-02` Jana, organisierte Alltagsplanerin
- `PER-03` Marco, vorsichtiger Kostenoptimierer

### Use Cases
- `UC-1.1` Erste Verträge und Abos anlegen
- `UC-2.1` Monatliche Gesamtbelastung sehen
- `UC-2.2` Nächste Fälligkeiten sehen
- usw.

### Epics
- `EPC-A` Projektgrundlage und Betrieb
- `EPC-B` Datenmodell
- `EPC-C` Erfassung und Bearbeitung
- usw.

### Backlog Items / Issues
- `HB-001`, `HB-002`, `HB-003` usw.

### Releases
- `REL-0.1.0`, `REL-0.2.0`, `REL-1.0.0`

## 6.2 Nutzung der IDs
Diese IDs sollten in GitHub Issues, PRs, Commit-Nachrichten und Release Notes verwendet werden, wenn sinnvoll.

---

# 7. Empfohlene Struktur für GitHub Issues

Jedes Issue sollte möglichst diese Felder oder Abschnitte enthalten:

## Pflichtfelder
- **Titel**
- **ID** zum Beispiel `HB-012`
- **Typ** Feature, Bug, Tech, UX, Infra, Docs
- **Status**
- **Epic**
- **Use Case Referenz**
- **Persona-Bezug**, falls relevant
- **Beschreibung**
- **Akzeptanzkriterien**
- **Definition-of-Done-Hinweis**
- **Zielrelease**

## Optional sinnvoll
- technische Hinweise
- Design-Hinweise
- Testhinweise
- Abhängigkeiten
- Risiken

---

# 8. Empfohlene Board-Spalten

Für ein GitHub Project oder ähnliches Board reichen diese Spalten:
- Draft
- Ready
- In Progress
- In Review
- Blocked
- Done
- Released

Das ist genug Prozess, ohne schwer zu werden.

---

# 9. Traceability-Matrix, schlanke Form

Eine vollständige Enterprise-Matrix ist hier unnötig. Sinnvoll ist eine leichte Tabelle, zum Beispiel in `docs/traceability-matrix.md`.

## Vorschlag für Spalten
- Backlog ID
- Titel
- Epic
- Persona
- Use Case
- Akzeptanzkriterien vorhanden
- Testabdeckung
- CI geprüft
- Zielrelease
- Status

So bleibt sichtbar, ob etwas nur geplant oder wirklich belastbar abgeschlossen ist.

---

# 10. Verbindung zu CI/CD

CI/CD ist Teil des Projektmanagements und nicht nur ein Technikdetail.

## Deshalb gilt
- Kein Item wird auf Done gesetzt, wenn die relevanten CI-Prüfungen nicht grün sind.
- Kein Release wird als Released markiert, wenn Build, Test oder Docker-Pipeline nicht erfolgreich waren.
- Release Notes müssen klar machen, welche Backlog Items enthalten sind.

## Für jedes Release sollte nachvollziehbar sein
- welche Items enthalten sind
- welche Tests gelaufen sind
- ob Docker-Build und Anwendungs-Build erfolgreich waren
- ob relevante Migrationspfade berücksichtigt wurden

---

# 11. Release-Management

## 11.1 Jeder Release braucht
- Versionsnummer
- Ziel und Scope
- enthaltene Backlog Items
- bekannte Einschränkungen
- technische Hinweise, wenn relevant

## 11.2 Release Notes sollen referenzieren
- Release-ID
- enthaltene Issues oder Backlog IDs
- sichtbare Produktänderungen
- technische Änderungen mit Betriebsrelevanz

---

# 12. Praktischer Workflow

## Schritt 1: Bedarf entsteht
Quelle ist Vision, Persona, Use Case, Bug oder technischer Bedarf.

## Schritt 2: Item wird als Draft erfasst
- kurze Beschreibung
- erste Zuordnung zu Epic und Use Case

## Schritt 3: Item wird Ready gemacht
- Akzeptanzkriterien
- Scope geklärt
- offene Fragen geklärt
- Zielrelease benannt

## Schritt 4: Umsetzung
- Status auf In Progress
- technische Umsetzung
- Tests
- Dokumentation
- CI/CD-Anpassung falls nötig

## Schritt 5: Review und Integration
- Status auf In Review
- Review, QA, CI prüfen
- bei Erfolg Done

## Schritt 6: Release
- Item wird einem Release zugeordnet
- nach Veröffentlichung auf Released setzen

---

# 13. Minimaler Governance-Satz für dieses Projekt

Für dieses Projekt gelten folgende Regeln:

1. Jedes relevante Feature oder technische Arbeitspaket bekommt eine ID.
2. Jedes Item muss einem Epic zugeordnet sein.
3. Jedes Feature-Item soll nach Möglichkeit einem Use Case zugeordnet sein.
4. Kein Item wird ohne Akzeptanzkriterien auf Ready gesetzt.
5. Kein Item wird ohne Erfüllung der Definition of Done auf Done gesetzt.
6. Kein Release gilt als released ohne grüne CI/CD.
7. Release Notes müssen die enthaltenen Änderungen rückverfolgbar machen.

---

# 14. Empfehlung für den nächsten Schritt

Um diese Struktur konkret nutzbar zu machen, sollten als Nächstes angelegt werden:
- `docs/traceability-matrix.md`
- ein GitHub-Issue-Template
- ein Feature-Issue-Template
- ein Bug-Issue-Template
- ein Pull-Request-Template
- eine erste Liste konkreter MVP-Issues mit IDs

Damit wäre das Projektmanagement nicht nur beschrieben, sondern direkt operativ nutzbar.
