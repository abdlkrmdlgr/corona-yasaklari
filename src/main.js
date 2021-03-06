import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'

import {
    faUserPlus,
    faInfoCircle,
    faSave,
    faBan,
    faShoppingBag,
    faCar,
    faRunning, faHome, faRoad, faChild, faUsers

} from "@fortawesome/free-solid-svg-icons";

library.add(
    faUserPlus,
    faInfoCircle,
    faSave,
    faBan,
    faShoppingBag,
    faCar,
    faRunning,
    faHome,
    faRoad,
    faChild,
    faUsers
);

Vue.component("FontAwesomeIcon",FontAwesomeIcon);
Vue.use(BootstrapVue);

Vue.config.productionTip = true;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-12370199-8'
});

new Vue({
    // router,
    render: h => h(App)
}).$mount('#app');
