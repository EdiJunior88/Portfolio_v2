import '@/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'
import * as SiIcons from 'oh-vue-icons/icons/si'
import * as FcIcons from 'oh-vue-icons/icons/fc'
import * as BiIcons from 'oh-vue-icons/icons/bi'
import * as OiIcons from 'oh-vue-icons/icons/oi'

const VueSplide = require('@splidejs/vue-splide')

const Fc = Object.values({ ...SiIcons, ...FaIcons, ...FcIcons, ...BiIcons, ...OiIcons })
addIcons(...Fc)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.use(VueSplide)

app.mount('#app')
