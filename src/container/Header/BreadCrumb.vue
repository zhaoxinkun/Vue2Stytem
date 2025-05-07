<script>
export default {
  name: "BreadCrumb",
  computed: {
    breadCrumbs() {
      return this.$route.matched.map(route => ({
        path: route.path,
        breadcrumb: route.meta.breadcrumb
      }))
    }
  }
}
</script>

<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">

    <span> <i class="el-icon-s-home"> </i>当前位置:</span> &nbsp;&nbsp;

    <el-breadcrumb-item v-for="(crumb,index) in breadCrumbs" :key="index"
                        :to="(index !== 1 && index !==breadCrumbs.length-1) ? crumb.path : undefined">
      {{ crumb.breadcrumb }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped>

</style>