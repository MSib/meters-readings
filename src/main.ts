import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import { CustomAura } from './theme.ts'
import ToastService from 'primevue/toastservice'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: CustomAura,
      options: {
        cssLayer: {
          name: 'primevue',
          order: 'base, primevue',
        },
      },
    },
  })
  .use(ToastService)
  .mount('#app')