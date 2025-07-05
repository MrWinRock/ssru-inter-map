#!/bin/bash

# Deploy to GitHub Pages
echo "Building the project..."
bun run build

echo "Deploying to GitHub Pages..."
echo "Make sure to:"
echo "1. Commit and push your changes to main branch"
echo "2. Enable GitHub Pages in your repository settings"
echo "3. Set the source to 'GitHub Actions' in Pages settings"

echo "Project built successfully in ./dist directory"
echo "The GitHub Action will automatically deploy when you push to main branch"
