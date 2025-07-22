# HOWTO: Navigation bearbeiten

Diese Anleitung erklärt, wie Sie Einträge in der Navigationsleiste (Navbar) der Schäftlarner Konzerte Website hinzufügen, ändern oder löschen können.

## Übersicht

Die Navigation wird automatisch aus der Datei `data/navigation.yaml` generiert. Diese Datei enthält alle Menüpunkte und deren Untermenüs in strukturierter Form.

**Wichtiger Hinweis:** Die Menü-Konfiguration in `hugo.yaml` wird **nicht mehr verwendet** und kann entfernt werden. Die Navigation funktioniert ausschließlich über `data/navigation.yaml`.

## Navigation bearbeiten

### Datei öffnen

Öffnen Sie die Datei: `data/navigation.yaml`

### Struktur verstehen

```yaml
main:
  - name: "Hauptmenü-Name"
    url: "/pfad-zur-seite/"
    children:
      - name: "Untermenü 1"
        url: "/unterseite1/"
      - name: "Untermenü 2"
        url: "/unterseite2/"
```

## Neue Menüpunkte hinzufügen

### Neues Hauptmenü hinzufügen

Fügen Sie am Ende der Datei einen neuen Block hinzu:

```yaml
  - name: "Neues Menü"
    url: "/neue-seite/"
    children:
      - name: "Erste Unterseite"
        url: "/neue-seite/unterseite1/"
      - name: "Zweite Unterseite"
        url: "/neue-seite/unterseite2/"
```

### Neuen Untermenüpunkt hinzufügen

Fügen Sie unter `children:` eines bestehenden Menüs einen neuen Eintrag hinzu:

```yaml
      - name: "Neuer Untermenüpunkt"
        url: "/pfad/zum/neuen-punkt/"
```

### Beispiel: Neuen Spielplan hinzufügen

Um einen Spielplan für 2027 hinzuzufügen, bearbeiten Sie den Programm-Bereich:

```yaml
  - name: "Programm"
    url: "/programm/"
    children:
      - name: "Spielplan 2025"
        url: "/programm/2025/"
      - name: "Spielplan 2026"
        url: "/programm/2026/"
      - name: "Spielplan 2027"        # ← NEU
        url: "/programm/2027/"         # ← NEU
```

## Menüpunkte ändern

### Namen ändern

Ändern Sie den `name:` Wert:

```yaml
  - name: "Neuer Name"  # Alter Name war z.B. "Programm"
    url: "/programm/"
```

### URL ändern

Ändern Sie den `url:` Wert:

```yaml
  - name: "Programm"
    url: "/neuer-pfad/"  # Alte URL war z.B. "/programm/"
```

## Menüpunkte löschen

### Einzelnen Untermenüpunkt löschen

Entfernen Sie die entsprechenden Zeilen:

```yaml
# Diese Zeilen komplett löschen:
      - name: "Zu löschender Punkt"
        url: "/alter-pfad/"
```

### Ganzes Hauptmenü löschen

Entfernen Sie den kompletten Block inklusive aller Untermenüs:

```yaml
# Diesen gesamten Block löschen:
  - name: "Altes Menü"
    url: "/alte-seite/"
    children:
      - name: "Untermenü 1"
        url: "/unterseite1/"
      - name: "Untermenü 2"
        url: "/unterseite2/"
```

## Vollständiges Beispiel

```yaml
main:
  - name: "Home"
    url: "/"
    children:
      - name: "Infos"
        url: "/"
      - name: "Über die Konzerte"
        url: "/#leitung"
      - name: "Kloster Schäftlarn"
        url: "/#kloster-schaeftlarn"
        
  - name: "Programm"
    url: "/programm/"
    children:
      - name: "Spielplan 2025"
        url: "/programm/2025/"
      - name: "Spielplan 2026"
        url: "/programm/2026/"
        
  - name: "Tickets"
    url: "/tickets/"
    children:
      - name: "Tickets"
        url: "/tickets/"
      - name: "Preise"
        url: "/tickets/#preise"
```

## Wichtige Hinweise

### YAML-Syntax beachten

1. **Einrückung:** Verwenden Sie 2 Leerzeichen pro Ebene
2. **Anführungszeichen:** Setzen Sie Texte in Anführungszeichen: `"Text"`
3. **Listen:** Jeder Listeneintrag beginnt mit `- ` (Bindestrich + Leerzeichen)
4. **Keine Tabs:** Verwenden Sie nur Leerzeichen, keine Tab-Zeichen

### URL-Formate

- **Interne Seiten:** `/programm/2025/`
- **Anker-Links:** `/#leitung`
- **Externe Links:** `https://example.com`

### Automatische Aktualisierung

Nach Änderungen an `data/navigation.yaml`:

1. Die Website wird automatisch aktualisiert (bei `hugo server`)
2. Für Produktion: `hugo` ausführen zum Neu-Generieren

## Häufige Fehler vermeiden

1. **Einrückung falsch:** Achten Sie auf exakt 2 Leerzeichen
2. **Anführungszeichen vergessen:** Alle Namen und URLs in `"..."`
3. **Doppelpunkte vergessen:** Nach `name`, `url` und `children`
4. **Bindestrich vergessen:** Listeneinträge müssen mit `- ` beginnen

## Fehlerdiagnose

### Navigation wird nicht angezeigt

- Überprüfen Sie die YAML-Syntax
- Stellen Sie sicher, dass alle Einrückungen korrekt sind
- Vergleichen Sie mit einem funktionierenden Beispiel

### Menüpunkt fehlt

- Prüfen Sie, ob der Eintrag korrekt eingerückt ist
- Stellen Sie sicher, dass alle erforderlichen Felder (`name`, `url`) vorhanden sind

## Menü-Konfiguration in hugo.yaml

Die Menü-Sektion in `hugo.yaml` wird **nicht mehr verwendet** und kann entfernt werden:

```yaml
# Diese Sektion kann gelöscht werden:
menu:
  main:
    - name: "..."
      # ... alte Konfiguration
```

Die Navigation funktioniert jetzt ausschließlich über `data/navigation.yaml`.

---

**Tipp:** Machen Sie vor größeren Änderungen eine Sicherungskopie der `data/navigation.yaml` Datei!