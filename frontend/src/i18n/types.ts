import type { DefineLocaleMessage } from 'vue-i18n'

// Define the structure of your locale messages for type safety
export interface LocaleMessages {
  common: {
    appTitle: string
    navigation: {
      drawer: string
    }
  }
  main: {
    greeting: string
  }
  appBar: {
    title: string
  }
}

// Extend Vue I18n's DefineLocaleMessage interface
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends LocaleMessages {}
} 