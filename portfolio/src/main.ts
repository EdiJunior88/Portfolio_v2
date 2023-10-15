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
import { FaGlobeAmericas } from 'oh-vue-icons/icons/fa'
import { FaGithubSquare } from 'oh-vue-icons/icons/fa'
import { FaInstagramSquare } from 'oh-vue-icons/icons/fa'
import { FaLinkedin } from 'oh-vue-icons/icons/fa'
import { FaMicrosoft } from 'oh-vue-icons/icons/fa'
import { FaFreeCodeCamp } from 'oh-vue-icons/icons/fa'
import { SiWakatime } from 'oh-vue-icons/icons/si'

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
  FaGlobeAmericas,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMicrosoft,
  FaFreeCodeCamp,
  SiWakatime
)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.use(VueSplide)

app.mount('#app')
