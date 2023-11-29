<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'
import HabilityDefault from '@/components/HabilityDefault.vue'
import type { InterfaceThemeStore } from '@/Interface/Interface'

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="div-background w-full p-4 sm:p-6 rounded-lg antialiased"
  >
    <div v-if="themeStore.Switch" class="flex flex-col gap-5">
      <HabilityDefault title="Formação Acadêmica" icon="👨‍🎓">
        <p class="font-medium text-xl italic">Universidade Estácio de Sá</p>
        <p>Análise e Desenvolvimento de Sistemas (Tecnólogo)</p>
        <p>Janeiro 2020 - Junho 2021</p>
        <p>Coeficiente de Rendimento (CR) - 9.56</p>
        <p>Carga Horária Total Cumprida - 2759</p>
      </HabilityDefault>

      <HabilityDefault title="Habilidades Técnicas" icon="🛠️">
        <div class="w-full flex flex-wrap justify-center sm:justify-start items-stretch">
          <v-icon name="si-html5" scale="3.5" title="HTML5" />
          <v-icon name="si-css3" scale="3.5" title="CSS3" />
          <v-icon name="si-javascript" scale="3.5" title="JavaScript" />
          <v-icon name="si-react" scale="3.5" title="React" />
          <v-icon name="si-reactquery" scale="3.5" title="React Query" />
          <v-icon name="si-typescript" scale="3.5" title="TypeScript" />
          <v-icon name="vi-file-type-light-next" scale="3.5" title="NextJS" />
          <v-icon name="si-vuedotjs" scale="3.5" title="VueJS" />
          <v-icon name="gi-pineapple" scale="3.5" title="Pinia" />
          <v-icon name="ri-vuejs-line" scale="3.5" title="Vue Router" />
          <v-icon name="si-vite" scale="3.5" title="Vite" />
          <v-icon name="si-styledcomponents" scale="3.5" title="Styled-Components" />
          <v-icon name="si-csswizardry" scale="3.5" title="CSS Modules" />
          <v-icon name="si-mui" scale="3.5" title="Material UI" />
          <v-icon name="si-swiper" scale="3.5" title="SwiperJS" />
          <v-icon name="si-figma" scale="3.5" title="Figma" />
          <v-icon name="si-bootstrap" scale="3.5" title="Bootstrap" />
          <v-icon name="si-grafana" scale="3.5" title="Grafana" />
          <v-icon name="si-fortinet" scale="3.5" title="Fortinet" />
          <v-icon name="si-windowsxp" scale="3.5" title="Windows" />
          <v-icon name="si-linux" scale="3.5" title="Linux" />
        </div>
      </HabilityDefault>

      <HabilityDefault title="Experiências Profissionais" icon="💼">
        <div class="w-full flex flex-col justify-between">
          <p class="font-medium text-xl italic">Freelancer</p>
          <p>Desenvolvedor de Software (Front-End Web)</p>
          <p>Outubro 2022 - Até o momento</p>
          <p>Maceió - AL - Brasil</p>
          <span class="border border-solid border-gray-500 my-5"></span>
          <p class="font-medium text-xl italic">Hiperlink - Hub de Soluções</p>
          <p>Desenvolvedor de Software (Front-End Web)</p>
          <p>Maio 2023 - Agosto 2023</p>
          <p>São Paulo - Brasil (Remoto)</p>
          <span class="border border-solid border-gray-500 my-5"></span>
          <p class="font-medium text-xl italic">
            DPRF - Departamento de Polícia Rodoviária Federal
          </p>
          <p>Suporte Técnico em Informática (Estágio)</p>
          <p>Maio 2019 - Agosto 2021</p>
          <p>Maceió - AL - Brasil</p>
          <span class="border border-solid border-gray-500 my-5"></span>
          <p class="font-medium text-xl italic">CONAB - Companhia Nacional de Abastecimento</p>
          <p>Suporte Técnico em Informática (Estágio)</p>
          <p>Outubro 2017 - Abril 2019</p>
          <p>Maceió - AL - Brasil</p>
        </div>
      </HabilityDefault>

      <HabilityDefault title="Idiomas" icon="🔊">
        <div class="w-full flex flex-col">
          <div class="flex flex-row items-center sm:justify-start justify-center">
            <v-icon name="fi-br" scale="2" />
            <p class="pl-5">Nativo - Conversação e Escrita</p>
          </div>

          <div class="flex flex-row items-center sm:justify-start justify-center">
            <v-icon name="fi-um" scale="2" />
            <p class="pl-5">Básico - Conversação e Escrita</p>
          </div>

          <div class="flex flex-row items-center sm:justify-start justify-center">
            <v-icon name="fi-es" scale="2" />
            <p class="pl-5">Básico - Conversação e Escrita</p>
          </div>
        </div>
      </HabilityDefault>
    </div>

    <div v-else class="flex flex-col gap-5">
      <HabilityDefault title="Formação Acadêmica" icon="👨‍🎓">
        <p class="font-medium text-xl italic">Universidade Estácio de Sá</p>
        <p>Análise e Desenvolvimento de Sistemas (Tecnólogo)</p>
        <p>Janeiro 2020 - Junho 2021</p>
        <p>Coeficiente de Rendimento (CR) - 9.74</p>
        <p>Carga Horária Total Cumprida - 2759</p>
      </HabilityDefault>

      <HabilityDefault title="Habilidades Técnicas" icon="🛠️">
        <div class="w-full flex flex-wrap justify-center sm:justify-start items-stretch">
          <v-icon name="si-html5" scale="3.5" title="HTML5" />
          <v-icon name="si-css3" scale="3.5" title="CSS3" />
          <v-icon name="si-javascript" scale="3.5" title="JavaScript" />
          <v-icon name="si-react" scale="3.5" title="React" />
          <v-icon name="si-reactquery" scale="3.5" title="React Query" />
          <v-icon name="si-typescript" scale="3.5" title="TypeScript" />
          <v-icon name="vi-file-type-light-next" scale="3.5" title="NextJS" />
          <v-icon name="si-vuedotjs" scale="3.5" title="VueJS" />
          <v-icon name="gi-pineapple" scale="3.5" title="Pinia" />
          <v-icon name="ri-vuejs-line" scale="3.5" title="Vue Router" />
          <v-icon name="si-vite" scale="3.5" title="Vite" />
          <v-icon name="si-styledcomponents" scale="3.5" title="Styled-Components" />
          <v-icon name="si-csswizardry" scale="3.5" title="CSS Modules" />
          <v-icon name="si-mui" scale="3.5" title="Material UI" />
          <v-icon name="si-swiper" scale="3.5" title="SwiperJS" />
          <v-icon name="si-figma" scale="3.5" title="Figma" />
          <v-icon name="si-bootstrap" scale="3.5" title="Bootstrap" />
          <v-icon name="si-grafana" scale="3.5" title="Grafana" />
          <v-icon name="si-fortinet" scale="3.5" title="Fortinet" />
          <v-icon name="si-windowsxp" scale="3.5" title="Windows" />
          <v-icon name="si-linux" scale="3.5" title="Linux" />
        </div>
      </HabilityDefault>

      <HabilityDefault title="Experiências Profissionais" icon="💼">
        <div class="w-full flex flex-col justify-between">
          <p class="font-medium text-xl italic">Freelancer</p>
          <p>Desenvolvedor de Software (Front-End Web)</p>
          <p>Outubro 2022 - Até o momento</p>
          <p>Maceió - AL - Brasil</p>
          <span class="border border-solid border-gray-500 my-5"></span>
          <p class="font-medium text-xl italic">Hiperlink - Hub de Soluções</p>
          <p>Desenvolvedor de Software (Front-End Web)</p>
          <p>Maio 2023 - Agosto 2023</p>
          <p>São Paulo - Brasil (Remoto)</p>
          <span class="border border-solid border-gray-500 my-5"></span>
          <p class="font-medium text-xl italic">
            DPRF - Departamento de Polícia Rodoviária Federal
          </p>
          <p>Suporte Técnico em Informática (Estágio)</p>
          <p>Maio 2019 - Agosto 2021</p>
          <p>Maceió - AL - Brasil</p>
          <span class="border border-solid border-gray-500 my-5"></span>
          <p class="font-medium text-xl italic">CONAB - Companhia Nacional de Abastecimento</p>
          <p>Suporte Técnico em Informática (Estágio)</p>
          <p>Outubro 2017 - Abril 2019</p>
          <p>Maceió - AL - Brasil</p>
        </div>
      </HabilityDefault>

      <HabilityDefault title="Idiomas" icon="🔊">
        <div class="w-full flex flex-col">
          <div class="flex flex-row items-center sm:justify-start justify-center">
            <v-icon name="fi-br" scale="2" />
            <p class="pl-5">Nativo - Conversação e Escrita</p>
          </div>

          <div class="flex flex-row items-center sm:justify-start justify-center">
            <v-icon name="fi-um" scale="2" />
            <p class="pl-5">Básico - Conversação e Escrita</p>
          </div>

          <div class="flex flex-row items-center sm:justify-start justify-center">
            <v-icon name="fi-es" scale="2" />
            <p class="pl-5">Básico - Conversação e Escrita</p>
          </div>
        </div>
      </HabilityDefault>
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
  color: #2b7776;
}
</style>
