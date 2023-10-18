<script setup lang="ts">
import type { InterfaceThemeStore } from '@/Interface/Interface'
import { useThemeStore } from '@/theme/ThemeChange'

defineProps({
  src: String,
  alt: String,
  width: Number,
  height: Number,
  name: String,
  description: String
})

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="w-full h-auto flex flex-row justify-center gap-2"
  >
    <div id="avatar" class="bg-white w-28 rounded-lg shadow-lg">
      <img class="py-4" :src="src" :alt="alt" :width="width" :height="height" />
    </div>
    <div
      id="background-description"
      class="bg-white w-full h-auto sm:w-96 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 text-center"
    >
      <p id="name" class="sm:text-2xl text-sm font-bold">{{ name }}</p>
      <p class="sm:text-sm text-[9px] text-gray-500 font-medium">
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
