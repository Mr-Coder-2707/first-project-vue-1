# 🚀 Quick Start Guide

## Your Vue.js Linktree is Ready!

The development server is now running at: **http://localhost:5173/**

## 📋 Next Steps

### 1. View Your Application
Open your browser and navigate to: http://localhost:5173/

### 2. Customize Your Profile

#### Update Profile Picture & Bio
Edit `src/components/ProfileHeader.vue`:
```javascript
const profile = {
  image: 'https://your-image-url.com/photo.jpg',
  name: 'profile.name',  // Reference to translation key
  bio: 'profile.bio'     // Reference to translation key
}
```

Then update the translations in `src/locales/en.json` (and other languages):
```json
{
  "profile": {
    "name": "Your Name",
    "bio": "Your bio description here"
  }
}
```

### 3. Add Your Links

Edit `src/App.vue` and modify the `links` array:
```javascript
const links = [
  {
    icon: ['fas', 'briefcase'],        // Font Awesome icon
    title: 'links.portfolio',          // Translation key
    description: 'links.portfolio_desc', // Translation key
    url: 'https://yourwebsite.com',    // Your URL
    color: '#0d6efd'                   // Card accent color
  },
  // Add more links...
]
```

### 4. Update Social Media Links

Edit `src/components/SocialLinks.vue`:
```javascript
const socialLinks = [
  {
    name: 'twitter',
    icon: ['fab', 'twitter'],
    url: 'https://twitter.com/YOUR_USERNAME',  // ← Change this
    color: '#1DA1F2'
  },
  // Update other social links...
]
```

### 5. Customize Translations

Update translation files in `src/locales/`:
- `en.json` - English
- `ar.json` - Arabic
- `es.json` - Spanish
- And others...

### 6. Change Colors

Edit `src/assets/styles/variables.css`:
```css
:root {
  --accent-primary: #0d6efd;  /* Change to your brand color */
  --accent-hover: #0b5ed7;
  /* More colors... */
}
```

## 🎨 Features to Try

1. **Toggle Dark/Light Mode** - Click the sun/moon icon in the top-left
2. **Change Language** - Click the globe icon and select from 8 languages
3. **Responsive Design** - Resize your browser or open on mobile
4. **Hover Effects** - Hover over link cards and social buttons

## 📝 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Adding New Icons

1. Find icon at https://fontawesome.com/icons
2. Import in `src/main.js`:
```javascript
import { faYourIcon } from '@fortawesome/free-solid-svg-icons'
library.add(faYourIcon)
```
3. Use in components:
```vue
<font-awesome-icon :icon="['fas', 'your-icon']" />
```

## 🐛 Troubleshooting

### Port already in use?
Stop the server with `Ctrl+C` and run:
```bash
npm run dev -- --port 3000
```

### Icons not showing?
Make sure the icon is imported and added to the library in `src/main.js`

### Translation not working?
- Check that the translation key exists in all language files
- Verify the key path is correct (e.g., `links.portfolio`)

## 📚 Learn More

- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Vue I18n Guide](https://vue-i18n.intlify.dev/)
- [VueUse Documentation](https://vueuse.org/)

## 🎉 Enjoy!

Your professional Linktree clone is ready to be customized and deployed!

---

**Need help?** Check the main README.md for detailed documentation.
