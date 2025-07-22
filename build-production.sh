#!/bin/bash
# Build für Produktion (mit korrekter baseURL)
echo "Building Hugo site for production..."
hugo --baseURL "https://schaeftlarner-konzerte.de" --gc --minify
echo "Production site built in public/"