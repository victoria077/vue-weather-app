import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGeolocation from 'vue-browser-geolocation';


//
// const VueGeolocation = require('vue-browser-geolocation');
Vue.config.productionTip = false;
Vue.use(VueGeolocation);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
