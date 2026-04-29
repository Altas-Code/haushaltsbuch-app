# Definition of Done

Diese Definition of Done gilt für **jedes Backlog Item** des Projekts, unabhängig davon, ob es sich um ein Feature, einen Bugfix, eine technische Verbesserung, eine UI-Anpassung oder Infrastrukturarbeit handelt.

Ein Item ist erst dann wirklich fertig, wenn **alle** unten genannten Kriterien erfüllt sind.

## Grundsatz

"Done" bedeutet nicht nur, dass Code geschrieben wurde.  
"Done" bedeutet, dass die Änderung:
- fachlich vollständig ist
- architektonisch sauber eingebettet ist
- getestet wurde
- integriert wurde
- dokumentiert ist
- in CI/CD abgesichert ist
- releasefähig ist

Wenn einer dieser Punkte fehlt, ist das Item **nicht done**.

---

# 1. Fachliche Fertigstellung

## 1.1 Anforderungen erfüllt
- Das Backlog Item ist fachlich vollständig umgesetzt.
- Alle definierten Akzeptanzkriterien sind erfüllt.
- Relevante Edge Cases wurden berücksichtigt.
- Die Umsetzung passt zur Vision, User Journey und den Design-Prinzipien.

## 1.2 UX vollständig gedacht
- Leere Zustände wurden berücksichtigt.
- Fehlerzustände wurden berücksichtigt.
- Ladezustände wurden berücksichtigt, falls relevant.
- Mobile und Desktop-Verhalten wurden bewusst mitgedacht.

---

# 2. Architektur und Codequalität

## 2.1 Architektonisch sauber integriert
- Die Lösung passt in die bestehende Architektur.
- Verantwortlichkeiten sind sauber getrennt.
- Es wurden keine unnötigen Quickfix-Strukturen eingeführt.
- Erweiterbarkeit und Wartbarkeit wurden mitgedacht.

## 2.2 Codequalität
- Code ist verständlich, konsistent und wartbar.
- Benennungen sind klar.
- Duplizierung wurde vermieden oder bewusst begründet.
- Technische Schulden wurden nicht stillschweigend erzeugt.
- Neue Abhängigkeiten wurden nur eingeführt, wenn sie gerechtfertigt sind.

## 2.3 Daten- und Domänenlogik sauber umgesetzt
- Betragslogik ist korrekt.
- Datums- und Fälligkeitslogik ist korrekt.
- Validierungen sind vollständig und robust.
- Fehlerhafte Zustände werden verhindert oder sauber behandelt.

---

# 3. UI und Design-Qualität

## 3.1 Design-Prinzipien eingehalten
- Die Änderung entspricht den definierten Design-Prinzipien.
- Die Oberfläche bleibt ruhig, klar und vertrauenswürdig.
- Visuelle Prioritäten sind sauber gesetzt.
- Die Änderung erhöht nicht unnötig die Komplexität.

## 3.2 Responsiveness geprüft
- Die Änderung funktioniert auf Mobile.
- Die Änderung funktioniert auf Desktop.
- Relevante Breakpoints wurden geprüft.

## 3.3 Konsistenz
- Komponenten verhalten sich konsistent zu bestehenden Mustern.
- Interaktionen folgen der bestehenden UI-Logik.
- Texte, Labels und Statusdarstellungen sind konsistent.

---

# 4. Tests

## 4.1 Passende Tests vorhanden
Für jedes Item müssen passende Tests ergänzt oder angepasst werden.

Je nach Art der Änderung gehören dazu, soweit relevant:
- Unit-Tests
- Integrations-Tests
- UI- oder Component-Tests
- End-to-End-Tests

## 4.2 Tests decken die Änderung wirklich ab
- Happy Path ist getestet.
- Relevante Fehlerfälle sind getestet.
- Relevante Randfälle sind getestet.
- Regressionen werden abgesichert.

## 4.3 Tests sind automatisierbar
- Tests laufen reproduzierbar lokal.
- Tests sind in die CI integrierbar.
- Es gibt keine manuellen Sonderbedingungen, die den Standardablauf verhindern.

---

# 5. Integration

## 5.1 End-to-End in der Anwendung integriert
- Die Änderung funktioniert nicht nur isoliert, sondern im echten Anwendungsfluss.
- Relevante abhängige Bereiche wurden überprüft.
- Bestehende Funktionen wurden nicht unbeabsichtigt beschädigt.

## 5.2 Datenbank und Persistenz berücksichtigt
Falls Datenmodell oder Persistenz betroffen sind:
- Migrationen sind sauber angelegt.
- Bestehende Daten bleiben konsistent.
- Persistenz funktioniert lokal und im Docker-Setup.
- Rollforward-Pfad ist klar.

## 5.3 API- und UI-Verknüpfung vollständig
Falls Backend und Frontend betroffen sind:
- Schnittstellen sind konsistent.
- Fehlerfälle werden korrekt bis ins UI transportiert.
- Validierungslogik ist über die Schichten hinweg stimmig.

---

# 6. CI/CD ist Pflicht

CI/CD ist für dieses Projekt ein zentraler Qualitätsanker und kein optionaler Nachschritt.

## 6.1 CI-Pipeline aktualisiert oder bestätigt
- Jede Änderung ist durch die CI-Pipeline abgedeckt.
- Falls neue Artefakte, Tests oder Prüfungen nötig sind, wurde die Pipeline entsprechend angepasst.
- Falls keine Pipeline-Anpassung nötig ist, wurde bewusst geprüft, dass die vorhandene CI ausreicht.

