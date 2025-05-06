<script>
import Menu from '@/container/SideBar/Menu/Menu.vue'

export default {
  name: "SideBar",
  components: {
    Menu
  }
}
</script>

<template>
  <el-aside width="200px" class="aside">
    <Menu></Menu>
  </el-aside>
</template>
