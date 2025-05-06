// 导入Vue
import Vue from "vue";

// 导入路由
import VueRouter from 'vue-router'

// 使用路由
Vue.use(VueRouter)

// 书写路由
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/HelloWorld.vue'),
    }
]

// 实例化router
const router = new VueRouter({
    routes
})

// 默认暴露出
export default router