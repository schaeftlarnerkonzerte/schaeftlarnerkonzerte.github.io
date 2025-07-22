# Schäftlarner Konzerte Website

Offizielle Website der Schäftlarner Konzerte - eine Hugo-basierte statische Website.

## 🎼 Über die Schäftlarner Konzerte

Die Schäftlarner Konzerte bieten jedes Jahr sinfonische, konzertante und Kammermusik von Barock über Klassik bis Romantik in der wunderschönen Klosterkirche Schäftlarn unter der künstlerischen Leitung von Michael Forster.

## 🚀 Website-Technologie

- **Framework:** [Hugo](https://gohugo.io/) (Static Site Generator)
- **Deployment:** GitHub Pages mit GitHub Actions
- **Styling:** Bootstrap + Custom CSS
- **Content:** Markdown-basiert für einfache Bearbeitung

## 📁 Projektstruktur

```
├── .github/workflows/    # GitHub Actions für automatisches Deployment
├── content/             # Markdown-Inhalte
│   ├── leitung/         # Informationen zur Leitung
│   ├── programm/        # Spielpläne nach Jahren
│   └── solisten/        # Solisten-Profile
├── layouts/             # Hugo Templates
├── static/              # Statische Dateien (CSS, JS, Bilder)
├── hugo.yaml            # Hugo Konfiguration
├── HOWTO-KONZERTE.md    # Anleitung für neue Konzerte
└── README.md            # Diese Datei
```

## ✏️ Inhalte bearbeiten

### Neue Konzerte hinzufügen

Siehe detaillierte Anleitung in [`HOWTO-KONZERTE.md`](./HOWTO-KONZERTE.md)

**Kurz:** Bearbeiten Sie `content/programm/JAHR.md` und fügen Sie ein neues Konzert zur `concerts:` Liste hinzu.

### Solisten-Profile bearbeiten

Solisten-Seiten befinden sich in `content/solisten/`. Jeder Solist hat eine eigene `.md` Datei.

### Andere Seiten bearbeiten

- **Startseite:** `content/_index.md`
- **Kontakt:** `content/contact.md`
- **Förderkreis:** `content/foerderkreis.md`
- **Impressum:** `content/impressum.md`
- **Datenschutz:** `content/datenschutz.md`

## 🛠️ Lokale Entwicklung

### Voraussetzungen

- [Hugo Extended](https://gohugo.io/installation/) (Version 0.128.0 oder höher)
- [Git](https://git-scm.com/)

### Setup

```bash
# Repository klonen
git clone https://github.com/schaeftlarnerkonzerte/schaeftlarnerkonzerte.github.io.git
cd schaeftlarnerkonzerte.github.io

# Lokalen Server starten
hugo server
```

Die Website ist dann unter `http://localhost:1313` erreichbar.

### Website builden

```bash
hugo
```

Die fertige Website wird im `public/` Ordner generiert.

## 🚀 Deployment

Das Deployment erfolgt automatisch über GitHub Actions:

1. **Push auf `main` Branch** → Automatisches Deployment
2. **Manuell** → Im GitHub Repository unter "Actions" → "Deploy Hugo site to Pages"

Die Website wird automatisch unter `https://schaeftlarnerkonzerte.github.io/` verfügbar.

### GitHub Pages Setup

1. Repository Settings → Pages
2. Source: "GitHub Actions" auswählen
3. Fertig! 🎉

## 📝 Wichtige Features

- ✅ **Responsive Design** - funktioniert auf allen Geräten
- ✅ **Accordion-Spielplan** - aufklappbare Konzert-Details
- ✅ **wes10brass-Link** - direkter Link von Startseite zu wes10brass-Konzert
- ✅ **Solisten-Verlinkung** - automatische Links zu Solisten-Profilen
- ✅ **Ticket-Integration** - direkte Links zu München-Ticket
- ✅ **DSGVO-konform** - vollständige Datenschutzerklärung
- ✅ **SEO-optimiert** - suchmaschinenfreundlich

## 🤝 Beitragen

1. Fork des Repositories erstellen
2. Feature Branch erstellen (`git checkout -b feature/neue-funktion`)
3. Änderungen committen (`git commit -am 'Neue Funktion hinzugefügt'`)
4. Branch pushen (`git push origin feature/neue-funktion`)
5. Pull Request erstellen

## 📞 Support

Bei Fragen oder Problemen:

- **Konzert-Inhalte:** Siehe [`HOWTO-KONZERTE.md`](./HOWTO-KONZERTE.md)
- **Technische Fragen:** GitHub Issues erstellen
- **Allgemeine Anfragen:** [kontakt@schaeftlarner-konzerte.de](mailto:kontakt@schaeftlarner-konzerte.de)

## 📄 Lizenz

© 2025 Schäftlarner Konzerte e.V. Alle Rechte vorbehalten.

---

**🎵 Erleben Sie klassische Musik in einzigartiger Atmosphäre - Schäftlarner Konzerte in der Klosterkirche Schäftlarn! 🎵**