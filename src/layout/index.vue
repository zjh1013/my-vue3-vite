<template>
  <div class="content">
    <div class="con_left">
      <!-- 左侧menu -->
      <menuLeft></menuLeft>
    </div>
    <div class="con_right">
      <!-- 右侧头部title -->
      <div class="right_title">
        <div class="title_left">
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              :to="{ path: item.path }"
              v-for="item in stata.breadList"
              :key="item.path"
              >{{ item.meta.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div class="title_right">
          <el-popover>
            <template #reference>
              <div class="right_con1">
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <span>{{ userName }}</span>
              </div>
            </template>
            <div>
              <el-button type="primary" @click="outLogin">退出登录</el-button>
            </div>
          </el-popover>
        </div>
      </div>
      <!-- 右侧页面展示部分 -->
      <div class="right_content">
        <!-- 二级路由出口 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import menuLeft from "./components/leftMenu.vue";
import { reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    menuLeft,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const stata = reactive({
      breadList: [],
    });
    stata.breadList = computed(() => {
      return route.matched;
    });
    const userName = computed(() => {
      return localStorage.getItem("Authorization") || "";
    });
    const outLogin = () => {
      localStorage.removeItem("Authorization");
      router.go(0);
    };
    return {
      stata,
      userName,
      outLogin,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  width: 100%;
  height: 100vh;
  .con_left {
    width: 250px;
    background: #545c64;
  }
  .con_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .right_title {
      width: 100%;
      height: 120px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      .title_left {
        width: 35%;
        height: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
      }
      .title_right {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 15px;
        .right_con1 {
          display: flex;
          align-items: center;
          cursor: pointer;
          > span {
            margin-left: 20px;
          }
        }
      }
    }
    .right_content::-webkit-scrollbar {
      display: none;
    }
    .right_content {
      padding: 15px;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>