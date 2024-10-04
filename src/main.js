import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Make sure this path is correct!

import router from './router';

createApp(App).use(router).mount('#app');