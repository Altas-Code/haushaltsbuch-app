# Software Architecture

Dieses Dokument definiert die eigentliche Softwarearchitektur der Haushaltsbuch App in einer klaren, umsetzbaren Form.

## Ziel

Die Softwarearchitektur soll:
- den Produktfokus technisch sauber übersetzen
- Verantwortlichkeiten klar trennen
- kleine, schnelle Entwicklung ermöglichen
- Testbarkeit, Wartbarkeit und Erweiterbarkeit sichern
- CI/CD und Docker-Betrieb von Anfang an mittragen

---

# 1. Architekturstil

Die App folgt einer **modularen Monolith-Architektur mit klarer innerer Schichtung**.

## Das bedeutet
- ein Repository
- eine deploybare Anwendung
- ein gemeinsamer Build- und Laufzeitkontext
- aber intern getrennte fachliche und technische Verantwortlichkeiten

## Warum dieser Stil passt
Für das Produktziel ist dieser Ansatz am sinnvollsten, weil er:
- wenig Betriebsaufwand erzeugt
- schnell lieferbar ist
- für Self-Hosting einfach bleibt
- keine unnötige verteilte Komplexität einführt
- später trotzdem sauber erweitert werden kann

---

# 2. Kontext der Anwendung

Die Haushaltsbuch App ist eine private Web-Anwendung zur Verwaltung wiederkehrender finanzieller Verpflichtungen.

## Nutzerinteraktionen
Die wichtigsten Interaktionen sind:
- wiederkehrenden Eintrag anlegen
- Eintrag bearbeiten
- Eintrag pausieren oder beenden
- Dashboard mit Summen und Fälligkeiten ansehen
- Einträge filtern und sortieren

## Externe technische Abhängigkeiten im MVP
- Browser
- Next.js Runtime
- SQLite
- Docker Runtime
- GitHub Actions für CI/CD

Keine externen Produktintegrationen im MVP:
- keine Bankanbindung
- keine Mail- oder Push-Infrastruktur
- keine externe Auth-Plattform als Pflichtbestandteil

---

# 3. Bausteinsicht

## 3.1 Presentation Layer
Verantwortlich für:
- Seiten
- Layouts
- Formulare
- Listen
- Kennzahlenkarten
- Nutzerfeedback

Typische Orte:
- `src/app/`
- `src/components/`

Nicht verantwortlich für:
- Fachberechnungen
- direkte Datenbanklogik
- technische Persistenzdetails

---

## 3.2 Application Layer
Verantwortlich für:
- Use Cases
- Orchestrierung von Validierung, Domänenlogik und Persistenz
- Rückgabe nutzbarer Ergebnisse an UI oder API
- kontrollierte Fehlerbehandlung

Typische Use Cases:
- recurring item anlegen
- recurring item bearbeiten
- Dashboard-Daten bereitstellen
- aktive Einträge laden

Typischer Ort:
- `src/application/`

---

## 3.3 Domain Layer
Verantwortlich für:
- Fachmodell der wiederkehrenden Einträge
- Intervalllogik
- Monatswert- und Jahreswertberechnung
- Statusregeln
- Datumsregeln
- fachliche Validierungsregeln

Typischer Ort:
- `src/domain/`

Diese Schicht soll maximal framework-arm bleiben.

---

## 3.4 Infrastructure Layer
Verantwortlich für:
- Prisma
- SQLite-Zugriff
- Konfiguration
- Umgebungsanbindung
- Persistenznahe Implementierung
- spätere Docker- oder Runtime-nahe Details

Typische Orte:
- `src/lib/db/`
- `src/lib/config/`
- `prisma/`

---

# 4. Schichtenregeln

Damit die Architektur nicht mit der Zeit zerläuft, gelten klare Abhängigkeitsregeln.

## Erlaubte Richtungen
- Presentation -> Application
- Application -> Domain
- Application -> Infrastructure
- Infrastructure -> technische Bibliotheken

## Nicht erlaubt
- Presentation -> direkte Datenbankzugriffe
- Presentation -> verstreute Fachlogik
- Domain -> Next.js Abhängigkeiten
- Domain -> Prisma direkt
- UI-Komponenten mit eingebauter Geschäftslogik

---

# 5. Laufzeitsicht

## 5.1 Dashboard laden
1. Nutzer ruft Dashboard auf
2. Next.js rendert Seite serverseitig oder kombiniert servernahe Datenbereitstellung mit UI
3. Application Layer lädt relevante aktive Einträge
4. Domain Layer berechnet Monats- und Jahreswerte sowie Fälligkeiten
5. UI zeigt Kennzahlen und Listen an

## 5.2 Eintrag anlegen
1. Nutzer füllt Formular aus
2. Formular sendet Daten an Server Action oder Route Handler
3. Eingaben werden validiert
4. Application Layer ruft Domänenregeln auf
5. Infrastructure Layer persistiert Datensatz via Prisma
6. UI erhält Erfolg oder Fehlerzustand

## 5.3 Eintrag bearbeiten
1. Bestehender Eintrag wird geladen
2. Formular ändert definierte Felder
3. Validierung und Domänenprüfung greifen erneut
4. Persistenz wird aktualisiert
5. Dashboard oder Liste zeigt aktualisierten Zustand

---

# 6. Datenarchitektur

## Zentrales fachliches Objekt
`RecurringItem`

