import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {store} from './store/store'
import {router} from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router).mount('#app')
