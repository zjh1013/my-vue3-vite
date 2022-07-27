<template>
  <div>
    <el-menu
      router
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :default-active="route.path"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu
        :index="route.path"
        v-for="item in stata.route"
        :key="item.path"
      >
        <template #title>
          <el-icon><Apple /></el-icon>
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="it.path"
            v-for="it in item.children"
            :key="it.path"
            >{{ it.meta.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import routeList from "@router/routes.js";
import { Apple } from '@element-plus/icons-vue';

export default {
  components: {
    Apple
  },
  setup() {
    const route = useRoute();
    const stata = reactive({
      route: [],
    });
    stata.route = routeList.filter((item) => {
      return item.meta.isshow;
    });
    return {
      stata,
      route,
    };
  },
};
</script>

<style lang="less" scoped>
</style>