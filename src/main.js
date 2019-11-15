import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import { EmojiPickerPlugin } from 'vue-emoji-picker'
library.add(faUserSecret)

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(EmojiPickerPlugin)
Vue.use(EmojiPicker)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/main.scss';

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
