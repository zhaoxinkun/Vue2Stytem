import Vue from 'vue'
import App from './App.vue'

// 使用路由 @3版本
import router from "@/router";


// 使用Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 全局组件
import GlobalCom from "@/pages/home/globalCom/GlobalCom.vue";
Vue.component('GlobalCom', GlobalCom);

Vue.use(ElementUI);


// 使用sass
import '@/style/index.scss'

// 阻止生产环境的消息
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
