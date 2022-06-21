<template>
  <div class="content">
    <div class="con_login">
      <h2 class="login_h2">登录</h2>
      <div class="login_body">
        <div class="body_item">
          <span class="span">用户名:</span>
          <el-input
            v-model="login.username"
            placeholder="请输入用户名"
            class="el_input"
          ></el-input>
        </div>
        <div class="body_item">
          <span class="span">密码:</span>
          <el-input
            v-model="login.password"
            placeholder="请输入密码"
            type="password"
            class="el_input"
          ></el-input>
        </div>
      </div>
      <div class="body_bot">
        <el-button type="primary" class="el_button">登录</el-button>
      </div>
    </div>
    <div class="con_logon_pos"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const login = ref({
      username: "",
      password: "",
    });
    return {
      login,
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