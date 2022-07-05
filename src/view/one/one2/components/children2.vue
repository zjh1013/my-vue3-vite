<template>
  <div class="children2">
    <h2>我是children2组件</h2>
    <p>歌手:{{ name }}</p>
    <p>
      代表作:{{ mucieName.name }}&nbsp;{{ mucieName.name1 }}&nbsp;{{
        mucieName.name2
      }}
    </p>
    <el-button @click="test('夜曲，听妈妈的话，稻香')">测试</el-button>
  </div>
</template>

<script>
// import { watch } from "vue";

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    mucieName: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["hello"],
  setup(props, context) {
    const test = (val) => {
      context.emit("hello", val);
    };
    console.log(props, "--props--");
    console.log(context, "--context--");
    return {
      test,
    };
  },
};
</script>

<style lang="less" scoped>
.children2 {
  width: 100%;
  height: 150px;
  background: khaki;
}
</style>