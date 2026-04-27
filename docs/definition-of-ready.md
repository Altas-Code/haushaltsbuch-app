# Definition of Ready

Diese Definition of Ready legt fest, wann ein Backlog Item bereit ist, in die Umsetzung zu gehen.

## Ziel

Sie verhindert, dass unklare, zu große oder fachlich halbfertige Tickets direkt in Entwicklung kippen.

---

# Ein Item ist Ready, wenn

- Ziel und Nutzen klar beschrieben sind
- Epic und, wenn passend, Use Case zugeordnet sind
- Scope klar abgegrenzt ist
- Akzeptanzkriterien vorhanden sind
- offene Produktfragen geklärt oder explizit markiert sind
- Design- oder UX-Auswirkungen bekannt sind
- Architektur- oder Integrationsauswirkungen bekannt sind
- Testbedarf benannt ist
- CI/CD-Auswirkungen benannt sind
- Zielrelease oder Priorität gesetzt ist
- das Item klein genug ist, um sinnvoll umgesetzt und reviewed zu werden

---

# Ein Item ist nicht Ready, wenn

- es nur aus einer groben Idee ohne prüfbares Ergebnis besteht
- wichtige Produktentscheidungen noch fehlen
- unklar ist, was genau gebaut werden soll
- Test- oder Integrationsfolgen völlig offen sind
- das Item zu groß oder unscharf geschnitten ist

---

# Praktische Regel

**Kein Item geht auf `status:ready`, wenn Umsetzung, Test, Integration und CI/CD noch nicht wenigstens grob mitgedacht wurden.**
