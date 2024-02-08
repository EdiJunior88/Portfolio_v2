<script setup lang="ts">
import type { InterfaceThemeStore } from '@/Interface/Interface'
import { useThemeStore } from '@/theme/ThemeChange'

defineProps({
  link: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    required: true,
    default: ''
  }
})

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div>
    <a
      :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
      class="flex flex-col"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        <div class="icons flex flex-col items-center justify-center gap-2 text-[10px] sm:text-base">
          <slot></slot>
          <span class="font-medium">{{ title }}</span>
        </div>
      </button>
    </a>
  </div>
</template>

<style lang="css" scoped>
.Switch .icons span {
  color: #2b7776;
}
</style>
