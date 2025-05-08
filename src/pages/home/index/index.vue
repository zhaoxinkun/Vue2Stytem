<script>
import ChartsCom from "@/charts/components/ChartsCom.vue";

// 导入配置项数据
import {YiBiao} from "@/charts/options";

export default {
  name: "index",
  components: {
    ChartsCom,
  },
  data() {
    return {
      YiBiao
    }
  },
}
</script>

<template>
  <div>
    <h1>企业首页</h1>
    <ChartsCom :options="YiBiao"></ChartsCom>
  </div>
</template>

<style scoped>

</style>