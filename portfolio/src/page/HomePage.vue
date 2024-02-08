<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useThemeStore } from '@/theme/ThemeChange'
import type { InterfaceThemeStore } from '@/Interface/Interface'
import Avatar from '@/components/AvatarDefault.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import Mii from '@/assets/Image/Mii-transparente.webp'
import ThemeToggle from '@/theme/ThemeToggle.vue'

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }">
    <div
      class="mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-12 sm:max-w-screen-xl sm:gap-12 sm:px-36"
    >
      <Avatar
        :src="Mii"
        alt="Mii avatar"
        :width="300"
        :height="300"
        name="Edivaldo Reis Moura Junior"
        description="Desenvolvedor Front-End + React + VueJS + TypeScript"
      />

      <div class="flex flex-wrap items-center justify-center gap-8">
        <ThemeToggle />

        <RouterLink to="/">
          <div v-if="themeStore.Switch">
            <ButtonDefault title="Home">
              <v-icon name="oi-home" scale="4" />
            </ButtonDefault>
          </div>
          <div v-else>
            <ButtonDefault title="Home">
              <v-icon name="fc-home" scale="4" />
            </ButtonDefault>
          </div>
        </RouterLink>

        <RouterLink to="/habilidades">
          <div v-if="themeStore.Switch">
            <ButtonDefault title="Habilidades">
              <v-icon name="oi-graph" scale="4" />
            </ButtonDefault>
          </div>
          <div v-else>
            <ButtonDefault title="Habilidades">
              <v-icon name="fc-combo-chart" scale="4" />
            </ButtonDefault>
          </div>
        </RouterLink>

        <RouterLink to="/sobre-mim">
          <div v-if="themeStore.Switch">
            <ButtonDefault title="Sobre Mim">
              <v-icon name="oi-person" scale="4" />
            </ButtonDefault>
          </div>
          <div v-else>
            <ButtonDefault title="Sobre Mim">
              <v-icon name="fc-businessman" scale="4" />
            </ButtonDefault>
          </div>
        </RouterLink>

        <RouterLink to="/projetos">
          <div v-if="themeStore.Switch">
            <ButtonDefault title="Projetos">
              <v-icon name="oi-file-directory" scale="4" />
            </ButtonDefault>
          </div>
          <div v-else>
            <ButtonDefault title="Projetos">
              <v-icon name="fc-opened-folder" scale="4" />
            </ButtonDefault>
          </div>
        </RouterLink>
      </div>

      <div class="flex w-full justify-center">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.Switch {
  background: #d8d8d8;
  color: #313131;
}

.WiiU {
  background: url('@/assets/Background/SVG/background-mii-maker.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
