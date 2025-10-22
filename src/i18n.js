import { createI18n } from 'vue-i18n'

// Supported languages
const SUPPORT_LOCALES = ['en', 'ar', 'es', 'fr', 'de', 'zh', 'ja', 'hi']

// RTL languages
const RTL_LOCALES = ['ar']

// Helper: get saved locale or browser or fallback
function getStartingLocale() {
  try {
    const savedLocale = localStorage.getItem('user-locale')
    if (savedLocale && SUPPORT_LOCALES.includes(savedLocale)) return savedLocale
  } catch (e) {
    // ignore
  }

  if (typeof navigator !== 'undefined') {
    const browserLocale = navigator.language.split('-')[0]
    if (SUPPORT_LOCALES.includes(browserLocale)) return browserLocale
  }

  return 'en'
}

// Create i18n instance with empty messages; we'll lazy-load
export const i18n = createI18n({
  legacy: false,
  locale: getStartingLocale(),
  fallbackLocale: 'en',
  messages: {},
  globalInjection: true,
  warnHtmlMessage: false
})

// Use Vite's glob import for lazy loading
const localeLoaders = import.meta.glob('./locales/*.json')
const loadedMessages = {}

export async function loadLocaleMessages(locale) {
  if (loadedMessages[locale]) return loadedMessages[locale]
  const loader = localeLoaders[`./locales/${locale}.json`]
  if (!loader) throw new Error(`Locale file for ${locale} not found`)
  const module = await loader()
  const messages = module.default || module
  loadedMessages[locale] = messages
  // set messages into i18n
  i18n.global.setLocaleMessage(locale, messages)
  return messages
}

export function setDocumentDirection(locale) {
  const htmlElement = document.documentElement
  if (RTL_LOCALES.includes(locale)) {
    htmlElement.setAttribute('dir', 'rtl')
  } else {
    htmlElement.setAttribute('dir', 'ltr')
  }
  htmlElement.setAttribute('lang', locale)
}

// Async change locale and persist
export async function setLocale(locale) {
  if (!SUPPORT_LOCALES.includes(locale)) {
    console.warn(`Locale ${locale} is not supported`)
    return
  }

  // load messages if needed
  await loadLocaleMessages(locale)
  i18n.global.locale.value = locale
  try {
    localStorage.setItem('user-locale', locale)
  } catch (e) {
    // ignore
  }
  setDocumentDirection(locale)

  // Update document title if translations available
  try {
    if (i18n.global.t) {
      document.title = i18n.global.t('profile.title')
    }
  } catch (e) {
    // ignore
  }
}

// Initialize i18n by loading the starting locale
export async function initI18n() {
  const starting = getStartingLocale()
  await loadLocaleMessages(starting)
  setDocumentDirection(starting)
}

export { SUPPORT_LOCALES, RTL_LOCALES }
export default i18n
