import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faLock, faCheckCircle)

// Provide the API key globally
app.provide('apiKey', '09d44116-11b4-45f1-bdd0-474ac78e7291')

app.use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
