# 🎨 Customization Guide

This guide will help you personalize your Vue.js Linktree application.

## 🖼️ Profile Customization

### Change Profile Picture

**Option 1: Use an external URL**
```javascript
// src/components/ProfileHeader.vue
const profile = {
  image: 'https://i.imgur.com/yourimage.jpg',
  // ...
}
```

**Option 2: Use a local image**
1. Add your image to `src/assets/`
2. Update the component:
```javascript
import profileImage from '@/assets/my-photo.jpg'

const profile = {
  image: profileImage,
  // ...
}
```

**Option 3: Use an avatar generator**
- DiceBear: `https://api.dicebear.com/7.x/avataaars/svg?seed=YourName`
- UI Avatars: `https://ui-avatars.com/api/?name=Your+Name&size=200`
- Gravatar: `https://www.gravatar.com/avatar/yourhash?s=200`

### Update Name and Bio

Edit `src/locales/en.json` (and other language files):
```json
{
  "profile": {
    "name": "Your Full Name",
    "bio": "Your professional bio. Software Developer | Content Creator | Tech Enthusiast",
    "title": "Your Name | Links"
  }
}
```

## 🔗 Link Customization

### Link Structure

Each link in `src/App.vue` has this structure:
```javascript
{
  icon: ['fas', 'icon-name'],      // Font Awesome icon
  title: 'links.key',              // Translation key for title
  description: 'links.key_desc',   // Translation key for description
  url: 'https://example.com',      // Destination URL
  color: '#hexcolor'               // Accent color for the card
}
```

### Example Links

**Portfolio/Website**
```javascript
{
  icon: ['fas', 'briefcase'],
  title: 'links.portfolio',
  description: 'links.portfolio_desc',
  url: 'https://yourportfolio.com',
  color: '#0d6efd'
}
```

**Blog**
```javascript
{
  icon: ['fas', 'blog'],
  title: 'links.blog',
  description: 'links.blog_desc',
  url: 'https://yourblog.com',
  color: '#6610f2'
}
```

**GitHub**
```javascript
{
  icon: ['fab', 'github'],
  title: 'links.github',
  description: 'links.github_desc',
  url: 'https://github.com/yourusername',
  color: '#333333'
}
```

**LinkedIn**
```javascript
{
  icon: ['fab', 'linkedin'],
  title: 'My LinkedIn',
  description: 'Connect with me professionally',
  url: 'https://linkedin.com/in/yourusername',
  color: '#0A66C2'
}
```

**Email**
```javascript
{
  icon: ['fas', 'envelope'],
  title: 'Email Me',
  description: 'Get in touch via email',
  url: 'mailto:your.email@example.com',
  color: '#198754'
}
```

**WhatsApp**
```javascript
{
  icon: ['fab', 'whatsapp'],
  title: 'WhatsApp',
  description: 'Message me on WhatsApp',
  url: 'https://wa.me/1234567890',
  color: '#25D366'
}
```

### Popular Color Schemes

```javascript
// Blue
color: '#0d6efd'

// Purple
color: '#6610f2'

// Pink
color: '#d63384'

// Red
color: '#dc3545'

// Orange
color: '#fd7e14'

// Yellow
color: '#ffc107'

// Green
color: '#198754'

// Teal
color: '#20c997'

// Cyan
color: '#0dcaf0'

// Dark
color: '#212529'
```

## 🌐 Social Media Links

Edit `src/components/SocialLinks.vue`:

```javascript
const socialLinks = [
  {
    name: 'twitter',
    icon: ['fab', 'twitter'],
    url: 'https://twitter.com/yourusername',
    color: '#1DA1F2'
  },
  {
    name: 'linkedin',
    icon: ['fab', 'linkedin'],
    url: 'https://linkedin.com/in/yourusername',
    color: '#0A66C2'
  },
  {
    name: 'instagram',
    icon: ['fab', 'instagram'],
    url: 'https://instagram.com/yourusername',
    color: '#E4405F'
  },
  {
    name: 'facebook',
    icon: ['fab', 'facebook'],
    url: 'https://facebook.com/yourusername',
    color: '#1877F2'
  },
  {
    name: 'github',
    icon: ['fab', 'github'],
    url: 'https://github.com/yourusername',
    color: '#333333'
  },
  {
    name: 'youtube',
    icon: ['fab', 'youtube'],
    url: 'https://youtube.com/@yourchannel',
    color: '#FF0000'
  },
  {
    name: 'tiktok',
    icon: ['fab', 'tiktok'],
    url: 'https://tiktok.com/@yourusername',
    color: '#000000'
  },
  {
    name: 'discord',
    icon: ['fab', 'discord'],
    url: 'https://discord.gg/yourserver',
    color: '#5865F2'
  }
]
```

