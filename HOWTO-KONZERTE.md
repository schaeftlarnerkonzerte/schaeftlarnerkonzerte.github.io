# HOWTO: Neue Konzerte hinzufügen

Diese Anleitung erklärt, wie Sie neue Konzerte zu den Schäftlarner Konzerten hinzufügen können.

## Übersicht

Die Konzerte werden ausschließlich in den Spielplan-Dateien im Ordner `content/programm/` verwaltet. Jedes Jahr hat eine eigene Datei (z.B. `2025.md`, `2026.md`). Alle Konzertdaten stehen im YAML-Format in der jeweiligen Spielplan-Datei.

## Neues Konzert zu einem bestehenden Jahr hinzufügen

### Schritt 1: Spielplan-Datei öffnen

Öffnen Sie die entsprechende Datei für das gewünschte Jahr:
- Für 2025: `content/programm/2025.md`
- Für 2026: `content/programm/2026.md`

### Schritt 2: Neues Konzert hinzufügen

Fügen Sie einen neuen Konzert-Block zur `concerts:` Liste hinzu:

```yaml
  - title: "Titel des neuen Konzerts"
    date: "2025-12-15"
    time: "19:00"
    artists:
      - "Solist Name, Instrument"
      - "Zweiter Solist, Anderes Instrument"
      - "Leitung: Michael Forster"
    program:
      - "Komponist: Werk 1"
      - "Komponist: Werk 2"
      - "Komponist: Werk 3"
    ticket_url: "https://www.muenchenticket.de/event/..."
```

### Schritt 3: Wichtige Hinweise

- **Reihenfolge:** Konzerte werden automatisch nach Datum sortiert
- **Datum:** Format `"YYYY-MM-DD"` verwenden
- **Zeit:** Normalerweise `"19:00"`
- **Artists:** Jeder Eintrag in einer neuen Zeile mit `-`
- **Program:** Jedes Werk in einer neuen Zeile mit `-`
- **Ticket-URL:** Link zum München-Ticket Verkauf

## Neues Jahr hinzufügen

### Schritt 1: Neue Spielplan-Datei erstellen

Erstellen Sie eine neue Datei: `content/programm/JAHR.md`

Beispiel für `content/programm/2026.md`:

```yaml
---
title: "Spielplan 2026"
year: 2026
layout: "spielplan"
draft: false
default_open: 1
allow_multiple_open: false
concerts:
  - title: "Erstes Konzert 2026"
    date: "2026-05-10"
    time: "19:00"
    artists: 
      - "Solist Name, Instrument"
      - "Leitung: Michael Forster"
    program:
      - "Komponist: Werk"
    ticket_url: "https://www.muenchenticket.de/..."
---
```

### Schritt 2: Navigation aktualisieren

Bearbeiten Sie `data/navigation.yaml` und fügen Sie das neue Jahr zur Programm-Navigation hinzu:

```yaml
  - name: "Programm"
    url: "/programm/"
    children:
      - name: "Spielplan 2025"
        url: "/programm/2025/"
      - name: "Spielplan 2026"
        url: "/programm/2026/"
```

Details zur Navigation finden Sie in `HOWTO-NAVBAR.md`.

## Aufklapp-Verhalten steuern

### Welche Konzerte automatisch aufklappen

Sie können steuern, welche Konzerte beim Öffnen der Spielplan-Seite automatisch aufgeklappt sind:

#### Einzelnes Konzert aufklappen

```yaml
---
title: "Spielplan 2025"
year: 2025
layout: "spielplan"
draft: false
default_open: 3    # ← Das 3. Konzert klappt automatisch auf
concerts:
  # ... Konzerte
```

#### Mehrere Konzerte aufklappen

```yaml
---
title: "Spielplan 2025"
year: 2025
layout: "spielplan"
draft: false
default_open: [1, 3, 5]        # ← 1., 3. und 5. Konzert klappen auf
allow_multiple_open: true      # ← Mehrere Konzerte können gleichzeitig offen sein
concerts:
  # ... Konzerte
```

**Optionen für `default_open:`**
- `default_open: 1` → Nur das 1. Konzert klappt auf
- `default_open: 2` → Nur das 2. Konzert klappt auf
- `default_open: [1, 2]` → Das 1. und 2. Konzert klappen auf
- `default_open: [1, 3, 5]` → Das 1., 3. und 5. Konzert klappen auf
- Kein `default_open:` → Alle Konzerte eingeklappt
- `default_open: 0` → Alle Konzerte eingeklappt

### Mehrere Konzerte gleichzeitig offen halten

Standardmäßig schließen sich andere Konzerte, wenn eines aufgeklappt wird (Accordion-Verhalten). Sie können das ändern:

```yaml
---
title: "Spielplan 2025"
allow_multiple_open: true    # ← Benutzer können mehrere Konzerte gleichzeitig öffnen
---
```

