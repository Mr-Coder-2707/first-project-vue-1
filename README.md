# 🔗 Vue.js Linktree - Professional Link Hub

A beautiful, professional Linktree-like web application built with Vue.js 3, featuring multi-language support, dark/light mode, and responsive design.

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-42b883?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### 🌍 Multi-Language Support
- **8 Languages**: English, Arabic, Spanish, French, German, Chinese, Japanese, Hindi
- **RTL Support**: Automatic right-to-left layout for Arabic
- **Lazy Loading**: Translation files loaded on demand
- **LocalStorage Persistence**: Remembers your language preference

### 🎨 Theme System
- **Dark/Light Mode**: Elegant toggle with smooth transitions
- **System Preferences**: Auto-detect system theme
- **CSS Variables**: Dynamic color switching
- **Persistent**: Saves your theme preference

### 🎯 Professional Design
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Vue transitions for elegant UX
- **Custom Link Cards**: Beautiful hover effects
- **Social Media Integration**: Connect all your profiles
- **Accessibility**: Follows a11y best practices

### 🛠️ Technical Stack
- **Vue.js 3** - Composition API with script setup
- **Vite** - Lightning-fast build tool
- **Bootstrap 5** - Responsive grid system
- **Font Awesome 6** - Beautiful icons
- **Vue I18n 9** - Internationalization
- **VueUse** - Dark mode composable

## 📁 Project Structure

```
linktree-vue/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css      # CSS custom properties
│   │       └── themes.css         # Global theme styles
│   ├── components/
│   │   ├── LinkCard.vue           # Individual link card
│   │   ├── SocialLinks.vue        # Social media links
│   │   ├── ProfileHeader.vue      # Profile section
│   │   ├── ThemeToggle.vue        # Dark/light mode toggle
│   │   └── LanguageSelector.vue   # Language dropdown
│   ├── composables/
│   │   └── useTheme.js            # Theme management
│   ├── locales/
│   │   ├── en.json                # English translations
│   │   ├── ar.json                # Arabic translations
│   │   ├── es.json                # Spanish translations
│   │   ├── fr.json                # French translations
│   │   ├── de.json                # German translations
│   │   ├── zh.json                # Chinese translations
│   │   ├── ja.json                # Japanese translations
│   │   └── hi.json                # Hindi translations
│   ├── App.vue                    # Main app component
│   ├── main.js                    # App entry point
│   └── i18n.js                    # i18n configuration
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd linktree-vue
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎨 Customization

### Update Profile Information

Edit `src/components/ProfileHeader.vue`:
```javascript
const profile = {
  image: 'your-image-url',
  name: 'profile.name',
  bio: 'profile.bio'
}
```

### Add/Edit Links

Edit the `links` array in `src/App.vue`:
```javascript
const links = [
  {
    icon: ['fas', 'briefcase'],
    title: 'links.portfolio',
    description: 'links.portfolio_desc',
    url: 'https://yourportfolio.com',
    color: '#0d6efd'
  },
  // Add more links...
]
```

### Update Social Media Links

Edit `src/components/SocialLinks.vue`:
```javascript
const socialLinks = [
  {
    name: 'twitter',
    icon: ['fab', 'twitter'],
    url: 'https://twitter.com/yourusername',
    color: '#1DA1F2'
  },
  // Add more social links...
]
```

### Customize Translations

Edit translation files in `src/locales/`:
- `en.json` - English
- `ar.json` - Arabic
- `es.json` - Spanish
- `fr.json` - French
- `de.json` - German
- `zh.json` - Chinese
- `ja.json` - Japanese
- `hi.json` - Hindi

### Change Color Scheme

Edit `src/assets/styles/variables.css` to customize colors:
```css
:root {
  --accent-primary: #0d6efd;
  --accent-hover: #0b5ed7;
  /* Customize other colors... */
}
```

## 🎭 Available Font Awesome Icons

The project includes Font Awesome 6 icons. To add more icons:

1. Import the icon in `src/main.js`:
```javascript
import { faNewIcon } from '@fortawesome/free-solid-svg-icons'
// or
import { faNewIcon } from '@fortawesome/free-brands-svg-icons'
```

2. Add to library:
```javascript
library.add(faNewIcon)
```

3. Use in components:
```vue
<font-awesome-icon :icon="['fas', 'new-icon']" />
```

## 🌐 Supported Languages

| Language | Code | Direction |
|----------|------|-----------|
| English  | en   | LTR       |
| Arabic   | ar   | RTL       |
| Spanish  | es   | LTR       |
| French   | fr   | LTR       |
| German   | de   | LTR       |
| Chinese  | zh   | LTR       |
| Japanese | ja   | LTR       |
| Hindi    | hi   | LTR       |

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1920px+)

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Screen reader support
- ✅ Color contrast compliance

## 🔧 Performance

- ⚡ Lazy loading for translations
- ⚡ Optimized bundle size
- ⚡ CSS code splitting
- ⚡ Fast load times with Vite

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name - [Your Website](https://yourwebsite.com)

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Font Awesome for the beautiful icons
- Bootstrap team for the responsive grid
- VueUse for helpful composables

---

**Made with ❤️ using Vue.js**
