<template>
  <div class="body_zi">
    <h1>这里是子组件</h1>
    <div>
      <h2>{{ title }}</h2>
    </div>
    <p>my name is {{ name }}</p>
    <el-button @click="tongzhi">通知父组件</el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["changeFater"],
  props: {
    title: {
      type: String,
      default: "123",
    },
  },
  setup(props, { emit }) {
    const name = ref("左家辉");
    const tongzhi = () => {
      emit("changeFater", "这是子组件给父组件传回去的值");
    };
    const changename = (val) => {
      name.value = val;
    };
    return {
      name,
      tongzhi,
      changename,
    };
  },
});
</script>

<style lang="less" scoped>
.body_zi {
  width: 100%;
  height: 300px;
  background: thistle;
  > h1 {
    text-align: center;
  }
}
</style>