## 6.2 Pflichtprüfungen in CI
Jede relevante Änderung muss in CI mindestens durch diese Prüfschritte laufen, sobald sie im Projekt eingerichtet sind:
- Install / Dependency Restore
- Linting
- Type Checking
- Unit-Tests
- Integrations-Tests
- Build
- Docker Build
- gegebenenfalls End-to-End-Tests

## 6.3 CD-Readiness
- Die Änderung ist so umgesetzt, dass sie grundsätzlich deploybar ist.
- Konfiguration, Build und Laufzeit wurden mitgedacht.
- Docker-Setup bleibt funktionsfähig.
- Es entstehen keine versteckten manuellen Deploy-Hürden.

## 6.4 Kein Bypass
- Ein Item gilt nicht als done, wenn Tests oder CI rot sind.
- Temporär deaktivierte Prüfungen müssen explizit dokumentiert und nachverfolgt werden.
- Workarounds ohne Folgeeintrag zählen nicht als erledigt.

---

# 7. Dokumentation

## 7.1 Fachliche oder technische Doku aktualisiert
- Relevante Projekt-Dokumentation wurde ergänzt oder aktualisiert.
- Änderungen an Architektur, Verhalten, Setup oder Bedienung sind dokumentiert.
- README oder Spezialdokumente wurden angepasst, wenn sie betroffen sind.

## 7.2 Änderungsrelevante Hinweise dokumentiert
- Neue Annahmen sind festgehalten.
- Einschränkungen oder bekannte Grenzen sind dokumentiert.
- Falls notwendig, sind Folgeaufgaben sichtbar gemacht.

---

# 8. GitHub- und Backlog-Hygiene

## 8.1 GitHub-Issue-Stand aktualisiert
- Das zugehörige GitHub-Issue wurde nach der Umsetzung auf den tatsächlichen Stand gebracht.
- Kommentare im Issue spiegeln den realen Fortschritt wider.
- Erledigte Arbeit bleibt nicht fälschlich als offen stehen.
- Offene Restarbeiten wurden als Folgeaufgaben oder neue Issues sichtbar gemacht.

## 8.2 Labels und Release-Zuordnung gepflegt
- Status-Labels passen zum tatsächlichen Umsetzungsstand.
- Release-Labels wurden geprüft und bei Bedarf korrigiert.
- Priorität, Bereich und sonstige operative Labels sind nicht veraltet oder irreführend.

## 8.3 GitHub ist mit dem Code synchron
- GitHub Issues sind der operative Wahrheitsstand und müssen zum tatsächlichen Code passen.
- Bereits umgesetzte Features dürfen nicht über längere Zeit als offene Backlog-Issues stehen bleiben.
- Wenn beim Arbeiten Inkonsistenzen auffallen, werden sie im selben Arbeitsblock bereinigt oder explizit dokumentiert.

---

# 9. Review- und Merge-Fähigkeit

## 8.1 Änderung ist reviewbar
- Umfang ist nachvollziehbar.
- Commit-Struktur ist sinnvoll.
- Die Änderung ist nicht unnötig vermischt mit fachfremden Umbauten.

## 8.2 Lokale Qualitätssicherung erfolgt
Vor Abschluss wurde geprüft:
- Anwendung startet
- Kernfluss funktioniert
- Tests laufen
- Build funktioniert
- Docker-Build funktioniert, wenn relevant

---

# 10. Release-Fähigkeit

## 9.1 Kein halbfertiger Zustand
- Das Item hinterlässt keinen inkonsistenten Benutzerzustand.
- Es entstehen keine sichtbaren Sackgassen ohne bewusste Kennzeichnung.
- Teilimplementierungen gelten nur dann als done, wenn sie bewusst feature-gesichert und nicht schädlich sind.

## 9.2 Betriebsfähigkeit bleibt erhalten
- Die Änderung verschlechtert das Self-Hosting nicht.
- Bestehende Deploy- oder Updatepfade bleiben funktionsfähig.
- Monitoring- oder Diagnosefähigkeit wird nicht verschlechtert.

---

# 11. Checkliste für jedes Backlog Item

Ein Backlog Item ist nur done, wenn alle Fragen ehrlich mit Ja beantwortet werden können:

- Ist die fachliche Anforderung vollständig erfüllt?
- Sind Edge Cases sowie Fehler-, Lade- und Leerstati berücksichtigt?
- Ist die Lösung architektonisch sauber?
- Ist der Code wartbar und konsistent?
- Funktioniert die Änderung auf Mobile und Desktop?
- Wurden passende Tests ergänzt oder angepasst?
- Laufen die Tests automatisiert?
- Ist die Änderung vollständig integriert?
- Sind Datenmodell, Persistenz und Schnittstellen korrekt berücksichtigt?
- Wurde relevante Dokumentation aktualisiert?
- Wurden GitHub-Issue-Stand, Labels und Release-Zuordnung auf den echten Stand gebracht?
- Ist die CI/CD-Abdeckung passend und grün?
- Ist die Änderung buildbar, dockerfähig und deploybar?
- Ist das Ergebnis wirklich releasefähig?

Wenn eine dieser Fragen mit Nein beantwortet wird, ist das Item noch offen.

---

# 12. Praktische Regel für dieses Projekt

Für dieses Projekt gilt ausdrücklich:

**Kein Backlog Item wird als abgeschlossen markiert, wenn nicht mindestens Architektur, Implementierung, Tests, Integration, Dokumentation und CI/CD mit erledigt wurden.**

Das schützt die App davor, schnell zu wachsen, aber qualitativ auseinanderzufallen.
