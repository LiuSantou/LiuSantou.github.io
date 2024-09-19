import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

// Provide the API key globally
app.provide('apiKey', '09d44116-11b4-45f1-bdd0-474ac78e7291')

app.use(router).use(i18n).mount('#app')
