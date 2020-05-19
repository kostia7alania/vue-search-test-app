import Vue from 'vue'
import App from "@/App";
import './plugins/bootstrap-vue'
import router from "@/router";
import store from "@/store";
import i18n from "@/plugins/i18n";
import '@/scss/main.scss'

Vue.config.productionTip = false;
Vue.config.performance = true;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
