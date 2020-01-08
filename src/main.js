// es6 mdule import same as script src 
import Vue from 'vue'
// imporing the App component from App.vue module
// import App from './App.vue'

// import SimpleComponent from './components/simplecomponent/simplecomponent.vue'
// import ProductComponent from './components/productApp/productappcomponent.vue';
import ProductAppDynamicComponent from './components/productAppDynamic/productappdynamiccomponent.vue'
// import bootstrap for view
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue); // configure the Bootstrap for Vue instance


// the application configuration
Vue.config.productionTip = false
// the Vue instance with render property 
new Vue({
  render: h => h(ProductAppDynamicComponent), // the App will be rendered
}).$mount('#app') // and mounted in #app DOM element
