<template>
  <div>
    index
    <!-- <p v-for="(item, index) in 100" :key="index">{{ item }}</p> -->
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let names = "ln";
    onMounted(() => {
      //   console.log(store.state.name);
    });
    return {
      store,
      names,
    };
  },
};
</script>

<style lang="less" scoped>
</style>