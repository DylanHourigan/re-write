import { createApp } from 'vue' 
import App from './App.vue'
import store from './store'
import './assets/styles.css'

import Router from './router'

createApp(App)
.use(Router)
.use(store)
.mount('#app')
    