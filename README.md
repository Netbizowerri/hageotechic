# Hageotechic Limited — Web Portal

High-integrity web application developed for Hageotechic Limited, Nigeria's most trusted commercial & industrial HVAC-R and cooling systems maintenance company since 2017.

## 🛠️ Stack Overview
- **Framework**: React 19 + TypeScript 5
- **Tooling**: Vite 6
- **Styling**: Tailwind CSS v4 (with custom `@theme` variables)
- **Animation**: Framer Motion (`motion/react` optimized bundle)
- **Routing**: React Router v6

---

## 🚀 Local Development Setup

To run this application locally on your computer:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` or `.env.production` file in the root path and add your Formspree submission token:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mqakayky
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

4. **Code Quality Validations**:
   ```bash
   npm run lint
   ```

---

## 📦 Production Compiling & Build

To generate the static bundle optimized for high performance:
```bash
npm run build
```
This compilation creates a self-contained `/dist` directory featuring:
- Code-splitted vendor, router, and motion modules
- Asset folders with pre-compressed HTML and bundle codes

---

## 🌐 cPanel (Shared Hosting) Deployment Guide

This application is built with custom configurations to support seamless Apache/cPanel shared hosting deployment out-of-the-box.

### Step 1: Upload Files
1. Build the production package locally using `npm run build`.
2. Connect to your cPanel hosting control panel and open the **File Manager**.
3. Navigate to your website's root folder (usually `public_html/` or a subdomain subdirectory).
4. Upload all files and folders located **inside** the compiled local `/dist` folder directly into that directory.

### Step 2: SPA Route Rewriting (.htaccess)
To support standard HTML5 direct URL browser refreshes (so users can refresh sub-pages like `/services/cold-rooms` without running into 404 errors):
- We have pre-bundled a custom `.htaccess` rule inside the `/public` folder.
- Ensure that the `.htaccess` file is uploaded beside your `index.html` file inside `public_html/` on your host.
- *Note: If you do not see `.htaccess` inside your cPanel manager, verify that "Show Hidden Files (dotfiles)" is enabled in your cPanel file viewer options.*

---

## 🔒 Security & OEM Adherence
All business metrics, SLA response expectations, strategic parts inventories, and telephone helplines represent authenticated corporate data. The custom form redirects securely via REST to Formspree, bypassing the need for a separate, expensive backend infrastructure.
