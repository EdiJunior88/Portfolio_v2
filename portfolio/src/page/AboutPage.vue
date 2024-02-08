<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '@/theme/ThemeChange'
import type { InterfaceThemeStore } from '@/Interface/Interface'
import { differenceInYears } from 'date-fns'

//Calculo da idade atual através da data de nascimento
const birthDate = new Date('1988-03-26')
const dateToday = new Date()
const age = differenceInYears(dateToday, birthDate)
const ageToday = ref<number>(age)

const themeStore: InterfaceThemeStore = useThemeStore()
</script>

<template>
  <div
    :class="{ Switch: themeStore.Switch, WiiU: !themeStore.Switch }"
    class="w-full rounded-lg p-4 indent-6 font-normal antialiased sm:p-6 sm:indent-12"
  >
    <p>
      Olá, meu nome é Edivaldo Junior, moro em Maceió-AL (terra das praias 🏝️), tenho
      {{ ageToday }} anos e adoro jogar vide-game, embarquei nesse mundo através de um Atari do
      vizinho e logo depois meu pai comprou um Turbo-Game 🎮 para substituir o falecido Microgenius
      🕹️ e desde então tornou-se um dos meus melhores hobbies quando não estou estudando ou
      trabalhando.
    </p>

    <p>
      Atualmente sou formado em Análise e Desenvolvimento EAD pela Universidade Estácio de Sá e
      estou migrando de área - Suporte e Infra 💾 - para Desenvolvimento Front-End e estou
      encantando como essa área pode ser absurdamente vasta e completa. Estive estudando sozinho por
      cerca de um ano, porém a consistência com o tempo vai diminuindo e consequentemente a
      motivação vai caindo na mesma proporção 😒, então, me arrisquei e comecei a estudar através da
      NewTab Academy 📚 que é uma empresa especializada em integração de pessoas no mercado de
      trabalho através de métodos diferenciados no ensino.
    </p>

    <p>
      Finalizando esse textão ✏️, espero continuar crescendo nessa área (T.I.) que é uma das minhas
      áreas preferidas e também espero adquirir novos conhecimentos 🧠 com o decorrer dos anos.
    </p>

    <p>- E isso é tudo pe..pe..pe..pe..pessoal!!!! 🐷</p>
  </div>
</template>

<style lang="css" scoped>
.WiiU p,
.Switch p {
  text-align: justify;
  line-height: 2rem;
  padding-bottom: 1rem;
}

.WiiU p:nth-child(4),
.Switch p:nth-child(4) {
  padding-bottom: 0;
}

.WiiU div {
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
