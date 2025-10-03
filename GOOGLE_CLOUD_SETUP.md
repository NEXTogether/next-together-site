# Configurazione Google Cloud per dominio personalizzato next-together.com

## Passaggi per configurare il dominio:

### 1. Setup Google Cloud Project
```bash
# Installa Google Cloud CLI se non hai già fatto
# https://cloud.google.com/sdk/docs/install

# Login e seleziona progetto
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

### 2. Abilita le API necessarie
```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable appengine.googleapis.com
```

### 3. Deploy su Cloud Run (raccomandato per Next.js)
```bash
# Build e deploy in un comando
npm run gcloud:deploy-run

# Oppure usando Cloud Build per CI/CD
npm run gcloud:build
```

### 4. Configurare dominio personalizzato
```bash
# Aggiungi dominio personalizzato a Cloud Run
gcloud run domain-mappings create \
  --service next-together-site \
  --domain next-together.com \
  --region europe-west1
```

### 5. DNS Configuration
Aggiungi questi record DNS al tuo provider di dominio:

**Per Cloud Run:**
- Type: CNAME
- Name: next-together.com
- Value: ghs.googlehosted.com

**Per App Engine:**
- Type: CNAME  
- Name: next-together.com
- Value: ghs.googlehosted.com

### 6. Verifica dominio
- Vai su Google Search Console
- Verifica la proprietà del dominio next-together.com
- Aspetta la propagazione DNS (può richiedere fino a 48 ore)

### Costi stimati:
- Cloud Run: ~5-20€/mese (based on traffic)
- Dominio: ~10-15€/anno
- Storage: ~1-5€/mese

### Monitoraggio:
- Cloud Run dashboard: https://console.cloud.google.com/run
- Logs: `gcloud run logs tail next-together-site --region=europe-west1`