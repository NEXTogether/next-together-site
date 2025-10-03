# Script semplificato per primo deployment Google Cloud Run
Write-Host "🚀 Deployment Next Together su Google Cloud Run" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan

# Variabili
$PROJECT_ID = "next-together-site"
$SERVICE_NAME = "next-together-site" 
$REGION = "europe-west1"

Write-Host ""
Write-Host "Configurazione:" -ForegroundColor Yellow
Write-Host "Project ID: $PROJECT_ID"
Write-Host "Service: $SERVICE_NAME"
Write-Host "Region: $REGION"
Write-Host ""

# Step 1: Login
Write-Host "1. Login Google Cloud..." -ForegroundColor Yellow
gcloud auth login

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Errore durante il login" -ForegroundColor Red
    exit 1
}

# Step 2: Crea progetto
Write-Host "2. Creazione progetto..." -ForegroundColor Yellow
gcloud projects create $PROJECT_ID --name="Next Together Site" 2>$null
Write-Host "   Progetto creato o già esistente" -ForegroundColor Green

# Step 3: Seleziona progetto  
Write-Host "3. Selezione progetto..." -ForegroundColor Yellow
gcloud config set project $PROJECT_ID

# Step 4: Billing warning
Write-Host "4. ⚠️  IMPORTANTE: Billing" -ForegroundColor Red
Write-Host "   Vai su: https://console.cloud.google.com/billing" -ForegroundColor White
Write-Host "   Assicurati che il billing sia abilitato per il progetto" -ForegroundColor White
Write-Host "   Premi ENTER quando hai verificato..." -ForegroundColor White
Read-Host

# Step 5: Abilita API
Write-Host "5. Abilitazione API necessarie..." -ForegroundColor Yellow
Write-Host "   - Cloud Run API..."
gcloud services enable run.googleapis.com --quiet
Write-Host "   - Cloud Build API..." 
gcloud services enable cloudbuild.googleapis.com --quiet
Write-Host "   - Container Registry API..."
gcloud services enable containerregistry.googleapis.com --quiet
Write-Host "   ✅ API abilitate" -ForegroundColor Green

# Step 6: Deploy
Write-Host "6. Deploy su Cloud Run..." -ForegroundColor Yellow
Write-Host "   Questo richiederà alcuni minuti..." -ForegroundColor White

gcloud run deploy $SERVICE_NAME `
  --source . `
  --region=$REGION `
  --allow-unauthenticated `
  --port=8080 `
  --memory=1Gi `
  --cpu=1 `
  --min-instances=0 `
  --max-instances=10 `
  --set-env-vars="NODE_ENV=production,NEXT_PUBLIC_SITE_URL=https://next-together.com"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deploy completato con successo!" -ForegroundColor Green
    
    # Ottieni URL
    $SERVICE_URL = gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)" 2>$null
    
    Write-Host ""
    Write-Host "📊 Risultato deployment:" -ForegroundColor Yellow
    Write-Host "   URL Cloud Run: $SERVICE_URL" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Per configurare il dominio next-together.com:" -ForegroundColor Yellow
    Write-Host "   1. Acquista il dominio se non l'hai già fatto"
    Write-Host "   2. Esegui: gcloud run domain-mappings create --service=$SERVICE_NAME --domain=next-together.com --region=$REGION"
    Write-Host "   3. Configura DNS: CNAME next-together.com → ghs.googlehosted.com"
    Write-Host ""
    Write-Host "🎉 Il tuo sito è ora online!" -ForegroundColor Cyan
    
    # Apri nel browser
    Write-Host "Aprire il sito nel browser? (s/n): " -ForegroundColor Yellow -NoNewline
    $open = Read-Host
    if ($open -eq "s") {
        Start-Process $SERVICE_URL
    }
} else {
    Write-Host "❌ Errore durante il deploy" -ForegroundColor Red
    Write-Host "Controlla i log sopra per maggiori dettagli" -ForegroundColor White
}