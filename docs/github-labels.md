# GitHub Labels

Dieses Dokument definiert ein schlankes, aber aussagekräftiges Label-System für das Projekt.

## Ziele

Die Labels sollen:
- Issues schneller einordnen
- Board-Filter verbessern
- Traceability unterstützen
- Release- und Prioritätsarbeit vereinfachen
- Status und Arbeitstyp sichtbar machen

---

# 1. Typ-Labels

## `feature`
Neue fachliche Funktion.

## `bug`
Fehler oder Regression.

## `tech`
Technische Aufgabe, Architektur, Refactoring, CI/CD, Infrastruktur.

## `ux`
UX- oder UI-bezogene Verbesserung.

## `docs`
Dokumentation.

## `infra`
Deployment, Docker, Hosting, Build oder Runtime-Themen.

---

# 2. Status-Labels

## `status:draft`
Noch nicht ausreichend geschnitten oder beschrieben.

## `status:ready`
Kann umgesetzt werden.

## `status:in-progress`
Aktive Umsetzung läuft.

## `status:in-review`
Wartet auf Review oder grüne CI.

## `status:blocked`
Ist aktuell blockiert.

## `status:done`
Definition of Done erfüllt.

## `status:released`
In einem Release enthalten.

---

# 3. Prioritäts-Labels

## `prio:P0`
Kritisch, blockiert Fortschritt oder Release.

## `prio:P1`
Sehr wichtig für MVP oder laufenden Release.

## `prio:P2`
Wichtig, aber nicht unmittelbar blockierend.

## `prio:P3`
Später oder optional.

---

# 4. Bereichs-Labels

## `area:foundation`
Projektsetup, Basisarchitektur, Grundstruktur.

## `area:data`
Datenmodell, Datenlogik, Persistenz.

## `area:crud`
Erfassung, Bearbeitung, Löschen, Statuslogik.

## `area:dashboard`
Kennzahlen, Übersicht, Fälligkeiten.

## `area:list`
Listen, Filter, Sortierung.

## `area:mobile`
Responsive Verhalten und mobile UX.

## `area:cicd`
CI, CD, GitHub Actions, Build-Pipeline.

## `area:docker`
Dockerfile, Compose, Containerlaufzeit.

## `area:docs`
Produkt- oder Technikdokumentation.

---

# 5. Release-Labels

## `release:0.1.0`
## `release:0.2.0`
## `release:0.3.0`
## `release:1.0.0`
## `release:1.1.0`
## `release:1.2.0`
## `release:1.3.0`
## `release:1.4.0`

Dienen der einfachen Filterung nach geplantem Zielrelease.

---

# 6. Qualitäts- und Risikolabels

## `needs:tests`
Es fehlt noch Testabdeckung oder sie muss erweitert werden.

## `needs:design`
UX- oder UI-Klärung notwendig.

## `needs:architecture`
Architekturfrage oder technischer Schnitt noch offen.

## `needs:cicd`
CI/CD-Anpassung nötig.

## `blocked:external`
Abhängigkeit außerhalb des Projekts blockiert.

## `risk:high`
Erhöhtes Risiko, zum Beispiel bei Migrationen oder Integrationen.

---

# 7. Empfehlung zur Nutzung

Ein gutes MVP-Issue hat typischerweise:
- genau ein Typ-Label
- genau ein Status-Label
- genau ein Prioritäts-Label
- ein bis zwei Bereichs-Labels
- optional ein Release-Label
- optional Qualitäts- oder Risiko-Labels

## Beispiel
`feature` + `status:ready` + `prio:P1` + `area:dashboard` + `release:0.3.0`

---

# 8. Praktischer Grundsatz

Labels sollen helfen, nicht verwalten. Lieber wenige klare Labels sauber nutzen als viele halbe Kategorien pflegen.
