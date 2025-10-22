import { createApp } from 'vue'
import App from './App.vue'
import i18n, { initI18n } from './i18n'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import solid icons
import {
  faSun,
  faMoon,
  faGlobe,
  faChevronDown,
  faCheck,
  faArrowRight,
  faBriefcase,
  faBlog,
  faEnvelope,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons'

// Import brand icons
import {
  faGithub,
  faYoutube,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  // Solid icons
  faSun,
  faMoon,
  faGlobe,
  faChevronDown,
  faCheck,
  faArrowRight,
  faBriefcase,
  faBlog,
  faEnvelope,
  faNewspaper,
  // Brand icons
  faGithub,
  faYoutube,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faVuejs
)

async function bootstrap() {
  // initialize i18n (loads messages for starting locale)
  try {
    await initI18n()
  } catch (e) {
    console.warn('i18n init failed', e)
  }

  // Create Vue app
  const app = createApp(App)

  // Register global components
  app.component('FontAwesomeIcon', FontAwesomeIcon)

  // Use plugins
  app.use(i18n)

  // Mount app
  app.mount('#app')
}

bootstrap()
