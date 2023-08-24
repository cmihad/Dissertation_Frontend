import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import store from './stores/Store'
const app = createApp(App)

app.use(VueToast)
app.use(store)
app.use(createPinia())
app.use(router)

app.mount('#app')
app.config.errorHandler = function (err, vm, info) {
  app._context.config.globalProperties.$toast.open({
    message: `Error: ${err.message}`,
    type: 'error',
    position: 'top-right'
  })
  console.error('Captured in global error handler:', err)
}
