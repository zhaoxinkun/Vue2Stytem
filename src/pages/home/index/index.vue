<script>
import ChartsCom from "@/charts/ChartsCom.vue";

import {ChartFangGe, ChartLines, ChartMap} from "@/charts/components";

// 导入配置项数据
import {OpLine, OpSanDian, OpYiBiao} from "@/charts/options";

export default {
  name: "index",
  components: {
    ChartsCom,
    ChartFangGe,
    ChartLines,
    ChartMap
  },
  data() {
    return {
      OpYiBiao,
      OpLine,
      OpSanDian,
      // 图表高度
      height: "300px",
    }
  },
}
</script>

<template>
  <div class="content">
    <!--    一行两列-->
    <div class="content-row">
      <!--      列-->
      <el-row :gutter="10">

        <!--        行-->
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="bg-white bg-purple">
            <ChartFangGe></ChartFangGe>
          </div>
        </el-col>

        <!--        行-->
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple-light">
            <ChartLines></ChartLines>
          </div>
        </el-col>

      </el-row>
    </div>

    <!--    一行三列-->
    <!--    使用自己封装的组件,props传入option-->
    <div class="content-row">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple">
            <ChartsCom :options="OpLine"></ChartsCom>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple">
            <ChartsCom :options="OpYiBiao"></ChartsCom>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple-light">
            <ChartsCom :options="OpSanDian" :height="height"></ChartsCom>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--    一行两列-->
    <div class="content-row">
      <!--      列-->
      <el-row :gutter="10">

        <!--        行-->
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple">
            <ChartFangGe></ChartFangGe>
          </div>
        </el-col>

        <!--        行-->
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="bg-white bg-purple-light">
            <ChartMap></ChartMap>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>