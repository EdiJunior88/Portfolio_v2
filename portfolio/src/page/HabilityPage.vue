<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'

const themeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="w-full p-6 rounded-lg antialiased"
  >
    <p>👨‍🎓 Formação Acadêmica</p>

    <p>🏫 Formação Técnica</p>

    <p>📚 Certificados</p>

    <p>🛠️ Habilidades Técnicas</p>
  </div>
</template>

<style lang="css" scoped>
.WiiU div {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ebebeb",GradientType=1);
}

.Switch div {
  background: #fff;
}

.Switch p {
  color: #41a5a3;
}
</style>
