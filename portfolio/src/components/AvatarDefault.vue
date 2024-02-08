<script setup lang="ts">
import type { InterfaceThemeStore } from '@/Interface/Interface'
import { useThemeStore } from '@/theme/ThemeChange'

defineProps({
  src: {
    type: String,
    required: true,
    default: ''
  },
  alt: {
    type: String,
    required: true,
    default: ''
  },
  width: {
    type: Number,
    required: true,
    default: 0
  },
  height: {
    type: Number,
    required: true,
    default: 0
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  description: {
    type: String,
    required: true,
    default: ''
  }
})

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="flex h-auto w-full flex-row justify-center gap-2"
  >
    <div id="avatar" class="w-28 rounded-lg bg-white shadow-lg">
      <img class="py-4" :src="src" :alt="alt" :width="width" :height="height" />
    </div>
    <div
      id="background-description"
      class="flex h-auto w-full flex-col items-center justify-center gap-2 rounded-lg bg-white text-center shadow-lg sm:w-96"
    >
      <p id="name" class="text-sm font-bold sm:text-2xl">{{ name }}</p>
      <p class="text-[9px] font-medium text-gray-500 sm:text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.WiiU,
.Switch {
  cursor: auto;
}

.WiiU #background-description {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ebebeb",GradientType=1);
}

.WiiU #avatar {
  background: url('../assets/Background/background-button.webp') no-repeat center center;
  background-size: cover;
}

.Switch #avatar {
  border-radius: 50%;
  box-shadow: none;
}

.Switch #background-description {
  background: none;
  box-shadow: none;
}

.Switch #name {
  color: #2b7776;
}
</style>
