import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/styles/index.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
// import print from 'vue3-print-nb'
// import Print from '@/utils/print'

//引入echarts
import * as echarts from 'echarts'
app.config.globalProperties.$echarts = echarts
// app.use(Print)
app.use(router)
app.use(Antd)
app.mount('#app')
