# HOWTO: Website online bearbeiten

Diese Anleitung erklärt, wie Sie die Schäftlarner Konzerte Website direkt im Browser bearbeiten können, ohne Programme auf Ihrem Computer installieren zu müssen.

## Übersicht

Sie können die Website komplett online bearbeiten mit:
- **GitHub**: Speichert alle Dateien und verwaltet Änderungen
- **GitHub.dev**: Online-Editor (wie Word, aber für Websites)
- **GitHub Actions**: Prüft automatisch, ob alles funktioniert

**Keine Installation nötig!** Alles funktioniert direkt im Browser.

## Was ist Git und GitHub? (Einfach erklärt)

Stellen Sie sich vor, Sie schreiben ein Buch:

### Git = Versionsgeschichte
- **Wie ein Tagebuch**: Jede Änderung wird mit Datum und Beschreibung gespeichert
- **Rückgängig machen**: Sie können zu jeder alten Version zurück
- **Sicherheit**: Nie wieder Angst vor versehentlichem Löschen

### GitHub = Online-Bibliothek
- **Speicherort**: Ihr "Buch" (Website) liegt sicher online
- **Zusammenarbeit**: Mehrere Personen können gleichzeitig arbeiten
- **Backup**: Ihre Arbeit ist immer gesichert

### Commit = Kapitel speichern
- **Was**: Eine Änderung mit Beschreibung ("Neuen Solisten hinzugefügt")
- **Warum**: Später wissen Sie, was Sie gemacht haben
- **Wann**: Mit Datum und Uhrzeit automatisch gespeichert

## Schritt-für-Schritt Anleitung

### Schritt 1: Online-Editor öffnen

1. **Browser öffnen** (Chrome, Firefox, Safari, Edge)
2. **Adresse eingeben**: `https://github.dev/schaeftlarnerkonzerte/website`
3. **Mit GitHub anmelden** (einmalig erforderlich)

Sie sehen jetzt einen Editor wie Microsoft Word, aber für Website-Dateien.

### Schritt 2: Den Editor verstehen

**Linke Seite = Datei-Explorer**
- Ordner und Dateien der Website
- Klicken Sie auf Dateien zum Öffnen

**Rechte Seite = Text-Editor**
- Hier bearbeiten Sie den Inhalt
- Wie ein einfacher Text-Editor

**Wichtige Ordner:**
- `content/` → Website-Inhalte
- `content/solisten/` → Solisten-Profile  
- `content/programm/` → Konzert-Programme
- `static/img/musiker/` → Fotos der Musiker

### Schritt 3: Eine Datei bearbeiten

**Beispiel: Solist bearbeiten**

1. **Datei öffnen**:
   - Links auf `content` klicken
   - Dann auf `solisten` klicken
   - Datei auswählen, z.B. `emanuel-graf.md`

2. **Text bearbeiten**:
   - Rechts erscheint der Inhalt
   - Einfach den Text ändern wie in Word
   - **Nicht die Zeilen mit `---` anfassen!** (Das ist Technik)

3. **Datei speichern**:
   - `Ctrl+S` (Windows) oder `Cmd+S` (Mac)
   - Oder: Datei-Menü → Speichern

### Schritt 4: Änderungen "committen" (dauerhaft speichern)

**Was Sie sehen:**
- Links erscheint eine Zahl bei einem Symbol (z.B. ① neben einem Icon)
- Das bedeutet: 1 Datei wurde geändert

**So committen Sie:**

1. **Source Control öffnen**:
   - Links auf das Symbol mit der Zahl klicken
   - Oder `Ctrl+Shift+G` drücken

2. **Ihre Änderung beschreiben**:
   - Oben steht ein Textfeld "Message"
   - Kurze Beschreibung eingeben, z.B.:
     - "Emanuel Graf Biografie aktualisiert"
     - "Neuen Solisten Anna Müller hinzugefügt"
     - "Konzert-Datum korrigiert"

