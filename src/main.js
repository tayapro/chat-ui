import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import aiapi from './apis/AiApi.js'

const app = createApp(App)
app.config.globalProperties.axios = axios
app.config.globalProperties.aiapi = aiapi
app.mount('#app')
