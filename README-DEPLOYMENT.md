# 🚀 Next Together - Deployment Google Cloud Run

Deploy automatico del sito Next.js su Google Cloud Run con dominio personalizzato `next-together.com`.

## 📋 Prerequisiti

- [x] ✅ Node.js e npm installati
- [x] ✅ Codice Next.js buildato correttamente 
- [ ] ⏳ Google Cloud CLI installato
- [ ] ⏳ Account Google Cloud con billing abilitato
- [ ] ⏳ Dominio `next-together.com` acquistato

## 🎯 Deployment Automatico

### Opzione 1: Script PowerShell (Raccomandato per Windows)

```powershell
# Esegui questo comando nel terminale
.\deploy-gcloud.ps1
```

### Opzione 2: Script Bash (Linux/macOS)

```bash
chmod +x deploy-gcloud.sh
./deploy-gcloud.sh
```

### Opzione 3: Comandi manuali

```bash
# 1. Login Google Cloud
gcloud auth login

# 2. Crea e seleziona progetto
gcloud projects create next-together-site --name="Next Together Site"
gcloud config set project next-together-site

# 3. Abilita API
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# 4. Deploy su Cloud Run
gcloud run deploy next-together-site \
  --source . \
  --region=europe-west1 \
  --allow-unauthenticated \
  --port=8080 \
  --memory=1Gi \
  --cpu=1 \
  --set-env-vars="NODE_ENV=production,NEXT_PUBLIC_SITE_URL=https://next-together.com"

# 5. Configura dominio personalizzato
gcloud run domain-mappings create \
  --service=next-together-site \
  --domain=next-together.com \
  --region=europe-west1
```

## 🌐 Configurazione DNS

Dopo il deployment, configura il DNS del dominio:

### Record CNAME da aggiungere:
```
Nome: @ (oppure next-together.com)
Tipo: CNAME
Valore: ghs.googlehosted.com
TTL: 300 (5 minuti)
```

### Provider DNS comuni:
- **GoDaddy**: DNS Management → Add Record → CNAME
- **Cloudflare**: DNS → Add record → CNAME
- **Namecheap**: Domain List → Manage → Advanced DNS

## 📁 File di configurazione inclusi

```
📦 next-together-site/
├── 🐳 Dockerfile              # Container Docker ottimizzato
├── 🐳 Dockerfile.optimized    # Versione avanzata del Docker
├── ☁️  app.yaml               # Configurazione App Engine
├── ☁️  cloudbuild.yaml        # CI/CD automatico
├── ☁️  cloudrun-service.yaml  # Configurazione Cloud Run
├── 🚀 deploy-gcloud.ps1       # Script deployment Windows
├── 🚀 deploy-gcloud.sh        # Script deployment Linux/macOS
├── ⚙️  deployment-config.json  # Configurazione completa
├── 🔧 .gcloudignore           # File da ignorare nel deploy
├── 🔧 .env.production         # Variabili ambiente produzione
└── 📚 GOOGLE_CLOUD_SETUP.md   # Guida dettagliata setup
```

## 🔧 Configurazione attuale

### Ambiente di produzione:
- **URL finale**: https://next-together.com
- **Regione**: europe-west1 (Belgio)
- **Memoria**: 1GB
- **CPU**: 1 vCPU
- **Scaling**: 0-10 istanze
- **Porta**: 8080

### Variabili ambiente:
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://next-together.com
PORT=8080
HOSTNAME=0.0.0.0
```

## 💰 Costi stimati mensili

| Servizio | Costo | Descrizione |
|----------|-------|-------------|
| Cloud Run | €5-20 | Based su richieste e tempo di CPU |
| Bandwidth | €1-5 | Traffico in uscita |
| Storage | €1-2 | Container images |
| **Totale** | **€7-27** | Dipende dal traffico |

### Tier gratuito Google Cloud:
- 2 milioni di richieste/mese GRATIS
- 400.000 GB-secondi/mese GRATIS
- 200.000 vCPU-secondi/mese GRATIS

## 🚀 Stati del deployment

### ✅ Completato:
- [x] Configurazione Next.js per produzione
- [x] Docker file ottimizzato per Cloud Run
- [x] Script di deployment automatico
- [x] Configurazione CI/CD con Cloud Build
- [x] Setup variabili ambiente
- [x] Configurazione sicurezza e headers

### ⏳ Da completare:
- [ ] Installazione Google Cloud CLI
- [ ] Creazione progetto Google Cloud
- [ ] Abilitazione billing
- [ ] Esecuzione deployment
- [ ] Configurazione DNS dominio
- [ ] Verifica certificato SSL

## 🔍 Test locale

### Test build:
```bash
npm run build
npm run start
```

### Test Docker:
```bash
# Build immagine
docker build -t next-together-site -f Dockerfile.optimized .

# Run container
docker run -p 8080:8080 next-together-site

# Test su http://localhost:8080
```

## 🆘 Troubleshooting

### Errore build:
```bash
# Pulisci cache Next.js
rm -rf .next
npm run build
```

### Errore Docker:
```bash
# Verifica Docker installato
docker --version

# Test build semplice
docker build -t test-next .
```

### Errore Google Cloud:
```bash
# Verifica login
gcloud auth list

# Verifica progetto
gcloud config get-value project

# Verifica billing
gcloud billing accounts list
```

## 📞 Supporto

In caso di problemi:
1. Controlla i log: `gcloud run logs tail next-together-site --region=europe-west1`
2. Verifica stato servizio: `gcloud run services describe next-together-site --region=europe-west1`
3. Controlla configurazione DNS
4. Attendi propagazione DNS (fino a 48 ore)

## 🎉 Risultato finale

Dopo il deployment completo avrai:
- ✅ Sito live su https://next-together.com
- ✅ Certificato SSL automatico
- ✅ Scaling automatico 0-10 istanze
- ✅ CDN globale di Google
- ✅ Monitoring e logging inclusi
- ✅ CI/CD per aggiornamenti futuri

---

**🚀 Ready per il deployment? Esegui `.\deploy-gcloud.ps1` e segui le istruzioni!**