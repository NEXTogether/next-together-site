#!/bin/bash
# Script automatico per setup Google Cloud Run deployment

echo "🚀 Setup automatico Google Cloud per next-together.com"
echo "======================================================"

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variabili configurazione
PROJECT_ID="next-together-site"
SERVICE_NAME="next-together-site"
REGION="europe-west1"
DOMAIN="next-together.com"

echo -e "${YELLOW}Configurazione:${NC}"
echo "Project ID: $PROJECT_ID"
echo "Service: $SERVICE_NAME"
echo "Region: $REGION"
echo "Domain: $DOMAIN"
echo ""

# 1. Login Google Cloud
echo -e "${YELLOW}1. Login Google Cloud...${NC}"
gcloud auth login

# 2. Crea progetto (se non esiste)
echo -e "${YELLOW}2. Creazione progetto...${NC}"
gcloud projects create $PROJECT_ID --name="Next Together Site" || echo "Progetto già esistente"

# 3. Seleziona progetto
echo -e "${YELLOW}3. Selezione progetto...${NC}"
gcloud config set project $PROJECT_ID

# 4. Abilita billing (richiesto per Cloud Run)
echo -e "${YELLOW}4. Abilitazione billing...${NC}"
echo -e "${RED}IMPORTANTE: Devi abilitare il billing manualmente su https://console.cloud.google.com/billing${NC}"
echo "Premi ENTER quando hai abilitato il billing..."
read

# 5. Abilita API necessarie
echo -e "${YELLOW}5. Abilitazione API...${NC}"
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com

# 6. Deploy su Cloud Run
echo -e "${YELLOW}6. Deploy su Cloud Run...${NC}"
gcloud run deploy $SERVICE_NAME \
  --source . \
  --region=$REGION \
  --allow-unauthenticated \
  --port=8080 \
  --memory=1Gi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=10 \
  --set-env-vars="NODE_ENV=production,NEXT_PUBLIC_SITE_URL=https://$DOMAIN"

# 7. Configurazione dominio personalizzato
echo -e "${YELLOW}7. Configurazione dominio personalizzato...${NC}"
echo -e "${YELLOW}Aggiungo mapping per $DOMAIN...${NC}"
gcloud run domain-mappings create \
  --service=$SERVICE_NAME \
  --domain=$DOMAIN \
  --region=$REGION

echo -e "${GREEN}✅ Deployment completato!${NC}"
echo ""
echo -e "${YELLOW}📋 Prossimi passi:${NC}"
echo "1. Configura DNS del tuo dominio:"
echo "   - Vai al tuo provider DNS"
echo "   - Aggiungi record CNAME:"
echo "     Nome: $DOMAIN"
echo "     Valore: ghs.googlehosted.com"
echo ""
echo "2. Verifica deployment:"
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)")
echo "   URL temporaneo: $SERVICE_URL"
echo "   URL finale: https://$DOMAIN"
echo ""
echo -e "${GREEN}🎉 Il tuo sito sarà disponibile su https://$DOMAIN tra 5-48 ore!${NC}"