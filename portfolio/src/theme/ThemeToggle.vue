<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import { useThemeStore } from './ThemeChange'

const themeStore = useThemeStore()

//Salva no localStorage o tema escolhido
function toggleTheme() {
  themeStore.toggleSwitchTheme()
  localStorage.setItem('theme', themeStore.Switch ? 'Switch' : 'WiiU')
}

//Recupera no localStorage o tema escolhido
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  themeStore.Switch = savedTheme === 'Switch'
}
</script>

<template>
  <div v-if="themeStore.Switch">
    <ButtonDefault @click="toggleTheme" title="Tema">
      <v-icon name="oi-gear" scale="4" />
    </ButtonDefault>
  </div>
  <div v-else>
    <ButtonDefault @click="toggleTheme" title="Tema">
      <v-icon name="fc-settings" scale="4" />
    </ButtonDefault>
  </div>
</template>

<style scoped>
.Switch {
  color: #313131;
}
</style>
