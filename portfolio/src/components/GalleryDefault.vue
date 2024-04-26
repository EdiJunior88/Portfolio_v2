<script setup lang="ts">
import type { InterfaceThemeStore, InterfaceImage } from '@/Interface/Interface'
import { useThemeStore } from '@/theme/ThemeChange'
import { defineComponent, type PropType } from 'vue'
import '@splidejs/vue-splide/css'

defineProps({
  images: {
    type: Array as PropType<InterfaceImage[]>,
    required: true
  }
})

defineComponent({
  inheritAttrs: false
})

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }">
    <Splide
      v-bind="$attrs"
      :options="{ rewind: true, lazyLoad: 'nearby', pagination: false }"
      aria-label="Galeria de Projetos"
    >
      <SplideSlide v-for="image in images" :key="image.src">
        <a :href="image.href" target="_blank" rel="noopener noreferrer">
          <div class="flex flex-col items-center gap-2 rounded-lg p-3">
            <slot></slot>
            <p class="font-medium">{{ image.title }}</p>
          </div>
        </a>
        <img :src="image.src" :alt="image.alt" width="1366" height="768" />
      </SplideSlide>
    </Splide>
  </div>

  <div class="splide__arrows" />
</template>

<style lang="css" scoped>
a {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 39px;
}

.WiiU div {
  background: url(@/assets/Background/background-button.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
}

.Switch div {
  background: #fff;
  z-index: 10;
}

.Switch p {
  color: #2b7776;
}

img {
  opacity: 0.5;
}

.splide__progress {
  height: 50px;
  background: #ccc;
}

.splide__progress__bar {
  background: greenyellow;
  height: 2px;
  transition: width 400ms ease;
  width: 0;
}
</style>
