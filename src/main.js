import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/assets/css/style.css'
import '@/assets/css/style.scss'


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
