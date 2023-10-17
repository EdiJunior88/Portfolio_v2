<script setup lang="ts">
import { useThemeStore } from '../theme/ThemeChange'

defineProps(['title', 'link'])

const themeStore = useThemeStore()
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
        <div class="icons flex flex-col justify-center items-center text-[10px] sm:text-base gap-2">
          <slot></slot>
          <span class="font-medium">{{ title }}</span>
        </div>
      </button>
    </a>
  </div>
</template>

<style scoped>
.Switch .icons span {
  color: #2b7776;
}
</style>
