// 接收两个参数,一个是我们的路由数据,一个是我们要放到哪里去
export function initRouter(routerData, targetArray) {

    // 拿到我们的路由数据,就开始遍历
    routerData.forEach(item => {

        const routerObj = {
            path: item.url,
            name: item.name,
            // 路由元信息
            meta: {
                breadcrumb: item.title// 面包屑
            },
            // 拿到组件
            component: () => import(`@/pages/home/${item.component}/index.vue`)
        }


        // 判断是否是根级路由还是子路由
        if (Array.isArray(targetArray)) {
            // 如果是根级路由，直接添加
            targetArray.push(routerObj);
        } else {
            // 如果是子路由，确保 targetArray 有 children 属性
            if (!targetArray.children) {
                targetArray.children = [];
            }
            // 将 routesObj 添加到子路由的 children 中
            targetArray.children.push(routerObj);
        }


        // 如果当前路由项有子路由，递归处理
        if (item.children) {
            initRouter(item.children, routerObj);
        }
    })


}
