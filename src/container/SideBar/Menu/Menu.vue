<script>
// 导入菜单数据
import items from "@/utils/menuData"

// 导入小组件
import MenuItem from "@/container/SideBar/Menu/MenuItem.vue";

export default {
  name: "Menu",
  data() {
    return {
      items
    }
  },
  components: {
    MenuItem
  }
}
</script>

<template>

  <el-menu
      router
      exact
      :default-active="$route.path"
      class="el-menu-vertical-demo el-menu"
  >

    <!--    使用自己的菜单组件-->
    <MenuItem v-for="item in items" :key="item.url" :item="item"></MenuItem>

  </el-menu>

</template>

<style scoped>

</style>