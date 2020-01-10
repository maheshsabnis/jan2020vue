// es6 mdule import same as script src 
import Vue from 'vue'
// import the VueRouter 
import VueRouter from 'vue-router';
// imporing the App component from App.vue module
// import App from './App.vue'

// import SimpleComponent from './components/simplecomponent/simplecomponent.vue'
// import ProductComponent from './components/productApp/productappcomponent.vue';
// import ProductAppDynamicComponent from './components/productAppDynamic/productappdynamiccomponent.vue'

// import TestDirectiveComponent from './directives/directiveComponent.vue' 
// import bootstrap for view
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import ContainerComponent from './components/communication/containercomponent.vue'
// import ProductServiceComponent from './components/servicecalls/productservicecomponent.vue';
// import SecureCallComponent from './components/securecalls/securecallcomponent.vue';
// import DirectiveComponent from './components/directivecomponent/checkoddvaluecomponent.vue'
// importing filter
import './filters/appfilter.js';
import './filters/curfilter.js';

// define a global Vue instance that will be used to emit and subscribe event
export const EventBus = new Vue();

// import all components those will be used for routing
import HomeComponent from './components/routingapp/homecomponent.vue'
import AboutComponent from './components/routingapp/aboutcomponent.vue'
import ContactComponent from './components/routingapp/contactcomponent.vue'
import MainComponent from './components/routingapp/maincomponent.vue'
// define the route table
const routes = [
  {path:'/', component:HomeComponent},
  {path:'/about', component:AboutComponent},
  {path:'/contact/:id', component:ContactComponent,props:true}
];

// provide the route table to VueRouter object
const router = new VueRouter({
  routes
});
// configure the VuewRouter to the Vue instance using 'use()' method
Vue.use(VueRouter);
Vue.use(BootstrapVue); // configure the Bootstrap for Vue instance
// the application configuration
Vue.config.productionTip = false
// the Vue instance with render property 
// provide the 'router' objecct to Vue instance so that 
// routing will be mounted
new Vue({
  router,
  render: h => h(MainComponent), // the App will be rendered
}).$mount('#app') // and mounted in #app DOM element
