<script setup lang="ts">
import '@splidejs/vue-splide/css'

defineProps(['images', 'href'])
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="Galeria de Projetos">
    <SplideSlide v-for="image in images" :key="image.src">
      <a :href="href" target="_blank">
        <div class="rounded-lg">
          <slot></slot>
        </div>
      </a>
      <img :src="image.src" :alt="image.alt" />
    </SplideSlide>
  </Splide>
  <div class="splide__arrows" />
</template>

<style lang="css" scoped>
a {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  background: url(../assets//Background/SVG/background-mii-maker.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
