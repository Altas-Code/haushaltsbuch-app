# Funktionaler Backlog, MVP und Roadmap

Dieses Dokument bündelt die bisherigen Erkenntnisse aus Vision, Personas, User Journey und Design-Prinzipien in einen umsetzbaren Produkt-Backlog mit Release-Plan.

## Ziel

Die App soll als schlankes Self-Hosted-Tool für wiederkehrende finanzielle Verpflichtungen starten und schrittweise erweitert werden, ohne den Fokus zu verlieren.

---

# 1. Produktziel in operativer Form

Die erste Version der App soll Nutzerinnen und Nutzern ermöglichen:
- wiederkehrende Verpflichtungen zu erfassen
- monatliche und jährliche Belastungen sofort zu verstehen
- nächste Fälligkeiten zu sehen
- aktive Verträge und Abos übersichtlich zu verwalten
- die App auf Handy und Laptop komfortabel zu nutzen
- das Ganze einfach selbst zu hosten

---

# 2. Funktionaler Backlog

## Epic A: Projektgrundlage und Betrieb

### A1. Projektgerüst anlegen
**Beschreibung:** Grundgerüst für Web-App, Datenbank, Build und Laufzeit schaffen.  
**Nutzen:** Technische Basis für alle weiteren Features.

### A2. Docker-Betrieb ermöglichen
**Beschreibung:** Die App muss lokal und auf einem Server per Docker Compose startbar sein.  
**Nutzen:** Self-Hosting wird einfach und reproduzierbar.

### A3. Persistente Datenhaltung einrichten
**Beschreibung:** Daten sollen containerübergreifend persistent gespeichert werden.  
**Nutzen:** Keine Datenverluste bei Neustarts oder Updates.

### A4. Basis-Konfiguration dokumentieren
**Beschreibung:** Start, Betrieb und Grundkonfiguration sollen dokumentiert sein.  
**Nutzen:** Niedrige Einstiegshürde für Installation und Nutzung.

---

## Epic B: Datenmodell für wiederkehrende Kosten

### B1. Wiederkehrenden Eintrag speichern
**Beschreibung:** Ein Eintrag mit Name, Betrag, Intervall und nächstem Fälligkeitsdatum kann gespeichert werden.  
**Nutzen:** Kernobjekt der App wird nutzbar.

### B2. Kategorien unterstützen
**Beschreibung:** Einträge können Kategorien zugeordnet werden.  
**Nutzen:** Struktur und Filterbarkeit verbessern sich.

### B3. Status pflegen
**Beschreibung:** Einträge können aktiv, pausiert oder beendet sein.  
**Nutzen:** Übersicht bleibt sauber und aktuell.

### B4. Optionale Zusatzfelder unterstützen
**Beschreibung:** Notizen, Kündigungsdatum, Startdatum oder Enddatum können gepflegt werden.  
**Nutzen:** Mehr Kontext ohne Zwang zur Vollständigkeit.

---

## Epic C: Erfassung und Bearbeitung

### C1. Eintrag anlegen
**Beschreibung:** Nutzer können neue wiederkehrende Kosten anlegen.  
**Nutzen:** Einstieg in die App.

### C2. Eintrag bearbeiten
**Beschreibung:** Bestehende Einträge können verändert werden.  
**Nutzen:** Daten bleiben aktuell.

### C3. Eintrag archivieren oder deaktivieren
**Beschreibung:** Einträge können beendet oder pausiert werden, ohne gelöscht zu werden.  
**Nutzen:** Historie und Ordnung bleiben erhalten.

### C4. Eintrag löschen
**Beschreibung:** Einträge können vollständig gelöscht werden.  
**Nutzen:** Datenpflege bleibt möglich.

### C5. Formular-UX optimieren
**Beschreibung:** Formulare sollen mit wenigen Pflichtfeldern und guten Defaults funktionieren.  
**Nutzen:** Niedrige Reibung bei der Pflege.

---

## Epic D: Übersicht und Dashboard

### D1. Monatliche Gesamtbelastung berechnen
**Beschreibung:** Alle Einträge werden auf Monatswerte umgerechnet und summiert.  
**Nutzen:** Realistische Übersicht über laufende Verpflichtungen.

### D2. Jährliche Gesamtbelastung berechnen
**Beschreibung:** Jahresgesamtsumme über alle aktiven Einträge anzeigen.  
**Nutzen:** Größere finanzielle Einordnung.

### D3. Nächste Fälligkeiten anzeigen
**Beschreibung:** Die nächsten anstehenden Zahlungen werden sortiert angezeigt.  
**Nutzen:** Alltagsrelevanter Sofortwert.

