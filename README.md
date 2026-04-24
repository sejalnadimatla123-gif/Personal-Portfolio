# Sejal Nadimatla · Portfolio

A personal portfolio built with **React** + **React Router**, featuring an editorial-style dark theme with sophisticated typography (Fraunces + Inter + JetBrains Mono).

## ✨ Features

- Home page with About Me, Research Interests, Skills, Experience, and Personal Details
- Dedicated Projects page with GitHub links
- `NavLink`-based routing between pages
- Fully responsive (mobile, tablet, desktop)
- Editorial aesthetic with warm gold accents, grain texture, marquee animation
- Accessibility-friendly (reduced-motion support, semantic HTML)

---

## 🚀 Running Locally

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

---

## 📦 Deploying to GitHub Pages

### Step 1 — Create the repo on GitHub
1. Go to GitHub → **New Repository**
2. Name it exactly `portfolio`
3. Set it to **Public**
4. Click **Create**

### Step 2 — Push the project
From inside this project folder:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sejalnadimatla123/portfolio.git
git push -u origin main
```

> ⚠️ If your GitHub username is **different** from `sejalnadimatla123`, update the `homepage` field in `package.json` before deploying.

### Step 3 — Install gh-pages
```bash
npm install gh-pages --save-dev
```
(Already included in `devDependencies`, but run this if it's missing.)

### Step 4 — Deploy
```bash
npm run deploy
```

This runs `predeploy` (which builds the site) and then pushes the `build` folder to the `gh-pages` branch automatically.

### Step 5 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select branch: **gh-pages** / folder: **/ (root)**
3. Click **Save**

Your site goes live in ~1 minute at:
👉 **https://sejalnadimatla123.github.io/portfolio**

---

## 🛠 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Projects.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 📝 Notes

- Uses `HashRouter` (not `BrowserRouter`) — required for GitHub Pages routing to work correctly.
- Fonts load from Google Fonts — no local font files needed.
- All images are SVG-based (abstract monogram portrait) — no raster image dependencies.
- If you want to swap the profile SVG for a real photo, drop it into `public/` and replace the `<svg>` block in `src/pages/Home.js` with an `<img>` tag.

---

Built with ❤️ in Hyderabad · 2026
