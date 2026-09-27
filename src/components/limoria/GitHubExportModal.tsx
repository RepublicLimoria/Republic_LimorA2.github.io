import React, { useState } from 'react';
import { 
  Github, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink, 
  FileCode, 
  BookOpen, 
  Layers, 
  Rocket, 
  X 
} from 'lucide-react';
import { Language } from '../../types/limoria.ts';

interface GitHubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const GitHubExportModal: React.FC<GitHubExportModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const gitCommands = `# 1. Initialize Git repository
git init
git add .
git commit -m "feat: complete Limoria government portal & citizen services"

# 2. Rename branch to main
git branch -M main

# 3. Add your GitHub remote repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/limoria-government-portal.git

# 4. Push code to GitHub
git push -u origin main
`;

  const readmeContent = `# 🏛️ LIMORIA - Official Government Portal

[![React 19](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC.svg)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-Integrated-orange.svg)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Motto**: *"Peace, Progress, Prosperity"*  
> **Head of State**: President Limon  
> **Territory**: 8 Regions • 32 Cities • 12.5M Population

CivicPort is a national-grade digital government portal designed for public administration, civic transparency, and seamless citizen services delivery.

---

## 🌟 Key Features

- 🦅 **Sovereign Presidential & State Branding**: Deep emerald & royal gold palette, presidential desk spotlight, official coat of arms crest, and live state weather.
- 🗺️ **Interactive 8-Region Island Map**: Interactive vector terrain atlas exploring all 8 provinces (Aurora, Bayview, Crestfall, Emerald, Fairview, Highland, Lakeview, Sunridge) with demographic dossiers.
- 📑 **8 Citizen Core Services**:
  - Passport & Visa Processing
  - National Smart ID Registration
  - Official Birth Certificates
  - Enterprise & Business Licensing (24h turnaround)
  - Progressive Tax Computation & E-Filing
  - Higher Education & Scholarship Portal
  - Universal Healthcare Records (NHS Limoria)
  - Cadastral Land & Deed Records
- 🤖 **Bilingual Limoria Citizen AI Assistant**: Powered by Google Gemini with offline sovereign intelligence fallback in both English and Bengali (বাংলা).
- 📰 **State Media & News Bulletin**: Independence Day celebrations, infrastructure updates, diplomatic addresses.
- 📱 **PWA Installable & Mobile Responsive**: Optimized for desktop monitors, tablets, and smartphones.
- 🌓 **High Contrast / Daylight Switcher & Accessibility Controls**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/limoria-government-portal.git

# Enter the project directory
cd limoria-government-portal

# Install dependencies
npm install

# Start local development server
npm run dev
\`\`\`
Visit \`http://localhost:3000\` in your browser.

---

## 🚢 Deploy to GitHub Pages

Add this GitHub Actions workflow at \`.github/workflows/deploy.yml\`:

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
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build project
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

## 🏛️ Built with Pride for a Better Tomorrow
Designed for modern sovereign public administrations and civic open-source development.
`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#072418] border-2 border-[#e2b43b] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0a2e1f] border-b border-[#1b5a3e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#12422f] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5c518] leading-tight">
                Publish This Website on GitHub
              </h3>
              <p className="text-xs text-emerald-200">
                Ready-to-push repository commands, documentation, and GitHub Pages CI/CD workflow
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#051c13] hover:bg-[#12422f] text-emerald-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Tabs / Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-sm">
          
          {/* Quick steps banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#0d3b28] to-[#072519] border border-[#1b583f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-[#ffd700] text-sm flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Ready for GitHub & Free Hosting</span>
              </div>
              <p className="text-xs text-emerald-100/90 mt-1 max-w-xl">
                This codebase is built with standard Vite, React 19, and Tailwind CSS. You can push it directly to your GitHub account and host it on GitHub Pages, Vercel, or Netlify with zero configuration.
              </p>
            </div>
            <a
              href="https://github.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#f5c518] hover:bg-[#ffd700] text-[#072418] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
            >
              <span>Create GitHub Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Section 1: Git Commands */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#f5c518]" />
                Step 1: Push to GitHub from Terminal
              </span>
              <button
                onClick={() => copyToClipboard(gitCommands, 'git')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#092e1e] hover:bg-[#124730] border border-[#18553d] text-xs text-[#f5c518] cursor-pointer"
              >
                {copiedSection === 'git' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-[#03140c] border border-[#144732] font-mono text-xs text-emerald-200 overflow-x-auto">
              {gitCommands}
            </pre>
          </div>

          {/* Section 2: Complete README.md */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#f5c518]" />
                Step 2: Ready-to-Commit README.md
              </span>
              <button
                onClick={() => copyToClipboard(readmeContent, 'readme')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#092e1e] hover:bg-[#124730] border border-[#18553d] text-xs text-[#f5c518] cursor-pointer"
              >
                {copiedSection === 'readme' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied README!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy README.md</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-[#03140c] border border-[#144732] font-mono text-xs text-emerald-200/90 overflow-x-auto max-h-56">
              {readmeContent}
            </pre>
          </div>

          {/* Section 3: Architecture Breakdown */}
          <div className="p-4 rounded-xl bg-[#092b1e] border border-[#164e37]">
            <h4 className="text-xs font-bold text-[#ffd700] uppercase mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Repository File Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-200/80">
              <div className="p-2 rounded bg-[#061e15] border border-[#12422f]">
                <span className="text-white font-mono block">/src/components/limoria/</span>
                All modular UI elements (Hero, Map, Services, AI, Navigation)
              </div>
              <div className="p-2 rounded bg-[#061e15] border border-[#12422f]">
                <span className="text-white font-mono block">/src/data/limoriaData.ts</span>
                Sovereign data for 8 regions, 32 cities, services, news
              </div>
              <div className="p-2 rounded bg-[#061e15] border border-[#12422f]">
                <span className="text-white font-mono block">/src/services/limoriaAi.ts</span>
                Google Gemini API SDK integration & offline fallback
              </div>
              <div className="p-2 rounded bg-[#061e15] border border-[#12422f]">
                <span className="text-white font-mono block">/public/manifest.json</span>
                PWA configuration for instant mobile app installation
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a2e1f] border-t border-[#1b5a3e] flex items-center justify-between">
          <span className="text-xs text-emerald-300">
            Exported for GitHub development & citizen transparency.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#175739] to-[#103e29] border border-[#e2b43b] text-[#ffd700] font-bold text-xs hover:scale-105 transition-transform cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
