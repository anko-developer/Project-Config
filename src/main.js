import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './routes';
import globalComponents from './plugins/global-components';
import 'virtual:svg-icons-register';
import '@/assets/scss/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(globalComponents);

app.mount('#app');
