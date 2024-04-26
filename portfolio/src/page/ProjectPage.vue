<script setup lang="ts">
import { useThemeStore } from '@/theme/ThemeChange'
import type { InterfaceThemeStore } from '@/Interface/Interface'
import GalleryDefault from '@/components/GalleryDefault.vue'
import AluraTube from '@/assets/Image/aluratubev2.webp'
import Bikcraft from '@/assets/Image/bikcraft.webp'
import ConsultaQuadrinhos from '@/assets/Image/consulta-quadrinhos.webp'
import ControleFinanceiro from '@/assets/Image/controle-financeiro.webp'
import DogsOrigamid from '@/assets/Image/dogs-origamid.webp'
import EnvioDinheiro from '@/assets/Image/envio-dinheiro.webp'
import ExemploPortfolio from '@/assets/Image/exemplo-portfolio.webp'
import ExemploPortfolioFreeCodeCamp from '@/assets/Image/exemplo-portfolio-freecodecamp.webp'
import ExemploTailwindcss from '@/assets/Image/exemplo-tailwindcss.webp'
import FavoritarRepositorios from '@/assets/Image/favoritar-repositorios.webp'
import appgithub from '@/assets/Image/appgithub.webp'
import ListaTarefas from '@/assets/Image/lista-tarefas.webp'
import NinjaList from '@/assets/Image/ninja-list.webp'
import MKSSistemas from '@/assets/Image/MKS-Sistemas.webp'
import CantinhoDoBloguinho from '@/assets/Image/Cantinho-do-Bloguinho.webp'
import CasaDoCodigoVueJS from '@/assets/Image/Casa-do-Codigo-VueJS.webp'
import PrevisaoDoTempo from '@/assets/Image/Previsao-do-Tempo.webp'
import IgmaFrontEnd from '@/assets/Image/Igma-Front-End.webp'
import MiniShoppingReact from '@/assets/Image/Mini-Shopping-React.webp'
import BlogAstro from '@/assets/Image/Blog-Astro.webp'

const images = [
  {
    src: BlogAstro,
    alt: 'BlogAstro',
    href: 'https://astro-documentacao.onrender.com/',
    title: 'Blog - Astro'
  },
  {
    src: MiniShoppingReact,
    alt: 'MiniShoppingReact',
    href: 'https://mini-shopping-react-nextjs.vercel.app/',
    title: 'Mini Shopping React + NextJS 14'
  },
  {
    src: IgmaFrontEnd,
    alt: 'IgmaFrontEnd',
    href: 'https://igma-teste-front-end.vercel.app/',
    title: 'Igma Teste Front-End'
  },
  {
    src: PrevisaoDoTempo,
    alt: 'PrevisaoDoTempo',
    href: 'https://previsao-do-tempo-nuxt.vercel.app/',
    title: 'Previsao do Tempo'
  },
  {
    src: CasaDoCodigoVueJS,
    alt: 'CasaDoCodigoVueJS',
    href: 'https://edijunior88-casadocodigo-vuejs.netlify.app/',
    title: 'Casa do Codigo VueJS'
  },
  {
    src: CantinhoDoBloguinho,
    alt: 'CantinhoDoBloguinho',
    href: 'https://cantinho-do-bloguinho.vercel.app/',
    title: 'Cantinho do Bloguinho'
  },
  {
    src: MKSSistemas,
    alt: 'MKSSistemas',
    href: 'https://mks-front-end-challenge-edijunior88.vercel.app/',
    title: 'MKS Sistemas'
  },
  {
    src: AluraTube,
    alt: 'AluraTube',
    href: 'https://aluratube-v2.vercel.app/',
    title: 'AluraTube v2'
  },
  {
    src: Bikcraft,
    alt: 'Bikcraft',
    href: 'https://origamid-html-e-css-para-iniciantes.onrender.com/',
    title: 'Bikcraft'
  },
  {
    src: ConsultaQuadrinhos,
    alt: 'ConsultaQuadrinhos',
    href: 'https://edijunior88-consultaquadrinhosv2.netlify.app/',
    title: 'Consulta Quadrinhos v2'
  },
  {
    src: ControleFinanceiro,
    alt: 'ControleFinanceiro',
    href: 'https://edijunior88.github.io/NewTab_Academy_Projeto_Individual_JavaScript/',
    title: 'Controle Financeiro'
  },
  {
    src: DogsOrigamid,
    alt: 'DogsOrigamid',
    href: 'https://origamid-react-completo.onrender.com/',
    title: 'Dogs'
  },
  {
    src: EnvioDinheiro,
    alt: 'EnvioDinheiro',
    href: 'https://edijunior88-newtab-react.netlify.app/',
    title: 'App Envio de Dinheiro'
  },
  {
    src: ExemploPortfolio,
    alt: 'ExemploPortfolio',
    href: 'https://edijunior88-origamid-portfolio.netlify.app/',
    title: 'Portfolio - Origamid'
  },
  {
    src: ExemploPortfolioFreeCodeCamp,
    alt: 'ExemploPortfolioFreeCodeCamp',
    href: 'https://edijunior88.github.io/FreeCodeCamp_Projetos_do_Design_Responsivo/',
    title: 'Portfolio - FreeCodeCamp'
  },
  {
    src: ExemploTailwindcss,
    alt: 'ExemploTailwindcss',
    href: 'https://edijunior88.github.io/TailwindCSS_2_para_Iniciantes/',
    title: 'Hotel - TailWindCSS'
  },
  {
    src: FavoritarRepositorios,
    alt: 'FavoritarRepositorios',
    href: 'https://projeto-favoritar-repositorios.vercel.app/',
    title: 'Favoritar Repositorios'
  },
  {
    src: appgithub,
    alt: 'appgithub',
    href: 'https://edijunior88-githubfinder.netlify.app/',
    title: 'Github Finder'
  },
  {
    src: ListaTarefas,
    alt: 'ListaTarefas',
    href: 'https://edijunior88.github.io/Balta.io_Comecando_com_Angular/',
    title: 'Lista de Tarefas'
  },
  {
    src: NinjaList,
    alt: 'NinjaList',
    href: 'https://edijunior88-ninjalist.netlify.app/',
    title: 'Ninja List'
  }
]

const themeStore: InterfaceThemeStore = useThemeStore()
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
