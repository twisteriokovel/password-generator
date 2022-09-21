import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales'

import './styles/styles.scss'

const app = createApp(App)

app.use(i18n)
app.mount('#app')
