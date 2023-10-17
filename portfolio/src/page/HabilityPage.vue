<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'
import { useThemeStore } from '@/theme/ThemeChange'

const themeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="div-background w-full p-6 rounded-lg antialiased"
  >
    <div v-if="themeStore.Switch" class="flex flex-col gap-5">
      <div class="flex flex-row gap-5">
        <ButtonDefault title="Formação Acadêmica">
          <span class="text-5xl">👨‍🎓</span>
        </ButtonDefault>
        <div class="w-full flex flex-col justify-between">
          <p class="font-medium text-xl italic">Universidade Estácio de Sá</p>
          <p>Análise e Desenvolvimento de Sistemas (Tecnólogo)</p>
          <span class="border border-solid border-gray-500"></span>
          <p>Janeiro 2020 - Junho 2021</p>
        </div>
      </div>

      <div class="flex flex-row gap-5">
        <ButtonDefault title="Habilidades Técnicas">
          <span class="text-5xl">🛠️</span>
        </ButtonDefault>
        <div class="w-full flex flex-wrap items-stretch">
          <v-icon name="si-html5" scale="3.5" />
          <v-icon name="si-css3" scale="3.5" />
          <v-icon name="si-javascript" scale="3.5" />
          <v-icon name="si-react" scale="3.5" />
          <v-icon name="si-typescript" scale="3.5" />
          <v-icon name="vi-file-type-light-next" scale="3.5" />
          <v-icon name="si-vuedotjs" scale="3.5" />
          <v-icon name="si-vite" scale="3.5" />
          <v-icon name="si-styledcomponents" scale="3.5" />
          <v-icon name="si-mui" scale="3.5" />
          <v-icon name="si-swiper" scale="3.5" />
          <v-icon name="si-figma" scale="3.5" />
          <v-icon name="si-bootstrap" scale="3.5" />
          <v-icon name="si-grafana" scale="3.5" />
          <v-icon name="si-fortinet" scale="3.5" />
          <v-icon name="si-windowsxp" scale="3.5" />
          <v-icon name="si-linux" scale="3.5" />
        </div>
      </div>
    </div>

    <div v-else class="flex flex-col gap-5">
      <div class="flex flex-row gap-5">
        <ButtonDefault title="Formação Acadêmica">
          <span class="text-5xl">👨‍🎓</span>
        </ButtonDefault>
        <div class="w-full flex flex-col justify-between">
          <p class="font-medium text-xl italic">Universidade Estácio de Sá</p>
          <p>Análise e Desenvolvimento de Sistemas (Tecnólogo)</p>
          <span class="border border-solid border-gray-500"></span>
          <p>Janeiro 2020 - Junho 2021</p>
        </div>
      </div>

      <div class="flex flex-row gap-5">
        <ButtonDefault title="Habilidades Técnicas">
          <span class="text-5xl">🛠️</span>
        </ButtonDefault>
        <div class="w-full flex flex-wrap items-stretch">
          <v-icon name="si-html5" scale="3.5" />
          <v-icon name="si-css3" scale="3.5" />
          <v-icon name="si-javascript" scale="3.5" />
          <v-icon name="si-react" scale="3.5" />
          <v-icon name="si-typescript" scale="3.5" />
          <v-icon name="vi-file-type-light-next" scale="3.5" />
          <v-icon name="si-vuedotjs" scale="3.5" />
          <v-icon name="si-vite" scale="3.5" />
          <v-icon name="si-styledcomponents" scale="3.5" />
          <v-icon name="si-mui" scale="3.5" />
          <v-icon name="si-swiper" scale="3.5" />
          <v-icon name="si-figma" scale="3.5" />
          <v-icon name="si-bootstrap" scale="3.5" />
          <v-icon name="si-grafana" scale="3.5" />
          <v-icon name="si-fortinet" scale="3.5" />
          <v-icon name="si-windowsxp" scale="3.5" />
          <v-icon name="si-linux" scale="3.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.WiiU .div-background {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(221, 221, 221) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ebebeb",GradientType=1);
}

.Switch div {
  background: #fff;
}

.Switch p {
  color: #41a5a3;
}
</style>
