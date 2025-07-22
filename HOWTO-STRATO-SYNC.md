# HOWTO: Strato Synchronisation

Diese Anleitung erklärt, wie die neue Hugo-Website die alte Website auf Strato ersetzt und synchron gehalten wird.

## Synchronisations-Strategie

### Clean Slate Deployment
Der Deployment-Prozess verwendet `dangerous-clean-slate: true`, was bedeutet:

✅ **Neue Dateien**: Werden hochgeladen
✅ **Geänderte Dateien**: Werden überschrieben  
✅ **Gelöschte Dateien**: Werden vom Server entfernt
✅ **Vollständige Synchronisation**: Server-Inhalt = lokaler Build

### Was passiert beim ersten Deployment

#### Vorher (Alte Website)
```
/
├── index.html (alte Startseite)
├── konzerte.html
├── kontakt.html
├── css/
│   └── alte-styles.css
├── js/
│   └── alte-scripts.js
└── bilder/
    └── alte-fotos/
```

#### Nachher (Neue Hugo-Website)
```
/
├── index.html (neue Hugo-Startseite)
├── programm/
│   └── 2025/
├── solisten/
│   └── emanuel-graf/
├── css/
│   └── style.default.css
├── js/
│   └── bootstrap.min.js
└── img/
    └── musiker/
```

## Geschützte Dateien

### Automatisch ausgeschlossen
Diese Dateien werden **NICHT** gelöscht:
- `.htaccess` (Apache-Konfiguration)
- `.well-known/` (SSL-Zertifikate, Domain-Verifikation)
- Versteckte Dateien (beginnen mit `.`)

### Manuell zu schützende Dateien
Falls Sie zusätzliche Dateien behalten möchten, fügen Sie sie zur `exclude`-Liste hinzu:

```yaml
exclude: |
  **/.git*
  .htaccess
  .well-known/
  backup/
  alte-dateien/
  wichtige-pdfs/
```

## Sicherheitsmaßnahmen

### 1. Backup vor erstem Deployment

**Manuelles Backup erstellen:**
1. **SFTP-Client** (z.B. FileZilla) öffnen
2. **Kompletten Webspace** herunterladen
3. **Lokales Backup** erstellen: `backup-alte-website-DATUM/`

**Automatisches Backup (optional):**
```bash
# Via SFTP-Client oder Kommandozeile
sftp benutzer@ftp.strato.de
get -r / ./backup-$(date +%Y%m%d)/
```

### 2. Testlauf (Dry Run)

**Vor dem ersten echten Deployment:**
1. GitHub Actions → "Deploy to Strato"
2. **Workflow-Datei temporär ändern**: `dry-run: true`
3. **Logs prüfen**: Was würde gelöscht/geändert werden?
4. **Zurücksetzen**: `dry-run: false`

### 3. Schrittweises Vorgehen

**Empfohlener Ablauf:**
1. **Backup der alten Website** erstellen
2. **Subdomain testen** (z.B. `test.schaeftlarner-konzerte.de`)
3. **Dry-Run** auf Hauptdomain
4. **Echtes Deployment** auf Hauptdomain

## Domain-Übergang

### DNS-Einstellungen prüfen
```
schaeftlarner-konzerte.de → Strato-Server
www.schaeftlarner-konzerte.de → Strato-Server
```

### SSL-Zertifikat
- **Let's Encrypt**: Automatisch erneuert (bleibt erhalten)
- **Strato SSL**: Konfiguration prüfen

## Troubleshooting

### Problem: Alte Dateien bleiben bestehen
**Lösung:**
1. `dangerous-clean-slate: true` prüfen
2. SFTP-Pfad korrekt? (`STRATO_SFTP_PATH`)
3. Berechtigungen ausreichend?

### Problem: Wichtige Dateien gelöscht
**Lösung:**
1. Aus Backup wiederherstellen
2. `exclude`-Liste erweitern
3. Erneut deployen

### Problem: Website nicht erreichbar
**Lösung:**
1. **DNS-Propagation**: 24-48h warten
2. **Browser-Cache**: Strg+F5 oder Inkognito-Modus
3. **Strato-Status**: Server-Status prüfen

## Monitoring nach Deployment

### Checkliste
- [ ] **Startseite** lädt korrekt
- [ ] **Navigation** funktioniert
- [ ] **Konzert-Links** funktionieren
- [ ] **Bilder** werden angezeigt
- [ ] **Kontaktformular** funktioniert (falls vorhanden)
- [ ] **SSL-Zertifikat** aktiv
- [ ] **Mobile Ansicht** funktioniert

### Tools zum Testen
```bash
# Website-Status prüfen
curl -I https://schaeftlarner-konzerte.de

# SSL-Zertifikat prüfen
openssl s_client -connect schaeftlarner-konzerte.de:443

# DNS-Auflösung prüfen
nslookup schaeftlarner-konzerte.de
```

## Rollback-Plan

### Falls etwas schief geht:

#### Schneller Rollback
1. **Backup wiederherstellen** via SFTP
2. **DNS temporär umleiten** (falls nötig)
3. **Problem analysieren**

#### GitHub-Rollback
1. **Vorherigen Commit** auschecken
2. **Erneut deployen**
3. **Fix entwickeln**

## Wartung

### Regelmäßige Aufgaben
- **Monatlich**: Backup der Live-Website
- **Vor größeren Updates**: Zusätzliches Backup
- **Nach Deployment**: Funktionstest

### Automatisierung
```yaml
# Zusätzlicher Workflow für regelmäßige Backups
name: Backup Production
on:
  schedule:
    - cron: '0 2 1 * *'  # Monatlich am 1. um 2:00 Uhr
```

## Best Practices

### Deployment-Timing
- **Nicht Freitags**: Falls Probleme auftreten
- **Außerhalb Konzertzeiten**: Weniger Besucher
- **Nach ausgiebigen Tests**: Auf GitHub.io

### Kommunikation
- **Team informieren**: Vor Deployment
- **Downtime ankündigen**: Falls nötig (meist nicht)
- **Erfolg bestätigen**: Nach Deployment

---

**⚠️ Wichtig**: Der erste Deployment überschreibt die komplette alte Website. Backup ist essentiell!