**Optionen für `allow_multiple_open:`**
- `allow_multiple_open: true` → Mehrere Konzerte können gleichzeitig offen sein
- `allow_multiple_open: false` → Nur ein Konzert zur Zeit (Standard)
- Kein Parameter → Nur ein Konzert zur Zeit (Standard)

### Praktische Anwendungsfälle

#### Klassisches Accordion (Standard)
```yaml
# Nur ein Konzert zur Zeit, keines standardmäßig offen
year: 2025
# allow_multiple_open: false (Standard)
# default_open: (nicht gesetzt)
```

#### Hauptkonzert hervorheben
```yaml
# Ein wichtiges Konzert ist bereits aufgeklappt
year: 2025
default_open: 3  # wes10brass-Konzert
```

#### Saisonübersicht
```yaml
# Alle Konzerte sichtbar für bessere Übersicht
year: 2025
default_open: [1, 2, 3, 4, 5]
allow_multiple_open: true
```

#### Flexible Benutzer-Erfahrung
```yaml
# Benutzer können mehrere vergleichen, aber wenige starten offen
year: 2025  
default_open: [1, 3]       # Erstes und drittes Konzert offen
allow_multiple_open: true  # Benutzer kann weitere öffnen
```

### Collapse-IDs verstehen

Jedes Konzert bekommt automatisch eine eindeutige ID:
- **1. Konzert** → `collapse1`
- **2. Konzert** → `collapse2`
- **3. Konzert** → `collapse3`
- **4. Konzert** → `collapse4`
- usw.

Diese IDs können für direkte Links verwendet werden:
- `/programm/2025/#collapse1` → Öffnet Spielplan 2025 mit 1. Konzert aufgeklappt
- `/programm/2025/#collapse3` → Öffnet Spielplan 2025 mit 3. Konzert aufgeklappt

### wes10brass Aufklapp-Link (Spezialfall)

Wenn wes10brass auftritt und der Link von der Startseite funktionieren soll:

1. **Option A**: Das wes10brass-Konzert an die **3. Position** in der Liste setzen
2. **Option B**: Den Link in `content/_index.md` an die korrekte Position anpassen

**Aktueller Link auf der Startseite**: `/programm/2025/#collapse3`

Wenn wes10brass das 4. Konzert wäre, ändern Sie in `content/_index.md`:
```markdown
[wes10brass](/programm/2025/#collapse4)
```

### Solisten-Links

Stellen Sie sicher, dass die Solisten-Seiten existieren:
- Pfad: `content/solisten/solist-name.md`
- URL-Format: Kleinbuchstaben, Leerzeichen durch `-` ersetzen
- Beispiel: "Emanuel Graf" → `/solisten/emanuel-graf/`

## Vollständiges Beispiel

```yaml
---
title: "Spielplan 2025"
year: 2025
layout: "spielplan"
draft: false
default_open: 1
allow_multiple_open: false
concerts:
  - title: "Chaos und Paukenschlag"
    date: "2025-05-10"
    time: "19:00"
    artists: 
      - "Jihyun Cecilia Lee, Sopran"
      - "Alejandro Marco-Buhrmester, Bariton"
      - "Leitung: Michael Forster"
    program:
      - "J. Haydn: Einleitung zur 'Schöpfung', Arien und Duette der Klassik"
      - "J. Haydn: Sinfonie G-Dur Nr. 94 mit dem Paukenschlag"
    ticket_url: "https://www.muenchenticket.de/event/schaeftlarner-konzerte-2025-31548/428281/"
    
  - title: "Neues Konzert"
    date: "2025-11-20"
    time: "19:00"
    artists:
      - "Neuer Solist, Violine"
      - "Leitung: Michael Forster"
    program:
      - "Mozart: Violinkonzert Nr. 4 KV 218"
      - "Beethoven: Sinfonie Nr. 7"
    ticket_url: "https://www.muenchenticket.de/event/..."
---
```

## Häufige Fehler vermeiden

1. **YAML-Syntax:** Achten Sie auf korrekte Einrückung (2 Leerzeichen)
2. **Anführungszeichen:** Verwenden Sie `"` für Texte mit Sonderzeichen
3. **Datum:** Immer im Format `"YYYY-MM-DD"`
4. **Listen:** Jeder Eintrag beginnt mit `- ` (Bindestrich + Leerzeichen)
5. **Umlaute:** Können direkt verwendet werden (ä, ö, ü, ß)

## Website neu generieren

Nach Änderungen:

1. Terminal öffnen
2. In das Website-Verzeichnis wechseln
3. `hugo` ausführen
4. Website ist unter `public/` verfügbar

## Hilfe

Bei Problemen:
- Überprüfen Sie die YAML-Syntax
- Vergleichen Sie mit bestehenden Konzerten
- Testen Sie die Website lokal mit `hugo server`

---

**Tipp:** Kopieren Sie ein bestehendes Konzert und passen Sie die Werte an - das ist der einfachste Weg!