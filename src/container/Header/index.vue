<script>
import BreadCrumb from "@/container/Header/BreadCrumb.vue";
import LogOut from "@/container/Header/LogOut.vue";

export default {
  name: "Header",
  components: {LogOut, BreadCrumb},
}
</script>

<template>
  <div class="app-breadcrumb">
    <BreadCrumb></BreadCrumb>
    <div class="right-menu">
      <LogOut></LogOut>
    </div>
  </div>
</template>

<style scoped>

</style>