import { createApp } from 'vue'
import { createPinia } from 'pinia'

import HomeMain from '@/views/HomeMain.vue'

const app = createApp(HomeMain)

app.use(createPinia())

app.mount('#app')
