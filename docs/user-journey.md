# User Journey und Use Cases

Dieses Dokument übersetzt die definierten Personas in eine konkrete User Journey mit Use Cases für das MVP.

## Ziel der Journey

Die App soll Nutzerinnen und Nutzer mit wenig Aufwand von einem diffusen Gefühl von "irgendwo laufen zu viele feste Kosten" zu einer klaren, alltagstauglichen Übersicht führen.

Die Journey ist deshalb bewusst einfach aufgebaut:
1. App öffnen
2. wichtige wiederkehrende Kosten erfassen
3. sofort Nutzen sehen
4. bei Bedarf punktuell pflegen
5. Fälligkeiten und Fristen im Blick behalten

---

# 1. Phase: Einstieg und Einrichtung

## Nutzerziel
Die Person will schnell loslegen, ohne erst ein komplexes Finanzsystem verstehen zu müssen.

## Erwartung
- schneller Einstieg
- keine Überforderung
- klarer erster Nutzen

## Use Case 1.1: Erste Verträge und Abos anlegen
**Als** Nutzer  
**möchte ich** meine wichtigsten wiederkehrenden Kosten in wenigen Schritten erfassen  
**damit** ich schnell eine erste Übersicht bekomme.

### Relevante Personas
- Christian
- Jana
- Marco

### MVP-Anforderungen
- schlankes Formular
- wenige Pflichtfelder
- schnelle Speicherung
- mobile und Desktop-tauglich

---

## Use Case 1.2: Mit wenigen Daten starten
**Als** Nutzer  
**möchte ich** auch dann beginnen können, wenn ich noch nicht alle Vertragsdetails kenne  
**damit** ich nicht an Perfektion scheitere.

### Relevante Personas
- Christian
- Jana

### MVP-Anforderungen
- optionale Felder klar von Pflichtfeldern trennen
- Einträge später leicht ergänzbar machen

---

# 2. Phase: Sofortige Übersicht nach der Erfassung

## Nutzerziel
Die Person will direkt nach der Eingabe erkennen, dass sich der Aufwand gelohnt hat.

## Erwartung
- sichtbarer Mehrwert sofort nach den ersten Einträgen
- keine versteckten Auswertungen

## Use Case 2.1: Monatliche Gesamtbelastung sehen
**Als** Nutzer  
**möchte ich** sofort sehen, wie hoch meine monatliche Fixkostenbelastung ist  
**damit** ich ein realistisches Bild meiner laufenden Verpflichtungen habe.

### Relevante Personas
- Christian
- Marco

### MVP-Anforderungen
- automatische Umrechnung von Jahres- und Quartalsbeträgen auf Monatswerte
- prominente Anzeige im Dashboard

---

## Use Case 2.2: Nächste Fälligkeiten sehen
**Als** Nutzer  
**möchte ich** die nächsten anstehenden Zahlungen auf einen Blick sehen  
**damit** ich mich auf Abbuchungen einstellen kann.

### Relevante Personas
- Christian
- Jana
- Marco

### MVP-Anforderungen
- sortierte Liste nach Fälligkeitsdatum
- Hervorhebung bald fälliger Einträge

---

## Use Case 2.3: Aktive Verpflichtungen vollständig sehen
**Als** Nutzer  
**möchte ich** alle aktiven wiederkehrenden Kosten gesammelt sehen  
**damit** ich nichts vergesse und meine laufenden Verpflichtungen vollständig überblicke.

### Relevante Personas
- Marco
- Christian

### MVP-Anforderungen
- zentrale Listenansicht
- Statusfilter für aktiv, pausiert, beendet

---

# 3. Phase: Regelmäßige Alltagsnutzung

## Nutzerziel
Die Person will die App im Alltag schnell prüfen können, ohne jedes Mal viel Arbeit zu haben.

## Erwartung
- kurzer Blick genügt oft
- Pflege nur bei Änderungen

## Use Case 3.1: Kurzcheck auf dem Handy
**Als** Nutzer  
**möchte ich** unterwegs schnell sehen, welche Zahlungen bald anstehen  
**damit** ich ohne Aufwand informiert bin.

### Relevante Personas
- Jana
- Christian

### MVP-Anforderungen
- mobile-first Dashboard
- klare Kennzahlen
- kompakte Karten oder Listen

---

## Use Case 3.2: Eintrag ändern, wenn sich etwas ändert
**Als** Nutzer  
**möchte ich** Betrag, Fälligkeitsdatum oder Status eines Eintrags schnell anpassen  
**damit** die Übersicht aktuell bleibt.

