<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar :title="$t('appBar.title')">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <template v-slot:append>
          <LocaleSwitcher />
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item :title="$t('common.navigation.drawer')"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <h1>{{ $t('main.greeting') }}</h1>
          <I18nExample />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