### D4. Aktive Verpflichtungen zählen
**Beschreibung:** Anzahl aktiver Einträge anzeigen.  
**Nutzen:** Schneller Überblick.

### D5. Kritische Fristen markieren
**Beschreibung:** bald fällige oder kündigungsrelevante Einträge visuell kennzeichnen.  
**Nutzen:** Wichtige Dinge gehen nicht unter.

---

## Epic E: Listen, Filter und Navigation

### E1. Listenansicht aller Einträge
**Beschreibung:** Alle Einträge in einer übersichtlichen Hauptliste anzeigen.  
**Nutzen:** Vollständige Kontrolle über den Bestand.

### E2. Nach Status filtern
**Beschreibung:** Nur aktive, pausierte oder beendete Einträge anzeigen können.  
**Nutzen:** Relevanz im Alltag erhöhen.

### E3. Nach Kategorie filtern
**Beschreibung:** Einträge nach Kategorien eingrenzen.  
**Nutzen:** Bessere Orientierung.

### E4. Nach Fälligkeit sortieren
**Beschreibung:** Sortierung nach nächstem Datum.  
**Nutzen:** Unterstützt den operativen Blick.

### E5. Nach Betrag sortieren
**Beschreibung:** Sortierung nach Kostenhöhe.  
**Nutzen:** Unterstützt Spar- und Prüfentscheidungen.

---

## Epic F: Mobile Nutzung und UX

### F1. Responsive Dashboard-Ansicht
**Beschreibung:** Dashboard muss auf kleinen Displays sauber funktionieren.  
**Nutzen:** unterwegs nutzbar.

### F2. Mobile Listen- und Kartenansicht
**Beschreibung:** Einträge sollen auf Mobilgeräten angenehm lesbar sein.  
**Nutzen:** kein Desktop-Zwang.

### F3. Touch-taugliche Formulare
**Beschreibung:** Formulare müssen auf dem Smartphone komfortabel bedienbar sein.  
**Nutzen:** geringere Hürde bei Pflege unterwegs.

---

## Epic G: Vertrauenswürdigkeit und Stabilität

### G1. Saubere Validierung
**Beschreibung:** Beträge, Intervalle und Datumswerte werden robust validiert.  
**Nutzen:** verhindert fehlerhafte Zustände.

### G2. Leere Zustände gestalten
**Beschreibung:** Erste Nutzung ohne Einträge soll verständlich und motivierend sein.  
**Nutzen:** besserer Einstieg.

### G3. Fehlerzustände verständlich machen
**Beschreibung:** Nutzer sollen bei Problemen verständliche Rückmeldungen bekommen.  
**Nutzen:** mehr Vertrauen.

---

## Epic H: Erweiterungen nach MVP

### H1. Kündigungsübersicht
**Beschreibung:** Verträge mit nahender Kündigungsfrist gesammelt sichtbar machen.

### H2. CSV-Export
**Beschreibung:** Einträge exportieren können.

### H3. CSV-Import
**Beschreibung:** Einträge aus Tabellen importieren können.

### H4. PWA-Funktionen
**Beschreibung:** App installierbar und mobiler nutzbar machen.

### H5. Erinnerungen
**Beschreibung:** optionale Hinweise vor Fälligkeiten oder Fristen.

### H6. Einfache Authentifizierung
**Beschreibung:** optionaler Login für öffentlich erreichbare Setups.

---

# 3. MVP-Schnitt

## Ziel des MVP
Das MVP soll den Kernnutzen vollständig liefern:
- wiederkehrende Kosten erfassen
- Monatswert und Jahreswert verstehen
- nächste Fälligkeiten sehen
- auf Handy und Laptop gut nutzen
- selbst hosten können

## MVP-Funktionen

### Muss enthalten sein
- A1 Projektgerüst
- A2 Docker-Betrieb
- A3 persistente Datenhaltung
- A4 Basis-Dokumentation
- B1 wiederkehrenden Eintrag speichern
- B2 Kategorien unterstützen
- B3 Status pflegen
- B4 optionale Zusatzfelder
- C1 Eintrag anlegen
- C2 Eintrag bearbeiten
- C3 Eintrag archivieren oder deaktivieren
- C4 Eintrag löschen
- C5 Formular-UX optimieren
- D1 monatliche Gesamtbelastung
- D2 jährliche Gesamtbelastung
- D3 nächste Fälligkeiten
- D4 aktive Verpflichtungen zählen
- E1 Listenansicht
- E2 Statusfilter
- E4 Sortierung nach Fälligkeit
- F1 responsive Dashboard-Ansicht
- F2 mobile Listenansicht
- F3 touch-taugliche Formulare
- G1 saubere Validierung
- G2 leere Zustände
- G3 verständliche Fehlerzustände

