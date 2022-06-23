<template>
  <div class="one2_body">
    <div class="body_fu">
      <h1>这里是父组件</h1>
      <h2>{{ fTitle }}</h2>
      <el-button @click="clickChildren">点击给子组件传值</el-button>
      <el-button @click="changename">调用子组件方法改变name值</el-button>
    </div>
    <children1
      ref="children1"
      @changeFater="changeFater"
      :title="title"
    ></children1>
  </div>
</template>

<script>
import children1 from "./components/children1.vue";
import { ref, defineComponent } from "vue";

export default defineComponent({
  components: {
    children1,
  },
  setup() {
    const title = ref("");
    const fTitle = ref("");
    const children1 = ref(null);
    const clickChildren = () => {
      title.value = "这是父组件传过来的值";
    };
    const changeFater = (val) => {
      fTitle.value = val;
    };
    const changename = () => {
      children1.value.changename("古天乐");
      console.log(children1.value);
    };
    return {
      title,
      fTitle,
      children1,
      clickChildren,
      changeFater,
      changename,
    };
  },
});
</script>

<style lang="less" scoped>
.one2_body {
  width: 100%;
  height: 100%;
  .body_fu {
    width: 100%;
    height: 300px;
    background: teal;
    > h1 {
      text-align: center;
    }
  }
}
</style>