<script>
import * as echarts from "echarts"

export default {
  name: "ChartLine",
  data() {
    return {
      myCharts: null
    }
  },
  mounted() {

    this.initCharts();
    // 图表响应式事件
    window.addEventListener('resize', () => {
      this.myCharts.resize()
    })

  },
  methods: {
    initCharts() {
      this.myCharts = echarts.init(this.$refs.myCharts);
      this.myCharts.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      })
    }
  }
}
</script>

<template>

  <div class="myCharts" ref="myCharts"></div>

</template>

<style scoped>
.myCharts {
  width: 100%;
  height: 300px;
}
</style>