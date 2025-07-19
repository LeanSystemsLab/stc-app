<template>
  <v-card class="ma-4 pa-4">
    <v-card-title>{{ $t('common.appTitle') }}</v-card-title>
    
    <v-card-text>
      <v-alert type="info" class="mb-4">
        {{ $t('main.greeting') }}
      </v-alert>
      
      <v-divider class="my-4"></v-divider>
      
      <h3>Current Locale: {{ getLocaleInfo(currentLocale).name }} {{ getLocaleInfo(currentLocale).flag }}</h3>
      
      <v-list class="mt-4">
        <v-list-item
          v-for="(localeInfo, locale) in supportedLocales"
          :key="locale"
          @click="changeLocale(locale)"
          :active="currentLocale === locale"
        >
          <template v-slot:prepend>
            <span class="text-h6">{{ localeInfo.flag }}</span>
          </template>
          <v-list-item-title>{{ localeInfo.name }}</v-list-item-title>
          <template v-slot:append>
            <v-icon v-if="currentLocale === locale">mdi-check</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { currentLocale, supportedLocales, changeLocale, getLocaleInfo } = useI18n()
</script> 