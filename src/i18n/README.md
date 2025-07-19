# Internationalization (i18n) Setup

This directory contains the internationalization setup for the Vue.js application using Vue I18n.

## Structure

```
src/i18n/
├── index.ts          # Main i18n configuration
├── types.ts          # TypeScript type definitions
├── locales/          # Translation files
│   ├── en.json       # English translations
│   └── de.json       # German translations
└── README.md         # This file
```

## Features

- **Automatic locale detection**: Detects user's browser language
- **Persistent storage**: Saves selected locale in localStorage
- **Type safety**: Full TypeScript support with type definitions
- **Fallback handling**: Falls back to English if translation is missing
- **Composable API**: Clean composable for easy use in components

## Usage

### In Components

```vue
<template>
  <div>
    <h1>{{ $t('main.greeting') }}</h1>
    <p>{{ $t('common.appTitle') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t, currentLocale, changeLocale } = useI18n()
</script>
```

### Using the Composable

```typescript
import { useI18n } from '@/composables/useI18n'

const { 
  t,                    // Translation function
  currentLocale,        // Current locale
  supportedLocales,     // Available locales
  changeLocale,         // Function to change locale
  getLocaleInfo,        // Get locale metadata
  isLocaleSupported     // Check if locale is supported
} = useI18n()
```

### Adding New Translations

1. Add the translation key to all locale files in `src/i18n/locales/`
2. Update the type definitions in `src/i18n/types.ts`
3. Use the translation in your components

### Adding New Locales

1. Create a new JSON file in `src/i18n/locales/` (e.g., `de.json`)
2. Add the locale to `SUPPORTED_LOCALES` in `src/i18n/index.ts`
3. Import and add the locale to the `messages` object

## Best Practices

- Use nested keys for better organization (e.g., `common.appTitle`)
- Keep translation keys descriptive and consistent
- Always provide fallback translations in English
- Use TypeScript for type safety
- Test translations in all supported locales

## Locale Switcher Component

The `LocaleSwitcher.vue` component provides a dropdown menu for users to change the application language. It's automatically included in the app bar.

## Browser Language Detection

The system automatically detects the user's preferred language from their browser settings and sets it as the default locale if it's supported. 