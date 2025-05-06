<template>
  <div class="app-wrapper">
    <el-container>

      <!--      侧边栏-->
      <SideBar></SideBar>

      <el-container>

        <el-header>
          <!--头部-->
          <Header></Header>
        </el-header>

        <el-main>
          <!--        主体-->
          <Main></Main>
        </el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>
import {Header, SideBar, Main} from "./index"

export default {
  name: "Container",
  components: {
    Header,
    SideBar,
    Main
  }
}
</script>