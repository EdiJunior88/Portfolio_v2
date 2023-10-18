<script setup lang="ts">
import type { InterfaceThemeStore } from '@/Interface/Interface'
import type { InterfaceImage } from '@/Interface/Interface'
import { useThemeStore } from '@/theme/ThemeChange'
import type { PropType } from 'vue'
import '@splidejs/vue-splide/css'

defineProps({
  images: {
    type: Array as PropType<InterfaceImage[]>,
    required: true
  }
})

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }">
    <div v-bind="$attrs">
      <Splide :options="{ rewind: true }" aria-label="Galeria de Projetos">
        <SplideSlide v-for="image in images" :key="image.src">
          <a :href="image.href" target="_blank">
            <div class="rounded-lg flex flex-col items-center p-3 gap-2">
              <slot></slot>
              <p class="font-medium">{{ image.title }}</p>
            </div>
          </a>
          <img :src="image.src" :alt="image.alt" width="1366" height="768" />
        </SplideSlide>
      </Splide>
    </div>
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
</style>
