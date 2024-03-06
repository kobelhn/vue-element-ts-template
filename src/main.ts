import './styles/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // 注册svg雪碧图

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
