<script setup lang="ts">
import '@splidejs/vue-splide/css'
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="../assets/Image/aluratube-v2.webp" alt="Sample 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/Image/Consulta-Quadrinhos-v2-0.webp" alt="Sample 2" />
    </SplideSlide>

    <div class="splide__arrows" />
  </Splide>
</template>

<style lang="css" scoped></style>
