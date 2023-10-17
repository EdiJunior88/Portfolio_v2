<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'

defineProps(['onClick', 'children', 'title'])

const themeStore = useThemeStore()
</script>

<template>
  <div :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }">
    <button
      class="button-shadow w-40 rounded-lg bg-white p-2 border-zinc-200 border-solid border-2 shadow-lg"
      @click="onClick"
    >
      <div class="flex flex-col justify-center items-center gap-4">
        <slot></slot>
        <p class="text-color font-medium text-sm sm:text-lg">{{ title }}</p>
      </div>
    </button>
  </div>
</template>

<style scoped>
.Switch .button-shadow {
  box-shadow: none;
}

.Switch .text-color {
  color: #2b7776;
}

.WiiU button {
  background: url(../assets/Background/background-button.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
