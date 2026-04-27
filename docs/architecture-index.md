# Architecture Documentation Index

Dieses Dokument konsolidiert die Architektur-Dokumentation des Projekts.

Ziel ist, klar festzulegen:
- welche Architekturdatei wofür zuständig ist
- welche Dokumente führend sind
- welche Dokumente ergänzend sind
- in welcher Reihenfolge man sie sinnvoll liest

---

# 1. Führende Architekturquellen

Diese Dokumente sind die **maßgeblichen Referenzen** für Architekturentscheidungen im Projekt.

## 1.1 `docs/software-architecture.md`
**Rolle:** Hauptdokument der Softwarearchitektur  
**Ist führend für:**
- Architekturstil
- Schichtenmodell
- Verantwortlichkeiten
- Laufzeitsicht
- Datenarchitektur
- Validierungs- und Fehlerbehandlungsprinzipien
- Testarchitektur
- Betriebsarchitektur
- Architekturprinzipien für Weiterentwicklung

Wenn es bei Architekturfragen Unklarheiten gibt, ist dieses Dokument die erste Referenz.

## 1.2 `docs/domain-model.md`
**Rolle:** Führendes Fach- und Datenmodell-Dokument  
**Ist führend für:**
- Fachobjekte
- Felddefinitionen
- Status- und Intervallregeln
- Berechnungsregeln
- fachliche Validierung

## 1.3 `docs/cicd-blueprint.md`
**Rolle:** Führendes Dokument für CI/CD-Zielbild  
**Ist führend für:**
- Pipeline-Anforderungen
- Pflichtchecks
- Release-Qualitätsregeln
- Branch-Protection-Bezug auf Delivery-Seite

---

# 2. Ergänzende Architekturquellen

Diese Dokumente konkretisieren oder visualisieren das Zielbild, sind aber nicht die primäre Quelle bei Regelkonflikten.

## 2.1 `docs/architecture-overview.md`
**Rolle:** kompakter Überblick  
**Nutzen:** schneller Einstieg in Zielarchitektur und Schichten, bevor man ins Hauptdokument geht.

## 2.2 `docs/c4-architecture-view.md`
**Rolle:** strukturierte Architektursicht in C4-artiger Form  
**Nutzen:** gemeinsames Architekturverständnis über Kontext, Container und Komponenten.

## 2.3 `docs/architecture-diagrams.md`
**Rolle:** visuelle Ergänzung über Mermaid-Diagramme  
**Nutzen:** schnelle Orientierung, Kommunikation und Review-Unterstützung.

## 2.4 `docs/screen-inventory.md`
**Rolle:** Schnittstelle zwischen Architektur, UX und Umsetzung  
**Nutzen:** zeigt, welche Screens das MVP wirklich braucht und wie Information Architecture aussieht.

## 2.5 `docs/docker.md`
**Rolle:** technische Betriebs-Ergänzung  
**Nutzen:** Fokus auf Containerbetrieb und Persistenzsetup.

## 2.6 `docs/tech-stack.md`
**Rolle:** Technologieentscheidungs-Dokument  
**Nutzen:** erklärt, warum der Stack so gewählt wurde, ist aber nicht das eigentliche Architektur-Hauptdokument.

---

# 3. Maßgeblichkeit bei Konflikten

Falls Inhalte zwischen Dokumenten leicht auseinanderlaufen, gilt diese Reihenfolge:

## Reihenfolge der Autorität
1. `docs/software-architecture.md`
2. `docs/domain-model.md`
3. `docs/cicd-blueprint.md`
4. `docs/architecture-overview.md`
5. `docs/c4-architecture-view.md`
6. `docs/architecture-diagrams.md`
7. `docs/screen-inventory.md`
8. `docs/docker.md`
9. `docs/tech-stack.md`

## Praktische Bedeutung
- Visualisierungen erklären, überschreiben aber keine Architekturregeln.
- Überblicksdokumente helfen beim Einstieg, ersetzen aber nicht das Hauptdokument.
- Das Domänenmodell ist bei Feld- und Fachfragen maßgeblich.
- Das CI/CD-Blueprint ist bei Delivery- und Pipeline-Fragen maßgeblich.

---

# 4. Empfohlene Lesereihenfolge

## Für einen schnellen Einstieg
1. `docs/vision.md`
2. `docs/software-architecture.md`
3. `docs/domain-model.md`
4. `docs/screen-inventory.md`
5. `docs/cicd-blueprint.md`

## Für Produkt + Architektur zusammen
1. `docs/vision.md`
2. `docs/personas.md`
3. `docs/user-journey.md`
4. `docs/software-architecture.md`
5. `docs/domain-model.md`
6. `docs/screen-inventory.md`
7. `docs/backlog-and-roadmap.md`

## Für neue Entwickler
1. `README.md`
2. `docs/architecture-index.md`
3. `docs/software-architecture.md`
4. `docs/domain-model.md`
5. `docs/cicd-blueprint.md`
6. `docs/branching-strategy.md`
7. `docs/definition-of-done.md`

---

# 5. Zweck der einzelnen Architekturartefakte in Kurzform

- `software-architecture.md` -> Was ist die Softwarearchitektur?
- `domain-model.md` -> Wie sieht das Fachmodell aus?
- `cicd-blueprint.md` -> Wie wird Qualität technisch abgesichert?
- `architecture-overview.md` -> Schneller Architekturüberblick
- `c4-architecture-view.md` -> Architektur als strukturierte Sicht
- `architecture-diagrams.md` -> Architektur als Diagramm
- `screen-inventory.md` -> Architektur trifft UX und Navigation
- `docker.md` -> Architektur trifft Betrieb
- `tech-stack.md` -> Warum diese Technologien?

---

# 6. Pflegeprinzip

Damit die Architektur-Dokumentation konsistent bleibt, gilt:

1. Änderungen zuerst in der führenden Quelle vornehmen.
2. Danach ergänzende Dokumente nachziehen, wenn sie betroffen sind.
3. Diagramme nie als einzige Wahrheitsquelle behandeln.
4. Architekturänderungen gehören mit Doku-Update, Tests und CI/CD-Betrachtung zusammen.

---

# 7. Ergebnis

Mit dieser Konsolidierung ist klar:
- **`software-architecture.md` ist das Hauptdokument der Softwarearchitektur**
- `domain-model.md` und `cicd-blueprint.md` sind fachlich bzw. delivery-seitig führende Spezialdokumente
- C4-View, Overview und Diagramme sind wichtige, aber ergänzende Darstellungen
