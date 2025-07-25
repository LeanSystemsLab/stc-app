import { useI18n as useVueI18n } from 'vue-i18n'
import { computed } from 'vue'
import { setLocale, getCurrentLocale, SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n'

export function useI18n() {
  const { t, locale, availableLocales } = useVueI18n()

  // Computed properties for better reactivity
  const currentLocale = computed(() => getCurrentLocale())
  const supportedLocales = computed(() => SUPPORTED_LOCALES)

  // Function to change locale
  const changeLocale = (newLocale: SupportedLocale) => {
    setLocale(newLocale)
  }

  // Get locale info
  const getLocaleInfo = (locale: SupportedLocale) => {
    return SUPPORTED_LOCALES[locale]
  }

  // Check if locale is supported
  const isLocaleSupported = (locale: string): locale is SupportedLocale => {
    return Object.keys(SUPPORTED_LOCALES).includes(locale)
  }

  return {
    t,
    locale,
    currentLocale,
    availableLocales,
    supportedLocales,
    changeLocale,
    getLocaleInfo,
    isLocaleSupported
  }
} 