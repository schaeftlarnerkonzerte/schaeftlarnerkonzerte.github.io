# HOWTO: Deployment Workflow

Diese Anleitung erklärt den zweistufigen Deployment-Prozess für die Schäftlarner Konzerte Website.

## Übersicht des Workflows

```
1. Development → GitHub.io (automatisch)
2. Review & Test → GitHub.io
3. Production → Strato (manuell)
```

## 1. Development Phase (GitHub.io)

### Automatisches Deployment
- **Trigger**: Jeder Push auf `main` Branch
- **Ziel**: `https://schaeftlarnerkonzerte.github.io/`
- **Zweck**: Development, Testing, Review

### Workflow
1. Code-Änderungen committen und pushen
2. GitHub Actions baut automatisch die Website
3. Deployment auf GitHub.io erfolgt automatisch
4. Website ist sofort unter `https://schaeftlarnerkonzerte.github.io/` verfügbar

## 2. Production Phase (Strato)

### Manuelles Deployment
- **Trigger**: Manuell über GitHub Actions
- **Ziel**: `https://schaeftlarner-konzerte.de`
- **Zweck**: Live-Website für Besucher

### Deployment-Prozess

#### Schritt 1: GitHub Repository öffnen
1. Gehe zu: `https://github.com/schaeftlarnerkonzerte/schaeftlarnerkonzerte.github.io`
2. Klicke auf **"Actions"** Tab

#### Schritt 2: Strato Deployment starten
1. Wähle **"Deploy to Strato (Production)"** Workflow
2. Klicke **"Run workflow"**
3. **Wichtig**: Wähle `"ja"` bei "Bestätigung für Production Deployment"
4. Klicke **"Run workflow"** (grüner Button)

#### Schritt 3: Deployment überwachen
1. Der Workflow startet automatisch
2. **Build Phase**: Hugo erstellt die Production-Website
3. **Deploy Phase**: Upload via SFTP zu Strato
4. **Fertig**: Website ist live unter `https://schaeftlarner-konzerte.de`

## Konfiguration der Strato-Zugangsdaten

### GitHub Secrets einrichten

Die SFTP-Zugangsdaten müssen als GitHub Secrets hinterlegt werden:

1. **Repository Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** für jeden Wert:

```
STRATO_SFTP_HOST     = ftp.strato.de (oder Ihr SFTP-Host)
STRATO_SFTP_USER     = ihr-benutzername
STRATO_SFTP_PASSWORD = ihr-passwort
STRATO_SFTP_PORT     = 22 (Standard SFTP Port)
STRATO_SFTP_PATH     = / (oder Pfad zu Ihrem Web-Verzeichnis)
```

### Strato SFTP-Zugang aktivieren

Falls noch nicht geschehen:
1. **Strato Kunden-Login** → **Paket-Verwaltung**
2. **SSH/SFTP-Zugang** aktivieren
3. **Zugangsdaten** notieren für GitHub Secrets

## Sicherheitsfeatures

### Bestätigungspflicht
- **Manueller Trigger**: Kein versehentliches Deployment
- **Bestätigung erforderlich**: Dropdown muss auf "ja" gesetzt werden
- **Environment Protection**: Production-Environment kann zusätzlich geschützt werden

### Getrennte Builds
- **GitHub.io**: Verwendet GitHub.io baseURL
- **Strato**: Verwendet schaeftlarner-konzerte.de baseURL
- **Optimiert**: Production-Build mit --gc --minify

## Typischer Workflow

### Neue Inhalte hinzufügen
1. **Lokal entwickeln**: `hugo server` für lokale Tests
2. **Committen & Pushen**: Änderungen auf GitHub
3. **Review auf GitHub.io**: Automatisch verfügbar
4. **Testen**: Alle Funktionen auf GitHub.io prüfen
5. **Production Deployment**: Manuell zu Strato deployen

### Beispiel: Neues Konzert hinzufügen
```bash
# 1. Lokale Änderungen
git add content/programm/2025.md
git commit -m "Neues Konzert: Sommernachtskonzert hinzugefügt"
git push origin main

# 2. Automatisch verfügbar auf:
# https://schaeftlarnerkonzerte.github.io/

# 3. Nach Review: Manuelles Deployment zu Strato
# über GitHub Actions Interface
```

## Vorteile dieses Workflows

### Sicherheit
- **Kein versehentliches Production-Deployment**
- **Review-Möglichkeit** auf GitHub.io
- **Getrennte Umgebungen** für Development und Production

### Flexibilität
- **Schnelle Iteration** auf GitHub.io
- **Kontrolliertes Release** auf Production
- **Rollback-Möglichkeit** durch Git-History

### Qualitätssicherung
- **Testing auf GitHub.io** vor Production
- **Verschiedene baseURLs** für verschiedene Umgebungen
- **Build-Logs** für Debugging

## Troubleshooting

### Deployment schlägt fehl
1. **GitHub Actions Logs** prüfen
2. **SFTP-Zugangsdaten** in Secrets überprüfen
3. **Strato-Verbindung** testen

### Website zeigt alte Inhalte
1. **Browser-Cache** leeren
2. **CDN-Cache** bei Strato prüfen (falls vorhanden)
3. **Deployment-Logs** auf Fehler prüfen

### SFTP-Verbindungsprobleme
1. **Host/Port** in Secrets überprüfen
2. **Benutzername/Passwort** aktualisieren
3. **Strato SSH/SFTP-Zugang** aktiviert?

## Support

Bei Problemen:
- **GitHub Actions Logs** analysieren
- **Strato Support** für SFTP-Probleme kontaktieren
- **Repository Issues** für technische Fragen erstellen