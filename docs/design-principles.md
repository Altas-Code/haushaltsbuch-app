# Design-Prinzipien für Aussehen und Feeling

Dieses Dokument leitet aus den Personas und der User Journey konkrete Design-Prinzipien für das Erscheinungsbild, die Interaktion und das Gesamtgefühl der Haushaltsbuch App ab.

## Grundhaltung

Die App soll sich nicht wie eine komplizierte Finanzsoftware anfühlen, sondern wie ein ruhiges persönliches Kontrollpanel für wiederkehrende Kosten.

Sie soll:
- klar statt technisch wirken
- ruhig statt alarmistisch sein
- vertrauenswürdig statt verspielt sein
- leicht statt überladen wirken
- nützlich statt dekorativ sein

---

# 1. Visuelle Leitidee

## Prinzip: Ruhige finanzielle Übersicht
Die Oberfläche soll sofort das Gefühl geben:
- hier ist alles geordnet
- hier ist nichts hektisch
- hier kann ich schnell verstehen, was wichtig ist

### Gestaltungsauswirkung
- viel Weißraum oder bewusst ruhige Flächen
- klare visuelle Hierarchie
- wenige Akzentfarben
- sparsame Hervorhebungen
- kein Dashboard-Lärm

---

# 2. Klarheit vor Dichte

## Warum
Alle Personas wollen Übersicht mit wenig mentalem Aufwand. Niemand will sich durch eine dichte Finanz-Admin-Oberfläche kämpfen.

## Prinzip
Wichtige Informationen müssen schnell erfassbar sein, auch auf dem Handy.

### Gestaltungsauswirkung
- wenige Elemente gleichzeitig sichtbar
- große, klare Zahlen für Monatswert und nächste Fälligkeiten
- Karten oder klar getrennte Blöcke statt enger Tabellen als Standard
- reduzierte Detailtiefe in der ersten Ebene
- mehr Details erst auf Wunsch

---

# 3. Vertrauen durch Ruhe und Präzision

## Warum
Finanzdaten sind sensibel. Die App muss seriös und verlässlich wirken, ohne kühl oder schwer zu sein.

## Prinzip
Das Design soll Kompetenz und Stabilität ausstrahlen.

### Gestaltungsauswirkung
- nüchterne, saubere Typografie
- klare Beschriftungen
- konsistente Datums- und Betragsdarstellung
- keine verspielten Animationen
- keine aggressiven Warnfarben im Dauerzustand

---

# 4. Mobile zuerst, Desktop nicht nachträglich

## Warum
Jana und Christian prüfen Dinge oft mobil, Marco pflegt eher am Laptop. Beide Kontexte sind gleich wichtig.

## Prinzip
Die App wird so entworfen, dass sie auf dem Handy vollständig und angenehm funktioniert und auf Desktop mehr Raum für Struktur nutzt.

### Gestaltungsauswirkung
- mobile-first Layoutlogik
- wichtige Kennzahlen sofort im oberen sichtbaren Bereich
- große Touch-Ziele
- Formulare mit gutem Abstand
- Listen mobil als Karten, Desktop optional tabellarischer

---

# 5. Wenig Reibung, wenig Pflegegefühl

## Warum
Die App soll nicht wie zusätzliche Arbeit wirken. Sie gewinnt nur, wenn sie leicht bleibt.

## Prinzip
Jede Interaktion soll knapp, klar und effizient sein.

### Gestaltungsauswirkung
- kurze Formulare
- gute Default-Werte
- klare Primäraktionen
- möglichst wenig Pflichtfelder
- Bearbeiten schneller als Neuanlegen neu zu denken

---

# 6. Wichtiges hervorheben, nicht alles gleich laut machen

## Warum
Wenn alles Aufmerksamkeit fordert, verliert die App ihren Nutzen. Relevant sind vor allem Summen, Fälligkeiten, Status und Fristen.

## Prinzip
Visuelle Gewichtung folgt Relevanz.

### Gestaltungsauswirkung
- Monatswert als stärkste Kennzahl
- nächste Fälligkeiten als zweiter Fokus
- kritische Fristen dezent aber klar markiert
- Hintergrundinformationen visuell zurücknehmen
- Farben nur nutzen, wenn sie Bedeutung tragen

---

# 7. Freundlich, aber nicht verspielt

## Warum
Die App soll sympathisch wirken, aber bei Finanzthemen nicht beliebig oder kindlich erscheinen.

## Prinzip
Die Tonalität ist warm, reduziert und erwachsen.

### Gestaltungsauswirkung
- sanfte Farbpalette
- weiche Ecken möglich, aber nicht übertrieben
- keine cartoonhaften Illustrationen als Kernsprache
- unterstützende Microcopy statt Marketing-Sprache

### Beispielhaftes Gefühl
Eher:
- ruhig
- modern
- ordentlich
- privat

Nicht:
- gamifiziert
- laut
- hyperbunt
- fintech-werblich

---

# 8. Fokus auf private Kontrolle statt Produktivitätsshow

## Warum
Diese App ist kein Team-Tool und kein KPI-Dashboard. Sie soll persönliches Kontrollgefühl erzeugen.

## Prinzip
Die Oberfläche soll eher nach persönlichem Überblick als nach Business-Software aussehen.

### Gestaltungsauswirkung
- keine übertriebene KPI-Wand
- weniger Charts, mehr klare Listen und Zustände
- persönliches, entspanntes Kontrollgefühl
- Dashboard als Überblick, nicht als Management-Cockpit

---

# 9. Konsistenz ist wichtiger als Effekte

## Warum
Gerade bei Finanzdaten schafft Vorhersagbarkeit Vertrauen.

## Prinzip
Verhalten, Layout und Benennung sollen konsistent sein.

### Gestaltungsauswirkung
- gleiche Logik für Buttons und Formulare
- Beträge immer gleich formatiert
- Statusfarben überall identisch
- gleiche Struktur für Listen, Details und Bearbeitung

---

# 10. Das Gefühl nach dem Öffnen

Die App sollte beim Öffnen idealerweise dieses Gefühl erzeugen:

- "Ich sehe sofort, worum es geht."
- "Ich bin nicht überfordert."
- "Ich habe meine festen Kosten im Griff."
- "Wenn etwas wichtig wird, sehe ich es rechtzeitig."

Das ist wichtiger als visuelle Effekte oder technische Beeindruckung.

---

# Konkrete Design-Folgen für das UI

## Farbwelt
Empfohlen:
- neutrale Grundfarben
- ein ruhiger Akzentton, zum Beispiel Blau, Petrol oder gedecktes Grün
- Warnfarben nur für echte Ausnahmen

## Typografie
Empfohlen:
- gut lesbare Sans-Serif
- klare Größenhierarchie
- Zahlen gut hervorheben

## Komponentenstil
Empfohlen:
- Karten mit sanfter Abgrenzung
- klare Formulare
- reduzierte Navigation
- Status-Badges mit zurückhaltenden Farben

## Dashboard-Struktur
Empfohlen:
1. Monatswert
2. nächste Fälligkeiten
3. aktive Verpflichtungen
4. kündigungsrelevante Hinweise

## Listen
Empfohlen:
- mobil als Kartenliste
- desktop optional Tabelle oder hybride Liste
- Sortierung nach Fälligkeit oder Betrag

---

# Ein-Satz-Designkompass

**Die App soll sich anfühlen wie ein ruhiges, verlässliches Finanz-Dashboard für den Alltag, das mit wenig Aufwand Klarheit über wiederkehrende Verpflichtungen schafft.**
