import './bootstrap';

import auth from "./auth";
import store from "./store";
import App from './views/app.vue';
import router from './router'
import {createApp} from 'vue'
import CoreuiVue from "@coreui/vue";
import CIcon from '@coreui/icons-vue'
import {iconsSet as icons} from './assets/icons'

const app = createApp(App)
    .use(store)
    .use(router)
    .use(CoreuiVue)
    .provide('icons', icons)
    .component('CIcon', CIcon);

app.config.globalProperties.$auth = auth;

app.mount('#app');
