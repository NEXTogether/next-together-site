# Deploy semplice per Google Cloud Run
Write-Host "Deploy Next Together su Google Cloud Run" -ForegroundColor Cyan

# Login
Write-Host "1. Login Google Cloud..." -ForegroundColor Yellow
gcloud auth login

# Crea progetto
Write-Host "2. Creazione progetto..." -ForegroundColor Yellow
gcloud projects create next-together-site --name="Next Together Site"
gcloud config set project next-together-site

# Abilita API
Write-Host "3. Abilitazione API..." -ForegroundColor Yellow
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Deploy
Write-Host "4. Deploy su Cloud Run..." -ForegroundColor Yellow
gcloud run deploy next-together-site --source . --region=europe-west1 --allow-unauthenticated --port=8080

Write-Host "Deploy completato!" -ForegroundColor Green