# Script PowerShell per deployment automatico su Google Cloud Run
# Configurazione per next-togetWrite-Host "   Configurazione mapping per ${DOMAIN}..." -ForegroundColor White

$domainResult = gcloud run domain-mappings create `
  --service=$SERVICE_NAME `
  --domain=$DOMAIN `
  --region=$REGION 2>&1m

Write-Host "🚀 Setup automatico Google Cloud per next-together.com" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

# Variabili configurazione
$PROJECT_ID = "next-together-site"
$SERVICE_NAME = "next-together-site"
$REGION = "europe-west1"
$DOMAIN = "next-together.com"

Write-Host "Configurazione:" -ForegroundColor Yellow
Write-Host "Project ID: $PROJECT_ID"
Write-Host "Service: $SERVICE_NAME" 
Write-Host "Region: $REGION"
Write-Host "Domain: $DOMAIN"
Write-Host ""

# Funzione per controllo errori
function Check-Command {
    param($CommandName)
    if (!(Get-Command $CommandName -ErrorAction SilentlyContinue)) {
        Write-Host "❌ $CommandName non trovato. Installare Google Cloud CLI prima." -ForegroundColor Red
        exit 1
    }
}

# 1. Controllo Google Cloud CLI
Write-Host "1. Controllo Google Cloud CLI..." -ForegroundColor Yellow
Check-Command "gcloud"

# 2. Login Google Cloud
Write-Host "2. Login Google Cloud..." -ForegroundColor Yellow
gcloud auth login

# 3. Crea progetto (se non esiste)
Write-Host "3. Creazione progetto..." -ForegroundColor Yellow
$createResult = gcloud projects create $PROJECT_ID --name="Next Together Site" 2>&1
if ($LASTEXITCODE -ne 0 -and $createResult -notmatch "already exists") {
    Write-Host "Errore nella creazione del progetto: $createResult" -ForegroundColor Red
}

# 4. Seleziona progetto
Write-Host "4. Selezione progetto..." -ForegroundColor Yellow
gcloud config set project $PROJECT_ID

# 5. Billing warning
Write-Host "5. Controllo billing..." -ForegroundColor Yellow
Write-Host "⚠️  IMPORTANTE: Assicurati che il billing sia abilitato!" -ForegroundColor Red
Write-Host "   Vai su: https://console.cloud.google.com/billing" -ForegroundColor White
Write-Host "   Premi ENTER quando hai verificato il billing..." -ForegroundColor White
Read-Host

# 6. Abilita API necessarie
Write-Host "6. Abilitazione API..." -ForegroundColor Yellow
Write-Host "   - Cloud Run API..."
gcloud services enable run.googleapis.com
Write-Host "   - Cloud Build API..."
gcloud services enable cloudbuild.googleapis.com
Write-Host "   - Container Registry API..."
gcloud services enable containerregistry.googleapis.com

# 7. Build applicazione Next.js
Write-Host "7. Build applicazione..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Errore durante il build. Controlla i log sopra." -ForegroundColor Red
    exit 1
}

# 8. Deploy su Cloud Run
Write-Host "8. Deploy su Cloud Run..." -ForegroundColor Yellow
Write-Host "   Questo può richiedere alcuni minuti..." -ForegroundColor White

gcloud run deploy $SERVICE_NAME `
  --source . `
  --region=$REGION `
  --allow-unauthenticated `
  --port=8080 `
  --memory=1Gi `
  --cpu=1 `
  --min-instances=0 `
  --max-instances=10 `
  --set-env-vars="NODE_ENV=production,NEXT_PUBLIC_SITE_URL=https://$DOMAIN"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Errore durante il deploy. Controlla i log sopra." -ForegroundColor Red
    exit 1
}

# 9. Ottieni URL del servizio
Write-Host "9. Recupero URL servizio..." -ForegroundColor Yellow
$SERVICE_URL = gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)"

# 10. Configurazione dominio personalizzato
Write-Host "10. Configurazione dominio personalizzato..." -ForegroundColor Yellow
Write-Host "    Configurazione mapping per $DOMAIN..." -ForegroundColor White

$domainResult = gcloud run domain-mappings create `
  --service=$SERVICE_NAME `
  --domain=$DOMAIN `
  --region=$REGION 2>&1

Write-Host ""
Write-Host "✅ Deployment completato!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Informazioni deployment:" -ForegroundColor Yellow
Write-Host "   URL temporaneo Cloud Run: $SERVICE_URL" -ForegroundColor White
Write-Host "   URL finale con dominio: https://$DOMAIN" -ForegroundColor White
Write-Host ""
Write-Host "📋 Prossimi passi:" -ForegroundColor Yellow
Write-Host "1. Configura DNS del tuo dominio ${DOMAIN}:" -ForegroundColor White
Write-Host "   - Vai al pannello DNS del tuo provider" -ForegroundColor White
Write-Host "   - Aggiungi record CNAME:" -ForegroundColor White
Write-Host "     Nome: @ (o next-together.com)" -ForegroundColor White
Write-Host "     Valore: ghs.googlehosted.com" -ForegroundColor White
Write-Host "     TTL: 300 (5 minuti)" -ForegroundColor White
Write-Host ""
Write-Host "2. Verifica il certificato SSL:" -ForegroundColor White
Write-Host "   Il certificato SSL verrà generato automaticamente" -ForegroundColor White
Write-Host "   dopo la configurazione DNS (può richiedere 5-48 ore)" -ForegroundColor White
Write-Host ""
Write-Host "3. Test del sito:" -ForegroundColor White
Write-Host "   URL temporaneo (attivo ora): $SERVICE_URL" -ForegroundColor Green
Write-Host "   URL finale (dopo DNS): https://${DOMAIN}" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Il tuo sito Next.js è ora deployato su Google Cloud Run!" -ForegroundColor Cyan

# Apri URL temporaneo nel browser
Write-Host ""
Write-Host "Vuoi aprire il sito nel browser? (s/n): " -ForegroundColor Yellow -NoNewline
$openBrowser = Read-Host
if ($openBrowser -eq "s" -or $openBrowser -eq "S") {
    Start-Process $SERVICE_URL
}