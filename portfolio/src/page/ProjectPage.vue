<script setup lang="ts">
import GalleryDefault from '@/components/GalleryDefault.vue'
import AluraTube from '@/assets/Image/aluratube-v2.webp'
import ConsultaQuadrinhos from '@/assets/Image/Consulta-Quadrinhos-v2-0.webp'

let images = [
  { src: AluraTube, alt: 'AluraTube' },
  { src: ConsultaQuadrinhos, alt: 'ConsultaQuadrinhos' }
]
</script>

<template>
  <GalleryDefault :images="images">
    <v-icon name="fa-github-square" scale="4" />
  </GalleryDefault>
</template>

<style lang="css" scoped></style>
