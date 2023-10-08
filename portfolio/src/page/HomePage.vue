<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useThemeStore } from '@/theme/ThemeChange'
import Avatar from '@/components/AvatarDefault.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import Mii from '@/assets/Image/Mii.webp'
import ThemeToggle from '@/theme/ThemeToggle.vue'

const themeStore = useThemeStore()
</script>

<template>
  <div :class="{ dark: themeStore.darkMode }">
    <div class="mx-auto w-full h-full background-home">
      <div
        class="w-full h-screen flex flex-col justify-evenly sm:justify-center items-center gap-10 sm:gap-12"
      >
        <Avatar
          :src="Mii"
          alt="Mii avatar"
          name="Edivaldo Reis Moura Junior"
          description="Desenvolvedor Front-End + React + TypeScript"
        />
        <div class="container-button flex justify-center items-center flex-wrap gap-8">
          <ThemeToggle />
          <RouterLink to="/">
            <ButtonDefault title="Home"></ButtonDefault>
          </RouterLink>
          <RouterLink to="/habilities">
            <ButtonDefault title="Habilidades"></ButtonDefault>
          </RouterLink>
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark {
  background-color: black;
  color: white;
}
</style>
