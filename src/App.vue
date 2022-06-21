<template>
  <!-- <Index></Index> -->
  <router-view></router-view>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Index from "@layout/index.vue";

export default {
  components: {
    Index,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      // console.log(router.currentRoute);
      // document.body.style.setProperty("--el-color-primary", "#b05923"); // 更换主题色  b05923
      // document.body.style.setProperty('--el-color-primary-light-9', 'red');
      // document.body.style.setProperty('--el-color-primary-light-3', '#0095b6');
    });
  },
};
</script>

<style  scoped>
</style>