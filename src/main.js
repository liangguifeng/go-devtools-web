import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { GlobalCmComponent } from "codemirror-editor-vue3";

const app = createApp(App);
app.use(GlobalCmComponent);
app.use(router);
app.mount("#app");
