<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'
import type { PropType } from 'vue'
import type { InterfaceThemeStore } from '@/Interface/Interface'

defineProps({
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: false,
    default: () => {}
  },
  title: {
    type: String,
    required: false,
    default: ''
  }
})

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }">
    <button
      class="button-shadow w-40 rounded-lg border-2 border-solid border-zinc-200 bg-white p-2 shadow-lg"
      @click="onClick"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <slot></slot>
        <p class="text-color text-sm font-medium sm:text-lg">{{ title }}</p>
      </div>
    </button>
  </div>
</template>

<style lang="css" scoped>
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
