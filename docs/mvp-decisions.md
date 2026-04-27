# MVP Decisions

Dieses Dokument hält die aktuell festgezurrten Produktentscheidungen für das MVP fest.

## Produktcharakter

Die App ist im MVP ein **Fixkosten-Dashboard mit Haushaltsbuch-Tendenz**.

Nicht im MVP:
- spontane Ausgaben
- Zeitverlauf
- Kündigungsfristen
- Vertragsdetailverwaltung
- eigene Kategorien

## Kernmodell des MVP

Ein wiederkehrender Eintrag besteht im MVP aus:
- Name
- Kategorie
- Betrag
- Intervall
- nächste Fälligkeit
- Status
- optionale Notiz

Nicht im MVP-Kernmodell:
- Vertragsnummer
- Anbieter
- Vertragsbeginn
- Kündigungslogik

## Kategorien

Im MVP:
- feste sinnvolle Standardkategorien
- `Sonstiges` als Auffangoption

Nach dem MVP:
- eigene Kategorien
- Kategorien verwalten

## Home / Dashboard

Priorität auf der Startseite:
1. **Monatsschnitt gesamt**
2. **monatlich fällige Belastung**
3. **nächste Fälligkeiten**
4. aktive Verpflichtungen

Die Home soll ruhig bleiben und nicht alarmistisch sein.

## Monatswerte

Gespeichert werden:
- Originalbetrag
- Originalintervall

Angezeigt werden zusätzlich:
- Monatsschnitt pro Eintrag
- Monatsschnitt gesamt
- monatlich tatsächlich fällige Belastung

## Fälligkeiten

- chronologisch sortiert
- ruhig dargestellt
- eventuell mit dezentem Highlight bei sehr nahen Terminen
- auf dem Dashboard zuerst nur wenige, dann weiterführende Ansicht

## Listenansicht

Im MVP:
- kartenartige Darstellung
- keine primäre Tabellenlogik
- pro Karte sichtbar:
  - Name
  - Kategorie
  - Originalbetrag + Intervall
  - Monatsschnitt
  - nächste Fälligkeit
  - Status

## Statuslogik

- `active` zählt in Summen und Hauptsicht
- `paused` zählt nicht in Summen
- `ended` zählt nicht in Summen
- pausierte und beendete Einträge bleiben per Filter erreichbar

## Mobile Priorität

Im MVP ist für Mobile wichtiger:
- **schnelle Eingabe**

Deshalb:
- normales Formular zuerst
- stark mobile-optimiert
- Quick Add später

## Zeitverlauf

Der Zeitverlauf kommt **nach dem MVP**.

Auch spontane Ausgaben kommen erst später und werden dann als eigener Bereich in derselben App ergänzt.

## Onboarding

Im MVP reicht:
- guter Empty State
- klare erste Aktion

Kein eigenes Onboarding-System.

## Harter MVP-Kern

Was im MVP auf keinen Fall fehlen darf:
- recurring item anlegen
- recurring item bearbeiten
- Kategorien aus fester Liste
- Monatsschnitt gesamt
- monatlich fällige Belastung
- nächste Fälligkeiten
- kartenartige Listenansicht
- Statusfilter
- beenden / pausieren / reaktivieren
- mobile Eingabe gut nutzbar
