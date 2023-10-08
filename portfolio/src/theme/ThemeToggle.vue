<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import { useThemeStore } from './ThemeChange'

const themeStore = useThemeStore()

function toggleTheme() {
  themeStore.toggleDarkMode()
}
</script>

<template>
  <ButtonDefault @click="toggleTheme" title="Tema" />
</template>
