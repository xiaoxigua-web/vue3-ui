import{ createApp } from 'vue'
import App from './App.vue'

import vue3Ui from 'vue3-ui'
import "../packages/theme-chalk/src/index.scss"

console.log(vue3Ui,'vue3-ui')

createApp(App).use(vue3Ui).mount('#app')