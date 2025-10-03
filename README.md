# 🚀 Next Together - Google Cloud Run Deployment

Sito web Next.js per next-together.com deployato su Google Cloud Run.

## 🌟 Caratteristiche

- ⚡ **Next.js 15.5.2** con TypeScript
- 🐳 **Docker** ottimizzato per Google Cloud Run
- ☁️ **Google Cloud Run** deployment automatico
- 🔄 **CI/CD** con Google Cloud Build
- 🌐 **Dominio personalizzato** next-together.com
- 📱 **Responsive design** con Tailwind CSS
- 🔒 **Headers di sicurezza** configurati

## 🚀 Quick Start

### Sviluppo locale
```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Deploy su Google Cloud Run
```bash
# Setup Google Cloud CLI
gcloud auth login

# Deploy automatico
./deploy-quick.ps1
```

## 📁 Struttura progetto

```
📦 next-together-site/
├── 🚀 deploy-*.ps1/sh        # Script deployment automatico
├── 🐳 Dockerfile*            # Container Docker ottimizzato
├── ☁️ cloudbuild.yaml        # CI/CD Google Cloud Build
├── ⚙️ next.config.ts         # Configurazione Next.js
├── 📚 README-DEPLOYMENT.md   # Guida deployment completa
└── 🌐 src/                   # Codice sorgente
```

## 🌐 URL del sito

- **Sviluppo**: http://localhost:3000
- **Produzione**: https://next-together.com (dopo configurazione DNS)

## 📖 Documentazione completa

Vedi [README-DEPLOYMENT.md](./README-DEPLOYMENT.md) per:
- Setup Google Cloud completo
- Configurazione dominio personalizzato
- Troubleshooting
- Costi stimati

## 🛠️ Script disponibili

```bash
npm run dev          # Server sviluppo
npm run build        # Build produzione
npm run start        # Start produzione
npm run docker:build # Build container Docker
npm run gcloud:deploy-run # Deploy Google Cloud Run
```

---

**🎉 Ready per il deployment? Esegui `./deploy-quick.ps1` e segui le istruzioni!**