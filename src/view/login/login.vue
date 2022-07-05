<template>
  <div class="content">
    <div class="con_login">
      <h2 class="login_h2">登录</h2>
      <div class="login_body">
        <div class="body_item">
          <span class="span">用户名:</span>
          <el-input
            class="el_input"
            v-model.trim="username"
            maxlength="10"
            placeholder="请输入用户名"
          ></el-input>
        </div>
        <div class="body_item">
          <span class="span">密码:</span>
          <el-input
            class="el_input"
            v-model.trim="password"
            placeholder="请输入密码"
            type="password"
            maxlength="10"
          ></el-input>
        </div>
      </div>
      <div class="body_bot">
        <el-button type="primary" class="el_button" @click="loginClick"
          >登录</el-button
        >
      </div>
    </div>
    <div class="con_logon_pos"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const router = useRouter();
    const login = reactive({
      username: "",
      password: "",
    });
    const loginClick = () => {
      if (login.username == "") {
        ElMessage.error("请输入用户名");
      } else if (login.password == "") {
        ElMessage.error("请输入密码");
      } else if (login.username != "admin" || login.password != "admin") {
        ElMessage.error("用户名或者密码错误");
      } else {
        localStorage.setItem("Authorization", "admin");
        let Authorization = localStorage.getItem("Authorization");
        Authorization &&
          router.push({
            path: "/",
          });
        ElMessage({
          message: `欢迎${Authorization}登录成功`,
          type: "success",
        });
      }
    };
    return {
      ...toRefs(login),
      loginClick,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100vh;
  background: url("@assets/images/login/login_bg.png") no-repeat;
  background-size: cover;
  .con_login {
    width: 600px;
    height: 400px;
    position: absolute;
    // background: palegreen;
    left: 50%;
    top: 50%;
    margin-top: -200px; /* 高度的一半 */
    margin-left: -300px; /* 宽度的一半 */
    z-index: 10;
    padding: 20px;
    .body_bot {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
    .login_body {
      width: 70%;
      height: 200px;
      margin: 0 auto;
      margin-top: 30px;
      .body_item {
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .span {
          color: #333;
        }
        .el_input {
          width: 300px;
          height: 40px;
        }
      }
    }
    .login_h2 {
      text-align: center;
      color: #333;
    }
  }
  .con_logon_pos {
    width: 600px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -200px; /* 高度的一半 */
    margin-left: -300px; /* 宽度的一半 */
    background: #fff;
    opacity: 0.5;
    padding: 20px;
    z-index: 9;
    border-radius: 16px;
  }
}
</style>