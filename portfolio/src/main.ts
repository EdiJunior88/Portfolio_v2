import '@/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import VueSplide from '@splidejs/vue-splide'
import { OiHome } from 'oh-vue-icons/icons/oi'
import { OiGraph } from 'oh-vue-icons/icons/oi'
import { OiPerson } from 'oh-vue-icons/icons/oi'
import { OiFileDirectory } from 'oh-vue-icons/icons/oi'
import { OiGear } from 'oh-vue-icons/icons/oi'
import { FcHome } from 'oh-vue-icons/icons/fc'
import { FcComboChart } from 'oh-vue-icons/icons/fc'
import { FcBusinessman } from 'oh-vue-icons/icons/fc'
import { FcOpenedFolder } from 'oh-vue-icons/icons/fc'
import { FcGlobe } from 'oh-vue-icons/icons/fc'
import { FcSettings } from 'oh-vue-icons/icons/fc'
import { FcGraduationCap } from 'oh-vue-icons/icons/fc'
import { FaGlobeAmericas } from 'oh-vue-icons/icons/fa'
import { FaGithubSquare } from 'oh-vue-icons/icons/fa'
import { FaInstagramSquare } from 'oh-vue-icons/icons/fa'
import { FaLinkedin } from 'oh-vue-icons/icons/fa'
import { FaMicrosoft } from 'oh-vue-icons/icons/fa'
import { FaFreeCodeCamp } from 'oh-vue-icons/icons/fa'
import { FiBr } from 'oh-vue-icons/icons/fi'
import { FiUm } from 'oh-vue-icons/icons/fi'
import { FiEs } from 'oh-vue-icons/icons/fi'
import { SiWakatime } from 'oh-vue-icons/icons/si'
import { SiMui } from 'oh-vue-icons/icons/si'
import { SiSwiper } from 'oh-vue-icons/icons/si'
import { SiFigma } from 'oh-vue-icons/icons/si'
import { SiGrafana } from 'oh-vue-icons/icons/si'
import { SiBootstrap } from 'oh-vue-icons/icons/si'
import { SiWindowsxp } from 'oh-vue-icons/icons/si'
import { SiLinux } from 'oh-vue-icons/icons/si'
import { SiHtml5 } from 'oh-vue-icons/icons/si'
import { SiCss3 } from 'oh-vue-icons/icons/si'
import { SiJavascript } from 'oh-vue-icons/icons/si'
import { SiReact } from 'oh-vue-icons/icons/si'
import { SiVite } from 'oh-vue-icons/icons/si'
import { SiStyledcomponents } from 'oh-vue-icons/icons/si'
import { SiTypescript } from 'oh-vue-icons/icons/si'
import { SiVuedotjs } from 'oh-vue-icons/icons/si'
import { SiFortinet } from 'oh-vue-icons/icons/si'
import { ViFileTypeLightNext } from 'oh-vue-icons/icons/vi'

addIcons(
  OiHome,
  FcHome,
  OiGraph,
  OiPerson,
  OiFileDirectory,
  OiGear,
  FcComboChart,
  FcBusinessman,
  FcOpenedFolder,
  FcGlobe,
  FcSettings,
  FcGraduationCap,
  FaGlobeAmericas,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMicrosoft,
  FaFreeCodeCamp,
  SiWakatime,
  SiMui,
  SiSwiper,
  SiFigma,
  SiBootstrap,
  SiGrafana,
  SiWindowsxp,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiStyledcomponents,
  SiTypescript,
  SiVuedotjs,
  SiFortinet,
  ViFileTypeLightNext,
  FiBr,
  FiUm,
  FiEs,
)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.use(VueSplide)

app.mount('#app')
