<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import { useThemeStore } from './ThemeChange'

const themeStore = useThemeStore()

function toggleTheme() {
  themeStore.toggleSwitchTheme()
}
</script>

<template>
  <div v-if="themeStore.Switch">
    <ButtonDefault @click="toggleTheme" title="Tema">
      <v-icon name="oi-gear" scale="6" />
    </ButtonDefault>
  </div>
  <div v-else>
    <ButtonDefault @click="toggleTheme" title="Tema">
      <v-icon name="fc-services" scale="6" />
    </ButtonDefault>
  </div>
</template>
