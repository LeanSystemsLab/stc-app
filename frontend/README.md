# STC App Frontend

This is the frontend application for the Smart Trash Can (STC) app, built with Vue 3, TypeScript, and Vuetify.

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Getting Started

### 1. Install Dependencies

Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

### 2. Start Development Server

Launch the development server:

```bash
npm run dev
```

The application will show the port where it is running.

### 3. Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### 4. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Development

### Adding New Components

Create new Vue components in the `src/components/` directory. Use the `.vue` extension and follow Vue 3 Composition API patterns.

### Styling

This project uses Vuetify for UI components and SASS for custom styling. Global styles can be added in the Vuetify plugin configuration.

### Internationalization

The app supports multiple languages through Vue I18n. Add new translations in `src/i18n/locales/` and use the `useI18n` composable in components.

### Build Issues

If you encounter build issues:
1. Clear node_modules: `rm -rf node_modules`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall dependencies: `npm install`
