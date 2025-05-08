<script>
import * as echarts from "echarts";

export default {
  name: "ChartsCom",
  props: {
    // 宽和高
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "300px"
    },
    // 给个默认的options
    options: {
      type: Object,
      default: () => ({
        title: {
          text: "企业图表"
        },
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
  },
  // 图标容器
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    // 执行init方法
    this.initCharts();
    // 图表响应式事件
    window.addEventListener('resize', () => {
      this.myChart.resize()
    })
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      }
    }
  },
  // init方法
  methods: {
    initCharts() {
      // 拿到节点
      this.myChart = echarts.init(this.$refs.myChart);
      // 执行配置,这里我们使用props的方式等着接收就好了
      this.myChart.setOption(this.options);
    }
  }
}
</script>

<template>
  <div class="myChart" ref="myChart" :style="style"></div>
</template>

<style scoped>

</style>