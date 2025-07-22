# HOWTO: Solisten verwalten

Diese Anleitung erklärt, wie Sie Solisten-Profile auf der Schäftlarner Konzerte Website hinzufügen, ändern oder löschen können.

## Übersicht

Solisten werden in individuellen Markdown-Dateien im Ordner `content/solisten/` verwaltet. Jeder Solist hat:
- Eine eigene `.md` Datei mit Biografie und Informationen
- Ein zugehöriges Foto im Ordner `static/img/musiker/`
- Automatische URL-Generierung (z.B. `/solisten/emanuel-graf/`)

## Neuen Solisten hinzufügen

### Schritt 1: Foto vorbereiten

1. **Foto-Format**: JPG-Format, idealerweise quadratisch oder Hochformat
2. **Dateiname**: Kleinbuchstaben, Bindestriche statt Leerzeichen
   - Beispiel: `emanuel-graf.jpg` (nicht `Emanuel Graf.jpg`)
3. **Speicherort**: Foto in `static/img/musiker/` kopieren

### Schritt 2: Solisten-Datei erstellen

Erstellen Sie eine neue Datei in `content/solisten/` mit dem Format:
`vorname-nachname.md`

**Beispiel**: Für "Maria Müller" → `maria-mueller.md`

### Schritt 3: Inhalt der Solisten-Datei

```yaml
---
title: "Vollständiger Name"
image: "/img/musiker/dateiname.jpg"
date: 2025-01-21
draft: false
links:
  - title: "Homepage von [Name]"
    url: "https://www.example.com"
  - title: "Weitere Links (optional)"
    url: "https://www.instagram.com/..."
---

Hier steht die Biografie und Beschreibung des Solisten.

Mehrere Absätze sind möglich. Erzählen Sie von der Ausbildung, 
Karriere, besonderen Erfolgen und aktuellen Projekten.

Auch Aufzählungen sind möglich:
- Studium bei Prof. XY
- 1. Preis bei Wettbewerb Z
- Solist bei Orchester ABC
```

### Vollständiges Beispiel

**Datei**: `content/solisten/maria-mueller.md`

```yaml
---
title: "Maria Müller"
image: "/img/musiker/maria-mueller.jpg"
date: 2025-01-21
draft: false
links:
  - title: "Homepage von Maria Müller"
    url: "https://www.maria-mueller-violine.de"
  - title: "Instagram"
    url: "https://www.instagram.com/maria.violin"
---

Die deutsche Violinistin Maria Müller zählt zu den herausragenden Musikerinnen ihrer Generation. Sie studierte bei Prof. Ana Chumachenko an der Hochschule für Musik München und erhielt wichtige Impulse von Zakhar Bron und Igor Ozim.

Bereits während ihres Studiums gewann sie mehrere internationale Wettbewerbe, darunter den 1. Preis beim Internationalen Violinwettbewerb in Köln. Seit 2020 ist sie Konzertmeisterin der Münchner Philharmoniker.

Maria Müller gastiert regelmäßig als Solistin bei renommierten Orchestern und ist eine geschätzte Kammermusikpartnerin. Sie spielt auf einer Violine von Giuseppe Guarneri del Gesù aus dem Jahr 1734.
```

## Solisten bearbeiten

### Informationen ändern

Öffnen Sie die entsprechende `.md` Datei in `content/solisten/` und bearbeiten Sie:

- **Name**: `title: "Neuer Name"`
- **Biografie**: Haupttext unter der `---` Linie
- **Links**: URLs oder Beschreibungen anpassen
- **Foto**: `image:` Pfad ändern (neues Foto in `static/img/musiker/` kopieren)

### Datum aktualisieren

```yaml
date: 2025-01-21  # Aktuelles Datum setzen
```

Das Datum bestimmt die Sortierung auf der Solisten-Übersichtsseite.

## Solisten löschen

### Schritt 1: Markdown-Datei löschen
Löschen Sie die entsprechende `.md` Datei aus `content/solisten/`

### Schritt 2: Foto entfernen (optional)
Löschen Sie das zugehörige Foto aus `static/img/musiker/`, falls es nicht mehr benötigt wird.

### Schritt 3: Programm-Referenzen prüfen
Überprüfen Sie `content/programm/JAHR.md` Dateien, ob der Solist noch in Konzerten erwähnt wird.

