import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
      console.log('ssss')
  }, false);
}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
