import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { Button } from 'vant'
import './styles/index.less'
// 1. 引入你需要的组件
// 2. 引入组件样式

import 'vant/lib/index.css'

// 动态加载rem基准值
import 'amfe-flexible'

// const app = createApp()
// 3. 注册你需要的组件
// app.use(Button)
// 加载全局样式

createApp(App).use(store).use(router).mount('#app')
