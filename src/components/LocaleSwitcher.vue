<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
      >
        {{ getLocaleInfo(currentLocale).name }}
        <v-icon end>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(localeInfo, locale) in supportedLocales"
        :key="locale"
        @click="changeLocale(locale)"
        :active="currentLocale === locale"
      >
        <v-list-item-title>{{ localeInfo.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { currentLocale, supportedLocales, changeLocale, getLocaleInfo } = useI18n()
</script> 