## URL-Struktur verstehen

Hugo generiert automatisch URLs basierend auf dem Dateinamen:

- **Datei**: `emanuel-graf.md`
- **URL**: `/solisten/emanuel-graf/`
- **Datei**: `jihyun-cecilia-lee.md`  
- **URL**: `/solisten/jihyun-cecilia-lee/`

### Regeln für Dateinamen

1. **Kleinbuchstaben**: `emanuel-graf.md` (nicht `Emanuel-Graf.md`)
2. **Bindestriche**: Statt Leerzeichen oder Unterstriche
3. **Umlaute vermeiden**: `mueller.md` statt `müller.md`
4. **Keine Sonderzeichen**: Nur Buchstaben, Zahlen und Bindestriche

## Bilder optimieren

### Empfohlene Bildgrößen
- **Breite**: 400-800 Pixel
- **Höhe**: 400-1000 Pixel
- **Format**: JPG (für Fotos), PNG (für Grafiken)
- **Dateigröße**: Unter 500 KB

### Bildbearbeitung
Verwenden Sie Tools wie GIMP, Photoshop oder Online-Tools wie:
- [TinyJPG](https://tinyjpg.com/) für Komprimierung
- [Squoosh](https://squoosh.app/) für Größenanpassung

## Verlinkung von Konzerten

Solisten werden automatisch in Konzertprogrammen verlinkt, wenn der Name exakt übereinstimmt:

**In** `content/programm/2025.md`:
```yaml
artists:
  - "Emanuel Graf, Violoncello"  # Wird automatisch zu /solisten/emanuel-graf/ verlinkt
```

**Wichtig**: Der Name im Konzertprogramm muss dem `title` in der Solisten-Datei entsprechen.

## Häufige Fehler vermeiden

### 1. Dateiname und URL stimmen nicht überein
**Problem**: `content/solisten/Emanuel-Graf.md` erzeugt `/solisten/Emanuel-Graf/`
**Lösung**: Immer Kleinbuchstaben verwenden: `emanuel-graf.md`

### 2. Foto wird nicht angezeigt
**Mögliche Ursachen**:
- Foto existiert nicht in `static/img/musiker/`
- Pfad in `image:` ist falsch (muss mit `/img/` beginnen)
- Dateiname stimmt nicht überein

### 3. YAML-Syntax-Fehler
**Achten Sie auf**:
- Anführungszeichen um Texte mit Sonderzeichen
- Korrekte Einrückung (2 Leerzeichen)
- Doppelpunkt nach jedem Feld

### 4. Umlaute in URLs
**Problem**: `müller.md` erzeugt problematische URLs
**Lösung**: `mueller.md` verwenden

## Solisten-Übersichtsseite

Die Übersichtsseite `/solisten/` wird automatisch generiert und zeigt alle Solisten an. Die Sortierung erfolgt nach dem `date` Feld in den einzelnen Dateien.

**Neueste zuerst**: Höheres Datum = weiter oben auf der Seite

## Website aktualisieren

Nach Änderungen:

1. **Entwicklung**: `hugo server` läuft automatisch mit Live-Reload
2. **Produktion**: `hugo` ausführen zum Neu-Generieren der Website

## Beispiel: Kompletter Workflow

### Neuen Solisten "Anna Schmidt" hinzufügen

1. **Foto**: `anna-schmidt.jpg` in `static/img/musiker/` kopieren
2. **Datei**: `content/solisten/anna-schmidt.md` erstellen
3. **Inhalt**:
```yaml
---
title: "Anna Schmidt"
image: "/img/musiker/anna-schmidt.jpg"
date: 2025-01-21
draft: false
links:
  - title: "Homepage von Anna Schmidt"
    url: "https://www.anna-schmidt-piano.de"
---

Anna Schmidt ist eine preisgekrönte Pianistin...
```
4. **Testen**: `hugo server` und `/solisten/anna-schmidt/` aufrufen
5. **Einbinden**: In Konzertprogramm als "Anna Schmidt, Klavier" erwähnen

## Backup und Versionskontrol

**Empfehlung**: Machen Sie regelmäßig Backups der `content/solisten/` und `static/img/musiker/` Ordner, besonders vor größeren Änderungen.

---

**Tipp**: Schauen Sie sich bestehende Solisten-Dateien als Vorlage an, bevor Sie neue erstellen!