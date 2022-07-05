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
    <div class="body_fu1">
      <h1>另一种父组件的写法</h1>
      <children2
        name="周杰伦"
        :mucieName="mucieName"
        @hello="hello"
      ></children2>
    </div>
    <div class="info">
      <h3>torefs的作用</h3>
      {{ info }}
      <p>姓名：{{ name }}</p>
      <p>年龄：{{ age }}</p>
      <p>城市：{{ city }}</p>
      <el-button @click="name += '-'">改变姓名</el-button>
      <el-button @click="age++">涨一岁</el-button>
    </div>
  </div>
</template>

<script>
import children1 from "./components/children1.vue";
import children2 from "./components/children2.vue";
import { ref, reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";

export default {
  components: {
    children1,
    children2,
  },
  setup() {
    const info = reactive({
      name: "左家辉",
      age: 18,
      city: "葫芦岛",
    });
    const mucieName = reactive({
      name: "七里香",
      name1: "晴天",
      name2: "花海",
    });
    const title = ref("嗷嗷嗷");
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
    const hello = (val) => {
      ElMessage({
        message: `我还有${val}偶`,
        type: "success",
      });
    };
    return {
      title,
      fTitle,
      children1,
      clickChildren,
      changeFater,
      changename,
      mucieName,
      hello,
      info,
      ...toRefs(info),
    };
  },
};
</script>

<style lang="less" scoped>
.one2_body {
  width: 100%;
  height: 100%;
  .info {
    height: 200px;
    background: palevioletred;
  }
  .body_fu1 {
    width: 100%;
    background: peru;
  }
  .body_fu {
    width: 100%;
    height: 200px;
    background: teal;
    > h1 {
      text-align: center;
    }
  }
}
</style>