# Screen Inventory und Information Architecture

Dieses Dokument beschreibt die zentralen Screens des MVP sowie ihre Rolle in der Information Architecture.

## Ziel

Die App soll wenige, klare Screens haben. Jeder Screen muss einen echten Zweck erfüllen und schnell verständlich sein.

---

# 1. Primäre Navigation

Für das MVP reicht eine sehr kleine Informationsarchitektur.

## Hauptbereiche
1. Dashboard
2. Wiederkehrende Einträge
3. Neuer Eintrag
4. Eintrag bearbeiten

Optional später:
- Einstellungen
- Export / Import
- Erinnerungen

---

# 2. Screen 1: Dashboard

## Zweck
Der Startpunkt der App. Liefert sofort den wichtigsten Überblick.

## Nutzerfragen, die hier beantwortet werden
- Was kosten mich meine laufenden Verpflichtungen pro Monat?
- Was ist als Nächstes fällig?
- Wie viele aktive Verpflichtungen habe ich?
- Gibt es etwas, das ich bald beachten muss?

## Inhalte
- Monatsgesamtwert
- Jahresgesamtwert
- Anzahl aktiver Einträge
- nächste Fälligkeiten
- optional Hinweis auf kritische Fristen

## Priorität
Pflicht im MVP.

## Mobile Verhalten
- Kennzahlen als klare Karten
- Fälligkeitsliste direkt darunter
- schnelle Scanbarkeit ohne Scroll-Chaos

---

# 3. Screen 2: Listenansicht Wiederkehrende Einträge

## Zweck
Vollständige Übersicht über alle Einträge und Ausgangspunkt für Pflege und Kontrolle.

## Nutzerfragen
- Welche Einträge sind aktuell aktiv?
- Welche Kosten laufen überhaupt?
- Was ist teuer oder bald fällig?

## Inhalte
- Liste oder Kartenansicht aller Einträge
- Status
- Betrag
- Intervall
- nächstes Fälligkeitsdatum
- Filter nach Status
- Sortierung nach Fälligkeit
- später Kategorie- oder Betragssortierung

## Priorität
Pflicht im MVP.

## Mobile Verhalten
- Standard als Kartenliste
- pro Karte die wichtigsten 4 bis 5 Informationen
- Edit-Aktion klar erreichbar

---

# 4. Screen 3: Neuer Eintrag

## Zweck
Schneller Einstieg für das Erfassen neuer wiederkehrender Verpflichtungen.

## Nutzerfragen
- Wie trage ich einen neuen Vertrag oder ein Abo schnell ein?
- Welche Felder sind wirklich nötig?

## Inhalte
Pflichtfelder:
- Name
- Betrag
- Intervall
- nächstes Fälligkeitsdatum

Optionale Felder:
- Kategorie
- Notiz
- Startdatum
- Enddatum
- Kündigungsdatum
- Status

## Priorität
Pflicht im MVP.

## Mobile Verhalten
- kompakte Formularschritte oder ein sehr schlankes Einseitenformular
- große Felder und Touch-Ziele
- klare Primäraktion zum Speichern

---

# 5. Screen 4: Eintrag bearbeiten

## Zweck
Bestehende Einträge aktuell halten.

## Nutzerfragen
- Wie ändere ich Betrag, Datum oder Status?
- Wie pausiere oder beende ich einen Eintrag?

## Inhalte
- vorausgefülltes Formular
- Status ändern
- speichern
- optional löschen

## Priorität
Pflicht im MVP.

## Mobile Verhalten
- identisch oder sehr ähnlich zum Neuer-Eintrag-Screen
- möglichst keine neue Interaktionslogik lernen müssen

---

# 6. Screen 5: Empty State / Erster Einstieg

## Zweck
Die erste Nutzung verständlich und motivierend machen.

## Nutzerfragen
- Was mache ich hier zuerst?
- Warum ist die App für mich nützlich?

## Inhalte
- kurze Erklärung des Zwecks
- klarer Call-to-Action zum ersten Eintrag
- keine leere, tote Oberfläche

## Priorität
Pflicht im MVP.

---

# 7. Screen 6: Fehler- und Validierungszustände

## Zweck
Vertrauen schaffen, wenn etwas schiefgeht oder Eingaben unvollständig sind.

## Inhalte
- verständliche Fehlermeldungen im Formular
- klare Serverfehler-Rückmeldungen
- robuste Darstellung bei fehlenden Daten oder Ladeproblemen

## Priorität
Pflicht im MVP.

---

# 8. Informationsarchitektur in einfacher Form

## Einstiegspfad
Dashboard -> Einträge prüfen -> neuen Eintrag anlegen oder bestehenden bearbeiten

## Pflegepfad
Listenansicht -> Eintrag auswählen -> bearbeiten -> zurück zur Liste oder zum Dashboard

## Erstnutzungspfad
Empty State -> erster Eintrag -> Dashboard mit erstem Nutzen

---

# 9. Screen-Priorisierung für das MVP

## Muss sofort gebaut werden
1. Dashboard
2. Neuer Eintrag
3. Eintrag bearbeiten
4. Listenansicht
5. Empty State
6. Fehler- und Validierungszustände

## Kann später erweitert werden
- Detailansicht pro Eintrag als eigener Screen
- Einstellungen
- Export-Ansicht
- Erinnerungscenter

---

# 10. UI-Komponenten, die sich daraus ableiten

Aus den Screens ergeben sich zentrale wiederverwendbare Bausteine:
- KPI-Karte
- Fälligkeitsliste
- wiederkehrender Eintrag als Karten- oder Listenkomponente
- Formularfelder für Betrag, Datum, Intervall und Status
- Filterleiste
- Empty State Modul
- Fehlermeldungs- und Hinweis-Komponenten

---

# 11. Erfolgsmaßstab

Die Screen-Struktur ist gut, wenn:
- ein neuer Nutzer die App sofort versteht
- häufige Aufgaben mit wenigen Schritten möglich sind
- Mobile und Desktop gleichwertig unterstützt werden
- keine unnötigen Navigationsschleifen entstehen
