<script>
export default {
  name: "BreadCrumb",
  mounted() {
    console.log("面包屑路由信息", this.$route.matched)
  },
  computed: {
    breadCrumbs() {
      // matched拿到的是路由的完整的嵌套关系
      // 这里是拿到路由的数据,遍历出来的模板
      return this.$route.matched.map(route => ({
        path: route.path,
        breadcrumb: route.meta.breadcrumb  //递归路由的时候添加的
      }))
    }
  }
}
</script>

<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">

    <span> <i class="el-icon-s-home"> </i>当前位置:</span> &nbsp;

    <el-breadcrumb-item v-for="(crumb,index) in breadCrumbs" :key="index"
                        :to="(index !== 1 && index !==breadCrumbs.length-1) ? crumb.path : undefined">
      {{ crumb.breadcrumb }}
    </el-breadcrumb-item>

  </el-breadcrumb>
</template>

<style scoped>

</style>