import { i18n } from './index'

// Number formatting utilities
export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  const locale = i18n.global.locale.value
  return new Intl.NumberFormat(locale, options).format(value)
}

// Date formatting utilities
export function formatDate(date: Date | string | number, options?: Intl.DateTimeFormatOptions): string {
  const locale = i18n.global.locale.value
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, options).format(dateObj)
}


// Pluralization helper
export function pluralize(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural
}

// Validation utilities
export function isValidLocale(locale: string): boolean {
  try {
    new Intl.NumberFormat(locale)
    return true
  } catch {
    return false
  }
}

// Get browser's preferred locales
export function getBrowserLocales(): string[] {
  return Array.from(navigator.languages || [navigator.language])
}

// Get the best matching locale from browser preferences
export function getBestMatchingLocale(supportedLocales: string[]): string {
  const browserLocales = getBrowserLocales()
  
  for (const browserLocale of browserLocales) {
    // Exact match
    if (supportedLocales.includes(browserLocale)) {
      return browserLocale
    }
    
    // Language code match (e.g., 'en' matches 'en-US')
    const languageCode = browserLocale.split('-')[0]
    const match = supportedLocales.find(locale => locale.startsWith(languageCode))
    if (match) {
      return match
    }
  }
  
  return supportedLocales[0] || 'en'
} 