3. **Commit erstellen**:
   - Auf "Commit & Push" klicken
   - Ihre Änderung ist jetzt dauerhaft gespeichert!

### Schritt 5: Prüfen ob alles funktioniert

**GitHub Actions = Automatische Kontrolle**

Nach jedem Commit prüft GitHub automatisch:
- ✅ Sind alle Dateien korrekt?
- ✅ Kann die Website gebaut werden?
- ❌ Gibt es Fehler?

**So sehen Sie das Ergebnis:**

1. **Actions-Tab öffnen**:
   - Oben auf "Actions" klicken
   - Sie sehen eine Liste Ihrer Commits

2. **Status verstehen**:
   - ✅ **Grünes Häkchen** = Alles OK!
   - ❌ **Rotes X** = Es gibt ein Problem
   - 🟡 **Gelber Punkt** = Wird noch geprüft...

3. **Bei Fehlern**:
   - Auf das rote X klicken
   - Fehler-Details anschauen
   - Meist sind es kleine Tippfehler

## Häufige Bearbeitungen

### Solist hinzufügen

1. **Neuen Solisten erstellen**:
   - `content/solisten/` → Rechtsklick → "New File"
   - Dateiname: `vorname-nachname.md` (z.B. `anna-mueller.md`)

2. **Vorlage kopieren**:
   - Öffnen Sie eine bestehende Solist-Datei
   - Kopieren Sie alles (`Ctrl+A`, dann `Ctrl+C`)
   - In die neue Datei einfügen (`Ctrl+V`)

3. **Inhalt anpassen**:
   - Name, Biografie, Links ändern
   - Foto-Pfad anpassen

4. **Foto hinzufügen** (falls nötig):
   - `static/img/musiker/` → Foto hochladen
   - Dateiname sollte zu Solist passen

### Konzert hinzufügen

1. **Spielplan-Datei öffnen**:
   - `content/programm/2025.md` (oder aktuelles Jahr)

2. **Neues Konzert ergänzen**:
   - Am Ende der `concerts:` Liste
   - Bestehenden Konzert-Block kopieren und anpassen

3. **Wichtige Felder**:
   - `title:` → Konzert-Name
   - `date:` → Datum (Format: "2025-12-24")
   - `artists:` → Solisten-Namen
   - `program:` → Musik-Programm

### Text auf der Startseite ändern

1. **Datei öffnen**: `content/_index.md`
2. **Text unter der `---` Linie bearbeiten**
3. **Commit erstellen**

## Wichtige Sicherheits-Tipps

### ✅ Das ist sicher:
- **Text ändern** → Biografien, Konzert-Beschreibungen, etc.
- **Neue Solisten hinzufügen** → Mit bestehender Vorlage
- **Konzerte hinzufügen** → In bestehende Spielplan-Dateien

### ⚠️ Vorsicht bei:
- **Zeilen mit `---`** → Das ist Technik, nicht ändern!
- **Datei-Endungen** → `.md` Dateien sind OK, `.html` nur für Experten
- **Ordner-Struktur** → Keine Ordner löschen oder umbenennen

### 🛑 Besser nicht anfassen:
- `layouts/` Ordner → Templates für Experten
- `hugo.yaml` → Website-Konfiguration
- Dateien mit `.html`, `.js`, `.css` → Programmier-Code

## Fehler beheben

### "Commit fehlgeschlagen"
- **Ursache**: Meist Internet-Problem oder GitHub-Login abgelaufen
- **Lösung**: Seite neu laden und nochmal versuchen

### "Rotes X" bei GitHub Actions
- **Ursache**: Meist Tippfehler in YAML-Bereichen (zwischen `---`)
- **Lösung**: 
  1. Letzte Änderung rückgängig machen
  2. Nochmal vorsichtig bearbeiten
  3. Nur Text ändern, nicht die Technik-Bereiche

### "Datei nicht gefunden"
- **Ursache**: Foto-Pfad stimmt nicht
- **Lösung**: Foto-Pfad in der `.md` Datei prüfen

## Nützliche Shortcuts

