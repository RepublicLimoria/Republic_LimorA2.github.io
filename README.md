# 🏛️ LIMORIA - Official Sovereign Government Portal

[![React 19](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC.svg)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Gemini%20AI-Integrated-orange.svg)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Motto**: *"Peace, Progress, Prosperity"* • **শান্তি, প্রগতি, সমৃদ্ধি**  
> **Head of State**: President Limon  
> **Territorial Divisions**: 8 Regions • 32 Municipal Cities • 12.5M Population

A high-performance, official digital government portal and citizen services hub for the Republic of Limoria. Built with React 19, TypeScript, Tailwind CSS, Lucide icons, and powered by Google Gemini AI for citizen query automation.

---

## 📸 Overview & Features

### 1. Sovereign Executive & State Brand Identity
- **Royal Emerald & Gold Aesthetic**: Deep forest greens (`#04160f`, `#072418`) with regal amber and golden trim (`#f5c518`, `#ffd700`).
- **Presidential Desk Showcase**: Official desk of President Limon with gold nameplate, national flag, state seal, and Vision 2030 address.
- **National Metrics Bar**: Live counters for 8 Regions, 32 Cities, and 12.5M+ Population.
- **Live Regional Weather**: Embedded weather station (26°C Partly Cloudy in Fairview Metro).

### 2. Interactive Cartographic Territory Map
- **Interactive Island Vector Map**: Topographical vector map highlighting all 8 provinces:
  1. **Aurora** (Northern high peaks & astronomy)
  2. **Bayview** (Maritime shipping & fintech port)
  3. **Crestfall** (Canyons, waterfalls & timberlands)
  4. **Emerald** (Central fertile heartland & agro-ecology)
  5. **Fairview** (National Capital territory, parliament & supreme court)
  6. **Highland** (Alpine peaks, winter sports & minerals)
  7. **Lakeview** (Archipelago, universities & arts)
  8. **Sunridge** (Southern golden dunes & solar mega-arrays)
- **Full-Screen Geodetic Atlas**: Detailed regional dossiers with governors, populations, land areas, and landmarks.

### 3. Citizen Core Services & Digital Applications
- **Passport & Visa**: Biometric e-Passport application with online document verification.
- **National ID**: Smart citizen registration and address renewals.
- **Birth Certificate**: Instant digital vital statistics issuance.
- **Enterprise & Business Licensing**: 24-hour turnaround corporation incorporation.
- **Tax Services**: Progressive income tax calculation and secure filing.
- **Higher Education**: Scholarship portal and digital diploma records.
- **Universal Healthcare (NHS Limoria)**: Clinical bookings and health records vault.
- **Cadastral Land Records**: GIS parcel boundary search.

### 4. Bilingual Limoria AI Citizen Assistant
- Interactive floating chat widget in both **English** and **Bengali (বাংলা)**.
- Integrated with Google Gemini 2.5 SDK with an offline sovereign knowledge base fallback.
- Instant action chips for rapid access to services, geography, and news.

### 5. Media, Events & Documentaries
- **Discover Limoria**: High-definition video player with chapter bookmarks.
- **National Press Bulletin**: Independence Day coverage, infrastructure updates, and bilateral summits.
- **Cultural & State Events Calendar**: RSVP and livestream schedules.

---

## 💻 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 with custom royal gold gradients & glassmorphism
- **Icons**: Lucide React
- **AI Engine**: `@google/genai` (Google Gemini 2.5 Flash)
- **Motion**: Motion (Framer Motion v12)

---

## 🚀 Getting Started

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/limoria-government-portal.git
cd limoria-government-portal
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Configure environment variables (Optional for AI)
Create a `.env` file in the root directory:
\`\`\`env
GEMINI_API_KEY="your-gemini-api-key"
\`\`\`

### 4. Run the development server
\`\`\`bash
npm run dev
\`\`\`
The application will launch at `http://localhost:3000`.

---

## 📦 How to Push to GitHub

\`\`\`bash
# Initialize git if not already initialized
git init

# Add all project files
git add .

# Commit changes
git commit -m "feat: complete Limoria government portal & citizen services"

# Create or rename branch to main
git branch -M main

# Link your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/limoria-government-portal.git

# Push to GitHub
git push -u origin main
\`\`\`

---

## 🌐 Deploying to GitHub Pages

You can easily host this portal on GitHub Pages for free!

1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Create `.github/workflows/deploy.yml` with the following content:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build production bundle
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

---

## 🏛️ License

Distributed under the MIT License. Developed with pride for the Sovereign Republic of Limoria.
