<template>
  <div class="body_zi">
    <h1>这里是子组件</h1>
    <div>
      <h2>{{ title }}</h2>
    </div>
    <p>my name is {{ name }}</p>
    <div>
      {{ sum }}
      <el-button @click="add">++</el-button>
    </div>
    <el-button @click="tongzhi">通知父组件</el-button>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";

export default {
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
    let num = ref(100);
    const sum = computed(() => {
      return num.value;
    });
    const add = () => {
      num.value += 1;
    };
    watch(
      () => props.title,
      (val, val1) => {
        console.log("val变化了", val, val1);
      },
      { immediate: true }
    );
    const changename = (val) => {
      name.value = val;
    };
    return {
      name,
      tongzhi,
      changename,
      sum,
      add,
    };
  },
};
</script>

<style lang="less" scoped>
.body_zi {
  width: 100%;
  height: 200px;
  background: thistle;
  > h1 {
    text-align: center;
  }
}
</style>