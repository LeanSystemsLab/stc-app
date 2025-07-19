import { createI18n } from 'vue-i18n'
import type { App } from 'vue'

// Import locale files
import en from './locales/en.json'
import de from './locales/de.json'

// Define supported locales
export const SUPPORTED_LOCALES = {
  en: {
    name: 'English',
    flag: 'us'
  },
  de: {
    name: 'Deutsch',
    flag: 'de'
  }
} as const

export type SupportedLocale = keyof typeof SUPPORTED_LOCALES

// Messages for each locale
const messages = {
  en,
  de
}

// Get user's preferred locale from browser
function getDefaultLocale(): SupportedLocale {
  const browserLocale = navigator.language.split('-')[0]
  return Object.keys(SUPPORTED_LOCALES).includes(browserLocale) 
    ? browserLocale as SupportedLocale 
    : 'en'
}

// Get stored locale from localStorage or use default
function getStoredLocale(): SupportedLocale {
  const stored = localStorage.getItem('locale')
  return stored && Object.keys(SUPPORTED_LOCALES).includes(stored)
    ? stored as SupportedLocale
    : getDefaultLocale()
}

// Create i18n instance
export const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: getStoredLocale(),
  fallbackLocale: 'en',
  messages,
  missingWarn: false, // Disable missing translation warnings in production
  fallbackWarn: false
})

// Locale management functions
export function setLocale(locale: SupportedLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export function getCurrentLocale(): SupportedLocale {
  return i18n.global.locale.value as SupportedLocale
}

// Install function for Vue app
export function installI18n(app: App) {
  app.use(i18n)
  
  // Set initial document language
  document.documentElement.lang = getCurrentLocale()
} 