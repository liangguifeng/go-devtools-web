import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {GlobalCmComponent} from "codemirror-editor-vue3";
import 'normalize.css/normalize.css'

// 新增代码：引入特定组件及样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(GlobalCmComponent);
app.use(router);

// 新增代码：注册特定组件
app.use(ElementPlus);

app.mount("#app");
