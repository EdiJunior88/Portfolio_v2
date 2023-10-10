import '@/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as FcIcons from 'oh-vue-icons/icons/fc'
import * as BiIcons from 'oh-vue-icons/icons/bi'
import * as OiIcons from 'oh-vue-icons/icons/oi'

const Fc = Object.values({ ...FcIcons, ...BiIcons, ...OiIcons })
addIcons(...Fc)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
