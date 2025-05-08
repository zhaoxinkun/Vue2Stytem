<script>

// 导入api
import {logout} from "@/api/user";

// 进来下先保存token
import {getToken, removeToken} from "@/utils/token";

// 消息提示
import {Message} from "element-ui";

// 首先我们自己登录后,自动获取token,准备退出
export default {
  name: "LogOut",
  data() {
    return {
      token: ""
    }
  },
  mounted() {
    // 预先加载token信息
    this.token = getToken();
  },
  methods: {
    async exitUser() {
      await logout(this.token).then(res => {
        // 点击按钮,发送退出请求
        const {code, msg} = res.data;
        if (code === 20000) {
          // 弹出消息
          Message({
            message: msg,
            type: "success"
          })
          // 清除token
          removeToken(this.token);
          // 路由跳转
          this.$router.push("/login");
        }
      })

    }
  }
}
</script>

<template>
  <el-button type="danger" size="mini" @click="exitUser">用户退出</el-button>
</template>

<style scoped>

</style>