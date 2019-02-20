import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuejs-axios-1cc2a.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'fasfdsa';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
	console.log('Request Interceptor', config);
	return config;
});
const resInterceptor = axios.interceptors.response.use(config => {
	console.log('Response Interceptor', config);
	return config;
});
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
