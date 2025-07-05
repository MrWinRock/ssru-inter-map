# Deploy to GitHub Pages
Write-Host "Building the project..." -ForegroundColor Green
bun run build

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Green
Write-Host "Make sure to:" -ForegroundColor Yellow
Write-Host "1. Commit and push your changes to main branch" -ForegroundColor Yellow
Write-Host "2. Enable GitHub Pages in your repository settings" -ForegroundColor Yellow
Write-Host "3. Set the source to 'GitHub Actions' in Pages settings" -ForegroundColor Yellow

Write-Host "Project built successfully in ./dist directory" -ForegroundColor Green
Write-Host "The GitHub Action will automatically deploy when you push to main branch" -ForegroundColor Green
