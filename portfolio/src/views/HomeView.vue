<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'
import type { InterfaceThemeStore } from '@/Interface/Interface'
import IconsDefault from '@/components/IconsDefault.vue'

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
  >
    <IconsDefault title="GitHub" link="https://github.com/EdiJunior88">
      <v-icon name="fa-github-square" scale="2" />
    </IconsDefault>

    <IconsDefault title="Instagram" link="https://www.instagram.com/edijunior88/">
      <v-icon name="fa-instagram-square" scale="2" />
    </IconsDefault>

    <IconsDefault title="Linkedin" link="https://www.linkedin.com/in/edivaldo-junior/">
      <v-icon name="fa-linkedin" scale="2" />
    </IconsDefault>

    <IconsDefault title="WakaTime" link="https://wakatime.com/@EdiJunior">
      <v-icon name="si-wakatime" scale="2" />
    </IconsDefault>

    <IconsDefault
      title="Microsoft Learn"
      link="https://learn.microsoft.com/pt-br/users/edijunior-5626/"
    >
      <v-icon name="fa-microsoft" scale="2" />
    </IconsDefault>

    <IconsDefault title="FreeCodeCamp" link="https://www.freecodecamp.org/portuguese/edijunior88">
      <v-icon name="fa-free-code-camp" scale="2" />
    </IconsDefault>
  </div>
</template>

<style lang="css" scoped>
.WiiU {
  background: none;
}
</style>
