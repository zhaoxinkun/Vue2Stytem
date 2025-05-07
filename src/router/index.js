// 导入Vue
import Vue from "vue";

// 导入路由
import VueRouter from 'vue-router'

// 使用路由
Vue.use(VueRouter)

// 导入我们的menu数据
import RouterData from '@/utils/menuData'

// 导入递归路由
import {initRouter} from "@/router/recursive";

// 书写路由
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/login.vue'),
    },
    // 这里先加载容器页,然后定位到index页
    {
        path: '/home',
        name: 'home',
        redirect: '/index',
        component: () => import('@/container/index.vue'),
    }
]


// 做递归路由,先拿到我们的home
const homeRoutes = routes.filter(v => v.path === '/home')[0]

console.log("路由的ppath为home的节点"+homeRoutes)
// 2.然后手动往里添加子集
homeRoutes.children = []

// 使用递归路由
initRouter(RouterData, homeRoutes.children)


// 实例化router
const router = new VueRouter({
    routes
})

// 默认暴露出
export default router