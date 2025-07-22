# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for Schäftlarner Konzerte, a classical music concert series founded in 1968 by Benno Forster and now led by his son Michael Forster. The website is built with Hugo, a static site generator, and showcases concerts featuring musicians from Munich's three major symphony orchestras.

## Common Commands

### Development
- `hugo server` - Start local development server (site available at http://localhost:1313)
- `hugo server --drafts` - Include draft content in local development
- `hugo` - Build production-ready static site to `public/` directory
- `hugo --gc --minify` - Build with garbage collection and minification (production build)

### Content Management
- Content is managed through Markdown files in `content/` directory
- Concert programs are defined in YAML front matter (see HOWTO-KONZERTE.md)
- No database required - all content is file-based

## Architecture

### Hugo Static Site Generator
**Configuration**
- Primary config: `hugo.yaml` (German language site)
- Backup config: `hugo.toml` (minimal fallback configuration)
- Base URL: https://schaeftlarner-konzerte.de

**Content Structure**
- `content/` - All site content in Markdown with YAML front matter
  - `_index.md` - Homepage content and welcome message from Michael Forster
  - `programm/` - Concert programs organized by year (2025.md, 2026.md) - **All concert data stored here**
  - `solisten/` - Individual musician profile pages
  - `leitung/` - Leadership information (Benno and Michael Forster)
  - Static pages: contact.md, foerderkreis.md, tickets.md, etc.

**Template System**
- `layouts/_default/baseof.html` - Base template with HTML structure, Bootstrap CSS/JS
- `layouts/partials/` - Reusable components (navigation, footer, cookie-consent)
- `layouts/_default/spielplan.html` - Concert program template (reads YAML data from programm/ files)
- Uses Bootstrap framework with custom styling

**Static Assets**
- `static/` - Static files served directly (CSS, JS, images, fonts)
- FontAwesome 6.2.0 with local hosting for icons
- Bootstrap + jQuery for responsive design
- Custom CSS themes with multiple color variations

### Content Management System
**Concert Data Structure**
All concerts are centrally managed in YAML front matter in `content/programm/YEAR.md` files. This is the **only** location for concert data:
```yaml
concerts:
  - title: "Concert Name"
    date: "2025-05-10"
    time: "19:00"
    artists: ["Soloist Name, Instrument", "Leitung: Michael Forster"]
    program: ["Composer: Work 1", "Composer: Work 2"]
    ticket_url: "https://www.muenchenticket.de/..."
```

**Special Features**
- Automatic concert sorting by date
- Accordion-style concert program display
- Direct links from homepage to specific concerts (wes10brass integration)
- Automatic linking to soloist profile pages
- München-Ticket integration for ticket sales

### Deployment Pipeline
**GitHub Actions** (`.github/workflows/hugo.yml`)
- Triggers on push to main/master branch
- Uses Hugo Extended v0.148.1
- Builds with production optimization (--gc --minify)
- Creates ZIP archive of built site
- Uploads as GitHub release for easy deployment
- Retention: 30 days for build artifacts

**Production Build Process**
1. Install Hugo CLI and Dart Sass
2. Build with `hugo --gc --minify --baseURL "https://schaeftlarner-konzerte.de/"`
3. Package as timestamped ZIP file
4. Upload as GitHub release

## Key Components

### Navigation System
Hierarchical menu structure defined in `hugo.yaml`:
- Home (with subpages for different sections)
- Programm (concert programs by year)
- Tickets (with pricing information)
- Förderkreis (supporting members)
- Kontakt (contact and location)

### Concert Program Management
- Each year has dedicated file: `content/programm/2025.md`
- Concert data in YAML front matter enables structured content
- Template system automatically generates accordion displays
- Cross-linking between concerts and soloist profiles

### Musician Profiles
- Individual markdown files in `content/solisten/`
- Standardized URL structure: `/solisten/first-last/`
- Associated musician photos in `static/img/musiker/`
- Automatic linking from concert programs

## Development Workflow

### Adding New Concerts
1. Edit appropriate year file in `content/programm/` (e.g., `2025.md`)
2. Add concert data to YAML `concerts:` array in the front matter
3. Follow format specified in HOWTO-KONZERTE.md
4. Hugo automatically handles sorting and display
5. **Important**: Do NOT create individual concert files - all data goes in the year file

### Managing Soloist Profiles  
1. Create new `.md` file in `content/solisten/`
2. Add musician photo to `static/img/musiker/`
3. Use consistent URL-friendly naming (lowercase, hyphens)

### Site Customization
- CSS themes: Multiple color variations in `static/css/style.*.css`
- Custom styling: `static/css/custom.css`
- Bootstrap 3 framework with FontAwesome 6 icons
- Mobile-responsive design

### Content Updates
All content updates are file-based:
- German language content throughout
- Markdown files with YAML front matter
- No database migrations or complex deployments required
- Version controlled content enables easy rollbacks

## Important Notes

- **Hugo Version**: Requires Hugo Extended (uses SCSS processing)
- **Language**: German language site (languageCode: 'de')
- **URL Structure**: Clean URLs without .html extensions
- **SEO**: Meta tags and descriptions configured in templates
- **Performance**: Minified and optimized for production builds
- **Security**: No server-side processing, static files only