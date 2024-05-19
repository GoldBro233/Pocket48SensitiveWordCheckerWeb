// src/main.js
import { createApp } from 'vue';
import App from './MainComponent.vue'; // 确保这里引入的是 MainComponent.vue
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
