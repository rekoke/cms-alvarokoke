import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { login } from './config';

Vue.config.productionTip = false;
let app = '';

login.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