### Kann knapp nach MVP folgen
- D5 kritische Fristen markieren
- E3 Kategoriefilter
- E5 Sortierung nach Betrag
- H1 Kündigungsübersicht
- H2 CSV-Export

---

# 4. Release-Roadmap

## Release 0.1.0, Foundation
**Ziel:** Technische Basis und erstes lauffähiges System schaffen.

### Inhalt
- Projektgerüst
- Next.js Setup
- Prisma + SQLite
- Basislayout
- Dockerfile
- docker-compose
- Persistenz
- Basisdokumentation

### Ergebnis
Die App läuft lokal und per Docker, hat aber noch keinen vollständigen Produktnutzen.

---

## Release 0.2.0, Core Data Entry
**Ziel:** Wiederkehrende Einträge anlegen und verwalten können.

### Inhalt
- Datenmodell für wiederkehrende Einträge
- Formular zum Erstellen
- Bearbeiten
- Pausieren / Beenden
- Löschen
- Validierung
- leere Zustände

### Ergebnis
Nutzer können ihre Fixkosten erstmals vollständig erfassen.

---

## Release 0.3.0, First Useful Dashboard
**Ziel:** Sofort sichtbaren Mehrwert schaffen.

### Inhalt
- Monatswert-Berechnung
- Jahreswert-Berechnung
- Anzahl aktiver Einträge
- nächste Fälligkeiten
- Dashboard-Ansicht
- mobile Optimierung für Hauptscreens

### Ergebnis
Die App wird praktisch nützlich und zeigt ihren Kernwert.

---

## Release 1.0.0, MVP
**Ziel:** Vollständige erste nutzbare Produktversion.

### Inhalt
- Listenansicht
- Statusfilter
- Sortierung nach Fälligkeit
- stabile mobile UX
- verständliche Fehlerfälle
- saubere Dokumentation für Betrieb und Nutzung

### Ergebnis
Eine kleine, runde, selbst hostbare App für wiederkehrende Kosten mit echtem Alltagswert.

---

## Release 1.1.0, Better Control
**Ziel:** Mehr Übersicht und bessere Entscheidungsunterstützung.

### Inhalt
- Kategoriefilter
- Sortierung nach Betrag
- Kennzeichnung kritischer Fristen
- Kündigungsübersicht

### Ergebnis
Die App hilft nicht nur beim Überblick, sondern auch beim aktiven Prüfen und Optimieren.

---

## Release 1.2.0, Data Portability
**Ziel:** Mehr Kontrolle über Ein- und Ausstieg.

### Inhalt
- CSV-Export
- optional CSV-Import
- verbesserte Backuphweise

### Ergebnis
Nutzer bleiben unabhängig und können Daten leichter migrieren oder sichern.

---

## Release 1.3.0, Mobile Comfort
**Ziel:** Mobile Nutzung weiter verbessern.

### Inhalt
- PWA-Unterstützung
- Feinschliff für Interaktionen auf dem Handy
- schnellere Start- und Nutzungswege

### Ergebnis
Die App fühlt sich auf dem Smartphone deutlich nativer an.

---

## Release 1.4.0, Smart Reminders
**Ziel:** Proaktive Hinweise ergänzen.

### Inhalt
- Erinnerungen vor Fälligkeiten
- Erinnerungen vor Kündigungsfristen
- optionale Benachrichtigungskanäle

### Ergebnis
Die App wird vom stillen Dashboard zum aktiveren Helfer.

---

# 5. Priorisierung nach Nutzen

## Höchste Priorität
- Datenerfassung
- Dashboard mit Summen
- Fälligkeiten
- mobile Nutzbarkeit
- Docker-Betrieb

## Mittlere Priorität
- Filter und Sortierung
- Kündigungsmarkierungen
- Export

## Niedrigere Priorität
- Import
- PWA
- Erinnerungen
- Auth

---

# 6. Empfehlung für die Umsetzung

Die beste Reihenfolge für den Bau ist:
1. technisches Grundgerüst
2. Datenmodell und CRUD
3. Dashboard mit Monatswert und Fälligkeiten
4. Listen- und Filterlogik
5. Mobile Feinarbeit
6. Komfortfunktionen danach

So entsteht früh ein nutzbares Produkt, ohne dass die App in Nebenfunktionen stecken bleibt.
