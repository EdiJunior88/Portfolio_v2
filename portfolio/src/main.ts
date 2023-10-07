import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import HomePage from '@/views/HomePage.vue'

const app = createApp(HomePage)

app.use(createPinia())
app.use(router)

app.mount('#app')