**Allgemein:**
- `Ctrl+S` → Speichern
- `Ctrl+Z` → Rückgängig
- `Ctrl+F` → Text suchen

**GitHub.dev spezifisch:**
- `Ctrl+Shift+G` → Source Control öffnen
- `Ctrl+Shift+E` → Datei-Explorer öffnen
- `F1` → Kommando-Palette

## Git-Verlauf verstehen

**Wie ein Fotoalbum Ihrer Änderungen:**

1. **History ansehen**:
   - Links auf "Timeline" Icon klicken
   - Sie sehen alle Ihre Commits chronologisch

2. **Einzelnen Commit anschauen**:
   - Auf einen Commit klicken
   - Sie sehen genau was geändert wurde
   - Grün = hinzugefügt, Rot = gelöscht

3. **Zurück zu alter Version**:
   - Rechtsklick auf gewünschten Commit
   - "Reset to this commit" wählen
   - **Vorsicht**: Neuere Änderungen gehen verloren!

## Zusammenarbeit mit anderen

**Wenn mehrere Personen arbeiten:**

1. **Vor dem Arbeiten**:
   - Seite neu laden um neueste Version zu haben

2. **Bei Konflikten**:
   - GitHub zeigt an wenn gleichzeitig gearbeitet wurde
   - Meist automatisch gelöst
   - Bei Problemen: Experten fragen

## Häufige Fragen (FAQ)

### F: Kann ich Schäden anrichten?
**A:** Nein! Git speichert alles. Jede Änderung kann rückgängig gemacht werden.

### F: Was wenn ich einen Fehler mache?
**A:** Kein Problem! Schauen Sie in die History und gehen Sie zur letzten funktionierenden Version zurück.

### F: Wie sehe ich meine Änderungen auf der echten Website?
**A:** Nach erfolgreichem Commit (grünes Häkchen) dauert es etwa 5-10 Minuten bis die Website aktualisiert ist.

### F: Kann ich offline arbeiten?
**A:** Nein, GitHub.dev funktioniert nur online. Dafür haben Sie immer die neueste Version und alles ist automatisch gesichert.

### F: Was bedeuten die Symbole links?
**A:** 
- 📁 = Datei-Explorer
- 🔍 = Suche
- ⚡ = Source Control (für Commits)
- ⚙️ = Einstellungen

## Tipps für Anfänger

### Klein anfangen
- **Erste Änderung**: Einfachen Text auf der Startseite ändern
- **Zweite Änderung**: Solisten-Biografie anpassen
- **Dritte Änderung**: Neues Konzert hinzufügen

### Gute Commit-Nachrichten
- ✅ **Gut**: "Emanuel Graf Biografie aktualisiert"
- ✅ **Gut**: "Konzert-Datum für März korrigiert"
- ❌ **Schlecht**: "Änderung", "Fix", "Update"

### Immer testen
- Nach jedem Commit: GitHub Actions prüfen
- Bei grünem Häkchen: Website in 5-10 Min. besuchen
- Bei rotem X: Fehler beheben und nochmal committen

## Support

### Bei technischen Problemen:
1. **Erste Hilfe**: GitHub Actions prüfen (grünes Häkchen?)
2. **Seite neu laden** und nochmal versuchen
3. **History anschauen**: Was war die letzte funktionierende Version?
4. **Experten kontaktieren** mit Screenshot des Problems

### Für Inhalts-Fragen:
- Siehe andere HOWTO-Dateien:
  - `HOWTO-KONZERTE.md` → Konzerte verwalten
  - `HOWTO-SOLISTEN.md` → Solisten verwalten
  - `HOWTO-NAVBAR.md` → Navigation bearbeiten

---

**Mut zur Bearbeitung!** Sie können nichts kaputt machen - Git behält alles im Gedächtnis und Sie können jederzeit zurück zur letzten funktionierenden Version. 

**Tipp**: Machen Sie nach jeder kleinen Änderung einen Commit, dann haben Sie viele Sicherheitspunkte zum Zurückkehren.