### Relevante Personas
- Christian
- Marco
- Jana

### MVP-Anforderungen
- einfache Bearbeitungsansicht
- keine komplizierten Bearbeitungsabläufe

---

## Use Case 3.3: Inaktive Verträge ausblenden
**Als** Nutzer  
**möchte ich** beendete oder pausierte Verträge nicht im Standardblick sehen  
**damit** die Übersicht ruhig und relevant bleibt.

### Relevante Personas
- Christian
- Jana
- Marco

### MVP-Anforderungen
- Statuslogik
- Standardfilter auf aktive Einträge

---

# 4. Phase: Kontrolle über Fristen und Entscheidungen

## Nutzerziel
Die Person will nicht nur wissen, was läuft, sondern auch rechtzeitig auf Fristen und Optimierungsmöglichkeiten reagieren.

## Erwartung
- wichtige Signale werden sichtbar
- kein Vertrag verschwindet unbemerkt im Alltag

## Use Case 4.1: Kündigungsrelevante Verträge erkennen
**Als** Nutzer  
**möchte ich** sehen, welche Verträge bald kündigungsrelevant werden  
**damit** ich rechtzeitig entscheiden kann, ob ich sie behalten will.

### Relevante Personas
- Jana
- Marco
- Christian

### MVP-Anforderungen
- optionales Kündigungsdatum oder Kündigungsfrist-Feld
- sichtbare Kennzeichnung relevanter Einträge

---

## Use Case 4.2: Teure oder unnötige Verpflichtungen identifizieren
**Als** Nutzer  
**möchte ich** meine wiederkehrenden Kosten vergleichbar sehen  
**damit** ich Sparpotenziale erkenne.

### Relevante Personas
- Marco
- Christian

### MVP-Anforderungen
- Anzeige der Monatswerte
- Sortierung nach Betrag
- klare Listenansicht

---

# 5. Phase: Langfristige Nutzung und Vertrauen

## Nutzerziel
Die Person soll das Gefühl haben, dass die App dauerhaft nützlich bleibt und nicht nach kurzer Zeit wieder liegen bleibt.

## Erwartung
- zuverlässig
- verständlich
- wartungsarm

## Use Case 5.1: Übersicht mit wenig Pflegeaufwand behalten
**Als** Nutzer  
**möchte ich** die App nur gelegentlich pflegen müssen  
**damit** sie langfristig in meinen Alltag passt.

### Relevante Personas
- Christian
- Jana
- Marco

### MVP-Anforderungen
- Fokus auf wiederkehrende statt tägliche Ausgaben
- wenige Pflichtangaben
- klare Standardansichten

---

## Use Case 5.2: Daten selbst hosten und kontrollieren
**Als** Nutzer  
**möchte ich** die App selbst hosten können  
**damit** ich Kontrolle über meine Finanzdaten und meinen Betrieb behalte.

### Relevante Personas
- Christian

### MVP-Anforderungen
- Docker-Betrieb
- einfache Konfiguration
- lokale Datenhaltung

---

# Verdichtete Gesamtjourney

## Schritt 1: Einstieg
"Ich trage ein paar wichtige Verträge und Abos ein."

## Schritt 2: Sofortiger Nutzen
"Ich sehe direkt, was mich das pro Monat kostet und was bald fällig wird."

## Schritt 3: Routine
"Ich öffne die App gelegentlich auf dem Handy oder Laptop und prüfe nur kurz den Stand."

## Schritt 4: Entscheidung
"Ich erkenne Fristen, unnötige Kosten und mögliche Kündigungskandidaten rechtzeitig."

## Schritt 5: Langfristiger Wert
"Die App bleibt nützlich, weil sie wenig Arbeit macht und genau meinen Zweck erfüllt."

---

# Konsequenzen für das MVP

Aus dieser Journey ergeben sich klare Prioritäten:

## Muss im MVP enthalten sein
- Einträge anlegen und bearbeiten
- wenige Pflichtfelder
- Monatswert-Berechnung
- Dashboard mit nächster Fälligkeit
- Liste aktiver Verpflichtungen
- mobile Nutzbarkeit
- Docker-Setup

## Sollte früh danach kommen
- Filter und Sortierung
- Kündigungsmarkierungen
- Export / Backup

## Kann später folgen
- Erinnerungen
- PWA
- Import
- Authentifizierung
