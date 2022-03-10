import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style.scss'
import "@/service/wax";
import "@/service/alcor";
import "@/service/farmer";
import "@/service/utils";
import "@/service/logs";
import "@/service/colors";
import "@/service/formats";
import "@/service/farmerdata";
import "@/service/fwactions";
import "@/service/atomicapi";
import "@/service/dfuseapi";
import "@/service/fb";
import VueTimers from 'vue-timers'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import Clipboard from 'v-clipboard'
import VueAnalytics from 'vue-analytics';

Vue.use(Clipboard);
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

import { firestorePlugin } from 'vuefire'
import i18n from './i18n'

Vue.use(firestorePlugin)

Vue.config.productionTip = false
Vue.use(Toast, {});
Vue.use(VueAnalytics, {
  id: 'UA-222108984-1',
  router
});

new Vue({
  router,
  store,
  VueTimers,
  vuetify,
  Toast,
  i18n,
  render: h => h(App)
}).$mount('#app')
