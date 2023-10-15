<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'
import GalleryDefault from '@/components/GalleryDefault.vue'
import AluraTube from '@/assets/Image/aluratube-v2.webp'
import ConsultaQuadrinhos from '@/assets/Image/Consulta-Quadrinhos-v2-0.webp'
import GitHubFinder from '@/assets/Image/GitHub-Finder.webp'
import NinjaList from '@/assets/Image/ninja-list.webp'

let images = [
  {
    src: AluraTube,
    alt: 'AluraTube',
    href: 'https://aluratube-v2.netlify.app/',
    title: 'AluraTube v2'
  },
  {
    src: ConsultaQuadrinhos,
    alt: 'ConsultaQuadrinhos',
    href: 'https://consultaquadrinhosv2.netlify.app/',
    title: 'Consulta Quadrinhos v2'
  },
  {
    src: GitHubFinder,
    alt: 'GitHubFinder',
    href: 'https://githubfinder-edijunior88.netlify.app/',
    title: 'GitHub Finder'
  },
  {
    src: NinjaList,
    alt: 'NinjaList',
    href: 'https://githubfinder-edijunior88.netlify.app/',
    title: 'Ninja List'
  }
]

const themeStore = useThemeStore()
</script>

<template>
  <div :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }">
    <div v-if="themeStore.Switch">
      <GalleryDefault :images="images">
        <v-icon name="fa-globe-americas" scale="2.5" />
      </GalleryDefault>
    </div>

    <div v-else>
      <GalleryDefault :images="images">
        <v-icon name="fc-globe" scale="2.5" />
      </GalleryDefault>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
