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
import { useRoute } from "vue-router";

export default {
  components: {
    menuLeft,
  },
  setup() {
    const route = useRoute();
    const stata = reactive({
      breadList: [],
    });
    stata.breadList = computed(() => {
      return route.matched;
    });
    return {
      stata,
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
      .title_left {
        width: 35%;
        height: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
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