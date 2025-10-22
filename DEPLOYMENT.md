# 🚀 Deployment Guide

This guide covers deploying your Vue.js Linktree application to various hosting platforms.

## 📦 Build for Production

Before deploying, build your application:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment Platforms

### Vercel (Recommended)

**Method 1: Vercel CLI**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project.

**Method 2: GitHub Integration**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite and deploy

**Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

---

### Netlify

**Method 1: Drag & Drop**

1. Run `npm run build`
2. Visit [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder

**Method 2: Netlify CLI**

1. Install:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

**Method 3: GitHub Integration**

1. Push to GitHub
2. Visit [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/your-repo-name/', // Add this line
  // ... rest of config
})
```

3. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Settings → Pages → Source: gh-pages branch

---

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

4. Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: Optional

5. Build and deploy:
```bash
npm run build
firebase deploy
```

**Configuration (firebase.json):**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

### Cloudflare Pages

**Method 1: Dashboard**

1. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
2. Pages → Create a project
3. Connect your GitHub repository
4. Configure:
   - Build command: `npm run build`
   - Build output: `dist`

**Method 2: Wrangler CLI**

1. Install:
```bash
npm install -g wrangler
```

2. Deploy:
```bash
npm run build
wrangler pages publish dist
```

---

### Render

1. Visit [render.com](https://render.com)
2. New → Static Site
3. Connect your repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

### Railway

1. Visit [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repository
4. Railway auto-detects Vite configuration

---

## 🔧 Custom Domain Setup

### Vercel

1. Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### Netlify

1. Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

### GitHub Pages

1. Repository Settings → Pages
2. Custom domain field
3. Add CNAME record in DNS

## 🌍 Environment Variables

If you need environment variables:

1. Create `.env` file (don't commit this):
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXX
```

2. Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

3. Set in hosting platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **Others**: Check platform documentation

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Test all links work correctly
- [ ] Check responsiveness on mobile
- [ ] Test dark/light mode toggle
- [ ] Verify all translations are complete
- [ ] Update meta tags in `index.html`
- [ ] Add favicon (replace `/favicon.ico`)
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Remove console.logs and debugging code
- [ ] Optimize images (use WebP or compress)

## 📊 Analytics Integration

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html`:
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🔒 Security Headers

Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## ⚡ Performance Optimization

1. **Optimize Images**: Use WebP format
2. **Enable Compression**: Most platforms do this automatically
3. **CDN**: Use platform's CDN (automatic on Vercel, Netlify, etc.)
4. **Preload Fonts**: Add to `index.html`:
```html
<link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin>
```

## 🐛 Troubleshooting

### Blank page after deployment

**Issue**: App works locally but shows blank page on deployment

**Solutions**:
1. Check browser console for errors
2. Verify `base` path in `vite.config.js`
3. Check if all assets are loading (network tab)
4. Ensure build completed successfully

### 404 on page refresh

**Issue**: Refresh on routes gives 404

**Solution**: Configure rewrites for SPA
- Netlify: Use `_redirects` or `netlify.toml`
- Vercel: Automatic
- Others: Check platform docs

### Icons not showing

**Issue**: Font Awesome icons missing

**Solutions**:
1. Check that icons are imported in `main.js`
2. Verify CDN is accessible
3. Check network tab for failed requests

### Translations not working

**Issue**: All text shows as translation keys

**Solutions**:
1. Verify JSON files are in `dist/assets`
2. Check browser console for import errors
3. Ensure i18n is properly initialized

## 📱 PWA (Progressive Web App)

To make your app installable:

1. Install plugin:
```bash
npm install vite-plugin-pwa -D
```

2. Update `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Your Name - Links',
        short_name: 'Your Links',
        description: 'All my important links',
        theme_color: '#0d6efd',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

## 🎉 You're Live!

Once deployed, your Linktree will be available at:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- GitHub Pages: `https://username.github.io/repo-name`

Don't forget to share your link! 🚀

---

**Need help?** Check the platform-specific documentation or open an issue on GitHub.
