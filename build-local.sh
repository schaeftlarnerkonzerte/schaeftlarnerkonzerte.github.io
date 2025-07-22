#!/bin/bash
# Build für lokale Nutzung (ohne Webserver)
echo "Building Hugo site for local use..."
hugo --baseURL "" --relativeURLs --uglyURLs --destination public-local
echo "Site built in public-local/ - open public-local/index.html in browser"