## MVP-relevante Kernattribute
- `id`
- `name`
- `amountCents`
- `currency`
- `interval`
- `nextDueDate`
- `category`
- `notes`
- `startDate`
- `endDate`
- `cancelByDate`
- `status`
- `createdAt`
- `updatedAt`

## Persistenzansatz
- relationale Persistenz in SQLite
- Prisma als Zugriffsschicht und Migrationstool

## Fachliche Berechnungen
- Monatswert aus Intervall ableiten
- Jahreswert aus Intervall ableiten
- aktive Einträge von pausierten und beendeten trennen
- Fälligkeitslisten datumssicher sortieren

---

# 7. Schnittstellenarchitektur

## UI zu Serverlogik
Im MVP bevorzugt:
- Server Actions für formularnahe Workflows
- Route Handlers für klar adressierbare API-Endpunkte

## Interne Schnittstellen
Die wichtigsten internen Schnittstellen sind keine Netzwerkschnittstellen, sondern Modulgrenzen:
- UI-Komponente ruft Use Case auf
- Use Case nutzt Domain-Funktionen
- Use Case nutzt Persistenzadapter

Diese Grenzen sind entscheidend für Testbarkeit und Wartbarkeit.

---

# 8. Validierungsarchitektur

Validierung ist mehrstufig aufgebaut.

## 8.1 Input-Validierung
Ziel:
- Pflichtfelder prüfen
- Datentypen prüfen
- offensichtliche Fehleingaben früh erkennen

## 8.2 Domain-Validierung
Ziel:
- fachlich ungültige Zustände verhindern
- Intervallregeln und Datumslogik absichern

## 8.3 Persistenzsicherheit
Ziel:
- keine widersprüchlichen oder unvollständigen Daten dauerhaft speichern

---

# 9. Fehlerbehandlung

Die Architektur soll Fehler nicht verstecken, sondern strukturiert behandeln.

## UI-Ebene
- verständliche Fehlermeldungen
- formularnahe Hinweise
- keine rohen technischen Fehlertexte für Nutzer

## Application-Ebene
- geordnete Fehlerfälle
- klare Trennung zwischen Validierungsfehler, Geschäftsregelverletzung und technischem Fehler

## Infrastructure-Ebene
- technische Fehler loggen oder kontrolliert weiterreichen
- keine undifferenzierte Weitergabe bis ins UI

---

# 10. Testarchitektur

## Unit-Tests
Fokus auf:
- Domain-Regeln
- Berechnungen
- Validierungsfunktionen

## Integrationstests
Fokus auf:
- Zusammenspiel von Use Cases und Persistenz
- Serverlogik
- Datenfluss zwischen Schichten

## E2E-Tests
Fokus auf:
- Eintrag anlegen
- Dashboard laden
- Eintrag bearbeiten
- Kernpfade aus Nutzersicht

Die Teststrategie spiegelt direkt die Architekturgrenzen wider.

---

# 11. Betriebsarchitektur

## MVP-Betrieb
- ein Web-App-Container
- persistentes Datenverzeichnis für SQLite
- Start via Docker Compose

## Eigenschaften
- einfacher Self-Hosting-Betrieb
- wenig Infrastrukturabhängigkeiten
- leichter Backup-Pfad

## Später möglich
- Reverse Proxy
- Authentifizierung
- Benachrichtigungsdienste
- alternative Datenbank

---

# 12. CI/CD als Architekturbestandteil

CI/CD ist Teil der Softwarearchitektur, weil sie beeinflusst, wie sauber Module geschnitten und Änderungen integriert werden können.

Die Architektur muss unterstützen:
- Linting
- Typecheck
- Unit Tests
- Integrationstests
- Build
- Docker Build
- später E2E

Eine Lösung, die nur lokal funktioniert, aber nicht stabil durch die Pipeline geht, verletzt die Architekturziele.

---

# 13. Architekturentscheidungen für das MVP

## Bewusst gewählt
- modularer Monolith
- servernahe Fullstack-Architektur mit Next.js
- SQLite für geringe Betriebs- und Einstiegskosten
- Prisma für saubere Schema- und Migrationsarbeit
- klare innere Schichten statt ad-hoc Struktur

## Bewusst nicht gewählt
- Microservices
- getrennte Frontend- und Backend-Repositories
- eventgetriebener Unterbau
- komplexe verteilte Infrastruktur
- vorzeitige Generalisierung für Multi-User oder Multi-Tenant

---

# 14. Architekturprinzipien für die Weiterentwicklung

1. Neue Features respektieren die bestehende Schichtung.
2. Fachlogik wird zentralisiert statt in Komponenten verstreut.
3. Persistenz bleibt austauschbar genug, ohne unnötige Abstraktionsorgien.
4. CI/CD-Anforderungen werden bei Architekturentscheidungen von Anfang an mitgedacht.
5. Mobile UX und einfache Bedienbarkeit bleiben Teil der technischen Entscheidungen.
6. Dokumentation und Implementierung dürfen nicht auseinanderlaufen.

---

# 15. Erfolgsmaßstab

Die Softwarearchitektur ist gut, wenn:
- das MVP schnell, sauber und testbar gebaut werden kann
- spätere Erweiterungen nicht sofort Umbauten an Grundprinzipien erzwingen
- das Projekt für eine kleine self-hosted App technisch diszipliniert bleibt
- Produkt, Code, Tests, Docker und CI/CD in dieselbe Richtung arbeiten