**Remember to add new icons to `src/main.js`:**
```javascript
import { faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons'
library.add(faTiktok, faDiscord)
```

## 🎨 Theme Colors

### Light Mode Colors

Edit `src/assets/styles/variables.css`:

```css
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-card: #ffffff;
  
  /* Text */
  --text-primary: #212529;
  --text-secondary: #6c757d;
  
  /* Borders & Shadows */
  --border-color: #dee2e6;
  --shadow: rgba(0, 0, 0, 0.1);
  
  /* Accent */
  --accent-primary: #0d6efd;
  --accent-hover: #0b5ed7;
}
```

### Dark Mode Colors

```css
.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-card: #2d2d2d;
  --text-primary: #f8f9fa;
  --text-secondary: #adb5bd;
  --border-color: #495057;
  --shadow: rgba(0, 0, 0, 0.3);
}
```

### Brand Color Themes

**Purple Theme**
```css
--accent-primary: #6610f2;
--accent-hover: #520dc2;
```

**Green Theme**
```css
--accent-primary: #198754;
--accent-hover: #146c43;
```

**Pink Theme**
```css
--accent-primary: #d63384;
--accent-hover: #ab296a;
```

## 📝 Translations

### Adding a New Translation Key

1. Add to all language files in `src/locales/`:

**en.json:**
```json
{
  "links": {
    "my_new_link": "My New Link",
    "my_new_link_desc": "Description for my new link"
  }
}
```

**ar.json:**
```json
{
  "links": {
    "my_new_link": "رابطي الجديد",
    "my_new_link_desc": "وصف لرابطي الجديد"
  }
}
```

2. Use in your component:
```javascript
{
  title: 'links.my_new_link',
  description: 'links.my_new_link_desc',
  // ...
}
```

Or in template:
```vue
<p>{{ t('links.my_new_link') }}</p>
```

## 🎭 Adding More Icons

### Step 1: Find Your Icon
Visit [Font Awesome](https://fontawesome.com/icons) and search for icons.

### Step 2: Import in main.js

**For Solid Icons:**
```javascript
import { faHeart, faStar, faRocket } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faStar, faRocket)
```

**For Brand Icons:**
```javascript
import { faSpotify, faTwitch, faPatreon } from '@fortawesome/free-brands-svg-icons'
library.add(faSpotify, faTwitch, faPatreon)
```

### Step 3: Use in Components
```vue
<font-awesome-icon :icon="['fas', 'heart']" />
<font-awesome-icon :icon="['fab', 'spotify']" />
```

## 🎯 Advanced Customization

### Change Border Radius

```css
/* src/assets/styles/variables.css */
:root {
  --border-radius: 20px;      /* More rounded */
  --border-radius-sm: 12px;
}
```

### Adjust Animations

```css
/* src/assets/styles/variables.css */
:root {
  --transition-speed: 0.5s;  /* Slower transitions */
}
```

### Change Font

```css
/* src/assets/styles/themes.css */
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

Then add the font in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Custom Gradient Backgrounds

```css
.app-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📱 SEO Optimization

### Update Meta Tags

Edit `index.html`:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Your professional bio and all important links in one place">
  <meta name="keywords" content="your, keywords, here">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Your Name | Links">
  <meta property="og:description" content="Your bio">
  <meta property="og:image" content="https://yoursite.com/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="Your Name | Links">
  <meta property="twitter:description" content="Your bio">
  <meta property="twitter:image" content="https://yoursite.com/twitter-image.jpg">
  
  <title>Your Name | Professional Links</title>
</head>
```

## 🚀 Deployment Tips

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### Netlify
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### GitHub Pages
Install: `npm install gh-pages --save-dev`

Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

---

**Happy Customizing! 🎉**
